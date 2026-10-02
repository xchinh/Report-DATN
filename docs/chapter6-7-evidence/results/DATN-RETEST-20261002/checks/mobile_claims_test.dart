import 'dart:convert';
import 'dart:typed_data';

import 'package:auth/auth.dart';
import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:hrm/src/network/hrm_dio_provider.dart';
import 'package:hrm/src/profile/providers/profile_edit_provider.dart';
import 'package:hrm/src/time_off/providers/leave_request_provider.dart';
import 'package:ioffice/src/network/ioffice_dio_provider.dart';
import 'package:ioffice/src/schedule/providers/hrm_business_trip_provider.dart';
import 'package:ioffice/src/schedule/providers/hrm_leave_provider.dart';
import 'package:ioffice/src/schedule/providers/schedule.dart';
import 'package:ioffice/src/schedule/models/schedule_item.dart';
import 'package:network/src/interceptors/api_response_interceptor.dart';

// Characterization checks against real providers, with HTTP mocked.
// A passing check records current behavior; it does not accept a thesis claim.
class SignedInUser extends AuthState {
  @override
  Future<AuthUser?> build() async => const AuthUser(username: 'TEST', shcc: 'TEST');
}

class CalendarAdapter implements HttpClientAdapter {
  CalendarAdapter({this.unavailable = false, this.body});
  final bool unavailable;
  final Map<String, dynamic>? body;

  @override
  Future<ResponseBody> fetch(RequestOptions options, Stream<Uint8List>? stream,
      Future<void>? cancelFuture) async {
    return ResponseBody.fromString(
      jsonEncode(body ?? {'items': [
        {'id': 1, 'name': 'TEST', 'allDay': false, 'startTime': '1500',
          'endTime': '2500', 'type': 'HOP', 'typeName': 'TEST', 'location': ''}
      ]}),
      unavailable ? 503 : 200,
      headers: {Headers.contentTypeHeader: [Headers.jsonContentType]},
    );
  }

  @override
  void close({bool force = false}) {}
}

void main() {
  test('M06: HTTP 200 with iOffice errorCode 4001 becomes an empty calendar', () async {
    final dio = Dio()
      ..httpClientAdapter = CalendarAdapter(body: {'errorCode': 4001, 'errorMessage': 'INVALID_OR_EXPIRED_TOKEN'})
      ..interceptors.add(ApiResponseInterceptor());
    final container = ProviderContainer(overrides: [
      authStateProvider.overrideWith(SignedInUser.new),
      iofficeDioProvider.overrideWith((ref) async => dio),
      hrmLeaveListProvider.overrideWith((ref) async => []),
      hrmBusinessTripListProvider.overrideWith((ref, year) async => []),
    ]);
    addTearDown(container.dispose);
    await container.read(authStateProvider.future);
    final items = await container.read(scheduleListProvider(startTime: 1000, endTime: 3000).future);
    expect(items, isEmpty);
    expect(container.read(scheduleListProvider(startTime: 1000, endTime: 3000)).hasError, false);
  });

  test('M05: the midnight fixture ends yesterday and is excluded from today', () {
    final now = DateTime(2026, 10, 2, 0, 30);
    final item = ScheduleItem(id: 1, name: 'TEST', allDay: false,
      startTime: now.subtract(const Duration(hours: 4)).millisecondsSinceEpoch.toString(),
      endTime: now.subtract(const Duration(hours: 2)).millisecondsSinceEpoch.toString(),
      location: '', type: 'HRM_NGHI_PHEP', typeName: 'TEST', renderAssignText: 'TEST', capName: 'TEST');
    expect(item.isOccurringOn(now), false);
    expect(item.isOccurringOn(now.subtract(const Duration(days: 1))), true);
  });

  test('M01: iOffice failure aborts aggregation before HRM is queried', () async {
    var hrmRequests = 0;
    final dio = Dio()..httpClientAdapter = CalendarAdapter(unavailable: true);
    final container = ProviderContainer(overrides: [
      authStateProvider.overrideWith(SignedInUser.new),
      iofficeDioProvider.overrideWith((ref) async => dio),
      hrmLeaveListProvider.overrideWith((ref) async { hrmRequests++; return []; }),
      hrmBusinessTripListProvider.overrideWith((ref, year) async { hrmRequests++; return []; }),
    ]);
    addTearDown(container.dispose);
    await container.read(authStateProvider.future);
    await expectLater(container.read(scheduleListProvider(startTime: 1000, endTime: 3000).future), throwsException);
    expect(hrmRequests, 0);
  });

  for (final failedSource in ['leave', 'trip']) {
    test('M02-$failedSource: HRM failure returns iOffice items without source status', () async {
      final dio = Dio()..httpClientAdapter = CalendarAdapter();
      final container = ProviderContainer(overrides: [
        authStateProvider.overrideWith(SignedInUser.new),
        iofficeDioProvider.overrideWith((ref) async => dio),
        hrmLeaveListProvider.overrideWith((ref) async {
          if (failedSource == 'leave') throw StateError('TEST unavailable');
          return [];
        }),
        hrmBusinessTripListProvider.overrideWith((ref, year) async {
          if (failedSource == 'trip') throw StateError('TEST unavailable');
          return [];
        }),
      ]);
      addTearDown(container.dispose);
      await container.read(authStateProvider.future);
      final items = await container.read(scheduleListProvider(startTime: 1000, endTime: 3000).future);
      expect(items.map((item) => item.id), [1]);
      expect(container.read(scheduleListProvider(startTime: 1000, endTime: 3000)).hasError, false);
    });
  }

  test('M03: feedback with a reason but no attachment is rejected before HTTP', () async {
    var httpRequests = 0;
    final container = ProviderContainer(overrides: [
      hrmDioProvider.overrideWith((ref) async { httpRequests++; return Dio(); }),
    ]);
    addTearDown(container.dispose);
    final result = await container.read(profileEditProvider.notifier).submitFeedback(
      sectionKey: 'phuCap', lyDo: 'TEST correction', filePaths: [],
    );
    expect(result, false);
    expect(httpRequests, 0);
  });

  test('M04: closing the leave provider resets local state without calling HRM', () {
    var httpRequests = 0;
    final container = ProviderContainer(overrides: [
      hrmDioProvider.overrideWith((ref) async { httpRequests++; return Dio(); }),
    ]);
    addTearDown(container.dispose);
    final notifier = container.read(leaveRequestProvider.notifier);
    notifier.updateStep2(isCamKet: true, giaiTrinh: 'TEST');
    expect(container.read(leaveRequestProvider).giaiTrinh, 'TEST');
    notifier.close();
    expect(container.read(leaveRequestProvider).giaiTrinh, isNull);
    expect(httpRequests, 0);
  });
}

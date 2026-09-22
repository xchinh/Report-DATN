# RUN MANIFEST — DATN-AUTH-NET-20260922-1700

| Thuộc tính | Giá trị |
| --- | --- |
| Kịch bản liên quan | `AUTH-01`, `NET-01` |
| Hành vi được kiểm tra trực tiếp | `NFR-03-B02`; một phần `NFR-01-B01` |
| Thời gian | 22/09/2026, 17:00 (`Asia/Ho_Chi_Minh`) |
| Hình thức | Unit/contract test tại biên HTTP cục bộ; không gọi staging |
| Người thực hiện | AI agent trong isolated worktree; kết quả chờ người dùng xác nhận trước khi đưa vào Chương 6–7 |
| Hệ điều hành | Linux x86_64 |
| Flutter / Dart | Flutter `3.41.5`; Dart `3.11.3` |
| Dữ liệu nghiệp vụ | Không sử dụng |

## Snapshot mã nguồn

| Repository | Commit | Trạng thái |
| --- | --- | --- |
| `myhcmut-mobile` — production snapshot | `4fe5d9cbd92e971f0b4b75ebfd308e7a8486d079` | Không thay đổi production code |
| `myhcmut-mobile` — test commit | `9350c93c5bc6e1c0cecffa1c20f1907a40aaefb2` | Thêm contract test và `flutter_test` cho package `network` |

## Kiểm tra và checksum

- `flutter analyze` tại `packages/core/network`: Pass, không có issue.
- `flutter test --reporter expanded` tại `packages/core/network`: 4/4 Pass.
- SHA-256 `pubspec.yaml`: `d3c5e5b1a73baa3284379d7a38c7fb85aeb5ec09b68b35cf11b04f59ac1c7e5f`.
- SHA-256 `network_contract_test.dart`: `f596388712ef32c8430cde4ca3dc416f27d828b732f2a482c99976c058d6550b`.

Log thô được lưu ngoài Git tại `.superpowers/sdd/04_test_execution_plan/artifacts/AUTH-NET/`. Không có token, cookie, mật khẩu hoặc dữ liệu nhân sự trong artifact.

# <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/HCMCUT.svg" alt="HCMUT" width="25" /> Hướng dẫn sử dụng hệ thống SSO

## 1. Cài đặt và thiết lập các phần mềm cần thiết
Trước khi chạy được dự án này, cài đặt **Node.js** và **MySQL WorkBench** (nếu chưa tải). Lưu ý đảm bảo tương thích giữa các phiên bản cần cài **Node.js v14.7.0**.

## 2. Tạo cơ sở dữ liệu MySQL
### Nhập dữ liệu từ file `database.sql`

**Bước 1**: Tạo một schema mới và đặt tên là `sso_user`. (Lưu ý: nếu đặt tên khác, phải điều chỉnh code trong folder `SSO_Backend` để tương ứng.)

**Bước 2**: Nhập dữ liệu từ file SQL.
- Vào **Server** -> **Data Import**.
- Chọn ô **Import from Self-Contained File**.
- Chọn đường dẫn đến file `database.sql` được đính kèm trong folder `src`.
- Trong mục **Default Target Schema**, chọn `sso_user`.

**Bước 3**: Nhấn nút **Start Import**.

Sau khi refresh lại schema, nếu hiện đúng cấu trúc như trong file thì bạn đã import thành công.

## 3. Mở source code
Mở hai folder chương trình `SSO_Frontend` và `SSO_Backend` trong hai cửa sổ riêng biệt.

## 4. Điều chỉnh để kết nối Database
Trước tiên, kiểm tra trong folder `SSO_Backend` để đảm bảo các thông tin đã đúng để kết nối với MySQL:

- Mở file `.env` và `config.json` (trong folder `config`).
- Kiểm tra và điều chỉnh thông tin như sau:
  - `DB_USERNAME`: Tên tài khoản trong MySQL (vd: `root`).
  - `DB_PASSWORD`: Mật khẩu MySQL (vd: `123456`).
  - `DB_NAME`: Tên schema đã tạo trong MySQL (mặc định là `sso_user`).

Điều chỉnh thông tin cho phù hợp. Trong file `config.json`, chỉ cần thay đổi phần **development**.

## 5. Khởi chạy chương trình
Mở Terminal, nhập lệnh `npm start` trong cả hai folder:

- `SSO_Frontend`: Sau khi chạy, trình duyệt sẽ tự động mở đường dẫn [http://localhost:3000/](http://localhost:3000/).
- `SSO_Backend`: Truy cập đường dẫn [http://localhost:8080/user](http://localhost:8080/user) để kiểm tra kết nối với MySQL.

Nếu trang hiện đúng, kết nối MySQL đã thành công. Nếu bị lỗi, vui lòng kiểm tra lại các bước đã thực hiện.

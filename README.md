
<p align="center">
  <a href="https://github.com/Kha-Tran22/ANM"><img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/title.png" alt="HCMUT" width="700" /></a>
</p>

#

Single Sign-On (SSO) là một cơ chế xác thực cho phép người dùng truy cập nhiều ứng dụng hoặc dịch vụ bằng cách đăng nhập một lần duy nhất. Với SSO, người dùng không cần phải nhớ và nhập nhiều thông tin đăng nhập khác nhau cho từng hệ thống. Thay vào đó, họ chỉ cần sử dụng một bộ thông tin xác thực duy nhất. Ở trong bài này, chúng ta sẽ hiện thực phương thức xác thực `OpenID Connect`.

# Mục lục
- [Cài đặt môi trường Visual Studio Code](#cài-đặt-môi-trường-Visual-Studio-Code)
- [Install Node.js](#install-Nodejs)
- [Cài đặt MySQL WorkBench](#)
- [Hướng dẫn kết nối với MySQL]






## Cài đặt môi trường Visual Studio Code <a id="Install VSCode"></a>
Truy cập trang web [Visual Studio Code](https://code.visualstudio.com/) để cài đặt.
## Install Node.js
Truy cập trang web [Node.js](https://taimienphi.vn/download-node-js-39030/-1470-phien-ban) để cài đặt.
## Cài đặt MySQL WorkBench
Truy cập trang web [MySQL Community Server](https://dev.mysql.com/downloads/windows/installer/8.0.html) để cài đặt.
## Hướng dẫn kết nối với MySQL

### 1. Tạo cơ sở dữ liệu MySQL
#### Nhập dữ liệu từ file `database.sql`

**Bước 1**: Tạo một schema mới và đặt tên là `sso_user`. (Lưu ý: nếu đặt tên khác, phải điều chỉnh code trong folder `SSO_Backend` để tương ứng.)

**Bước 2**: Nhập dữ liệu từ file SQL.
- Vào **Server** -> **Data Import**.
- Chọn ô **Import from Self-Contained File**.
- Chọn đường dẫn đến file `database.sql` được đính kèm trong folder `src`.
- Trong mục **Default Target Schema**, chọn `sso_user`.
<img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/sso_db1.png" width="500" />

**Bước 3**: Nhấn nút **Start Import**.

Sau khi refresh lại schema, nếu hiện đúng cấu trúc như trong file thì bạn đã import thành công.

<img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/sso_db2.png" width="200" />

### 2. Mở source code
Mở hai folder chương trình `SSO_Frontend` và `SSO_Backend` trong hai cửa sổ riêng biệt.
<img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/sso_db3.png" width="500" />
### 3. Điều chỉnh để kết nối Database
Trước tiên, kiểm tra trong folder `SSO_Backend` để đảm bảo các thông tin đã đúng để kết nối với MySQL.
Trong `SSO_Backend` mở 2 file `.env` và `config.json` (trong folder `config`) như trong ảnh và điều chỉnh một số thông tin phù hợp với máy tính.

<img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/sso_db4.png" width="500" />
- Kiểm tra và điều chỉnh thông tin như sau:
  - `DB_USERNAME`: Tên tài khoản trong MySQL (vd: `root`).
<img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/sso_db5.png" width="500" />
  - `DB_PASSWORD`: Mật khẩu MySQL (vd: `123456`).
  - `DB_NAME`: Tên schema đã tạo trong MySQL (mặc định là `sso_user`).

Điều chỉnh thông tin cho phù hợp. Trong file `config.json`, chỉ cần thay đổi trong phần **development**.

### 4. Khởi chạy chương trình
Mở Terminal, nhập lệnh `npm start` trong cả hai folder:

<img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/sso_db6.png" width="500" />
<img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/sso_db7.png" width="500" />
`SSO_Frontend`: Sau khi chạy, trình duyệt sẽ tự động mở đường dẫn [http://localhost:3000/](http://localhost:3000/).
Truy cập đường dẫn [http://localhost:8080/user](http://localhost:8080/user) để kiểm tra kết nối với MySQL. Nếu trang hiện đúng, kết nối MySQL đã thành công. Nếu bị lỗi, vui lòng kiểm tra lại các bước đã thực hiện.

Chú ý: Nếu như lệnh `npm start` không chạy được, xóa folder `node_modules` và file `package-lock.json`. Sau đó sử dụng lệnh `npm install` để tải lại tài nguyên.

<img src="https://github.com/thaikhangvip123/Images-for-CO3069/blob/main/sso_db8.png" width="500" />


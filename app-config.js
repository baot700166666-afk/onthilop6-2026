// Cấu hình app - Admin sửa URL đây khi có sheet mới
// PH/HS mở app sẽ tự động load từ URL này (không cần nhập tay)
const APP_CONFIG = {
  // URL Google Sheet DANH SÁCH HỌC SINH
  // Sheet cần bật: File → Share → Anyone with link (Viewer)
  // Format cột: Mã HS | Tên HS | Ngày sinh | Tên PH | Mật khẩu | SĐT
  studentsUrl: "https://docs.google.com/spreadsheets/d/13tYbsLSqccF9goWmtipkmUdVeR7RYqoywqNpWvKGeQI/export?format=csv&gid=0",
  
  // URL Google Sheet CHẤM ĐIỂM của cô
  // Format cột: Mã HS | Ngày | Môn | Điểm | Nhận xét  (hoặc Tên HS ở cột 1)
  gradesUrl: "https://docs.google.com/spreadsheets/d/1jHxHH1jJFQAYC855cAYPjJC4w6-hZ5_M7vWqtRxgE7U/export?format=csv&gid=0",
};

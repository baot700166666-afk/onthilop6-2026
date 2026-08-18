// Cấu hình app - Admin sửa URL đây khi có sheet mới
// PH/HS mở app sẽ tự động load từ URL này (không cần nhập tay)
const APP_CONFIG = {
  // URL Google Sheet DANH SÁCH HỌC SINH
  // Format cột: Mã HS | Tên HS | Ngày sinh | Giới tính | Tên PH | Mật khẩu | SĐT
  studentsUrl: "https://docs.google.com/spreadsheets/d/13tYbsLSqccF9goWmtipkmUdVeR7RYqoywqNpWvKGeQI/export?format=csv&gid=0",
  
  // URL Google Sheet CHẤM ĐIỂM (đọc TẤT CẢ tab dưới dạng XLSX)
  // Mỗi tab = 1 ngày (VD tên tab: "17.8", "18.8", "19.8"...)
  // Cột: STT | Mã HS | Họ tên | Giới tính | Điểm | Nhận xét | Môn học
  // Row 2 có thể là banner "Ngày 17.8.2026" (app tự skip)
  gradesUrl: "https://docs.google.com/spreadsheets/d/1jHxHH1jJFQAYC855cAYPjJC4w6-hZ5_M7vWqtRxgE7U/export?format=xlsx",

  // URL Google Sheet DANH SÁCH GIÁO VIÊN (tài khoản login)
  // Format cột: Tên GV | Mật khẩu | Môn (optional) | Ghi chú (optional)
  teachersUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZIAxdFezBoj7QkzqTBi0wP67RkOEZLvUnqDHqFneSJ4N44IkKFWp8CMZjyWSHF-SaRv-8W9RyuIiI/pub?output=csv",

  // URL Google Sheet TÀI LIỆU / ĐỀ KIỂM TRA
  // Format cột: Ngày | Môn | Tiêu đề | Link Drive | Mô tả (optional)
  // Cô tạo Sheet mới, share công khai, dán URL vào đây
  materialsUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSpdqpmIEss40H8roPnOw75NuqB947E6PeHHubUl7llufXlcjUKXj-GtZ34VyWifJJPdfcQUTXvRgk9/pub?output=csv",
};

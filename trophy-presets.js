// Kho bài giảng chuyên đề DATA - tổ chức theo lộ trình buổi học
// 48 bài giảng L5TC24/L5IQS1024

const TROPHY_SESSIONS = [
  {
    "num": "B1",
    "date": "2024-11-16",
    "title": "Nói thật, Nói dối",
    "topic": "Logic - Suy luận"
  },
  {
    "num": "B3",
    "date": "2024-11-30",
    "title": "Chữ số tận cùng",
    "topic": "Toán nâng cao"
  },
  {
    "num": "B7",
    "date": "2024-12-28",
    "title": "Tính chẵn lẻ của số tự nhiên",
    "topic": "Toán thi HSG"
  },
  {
    "num": "B8",
    "date": "2025-01-04",
    "title": "Giả thiết tạm (Buổi 1)",
    "topic": "Toán thi HSG"
  },
  {
    "num": "B9",
    "date": "2025-01-11",
    "title": "Giả thiết tạm (Buổi 2)",
    "topic": "Toán thi HSG"
  },
  {
    "num": "B10",
    "date": "2025-01-18",
    "title": "Ôn tập tổng hợp",
    "topic": "Ôn thi chuyên"
  },
  {
    "num": "Tết",
    "date": "2025-01-25",
    "title": "Bài tập Tết",
    "topic": "Ôn thi chuyên"
  },
  {
    "num": "B11",
    "date": "2025-02-08",
    "title": "Tính tổng các phân số",
    "topic": "Toán nâng cao"
  },
  {
    "num": "B12",
    "date": "2025-02-15",
    "title": "Biểu đồ Ven",
    "topic": "Logic - Suy luận"
  },
  {
    "num": "B13",
    "date": "2025-02-22",
    "title": "Cấu tạo số",
    "topic": "Toán nâng cao"
  },
  {
    "num": "B14",
    "date": "2025-03-01",
    "title": "Ôn tập B14 (chỉ có đáp án)",
    "topic": "Ôn thi chuyên"
  },
  {
    "num": "B15",
    "date": "2025-03-08",
    "title": "Hình tam giác",
    "topic": "Toán nâng cao"
  },
  {
    "num": "B16",
    "date": "2025-03-15",
    "title": "Hình thang",
    "topic": "Toán nâng cao"
  },
  {
    "num": "B17",
    "date": "2025-03-22",
    "title": "Nguyên lý Bất biến (Buổi 1)",
    "topic": "Toán thi HSG"
  },
  {
    "num": "B18",
    "date": "2025-03-29",
    "title": "Nguyên lý Bất biến (Buổi 2) + Đề LTV 2023",
    "topic": "Toán thi HSG"
  },
  {
    "num": "B19",
    "date": "2025-04-12",
    "title": "Ôn tập (Đề 18-19-20)",
    "topic": "Ôn thi chuyên"
  },
  {
    "num": "B20",
    "date": "2025-04-19",
    "title": "Ôn tập (Đề 21-22-23)",
    "topic": "Ôn thi chuyên"
  },
  {
    "num": "B21",
    "date": "2025-04-26",
    "title": "BTVN Đề 24",
    "topic": "Ôn thi chuyên"
  },
  {
    "num": "B21B",
    "date": "2025-05-10",
    "title": "Ôn tập (Đề 25-26-27)",
    "topic": "Ôn thi chuyên"
  },
  {
    "num": "B22",
    "date": "2025-05-17",
    "title": "Bộ 12 Đề ôn tập (Đề 1-2)",
    "topic": "Ôn thi chuyên"
  },
  {
    "num": "B23",
    "date": "2025-05-24",
    "title": "11 Đề CLC Thanh Xuân (Đề 1-2)",
    "topic": "Ôn thi chuyên"
  },
  {
    "num": "B24",
    "date": "2025-05-31",
    "title": "11 Đề CLC Thanh Xuân (Đề 6-7)",
    "topic": "Ôn thi chuyên"
  },
  {
    "num": "B25",
    "date": "2025-06-07",
    "title": "Bộ 12 Đề ôn tập (Đề 6-7-8)",
    "topic": "Ôn thi chuyên"
  }
];

const TROPHY_PRESETS = [
  {
    "id": "tp_preset_b1",
    "subject": "Logic - Suy luận",
    "title": "📚 Bài 1 - Chuyên đề: Nói thật, Nói dối",
    "desc": "Bài giảng chi tiết dạng bài suy luận Nói thật Nói dối - phương pháp giả sử. Lớp Toán 5TC.",
    "file": {
      "name": "B1_noi-that-noi-doi.pdf",
      "type": "application/pdf",
      "url": "trophy/B1_noi-that-noi-doi.pdf",
      "size": 8987717
    },
    "session": "B1",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_ans12",
    "subject": "Logic - Suy luận",
    "title": "✅ Đáp án Bài 1-2 (Nói thật nói dối)",
    "desc": "Đáp án chi tiết Bài 1 và Bài 2 chuyên đề Nói thật Nói dối",
    "file": {
      "name": "dap-an-bai-1-2.pdf",
      "type": "application/pdf",
      "url": "trophy/dap-an-bai-1-2.pdf",
      "size": 1500000
    },
    "session": null,
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_ans34",
    "subject": "Logic - Suy luận",
    "title": "✅ Đáp án Câu 3-4 (Nói thật nói dối)",
    "desc": "Đáp án chi tiết Câu 3 và Câu 4",
    "file": {
      "name": "dap-an-cau-3-4.pdf",
      "type": "application/pdf",
      "url": "trophy/dap-an-cau-3-4.pdf",
      "size": 63000
    },
    "session": null,
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b3",
    "subject": "Toán nâng cao",
    "title": "📚 Bài 3 - Chuyên đề: Chữ số tận cùng",
    "desc": "Bài giảng chi tiết về cách tìm chữ số tận cùng của lũy thừa. Lớp Toán 5TC.",
    "file": {
      "name": "B3_chu-so-tan-cung.pdf",
      "type": "application/pdf",
      "url": "trophy/B3_chu-so-tan-cung.pdf",
      "size": 8038259
    },
    "session": "B3",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_ans5tc",
    "subject": "Toán nâng cao",
    "title": "✅ Đáp án BTVN 5TC",
    "desc": "Đáp án bài tập về nhà lớp Toán 5TC",
    "file": {
      "name": "5TC_dap-an-BTVN.pdf",
      "type": "application/pdf",
      "url": "trophy/5TC_dap-an-BTVN.pdf",
      "size": 1894000
    },
    "session": null,
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b7",
    "subject": "Toán thi HSG",
    "title": "📚 Bài 7 - Chuyên đề: Tính chẵn lẻ của số tự nhiên",
    "desc": "Phiếu bài tập tại lớp về tính chẵn lẻ số tự nhiên. Buổi 7 (28/12/2024) - GV: Phan Quang Linh",
    "file": {
      "name": "B7_tinh-chan-le-so-tu-nhien.pdf",
      "type": "application/pdf",
      "url": "trophy/B7_tinh-chan-le-so-tu-nhien.pdf",
      "size": 120984
    },
    "session": "B7",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b7ans",
    "subject": "Toán thi HSG",
    "title": "✅ Đáp án BTVN Bài 7 - Đề ôn tập số 6",
    "desc": "Đáp án chi tiết đề ôn tập số 6 (Bài 7 - 28/12/2024)",
    "file": {
      "name": "B7_dap-an_de-6.pdf",
      "type": "application/pdf",
      "url": "trophy/B7_dap-an_de-6.pdf",
      "size": 1941135
    },
    "session": "B7",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b8",
    "subject": "Toán thi HSG",
    "title": "📚 Bài 8 - Chuyên đề: Giả thiết tạm",
    "desc": "Bài giảng chuyên đề Giả thiết tạm (dạng gà chó, xe đạp xe máy...). Buổi 8 (04/01/2025)",
    "file": {
      "name": "B8_gia-thiet-tam.pdf",
      "type": "application/pdf",
      "url": "trophy/B8_gia-thiet-tam.pdf",
      "size": 10087755
    },
    "session": "B8",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b8ans",
    "subject": "Toán thi HSG",
    "title": "✅ Đáp án BTVN Bài 8 - Đề ôn tập số 7",
    "desc": "Đáp án chi tiết đề ôn tập số 7 (Bài 8 - 04/01/2025)",
    "file": {
      "name": "B8_dap-an_de-7.pdf",
      "type": "application/pdf",
      "url": "trophy/B8_dap-an_de-7.pdf",
      "size": 1852660
    },
    "session": "B8",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b9",
    "subject": "Toán thi HSG",
    "title": "📚 Bài 9 - Giả thiết tạm (Buổi 2)",
    "desc": "Chuyên đề Giả thiết tạm - Buổi 2 (nâng cao). Ngày học 11/01/2025.",
    "file": {
      "name": "B9_gia-thiet-tam-B2.pdf",
      "type": "application/pdf",
      "url": "trophy/B9_gia-thiet-tam-B2.pdf",
      "size": 9313000
    },
    "session": "B9",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b9ans",
    "subject": "Toán thi HSG",
    "title": "✅ Đáp án BTVN Bài 9 - Đề ôn tập số 8",
    "desc": "Đáp án chi tiết đề ôn tập số 8 (Bài 9 - 11/01/2025)",
    "file": {
      "name": "B9_dap-an_de-8.pdf",
      "type": "application/pdf",
      "url": "trophy/B9_dap-an_de-8.pdf",
      "size": 1820000
    },
    "session": "B9",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b10",
    "subject": "Ôn thi chuyên",
    "title": "📚 Bài 10 - Chuyên đề Ôn tập tổng hợp",
    "desc": "Bài giảng ôn tập tổng hợp các dạng bài đã học. Ngày 18/01/2025.",
    "file": {
      "name": "B10_on-tap.pdf",
      "type": "application/pdf",
      "url": "trophy/B10_on-tap.pdf",
      "size": 9567000
    },
    "session": "B10",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b10ans",
    "subject": "Ôn thi chuyên",
    "title": "✅ Đáp án BTVN Bài 10 - Đề ôn tập số 9",
    "desc": "Đáp án đề ôn tập số 9 (Bài 10 - 18/01/2025)",
    "file": {
      "name": "B10_dap-an_de-9.pdf",
      "type": "application/pdf",
      "url": "trophy/B10_dap-an_de-9.pdf",
      "size": 1489000
    },
    "session": "B10",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_tet",
    "subject": "Ôn thi chuyên",
    "title": "🎁 Đáp án Bài tập Tết - Đề ôn tập số 10",
    "desc": "Đáp án chi tiết bài tập giao trong dịp Tết Nguyên đán (25/01/2025)",
    "file": {
      "name": "Bai-tap-Tet_dap-an_de-10.pdf",
      "type": "application/pdf",
      "url": "trophy/Bai-tap-Tet_dap-an_de-10.pdf",
      "size": 1786000
    },
    "session": "Tết",
    "ftype": "de-thi"
  },
  {
    "id": "tp_preset_b11",
    "subject": "Toán nâng cao",
    "title": "📚 Bài 11 - Tính tổng các phân số",
    "desc": "Chuyên đề tính tổng các phân số (dãy phân số đặc biệt). Ngày 08/02/2025.",
    "file": {
      "name": "B11_tinh-tong-phan-so.pdf",
      "type": "application/pdf",
      "url": "trophy/B11_tinh-tong-phan-so.pdf",
      "size": 1518000
    },
    "session": "B11",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b11ans",
    "subject": "Toán nâng cao",
    "title": "✅ Đáp án B11 + Đề ôn tập số 11",
    "desc": "Đáp án bài tập Tính tổng phân số + đề ôn tập số 11",
    "file": {
      "name": "B11_dap-an_tinh-tong_de-11.pdf",
      "type": "application/pdf",
      "url": "trophy/B11_dap-an_tinh-tong_de-11.pdf",
      "size": 2272000
    },
    "session": "B11",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b12",
    "subject": "Logic - Suy luận",
    "title": "📚 Bài 12 - Chuyên đề Biểu đồ Ven",
    "desc": "Chuyên đề Biểu đồ Ven (dùng để giải các bài toán tập hợp). Ngày 15/02/2025.",
    "file": {
      "name": "B12_bieu-do-ven.pdf",
      "type": "application/pdf",
      "url": "trophy/B12_bieu-do-ven.pdf",
      "size": 6328000
    },
    "session": "B12",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b12ans",
    "subject": "Logic - Suy luận",
    "title": "✅ Đáp án BTVN Bài 12 - Đề ôn tập số 12",
    "desc": "Đáp án đề ôn tập số 12 (Bài 12 - 15/02/2025)",
    "file": {
      "name": "B12_dap-an_de-12.pdf",
      "type": "application/pdf",
      "url": "trophy/B12_dap-an_de-12.pdf",
      "size": 1641000
    },
    "session": "B12",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b13",
    "subject": "Toán nâng cao",
    "title": "📚 Bài 13 - Chuyên đề Cấu tạo số",
    "desc": "Chuyên đề cấu tạo số (tách chữ số, xây dựng số theo điều kiện). Ngày 22/02/2025.",
    "file": {
      "name": "B13_cau-tao-so.pdf",
      "type": "application/pdf",
      "url": "trophy/B13_cau-tao-so.pdf",
      "size": 9773000
    },
    "session": "B13",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b13ans",
    "subject": "Toán nâng cao",
    "title": "✅ Đáp án B13 - Bài tập Cấu tạo số + Đề 13",
    "desc": "Đáp án chi tiết bài tập cấu tạo số và đề ôn tập số 13",
    "file": {
      "name": "B13_dap-an_de-13.pdf",
      "type": "application/pdf",
      "url": "trophy/B13_dap-an_de-13.pdf",
      "size": 1451000
    },
    "session": "B13",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b14ans",
    "subject": "Ôn thi chuyên",
    "title": "✅ Đáp án BTVN Bài 14 - Đề ôn tập số 14",
    "desc": "Đáp án đề ôn tập số 14 (Bài 14 - 01/03/2025)",
    "file": {
      "name": "B14_dap-an_de-14.pdf",
      "type": "application/pdf",
      "url": "trophy/B14_dap-an_de-14.pdf",
      "size": 1413000
    },
    "session": "B14",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b15",
    "subject": "Toán nâng cao",
    "title": "📚 Bài 15 - Chuyên đề Hình tam giác",
    "desc": "Chuyên đề hình tam giác (diện tích, đường cao, các tính chất). Ngày 08/03/2025.",
    "file": {
      "name": "B15_hinh-tam-giac.pdf",
      "type": "application/pdf",
      "url": "trophy/B15_hinh-tam-giac.pdf",
      "size": 9030000
    },
    "session": "B15",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b15ans",
    "subject": "Toán nâng cao",
    "title": "✅ Đáp án B15 - Bài tập Hình tam giác + Đề 15",
    "desc": "Đáp án bài tập hình tam giác và đề ôn tập số 15",
    "file": {
      "name": "B15_dap-an_de-15.pdf",
      "type": "application/pdf",
      "url": "trophy/B15_dap-an_de-15.pdf",
      "size": 2083000
    },
    "session": "B15",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b16",
    "subject": "Toán nâng cao",
    "title": "📚 Bài 16 - Chuyên đề Hình thang",
    "desc": "Chuyên đề hình thang (diện tích, so sánh diện tích, các bài toán khó). Ngày 15/03/2025.",
    "file": {
      "name": "B16_hinh-thang.pdf",
      "type": "application/pdf",
      "url": "trophy/B16_hinh-thang.pdf",
      "size": 9123000
    },
    "session": "B16",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b16ans",
    "subject": "Toán nâng cao",
    "title": "✅ Đáp án B16 - Bài tập Hình thang + Đề 16",
    "desc": "Đáp án bài tập hình thang và đề ôn tập số 16",
    "file": {
      "name": "B16_dap-an_de-16.pdf",
      "type": "application/pdf",
      "url": "trophy/B16_dap-an_de-16.pdf",
      "size": 1890000
    },
    "session": "B16",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b17",
    "subject": "Toán thi HSG",
    "title": "📚 Bài 17 - Chuyên đề Nguyên lý Bất biến",
    "desc": "Chuyên đề nguyên lý bất biến (phương pháp giải các bài toán khó). Ngày 22/03/2025.",
    "file": {
      "name": "B17_nguyen-ly-bat-bien.pdf",
      "type": "application/pdf",
      "url": "trophy/B17_nguyen-ly-bat-bien.pdf",
      "size": 10733000
    },
    "session": "B17",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b17ans",
    "subject": "Toán thi HSG",
    "title": "✅ Đáp án B17 - Bài tập Nguyên lý Bất biến + Đề 17",
    "desc": "Đáp án bài tập nguyên lý bất biến và đề ôn tập số 17",
    "file": {
      "name": "B17_dap-an_de-17.pdf",
      "type": "application/pdf",
      "url": "trophy/B17_dap-an_de-17.pdf",
      "size": 1896000
    },
    "session": "B17",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b18",
    "subject": "Toán thi HSG",
    "title": "📚 Bài 18 - Nguyên lý Bất biến (Buổi 2)",
    "desc": "Chuyên đề Nguyên lý bất biến - Buổi 2 (nâng cao). Ngày 29/03/2025.",
    "file": {
      "name": "B18_nguyen-ly-bat-bien-B2.pdf",
      "type": "application/pdf",
      "url": "trophy/B18_nguyen-ly-bat-bien-B2.pdf",
      "size": 9461000
    },
    "session": "B18",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b18ans",
    "subject": "Toán thi HSG",
    "title": "✅ Đáp án BTVN B18 - Nguyên lý bất biến (B2)",
    "desc": "Đáp án bài tập Nguyên lý bất biến buổi 2",
    "file": {
      "name": "B18_dap-an_bat-bien-B2.pdf",
      "type": "application/pdf",
      "url": "trophy/B18_dap-an_bat-bien-B2.pdf",
      "size": 2109000
    },
    "session": "B18",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b18ltv",
    "subject": "Ôn thi chuyên",
    "title": "🎓 Đáp án Đề tuyển sinh Lương Thế Vinh 2023",
    "desc": "Đáp án chi tiết đề thi tuyển sinh vào lớp 6 trường Lương Thế Vinh 2023 (B18 - 29/03/2025)",
    "file": {
      "name": "B18_de-LTV-2023.pdf",
      "type": "application/pdf",
      "url": "trophy/B18_de-LTV-2023.pdf",
      "size": 723000
    },
    "session": "B18",
    "ftype": "de-thi"
  },
  {
    "id": "tp_preset_b19",
    "subject": "Ôn thi chuyên",
    "title": "📚 Bài 19 - Ôn tập (Đề 18-19-20)",
    "desc": "Bài giảng ôn tập tổng hợp qua 3 đề: đề 18, 19, 20. Ngày 12/04/2025.",
    "file": {
      "name": "B19_on-tap_de18-19-20.pdf",
      "type": "application/pdf",
      "url": "trophy/B19_on-tap_de18-19-20.pdf",
      "size": 11112000
    },
    "session": "B19",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b19ans18",
    "subject": "Ôn thi chuyên",
    "title": "✅ Đáp án Phiếu bài Đề ôn tập số 18",
    "desc": "Đáp án đề ôn tập số 18",
    "file": {
      "name": "B19_dap-an_de-18.pdf",
      "type": "application/pdf",
      "url": "trophy/B19_dap-an_de-18.pdf",
      "size": 258000
    },
    "session": "B19",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b19ans19",
    "subject": "Ôn thi chuyên",
    "title": "✅ Đáp án BTVN Đề ôn tập số 19",
    "desc": "Đáp án BTVN đề ôn tập số 19",
    "file": {
      "name": "B19_dap-an_de-19.pdf",
      "type": "application/pdf",
      "url": "trophy/B19_dap-an_de-19.pdf",
      "size": 219000
    },
    "session": "B19",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b19ans20",
    "subject": "Ôn thi chuyên",
    "title": "✅ Đáp án BTVN Đề ôn tập số 20",
    "desc": "Đáp án BTVN đề ôn tập số 20",
    "file": {
      "name": "B19_dap-an_de-20.pdf",
      "type": "application/pdf",
      "url": "trophy/B19_dap-an_de-20.pdf",
      "size": 327000
    },
    "session": "B19",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b20",
    "subject": "Ôn thi chuyên",
    "title": "📚 Bài 20 - Ôn tập (Đề 21-22-23)",
    "desc": "Bài giảng ôn tập tổng hợp qua 3 đề: đề 21, 22, 23. Ngày 19/04/2025.",
    "file": {
      "name": "B20_on-tap_de21-22-23.pdf",
      "type": "application/pdf",
      "url": "trophy/B20_on-tap_de21-22-23.pdf",
      "size": 1079000
    },
    "session": "B20",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b20ans",
    "subject": "Ôn thi chuyên",
    "title": "✅ Đáp án BTVN Đề ôn tập số 23",
    "desc": "Đáp án BTVN đề ôn tập số 23",
    "file": {
      "name": "B20_dap-an_de-23.pdf",
      "type": "application/pdf",
      "url": "trophy/B20_dap-an_de-23.pdf",
      "size": 655000
    },
    "session": "B20",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b21",
    "subject": "Ôn thi chuyên",
    "title": "✅ Đáp án BTVN Đề ôn tập số 24 (26/04/2025)",
    "desc": "Đáp án đề ôn tập số 24 (26/04/2025)",
    "file": {
      "name": "B21_dap-an_de-24.pdf",
      "type": "application/pdf",
      "url": "trophy/B21_dap-an_de-24.pdf",
      "size": 1580000
    },
    "session": "B21",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b21B",
    "subject": "Ôn thi chuyên",
    "title": "📚 Bài 21B - Ôn tập (Đề 25-26-27)",
    "desc": "Bài giảng ôn tập qua đề 25, 26, 27. Ngày 10/05/2025.",
    "file": {
      "name": "B21B_on-tap_de25-26-27.pdf",
      "type": "application/pdf",
      "url": "trophy/B21B_on-tap_de25-26-27.pdf",
      "size": 8561000
    },
    "session": "B21B",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b21Bans",
    "subject": "Ôn thi chuyên",
    "title": "✅ Đáp án BTVN Đề ôn tập số 27",
    "desc": "Đáp án BTVN đề số 27 (Bài 21B - 10/05/2025)",
    "file": {
      "name": "B21B_dap-an_de-27.pdf",
      "type": "application/pdf",
      "url": "trophy/B21B_dap-an_de-27.pdf",
      "size": 259000
    },
    "session": "B21B",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b22",
    "subject": "Ôn thi chuyên",
    "title": "📚 Bài 22 - Bộ 12 Đề ôn tập (Đề 1-2)",
    "desc": "Bài giảng bộ 12 đề ôn tập (đề 1, 2). Ngày 17/05/2025.",
    "file": {
      "name": "B22_12de-on-tap_de1-2.pdf",
      "type": "application/pdf",
      "url": "trophy/B22_12de-on-tap_de1-2.pdf",
      "size": 6294000
    },
    "session": "B22",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b22anspd",
    "subject": "Ôn thi chuyên",
    "title": "✅ Đáp án chi tiết BỘ 12 Đề ôn tập",
    "desc": "Đáp án chi tiết toàn bộ 12 đề ôn tập",
    "file": {
      "name": "B22_dap-an_12de-on-tap.pdf",
      "type": "application/pdf",
      "url": "trophy/B22_dap-an_12de-on-tap.pdf",
      "size": 3304000
    },
    "session": "B22",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b22ans345",
    "subject": "Ôn thi chuyên",
    "title": "✅ Đáp án BTVN Đề ôn tập số 3-4-5",
    "desc": "Đáp án BTVN đề 3, 4, 5 (Bài 22 - 17/05/2025)",
    "file": {
      "name": "B22_dap-an_de-3-4-5.pdf",
      "type": "application/pdf",
      "url": "trophy/B22_dap-an_de-3-4-5.pdf",
      "size": 804000
    },
    "session": "B22",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b23",
    "subject": "Ôn thi chuyên",
    "title": "📚 Bài 23 - Bộ 11 Đề ôn CLC THCS Thanh Xuân (Đề 1-2)",
    "desc": "Bộ 11 đề ôn Chất Lượng Cao trường THCS Thanh Xuân (đề 1, 2). Ngày 24/05/2025.",
    "file": {
      "name": "B23_11de-CLC-Thanh-Xuan_de1-2.pdf",
      "type": "application/pdf",
      "url": "trophy/B23_11de-CLC-Thanh-Xuan_de1-2.pdf",
      "size": 7778000
    },
    "session": "B23",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b23anspd",
    "subject": "Ôn thi chuyên",
    "title": "✅ Đáp án chi tiết BỘ 11 Đề CLC Thanh Xuân",
    "desc": "Đáp án chi tiết bộ 11 đề ôn CLC THCS Thanh Xuân",
    "file": {
      "name": "B23_dap-an_11de-CLC-Thanh-Xuan.pdf",
      "type": "application/pdf",
      "url": "trophy/B23_dap-an_11de-CLC-Thanh-Xuan.pdf",
      "size": 3713000
    },
    "session": "B23",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b23ans345",
    "subject": "Ôn thi chuyên",
    "title": "✅ Đáp án BTVN Đề ôn tập số 3-4-5 (B23)",
    "desc": "Đáp án BTVN đề 3, 4, 5 CLC Thanh Xuân (Bài 23 - 24/05/2025)",
    "file": {
      "name": "B23_dap-an_de-3-4-5.pdf",
      "type": "application/pdf",
      "url": "trophy/B23_dap-an_de-3-4-5.pdf",
      "size": 1013000
    },
    "session": "B23",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b24",
    "subject": "Ôn thi chuyên",
    "title": "📚 Bài 24 - Bộ 11 Đề CLC Thanh Xuân (Đề 6-7)",
    "desc": "Bộ 11 đề ôn CLC Thanh Xuân (đề 6, 7). Ngày 31/05/2025.",
    "file": {
      "name": "B24_11de-CLC-Thanh-Xuan_de6-7.pdf",
      "type": "application/pdf",
      "url": "trophy/B24_11de-CLC-Thanh-Xuan_de6-7.pdf",
      "size": 5424000
    },
    "session": "B24",
    "ftype": "baigiang"
  },
  {
    "id": "tp_preset_b24ans",
    "subject": "Ôn thi chuyên",
    "title": "✅ Đáp án BTVN Đề ôn tập số 7-8-9 (B24)",
    "desc": "Đáp án BTVN đề 7, 8, 9 CLC Thanh Xuân (Bài 24 - 31/05/2025)",
    "file": {
      "name": "B24_dap-an_de-7-8-9.pdf",
      "type": "application/pdf",
      "url": "trophy/B24_dap-an_de-7-8-9.pdf",
      "size": 1130000
    },
    "session": "B24",
    "ftype": "dapan"
  },
  {
    "id": "tp_preset_b25",
    "subject": "Ôn thi chuyên",
    "title": "📚 Bài 25 - Bộ 12 Đề ôn tập (Đề 6-7-8)",
    "desc": "Bộ 12 đề ôn tập (đề 6, 7, 8). Ngày 07/06/2025.",
    "file": {
      "name": "B25_12de-on-tap_de6-7-8.pdf",
      "type": "application/pdf",
      "url": "trophy/B25_12de-on-tap_de6-7-8.pdf",
      "size": 7771000
    },
    "session": "B25",
    "ftype": "baigiang"
  }
];

// Dữ liệu và Mô hình Thống kê Phổ điểm Kỳ thi Tốt nghiệp THPT
// Trích xuất và xây dựng từ Cổng Thông tin điện tử Chính phủ (chinhphu.vn) & Bộ GD&ĐT

export const SUBJECTS_DATA = {
  toan: {
    id: 'toan',
    name: 'Toán học',
    type: 'subject',
    maxScore: 10,
    step: 0.25,
    totalCandidates: 1065000,
    mean: 6.45,
    median: 6.60,
    mode: 7.20,
    stdDev: 1.62,
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-toan-ky-thi-tot-nghiep-nam-2026-119260701090505772.htm',
    charts: [
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/5-17828713451191193816094.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/5-17828713451191193816094.jpg',
        title: 'Phổ điểm môn Toán - Biểu đồ phân bố chi tiết (Ảnh 1)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/6-1782871345124949009265.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/6-1782871345124949009265.jpg',
        title: 'Phổ điểm môn Toán - Thống kê theo phân khúc điểm (Ảnh 2)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/7-1782871345128962567566.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/7-1782871345128962567566.jpg',
        title: 'Phổ điểm môn Toán - Bảng tần số tích lũy (Ảnh 3)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/8-17828713451491817039581.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/8-17828713451491817039581.jpg',
        title: 'Phổ điểm môn Toán - So sánh và phân tích (Ảnh 4)'
      }
    ]
  },
  vat_li: {
    id: 'vat_li',
    name: 'Vật lí',
    type: 'subject',
    maxScore: 10,
    step: 0.25,
    totalCandidates: 345000,
    mean: 6.67,
    median: 6.75,
    mode: 7.25,
    stdDev: 1.58,
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-vat-li-ky-thi-tot-nghiep-nam-2026-119260701091832054.htm',
    charts: [
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/15-17828721062371010198140.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/15-17828721062371010198140.jpg',
        title: 'Phổ điểm môn Vật lí - Biểu đồ phân bố (Ảnh 1)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/16-1782872106243141434947.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/16-1782872106243141434947.jpg',
        title: 'Phổ điểm môn Vật lí - Phân khúc điểm (Ảnh 2)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/17-17828721062491147587841.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/17-17828721062491147587841.jpg',
        title: 'Phổ điểm môn Vật lí - Tích lũy (Ảnh 3)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/18-17828721062551523419084.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/18-17828721062551523419084.jpg',
        title: 'Phổ điểm môn Vật lí - Phân tích chi tiết (Ảnh 4)'
      }
    ]
  },
  hoa_hoc: {
    id: 'hoa_hoc',
    name: 'Hóa học',
    type: 'subject',
    maxScore: 10,
    step: 0.25,
    totalCandidates: 348000,
    mean: 6.68,
    median: 6.75,
    mode: 7.00,
    stdDev: 1.60,
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-hoa-hoc-ky-thi-tot-nghiep-nam-2026-119260701092458209.htm',
    charts: [
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/20-1782872479301382318780.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/20-1782872479301382318780.jpg',
        title: 'Phổ điểm môn Hóa học - Biểu đồ phân bố (Ảnh 1)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/21-17828724793311651475730.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/21-17828724793311651475730.jpg',
        title: 'Phổ điểm môn Hóa học - Phân khúc điểm (Ảnh 2)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/22-17828724793361494639912.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/22-17828724793361494639912.jpg',
        title: 'Phổ điểm môn Hóa học - Tích lũy (Ảnh 3)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/23-17828724793441838634863.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/23-17828724793441838634863.jpg',
        title: 'Phổ điểm môn Hóa học - Phân tích (Ảnh 4)'
      }
    ]
  },
  sinh_hoc: {
    id: 'sinh_hoc',
    name: 'Sinh học',
    type: 'subject',
    maxScore: 10,
    step: 0.25,
    totalCandidates: 342000,
    mean: 6.28,
    median: 6.25,
    mode: 6.50,
    stdDev: 1.45,
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-sinh-hoc-ky-thi-tot-nghiep-nam-2026-119260701093449928.htm',
    charts: [
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/25-1782873153232251606216.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/25-1782873153232251606216.jpg',
        title: 'Phổ điểm môn Sinh học - Biểu đồ phân bố (Ảnh 1)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/26-17828731532551571401344.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/26-17828731532551571401344.jpg',
        title: 'Phổ điểm môn Sinh học - Phân khúc (Ảnh 2)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/27-1782873153260841285250.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/27-1782873153260841285250.jpg',
        title: 'Phổ điểm môn Sinh học - Tích lũy (Ảnh 3)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/28-17828731532721997637841.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/28-17828731532721997637841.jpg',
        title: 'Phổ điểm môn Sinh học - Phân tích (Ảnh 4)'
      }
    ]
  },
  tin_hoc: {
    id: 'tin_hoc',
    name: 'Tin học',
    type: 'subject',
    maxScore: 10,
    step: 0.25,
    totalCandidates: 88000,
    mean: 6.82,
    median: 7.00,
    mode: 7.50,
    stdDev: 1.55,
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-tin-hoc-ky-thi-tot-nghiep-nam-2026-119260701094014188.htm',
    charts: [
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/30-17828734159921016642972.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/30-17828734159921016642972.jpg',
        title: 'Phổ điểm môn Tin học - Biểu đồ phân bố (Ảnh 1)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/31-17828734160081297593649.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/31-17828734160081297593649.jpg',
        title: 'Phổ điểm môn Tin học - Phân khúc điểm (Ảnh 2)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/32-17828734160121115858022.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/32-17828734160121115858022.jpg',
        title: 'Phổ điểm môn Tin học - Tích lũy (Ảnh 3)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/33-17828734160241945396556.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/33-17828734160241945396556.jpg',
        title: 'Phổ điểm môn Tin học - Phân tích (Ảnh 4)'
      }
    ]
  },
  lich_su: {
    id: 'lich_su',
    name: 'Lịch sử',
    type: 'subject',
    maxScore: 10,
    step: 0.25,
    totalCandidates: 712000,
    mean: 6.57,
    median: 6.75,
    mode: 7.00,
    stdDev: 1.52,
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-lich-su-ky-thi-tot-nghiep-nam-2026-119260701094423566.htm',
    charts: [
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/35-17828737205631490562518.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/35-17828737205631490562518.jpg',
        title: 'Phổ điểm môn Lịch sử - Biểu đồ phân bố (Ảnh 1)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/36-17828737205791730303692.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/36-17828737205791730303692.jpg',
        title: 'Phổ điểm môn Lịch sử - Phân khúc (Ảnh 2)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/37-17828737205861138541258.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/37-17828737205861138541258.jpg',
        title: 'Phổ điểm môn Lịch sử - Tích lũy (Ảnh 3)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/38-17828737205931327116817.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/38-17828737205931327116817.jpg',
        title: 'Phổ điểm môn Lịch sử - Phân tích (Ảnh 4)'
      }
    ]
  },
  dia_li: {
    id: 'dia_li',
    name: 'Địa lí',
    type: 'subject',
    maxScore: 10,
    step: 0.25,
    totalCandidates: 708000,
    mean: 7.19,
    median: 7.25,
    mode: 7.50,
    stdDev: 1.38,
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-dia-li-ky-thi-tot-nghiep-nam-2026-119260701095020909.htm',
    charts: [
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/40-17828739856901166101064.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/40-17828739856901166101064.jpg',
        title: 'Phổ điểm môn Địa lí - Biểu đồ phân bố (Ảnh 1)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/41-17828739857071987592397.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/41-17828739857071987592397.jpg',
        title: 'Phổ điểm môn Địa lí - Phân khúc (Ảnh 2)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/42-17828739857131707923769.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/42-17828739857131707923769.jpg',
        title: 'Phổ điểm môn Địa lí - Tích lũy (Ảnh 3)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/43-17828739857211181283626.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/43-17828739857211181283626.jpg',
        title: 'Phổ điểm môn Địa lí - Phân tích (Ảnh 4)'
      }
    ]
  },
  gdkt_pl: {
    id: 'gdkt_pl',
    name: 'Giáo dục Kinh tế & Pháp luật',
    type: 'subject',
    maxScore: 10,
    step: 0.25,
    totalCandidates: 615000,
    mean: 8.16,
    median: 8.25,
    mode: 8.75,
    stdDev: 1.22,
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-giao-duc-kinh-te-va-phap-luat-ky-thi-tot-nghiep-nam-2026-119260701100523092.htm',
    charts: [
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/55-17828749370151163511597.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/55-17828749370151163511597.jpg',
        title: 'Phổ điểm GDKT&PL - Biểu đồ phân bố (Ảnh 1)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/56-17828749370391480112469.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/56-17828749370391480112469.jpg',
        title: 'Phổ điểm GDKT&PL - Phân khúc điểm (Ảnh 2)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/57-17828749370441617478648.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/57-17828749370441617478648.jpg',
        title: 'Phổ điểm GDKT&PL - Tích lũy (Ảnh 3)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/58-17828749370551390494488.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/58-17828749370551390494488.jpg',
        title: 'Phổ điểm GDKT&PL - Phân tích (Ảnh 4)'
      }
    ]
  },
  tieng_anh: {
    id: 'tieng_anh',
    name: 'Tiếng Anh',
    type: 'subject',
    maxScore: 10,
    step: 0.25,
    totalCandidates: 905000,
    mean: 5.51,
    median: 5.25,
    mode: 4.60,
    stdDev: 1.84,
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-tieng-anh-ky-thi-tot-nghiep-nam-2026-119260701100900533.htm',
    charts: [
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/60-1782875220185224087597.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/60-1782875220185224087597.jpg',
        title: 'Phổ điểm môn Tiếng Anh - Biểu đồ phân bố (Ảnh 1)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/61-17828752202021598442805.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/61-17828752202021598442805.jpg',
        title: 'Phổ điểm môn Tiếng Anh - Phân khúc điểm (Ảnh 2)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/62-17828752202061614749280.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/62-17828752202061614749280.jpg',
        title: 'Phổ điểm môn Tiếng Anh - Tích lũy (Ảnh 3)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/63-17828752202161453289069.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/63-17828752202161453289069.jpg',
        title: 'Phổ điểm môn Tiếng Anh - Phân tích (Ảnh 4)'
      }
    ]
  },
  cn_cong_nghiep: {
    id: 'cn_cong_nghiep',
    name: 'Công nghệ Công nghiệp',
    type: 'subject',
    maxScore: 10,
    step: 0.25,
    totalCandidates: 52000,
    mean: 6.95,
    median: 7.00,
    mode: 7.25,
    stdDev: 1.48,
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-cong-nghe-cong-nghiep-ky-thi-tot-nghiep-nam-2026-119260701095543115.htm',
    charts: [
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/45-17828743271511139239557.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/45-17828743271511139239557.jpg',
        title: 'Phổ điểm Công nghệ CN - Biểu đồ phân bố (Ảnh 1)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/46-17828743271731017407768.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/46-17828743271731017407768.jpg',
        title: 'Phổ điểm Công nghệ CN - Phân khúc (Ảnh 2)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/47-1782874327178135352022.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/47-1782874327178135352022.jpg',
        title: 'Phổ điểm Công nghệ CN - Tích lũy (Ảnh 3)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/48-17828743271961561092123.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/48-17828743271961561092123.jpg',
        title: 'Phổ điểm Công nghệ CN - Phân tích (Ảnh 4)'
      }
    ]
  },
  cn_nong_nghiep: {
    id: 'cn_nong_nghiep',
    name: 'Công nghệ Nông nghiệp',
    type: 'subject',
    maxScore: 10,
    step: 0.25,
    totalCandidates: 45000,
    mean: 7.21,
    median: 7.25,
    mode: 7.75,
    stdDev: 1.42,
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-mon-cong-nghe-nong-nghiep-ky-thi-tot-nghiep-nam-2026-11926070110001993.htm',
    charts: [
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/50-17828746525411893499471.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/50-17828746525411893499471.jpg',
        title: 'Phổ điểm Công nghệ NN - Biểu đồ phân bố (Ảnh 1)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/51-17828746525711142106521.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/51-17828746525711142106521.jpg',
        title: 'Phổ điểm Công nghệ NN - Phân khúc (Ảnh 2)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/52-17828746525752142876109.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/52-17828746525752142876109.jpg',
        title: 'Phổ điểm Công nghệ NN - Tích lũy (Ảnh 3)'
      },
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/53-1782874652586230566495.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/53-1782874652586230566495.jpg',
        title: 'Phổ điểm Công nghệ NN - Phân tích (Ảnh 4)'
      }
    ]
  }
};

export const COMBINATIONS_DATA = {
  A00: {
    id: 'A00',
    name: 'Khối A00 (Toán - Vật lí - Hóa học)',
    type: 'combo',
    subjects: ['Toán', 'Vật lí', 'Hóa học'],
    maxScore: 30,
    step: 0.25,
    totalCandidates: 320000,
    mean: 20.90,
    median: 21.05,
    mode: 22.35,
    stdDev: 3.45,
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-cac-to-hop-mon-a00-a01-b00-c00-d01-ky-thi-tot-nghiep-nam-2026-119260701101721263.htm',
    charts: [
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/66-1782875425226853216962.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/66-1782875425226853216962.jpg',
        title: 'Phổ điểm Tổ hợp A00 (Toán, Vật lí, Hóa học)'
      }
    ]
  },
  A01: {
    id: 'A01',
    name: 'Khối A01 (Toán - Vật lí - Tiếng Anh)',
    type: 'combo',
    subjects: ['Toán', 'Vật lí', 'Tiếng Anh'],
    maxScore: 30,
    step: 0.25,
    totalCandidates: 310000,
    mean: 19.85,
    median: 19.90,
    mode: 21.10,
    stdDev: 3.60,
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-cac-to-hop-mon-a00-a01-b00-c00-d01-ky-thi-tot-nghiep-nam-2026-119260701101721263.htm',
    charts: [
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/67-1782875425233161475054.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/67-1782875425233161475054.jpg',
        title: 'Phổ điểm Tổ hợp A01 (Toán, Vật lí, Tiếng Anh)'
      }
    ]
  },
  B00: {
    id: 'B00',
    name: 'Khối B00 (Toán - Hóa học - Sinh học)',
    type: 'combo',
    subjects: ['Toán', 'Hóa học', 'Sinh học'],
    maxScore: 30,
    step: 0.25,
    totalCandidates: 315000,
    mean: 19.40,
    median: 19.50,
    mode: 20.50,
    stdDev: 3.50,
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-cac-to-hop-mon-a00-a01-b00-c00-d01-ky-thi-tot-nghiep-nam-2026-119260701101721263.htm',
    charts: [
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/68-1782875425244133109788.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/68-1782875425244133109788.jpg',
        title: 'Phổ điểm Tổ hợp B00 (Toán, Hóa học, Sinh học)'
      }
    ]
  },
  C00: {
    id: 'C00',
    name: 'Khối C00 (Ngữ văn - Lịch sử - Địa lí)',
    type: 'combo',
    subjects: ['Ngữ văn', 'Lịch sử', 'Địa lí'],
    maxScore: 30,
    step: 0.25,
    totalCandidates: 680000,
    mean: 21.20,
    median: 21.40,
    mode: 22.75,
    stdDev: 3.25,
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-cac-to-hop-mon-a00-a01-b00-c00-d01-ky-thi-tot-nghiep-nam-2026-119260701101721263.htm',
    charts: [
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/69-1782875425250258298731.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/69-1782875425250258298731.jpg',
        title: 'Phổ điểm Tổ hợp C00 (Ngữ văn, Lịch sử, Địa lí)'
      }
    ]
  },
  D01: {
    id: 'D01',
    name: 'Khối D01 (Toán - Ngữ văn - Tiếng Anh)',
    type: 'combo',
    subjects: ['Toán', 'Ngữ văn', 'Tiếng Anh'],
    maxScore: 30,
    step: 0.25,
    totalCandidates: 750000,
    mean: 19.25,
    median: 19.30,
    mode: 20.25,
    stdDev: 3.65,
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/pho-diem-cac-to-hop-mon-a00-a01-b00-c00-d01-ky-thi-tot-nghiep-nam-2026-119260701101721263.htm',
    charts: [
      {
        src: 'https://xdcs.cdnchinhphu.vn/thumb_w/640/446259493575335936/2026/7/1/70-17828754252561636791454.jpg',
        fullSrc: 'https://xdcs.cdnchinhphu.vn/446259493575335936/2026/7/1/70-17828754252561636791454.jpg',
        title: 'Phổ điểm Tổ hợp D01 (Toán, Ngữ văn, Tiếng Anh)'
      }
    ]
  }
};

// Cumulative standard normal distribution approximation (Abramowitz and Stegun)
function normCDF(x) {
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = 0.3989422804014327 * Math.exp(-x * x / 2);
  let p = d * t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  if (x > 0) p = 1 - p;
  return p;
}

// Generate histogram buckets for visual bell-curve charts
export function generateDistributionBuckets(item, bucketCount = 40) {
  const { maxScore, mean, stdDev, mode, totalCandidates } = item;
  const buckets = [];
  const step = maxScore / bucketCount;

  let totalProb = 0;
  const rawProb = [];

  for (let i = 0; i <= bucketCount; i++) {
    const score = Number((i * step).toFixed(2));
    // Asymmetric peak modeling around mode and mean
    const z = (score - mean) / stdDev;
    const skewFactor = score > mode ? 1.05 : 0.95;
    const height = Math.exp(-0.5 * Math.pow(z * skewFactor, 2));
    rawProb.push({ score, height });
    totalProb += height;
  }

  let cumulativeCount = 0;
  for (let i = 0; i < rawProb.length; i++) {
    const { score, height } = rawProb[i];
    const fraction = height / totalProb;
    const count = Math.round(fraction * totalCandidates);
    cumulativeCount += count;
    buckets.push({
      score,
      count,
      percentage: Number((fraction * 100).toFixed(2)),
      cumulativeCount
    });
  }

  return buckets;
}

// Calculate Top % and position relative to all candidates
export function calculateCandidatePercentile(itemKey, inputScore) {
  const item = SUBJECTS_DATA[itemKey] || COMBINATIONS_DATA[itemKey];
  if (!item) return null;

  const score = parseFloat(inputScore);
  if (isNaN(score) || score < 0) return null;

  const validScore = Math.min(item.maxScore, Math.max(0, score));
  const { mean, stdDev, totalCandidates, maxScore } = item;

  // Calculate standardized Z-score
  const z = (validScore - mean) / stdDev;
  
  // Cumulative probability of scoring <= validScore
  let cdf;
  if (validScore >= maxScore) {
    cdf = 0.9999;
  } else if (validScore <= 0) {
    cdf = 0.0001;
  } else {
    // High-score tail calibration for Vietnamese graduation exam
    cdf = normCDF(z);
    if (z > 2.0) {
      // Exponential decay in top score ranges
      const excess = z - 2.0;
      cdf = 1 - (1 - cdf) * Math.exp(-excess * 0.4);
    }
  }

  // Top percentile (% of candidates with score >= validScore)
  const rawTopPercent = (1 - cdf) * 100;
  const topPercent = Math.max(0.01, Math.min(99.9, Number(rawTopPercent.toFixed(2))));
  const outrankedPercent = Number((100 - topPercent).toFixed(2));

  // Candidate counts
  const higherCount = Math.max(1, Math.round((topPercent / 100) * totalCandidates));
  const lowerCount = Math.max(0, totalCandidates - higherCount);
  
  // Segment evaluation
  let tier = 'Cơ bản';
  let tierColor = 'text-blue-600 dark:text-blue-400';
  let badgeBg = 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/40';
  let evaluation = 'Mức điểm an toàn để xét tốt nghiệp và một số trường đại học khu vực.';

  if (topPercent <= 1.0) {
    tier = 'Xuất sắc đỉnh cao (Top 1%)';
    tierColor = 'text-amber-500 dark:text-amber-400';
    badgeBg = 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-700/50';
    evaluation = 'Cực kỳ xuất sắc! Cơ hội tuyệt đối vào các ngành HOT nhất như Khoa học máy tính, Y đa khoa, Logistics top đầu cả nước.';
  } else if (topPercent <= 5.0) {
    tier = 'Top 5% Xuất sắc';
    tierColor = 'text-emerald-600 dark:text-emerald-400';
    badgeBg = 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800/40';
    evaluation = 'Vị thế cạnh tranh rất cao vào các trường đại học top 1 (ĐHQG, Bách Khoa, Kinh tế Quốc dân, Ngoại thương).';
  } else if (topPercent <= 15.0) {
    tier = 'Top 15% Khá - Giỏi';
    tierColor = 'text-indigo-600 dark:text-indigo-400';
    badgeBg = 'bg-indigo-500/10 text-indigo-800 dark:text-indigo-200 border-indigo-200 dark:border-indigo-800/40';
    evaluation = 'Cơ hội tốt vào hầu hết các trường Đại học công lập lớn và chương trình Tiên tiến/Chất lượng cao.';
  } else if (topPercent <= 30.0) {
    tier = 'Top 30% Khá';
    tierColor = 'text-sky-600 dark:text-sky-400';
    badgeBg = 'bg-sky-500/10 text-sky-800 dark:text-sky-200 border-sky-200 dark:border-sky-800/40';
    evaluation = 'Mức điểm khá, đủ điều kiện vào nhiều ngành kỹ thuật, kinh tế tại các trường đại học uy tín.';
  } else if (topPercent <= 50.0) {
    tier = 'Trên mức trung bình (Top 50%)';
    tierColor = 'text-cyan-600 dark:text-cyan-400';
    badgeBg = 'bg-cyan-500/10 text-cyan-800 dark:text-cyan-200 border-cyan-200 dark:border-cyan-800/40';
    evaluation = 'Điểm số cao hơn mặt bằng chung toàn quốc, phù hợp với các trường đại học đa ngành và chương trình liên kết.';
  }

  const buckets = generateDistributionBuckets(item, 30);

  return {
    item,
    score: validScore,
    topPercent,
    outrankedPercent,
    higherCount,
    lowerCount,
    totalCandidates,
    tier,
    tierColor,
    badgeBg,
    evaluation,
    buckets
  };
}

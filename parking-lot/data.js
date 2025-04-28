const data = [
  // Bình tân
  {
    id: "1",
    title: "Bãi xe Anh Huy",
    longLat: [106.590850065, 10.731660062],
    address:
      "1 Đường số 2, Phường 13, Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 100,
    availableSlots: 50,
  },
  {
    id: "2",
    title: "Bãi xe Hoàng Long",
    longLat: [106.572579675, 10.741522986],

    address:
      "2 Đường số 3, Phường 14, Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 120,
    availableSlots: 80,
  },
  {
    id: "3",
    title: "Bãi xe Minh Phát",
    longLat: [106.609421618, 10.752273221],

    address:
      "3 Đường số 4, Phường 15, Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 90,
    availableSlots: 40,
  },
  {
    id: "4",
    title: "Bãi xe Thành Công",
    longLat: [106.583019911, 10.768249937],

    address:
      "4 Đường số 5, Phường 16, Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 110,
    availableSlots: 70,
  },
  {
    id: "5",
    title: "Bãi xe Phú Mỹ",
    longLat: [106.601591464, 10.77416702],
    address:
      "5 Đường số 6, Phường 17, Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 150,
    availableSlots: 100,
  },
  {
    id: "6",
    title: "Bãi xe Tân Bình",
    longLat: [106.604703455, 10.786888349],
    lat: 10.8167672,
    long: 106.6539283,
    address:
      "6 Đường số 7, Phường 18, Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 130,
    availableSlots: 90,
  },
  {
    id: "7",
    title: "Bãi xe Quang Trung",
    longLat: [106.589745812, 10.801384112],
    address:
      "7 Đường số 8, Phường 19, Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 140,
    availableSlots: 60,
  },
  {
    id: "8",
    title: "Bãi xe Hòa Bình",
    longLat: [106.593359743, 10.814597314],
    address:
      "8 Đường số 9, Phường 20, Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 200,
    availableSlots: 150,
  },
  {
    id: "9",
    title: "Bãi xe Đông Á",
    longLat: [106.606510415, 10.817160999],
    address:
      "9 Đường số 10, Phường 21, Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 180,
    availableSlots: 120,
  },

  // Bình Chánh
  {
    id: "11",
    title: "Bãi xe An Phú",
    longLat: [106.684078551, 10.732908507],
    address: "11 Đường số 1, Huyện Bình Chánh, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 120,
    availableSlots: 80,
  },
  {
    id: "19",
    title: "Bãi xe An Lạc",
    longLat: [106.64156475, 10.671899338],
    address: "19 Đường số 9, Huyện Bình Chánh, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 180,
    availableSlots: 130,
  },
  {
    id: "20",
    title: "Bãi xe Thành Công",
    longLat: [106.666611246, 10.653500469],
    address:
      "20 Đường số 10, Huyện Bình Chánh, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 170,
    availableSlots: 110,
  },
  {
    id: "21",
    title: "Bãi xe Phước Lộc",
    longLat: [106.530303548, 10.818526495],
    address:
      "21 Đường số 11, Huyện Bình Chánh, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 100,
    availableSlots: 50,
  },
  {
    id: "22",
    title: "Bãi xe Tân Hòa",
    longLat: [106.568450511, 10.814385159],
    address:
      "22 Đường số 12, Huyện Bình Chánh, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 120,
    availableSlots: 80,
  },
  {
    id: "25",
    title: "Bãi xe Bình An",
    longLat: [106.58411085, 10.710241409],
    address:
      "25 Đường số 15, Huyện Bình Chánh, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 140,
    availableSlots: 70,
  },
  {
    id: "26",
    title: "Bãi xe Phú Hòa",
    longLat: [106.599971968, 10.684594431],
    address:
      "26 Đường số 16, Huyện Bình Chánh, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 110,
    availableSlots: 50,
  },
  {
    id: "29",
    title: "Bãi xe An Hòa",
    longLat: [106.58692168, 10.829372564],
    address:
      "29 Đường số 19, Huyện Bình Chánh, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 180,
    availableSlots: 130,
  },
  {
    id: "30",
    title: "Bãi xe Thành Đạt",
    longLat: [106.583106992, 10.782435788],
    address:
      "30 Đường số 20, Huyện Bình Chánh, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 170,
    availableSlots: 110,
  },
  {
    id: "35",
    title: "Bãi xe Đường Bạch Đằng",
    longLat: [106.704660021, 10.805276945],
    address:
      "35 Đường Bạch Đằng, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 140,
    availableSlots: 70,
  },
  // Cần Giờ
  {
    id: "36",
    title: "Bãi xe Đường Rừng Sác",
    longLat: [106.77696244, 10.661438801],
    address:
      "36 Đường Rừng Sác, Huyện Cần Giờ, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 100,
    availableSlots: 60,
  },
  {
    id: "37",
    title: "Bãi xe Đường Duyên Hải",
    longLat: [106.782835058, 10.656950018],
    address:
      "37 Đường Duyên Hải, Huyện Cần Giờ, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 120,
    availableSlots: 80,
  },
  {
    id: "38",
    title: "Bãi xe Đường Tắc Xuất",
    longLat: [106.792572576, 10.629818606],
    address:
      "38 Đường Tắc Xuất, Huyện Cần Giờ, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 150,
    availableSlots: 100,
  },
  {
    id: "39",
    title: "Bãi xe Đường Lý Nhơn",
    longLat: [106.860233248, 10.607766388],
    address: "39 Đường Lý Nhơn, Huyện Cần Giờ, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 130,
    availableSlots: 90,
  },
  {
    id: "40",
    title: "Bãi xe Đường An Thới Đông",
    longLat: [106.825549624, 10.588820932],
    address:
      "40 Đường An Thới Đông, Huyện Cần Giờ, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 140,
    availableSlots: 70,
  },

  // Củ Chi
  {
    id: "41",
    title: "Bãi xe Đường Tỉnh Lộ 8",
    longLat: [106.549947356, 10.923463556],
    address:
      "41 Đường Tỉnh Lộ 8, Huyện Củ Chi, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 120,
    availableSlots: 80,
  },
  {
    id: "42",
    title: "Bãi xe Đường Quốc Lộ 22",
    longLat: [106.53770016, 10.951652631],
    address:
      "42 Đường Quốc Lộ 22, Huyện Củ Chi, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 150,
    availableSlots: 100,
  },
  {
    id: "43",
    title: "Bãi xe Đường Nguyễn Thị Rành",
    longLat: [106.490719152, 10.978656426],
    address:
      "43 Đường Nguyễn Thị Rành, Huyện Củ Chi, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 100,
    availableSlots: 60,
  },
  {
    id: "44",
    title: "Bãi xe Đường Võ Văn Bích",
    longLat: [106.473251853, 11.017876533],
    address:
      "44 Đường Võ Văn Bích, Huyện Củ Chi, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 130,
    availableSlots: 90,
  },
  {
    id: "45",
    title: "Bãi xe Đường Phạm Văn Cội",
    longLat: [106.415429084, 10.998956916],
    address:
      "45 Đường Phạm Văn Cội, Huyện Củ Chi, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 140,
    availableSlots: 70,
  },
  {
    id: "46",
    title: "Bãi xe Đường Bến Than",
    longLat: [106.509591866, 11.091572498],
    address: "46 Đường Bến Than, Huyện Củ Chi, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 110,
    availableSlots: 50,
  },
  {
    id: "47",
    title: "Bãi xe Đường Tỉnh Lộ 15",
    longLat: [106.606565478, 10.937262738],
    address:
      "47 Đường Tỉnh Lộ 15, Huyện Củ Chi, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 160,
    availableSlots: 120,
  },

  // Gò Vấp
  {
    id: "48",
    title: "Bãi xe Đường Phan Văn Trị",
    longLat: [106.644163311, 10.839399902],
    address:
      "48 Đường Phan Văn Trị, Quận Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 120,
    availableSlots: 80,
  },
  {
    id: "49",
    title: "Bãi xe Đường Nguyễn Oanh",
    longLat: [106.649383424, 10.846646597],
    address:
      "49 Đường Nguyễn Oanh, Quận Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 150,
    availableSlots: 100,
  },
  {
    id: "50",
    title: "Bãi xe Đường Quang Trung",
    longLat: [106.668205941, 10.838808325],
    address:
      "50 Đường Quang Trung, Quận Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 100,
    availableSlots: 60,
  },
  {
    id: "51",
    title: "Bãi xe Đường Lê Đức Thọ",
    longLat: [106.659271524, 10.846745192],
    address:
      "51 Đường Lê Đức Thọ, Quận Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 130,
    availableSlots: 90,
  },
  // Hóc Môn
  {
    id: "52",
    title: "Bãi xe Đường Nguyễn Ảnh Thủ",
    longLat: [106.612670971, 10.883275749],
    address:
      "52 Đường Nguyễn Ảnh Thủ, Huyện Hóc Môn, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 120,
    availableSlots: 80,
  },
  {
    id: "53",
    title: "Bãi xe Đường Lê Thị Hà",
    longLat: [106.542801774, 10.874403317],
    address:
      "53 Đường Lê Thị Hà, Huyện Hóc Môn, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 100,
    availableSlots: 60,
  },
  // Nhà Bè
  {
    id: "54",
    title: "Bãi xe Đường Nguyễn Văn Tạo",
    longLat: [106.743369511, 10.694898389],
    address:
      "54 Đường Nguyễn Văn Tạo, Huyện Nhà Bè, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 120,
    availableSlots: 80,
  },
  {
    id: "55",
    title: "Bãi xe Đường Lê Văn Lương",
    longLat: [106.727307637, 10.695687534],
    address:
      "55 Đường Lê Văn Lương, Huyện Nhà Bè, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 100,
    availableSlots: 60,
  },
  {
    id: "56",
    title: "Bãi xe Đường Huỳnh Tấn Phát",
    longLat: [106.730921557, 10.674823882],
    address:
      "56 Đường Huỳnh Tấn Phát, Huyện Nhà Bè, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 140,
    availableSlots: 90,
  },
  // Phú Nhuận
  {
    id: "57",
    title: "Bãi xe Đường Phan Xích Long",
    longLat: [106.681657299, 10.799288874],
    address:
      "57 Đường Phan Xích Long, Quận Phú Nhuận, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 120,
    availableSlots: 80,
  },
  // Tân Bình
  {
    id: "58",
    title: "Bãi xe Đường Cộng Hòa",
    longLat: [106.645389162, 10.803162255],
    address:
      "58 Đường Cộng Hòa, Quận Tân Bình, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 150,
    availableSlots: 100,
  },
  {
    id: "59",
    title: "Bãi xe Đường Hoàng Văn Thụ",
    longLat: [106.651763721, 10.796826648],
    address:
      "59 Đường Hoàng Văn Thụ, Quận Tân Bình, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 120,
    availableSlots: 80,
  },
  //  Quận 1
  {
    id: "60",
    title: "Bãi xe Đường Nguyễn Huệ",
    longLat: [106.700116957, 10.765940668],
    address: "60 Đường Nguyễn Huệ, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 15,
    availableSlots: 10,
  },
  {
    id: "61",
    title: "Bãi xe Đường Lê Lợi",
    longLat: [106.701760791, 10.7685171],
    address: "61 Đường Lê Lợi, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 18,
    availableSlots: 12,
  },
  {
    id: "62",
    title: "Bãi xe Đường Đồng Khởi",
    longLat: [106.703843816, 10.774680722],
    address: "62 Đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 20,
    availableSlots: 15,
  },
  {
    id: "63",
    title: "Bãi xe Đường Tôn Đức Thắng",
    longLat: [106.703693237, 10.780375796],
    address: "63 Đường Tôn Đức Thắng, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 12,
    availableSlots: 8,
  },
  // Quận 3
  {
    id: "64",
    title: "Bãi xe Đường Võ Văn Tần",
    longLat: [106.685662385, 10.782711732],
    address: "64 Đường Võ Văn Tần, Quận 3, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 25,
    availableSlots: 15,
  },
  {
    id: "65",
    title: "Bãi xe Đường Lý Chính Thắng",
    longLat: [106.678409446, 10.780369632],
    address: "65 Đường Lý Chính Thắng, Quận 3, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 30,
    availableSlots: 20,
  },
  {
    id: "66",
    title: "Bãi xe Đường Nguyễn Đình Chiểu",
    longLat: [106.678032993, 10.787173996],
    address:
      "66 Đường Nguyễn Đình Chiểu, Quận 3, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 20,
    availableSlots: 10,
  },
  // Quận 4
  {
    id: "67",
    title: "Bãi xe Đường Hoàng Diệu",
    longLat: [106.703068926, 10.765828881],
    address: "67 Đường Hoàng Diệu, Quận 4, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 25,
    availableSlots: 15,
  },
  {
    id: "68",
    title: "Bãi xe Đường Nguyễn Tất Thành",
    longLat: [106.705867206, 10.767123264],
    address:
      "68 Đường Nguyễn Tất Thành, Quận 4, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 30,
    availableSlots: 20,
  },
  // Quận 5
  {
    id: "69",
    title: "Bãi xe Đường Trần Hưng Đạo",
    longLat: [106.683685245, 10.758638731],
    address: "69 Đường Trần Hưng Đạo, Quận 5, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 50,
    availableSlots: 30,
  },
  {
    id: "70",
    title: "Bãi xe Đường Nguyễn Trãi",
    longLat: [106.673765778, 10.756136183],
    address: "70 Đường Nguyễn Trãi, Quận 5, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 40,
    availableSlots: 25,
  },
  {
    id: "71",
    title: "Bãi xe Đường Hồng Bàng",
    longLat: [106.671532173, 10.750650228],
    address: "71 Đường Hồng Bàng, Quận 5, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 60,
    availableSlots: 40,
  },
  // Quận 6
  {
    id: "72",
    title: "Bãi xe Đường Hậu Giang",
    longLat: [106.640954934, 10.747763839],
    address: "72 Đường Hậu Giang, Quận 6, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 50,
    availableSlots: 30,
  },
  {
    id: "73",
    title: "Bãi xe Đường Bình Tiên",
    longLat: [106.642573671, 10.75273207],
    address: "73 Đường Bình Tiên, Quận 6, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 40,
    availableSlots: 25,
  },
  {
    id: "74",
    title: "Bãi xe Đường Phạm Văn Chí",
    longLat: [106.647768684, 10.743658515],
    address: "74 Đường Phạm Văn Chí, Quận 6, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 60,
    availableSlots: 40,
  },
  // Quận 7
  {
    id: "75",
    title: "Bãi xe Đường Nguyễn Văn Linh",
    longLat: [106.730807693, 10.705911853],
    address:
      "75 Đường Nguyễn Văn Linh, Quận 7, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 80,
    availableSlots: 50,
  },
  {
    id: "76",
    title: "Bãi xe Đường Huỳnh Tấn Phát",
    longLat: [106.728599187, 10.724356858],
    address: "76 Đường Huỳnh Tấn Phát, Quận 7, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 70,
    availableSlots: 40,
  },
  {
    id: "77",
    title: "Bãi xe Đường Nguyễn Thị Thập",
    longLat: [106.726440868, 10.727513114],
    address:
      "77 Đường Nguyễn Thị Thập, Quận 7, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 90,
    availableSlots: 60,
  },
  {
    id: "78",
    title: "Bãi xe Đường Tân Mỹ",
    longLat: [106.722274821, 10.729436433],
    address: "78 Đường Tân Mỹ, Quận 7, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 60,
    availableSlots: 30,
  },
  {
    id: "79",
    title: "Bãi xe Đường Lâm Văn Bền",
    longLat: [106.733367563, 10.736094006],
    address: "79 Đường Lâm Văn Bền, Quận 7, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 100,
    availableSlots: 70,
  },
  // Quận 8
  {
    id: "80",
    title: "Bãi xe Đường Tạ Quang Bửu",
    longLat: [106.687193813, 10.74744568],
    address: "80 Đường Tạ Quang Bửu, Quận 8, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 50,
    availableSlots: 30,
  },
  {
    id: "81",
    title: "Bãi xe Đường Phạm Thế Hiển",
    longLat: [106.660741901, 10.740418507],
    address: "81 Đường Phạm Thế Hiển, Quận 8, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 40,
    availableSlots: 25,
  },
  {
    id: "82",
    title: "Bãi xe Đường Nguyễn Văn Linh",
    longLat: [106.636874945, 10.723626595],
    address:
      "82 Đường Nguyễn Văn Linh, Quận 8, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 60,
    availableSlots: 40,
  },
  // Quận 10
  {
    id: "83",
    title: "Bãi xe Đường Thành Thái",
    longLat: [106.675672877, 10.773220685],
    address: "83 Đường Thành Thái, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 50,
    availableSlots: 30,
  },
  {
    id: "84",
    title: "Bãi xe Đường 3 Tháng 2",
    longLat: [106.664705623, 10.767254272],
    address: "84 Đường 3 Tháng 2, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 40,
    availableSlots: 20,
  },
  // Quận 11
  {
    id: "85",
    title: "Bãi xe Đường Lạc Long Quân",
    longLat: [106.652508634, 10.760671356],
    address: "85 Đường Lạc Long Quân, Quận 11, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 45,
    availableSlots: 25,
  },
  {
    id: "86",
    title: "Bãi xe Đường Âu Cơ",
    longLat: [106.638780743, 10.755469026],
    address: "86 Đường Âu Cơ, Quận 11, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 50,
    availableSlots: 30,
  },
  // Quận 12
  {
    id: "87",
    title: "Bãi xe Đường Hà Huy Giáp",
    longLat: [106.620143984, 10.844041403],
    address: "87 Đường Hà Huy Giáp, Quận 12, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 50,
    availableSlots: 30,
  },
  {
    id: "88",
    title: "Bãi xe Tân Thới Hiệp",
    longLat: [106.641350688, 10.86070335],
    address:
      "88 Hẻm 8, đường Tân Thới Hiệp 6, Quận 12, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 60,
    availableSlots: 40,
  },
  // Quận Tân Phú
  {
    id: "89",
    title: "Bãi xe Đường Lũy Bán Bích",
    longLat: [106.624680204, 10.802071871],
    address:
      "89 Đường Lũy Bán Bích, Quận Tân Phú, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 70,
    availableSlots: 40,
  },
  {
    id: "90",
    title: "Bãi xe Đường Âu Cơ",
    longLat: [106.618155062, 10.791027577],
    address: "90 Đường Âu Cơ, Quận Tân Phú, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 60,
    availableSlots: 35,
  },
  // TP Thủ Đức
  {
    id: "91",
    title: "Bãi xe Đường Phạm Văn Đồng",
    longLat: [106.783531162, 10.832186772],
    address:
      "91 Đường Phạm Văn Đồng, TP Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 80,
    availableSlots: 50,
  },
  {
    id: "92",
    title: "Bãi xe Đường Võ Văn Ngân",
    longLat: [106.73514475, 10.792350506],
    address:
      "92 Đường Võ Văn Ngân, TP Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 70,
    availableSlots: 40,
  },
  {
    id: "93",
    title: "Bãi xe Đường Kha Vạn Cân",
    longLat: [106.734642821, 10.807536239],
    address:
      "93 Đường Kha Vạn Cân, TP Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 60,
    availableSlots: 35,
  },
  {
    id: "94",
    title: "Bãi xe Đường Xa Lộ Hà Nội",
    longLat: [106.755523252, 10.840468889],
    address:
      "94 Đường Xa Lộ Hà Nội, TP Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 90,
    availableSlots: 60,
  },
  {
    id: "95",
    title: "Bãi xe Đường Nguyễn Xiển",
    longLat: [106.720588664, 10.845398612],
    address:
      "95 Đường Nguyễn Xiển, TP Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 100,
    availableSlots: 70,
  },
  {
    id: "96",
    title: "Bãi xe Đường Đặng Văn Bi",
    longLat: [106.836386762, 10.809462027],
    address: "96 Đường Đặng Văn Bi, TP Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 70,
    availableSlots: 40,
  },
  {
    id: "97",
    title: "Bãi xe Đường Lê Văn Việt",
    longLat: [106.837792177, 10.852450947],
    address: "97 Đường Lê Văn Việt, TP Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 80,
    availableSlots: 50,
  },
  {
    id: "98",
    title: "Bãi xe Đường Nguyễn Duy Trinh",
    longLat: [106.773544658, 10.874928954],
    address: "98 Đường Nguyễn Duy Trinh, TP Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
    totalSlots: 90,
    availableSlots: 60,
  },
];

export default data;

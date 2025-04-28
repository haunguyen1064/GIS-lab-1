import BinhChanh from "./binh-chanh.js";
import BinhThanh from "./binh-thanh.js";
import CanGio from "./can-gio.js";
import CuChi from "./cu-chi.js";
import GoVap from "./go-vap.js";
import HocMon from "./hoc-mon.js";
import NhaBe from "./nha-be.js";
import PhuNhuan from "./phu-nhuan.js";
import QuanBinhTan from "./quan-binh-tan.js";
import QuanTanBinh from "./quan-tan-binh.js";
import Quan1 from "./quan1.js";
import Quan10 from "./quan10.js";
import Quan11 from "./quan11.js";
import Quan12 from "./quan12.js";
import Quan3 from "./quan3.js";
import Quan4 from "./quan4.js";
import Quan5 from "./quan5.js";
import Quan6 from "./quan6.js";
import Quan7 from "./quan7.js";
import Quan8 from "./quan8.js";
import TanPhu from "./tan-phu.js";
import TPThuDuc from "./tpthu-duc.js";

const POINT_TEMPLATE_AREA = {
  title: "{name}",
  content:
    "Diện tích: <b>{area} km<sup>2</sup></b>.<br>" +
    "Dân số: <b>{population} người</b>.<br>" +
    "Số lượng bãi xe thông minh: <b>{parkingLots} bãi xe</b>.",
};

const districtsData = [
  BinhChanh,
  BinhThanh,
  CanGio,
  CuChi,
  GoVap,
  HocMon,
  NhaBe,
  PhuNhuan,
  Quan1,
  Quan10,
  Quan11,
  Quan12,
  Quan3,
  Quan4,
  Quan5,
  Quan6,
  Quan7,
  Quan8,
  QuanBinhTan,
  QuanTanBinh,
  TanPhu,
  TPThuDuc,
];

const districts = districtsData.map((data) => ({
  type: "polygon",
  popupTemplate: POINT_TEMPLATE_AREA,
  ...data,
  symbol: {
    type: "simple-fill",
    outline: {
      color: [255, 255, 255],
      width: 1,
    },
    ...data.symbol,
  },
}));

export default districts;

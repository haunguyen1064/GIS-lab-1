import BH_TD from "./LongAn-BX-PhuHoa.js";
import TM_NTT from "./BX-TanMy-BX-NTT.js";
import TTH_TA from "./TTH-ThuanAn.js";

const TEMPLATE = {
  title: "{Name}",
  content: "Đường đi từ <b>{from}</b> đến <b>{Name}</b>.",
};

const lines = [BH_TD, TM_NTT, TTH_TA].map((line) => ({
  type: "polyline",
  popupTemplate: TEMPLATE,
  ...line,
  symbol: {
    type: "simple-line",
    width: 3,
    ...line.symbol,
  },
}));

export default lines;

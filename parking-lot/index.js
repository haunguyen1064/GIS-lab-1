import data from "./data.js";

var symbol = {
  type: "picture-marker",
  url: "./images/parking.png",
  width: "24px",
  height: "24px",
};

const TEMPLATE = {
  title: "{Name}",
  content:
    "<b>Địa chỉ:</b> {Location}. <br/>" +
    "<b>Số lượng chỗ đậu xe:</b> {totalSlots} chỗ. <br/>" +
    "<b>Số lượng chỗ đậu xe còn trống:</b> {availableSlots} chỗ. <br/>",
};

const parkingLots = data.map((item) => ({
  type: "point",
  longitude: item["longLat"][0],
  latitude: item["longLat"][1],
  Name: item.title,
  Location: item.address,
  symbol,
  popupTemplate: TEMPLATE,
  ...item,
}));

export default parkingLots;

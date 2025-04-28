import districts from "./districts/index.js";
import parkingLots from "./parking-lot/index.js";
import lines from "./lines/index.js";

require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
], function (Map, MapView, Graphic, GraphicsLayer) {
  var map = new Map({
    basemap: "topo-vector",
  });
  map.on("load", function () {
    map.graphics.enableMouseEvents();
  });

  var view = new MapView({
    container: "rootView",
    map: map,
    center: [106.8114616, 10.717431019],
    zoom: 10,
    highlightOptions: {
      color: "blue",
    },
  });
  var createGraphic = function (data) {
    return new Graphic({
      geometry: data,
      symbol: data.symbol,
      attributes: data,
      popupTemplate: data.popupTemplate,
    });
  };

  // Polygon: Districts
  const districtLayer = new GraphicsLayer();
  districts.forEach(function (data) {
    districtLayer.add(createGraphic(data));
  });

  // Lines: streets
  const lineLayer = new GraphicsLayer();
  lines.forEach(function (data) {
    lineLayer.add(createGraphic(data));
  });

  // Points: Parking lots
  var pointsLayer = new GraphicsLayer();
  parkingLots.forEach((packingLot) => {
    pointsLayer.add(createGraphic(packingLot));
  });

  map.add(districtLayer); // polygon layer
  map.add(lineLayer); // line layer
  map.add(pointsLayer); // point layer
});

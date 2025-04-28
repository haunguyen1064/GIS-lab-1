import districts from "./districts/index.js";
import parkingLots from "./parking-lot/index.js";

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

  const districtLayer = new GraphicsLayer();
  districts.forEach(function (data) {
    districtLayer.add(createGraphic(data));
  });

  // const streetLayer = new GraphicsLayer();

  //     map.add(streetLayer);

  var pointsLayer = new GraphicsLayer();
  parkingLots.forEach((packingLot) => {
    pointsLayer.add(createGraphic(packingLot));
  });

  map.add(districtLayer);
  map.add(pointsLayer);
});

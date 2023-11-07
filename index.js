const pointInPolygon = require('point-in-polygon');
const geoPointInPolygon = require('geo-point-in-polygon')
const polygon = require('./polygon.json');
const inside = require('./inside.json');
const outsideClose = require('./outside_close.json');
const outside = require('./outside.json');
const polygonCord = polygon.features[0].geometry.coordinates[0];
const insideCord = inside.features[0].geometry.coordinates;
const outsideCloseCord = outsideClose.features[0].geometry.coordinates;
const outsideCord = outside.features[0].geometry.coordinates;

// https://www.npmjs.com/package/geo-point-in-polygon
// bara två dependencies
console.log("Innanför", geoPointInPolygon(insideCord, polygonCord));
console.log("Knappt utanför", geoPointInPolygon(outsideCloseCord, polygonCord));
console.log("Utanför", geoPointInPolygon(outsideCord, polygonCord));

// https://www.npmjs.com/package/point-in-polygon
// sjukt många dependencies 213 stk
console.log("Innanför", pointInPolygon(insideCord, polygonCord));
console.log("Knappt utanför", pointInPolygon(outsideCloseCord, polygonCord));
console.log("Utanför", pointInPolygon(outsideCord, polygonCord));

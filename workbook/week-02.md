# Week 2

## Initial Investigation

* Investigating Google Maps - Road API
* Investigating Google Maps - Geometry API
  * `containsLocation(point:LatLng, polygon:Polygon)`
    * Check if given point lies within a Polygon
* [Graphhopper](https://github.com/graphhopper/graphhopper)
* [Open Street Map](https://wiki.openstreetmap.org/wiki/Develop)
* [Google Maps Dev - Rectangle Event](https://developers.google.com/maps/documentation/javascript/examples/rectangle-event)
* [Open Street Map - Total length of road in area](https://help.openstreetmap.org/questions/4014/how-can-i-find-the-total-length-of-roads-in-an-area)

Use OpenStreetMaps to generate OSM JSON file of all of the streets within this area

* [Overpass Turbo](http://overpass-turbo.eu/#)
* [GitHub gist with calculations](https://gist.github.com/dylanpinn/d65e5758d247476261f55c96a054ef17)
* Need to get all of the ways
  * Can include lane information
  * Can include surface information
    * Exclude - unpaved
    * Look at excluding these using query
* Can use Overpass bounding box to define lat/long of area to query
* Can use Haversine Distance calculation to calculate distance between all of
  the nodes of a way.
* Sum the distance by lane width
  * Need default if not provided
  * [Default lane length](https://en.wikipedia.org/wiki/Lane)
    * For information regarding lane width
  * This gives estimate of area of road
* Sum all of the road areas

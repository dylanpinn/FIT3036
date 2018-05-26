# Method

* Frontend client passes rectangle coordinates (north, south, east & west)
  points of the area to calculate the surface area of the road, via JSON to a
  backend API.
* Backend calls the OpenStreetMap Overpass API to return the road data within
  these bounds.
* The roads are then looped over, calculating the distance between each of the
  points of the road, then calculating the area, if lane information is included
  then it is used, otherwise assuming that the road is 2 lanes wide.
* This is all summed and returned to the frontend to be displayed to the user.

An API will be created that will take 4 position parameters, each boundary is
made up of a Latitude and Longitude. This data is used to call the Open Street
Maps API (Maps, 2018) to return data about all of the streets within the area.

This is then passed to a method that will use the Haversine distance calculation
(Veness, 2017) to calculate distance between all of the nodes. If number of
lanes information is provided then this is multiplied by by the default lane
width within Australia (3.5m) (Cottingham, 2018) if not then we are assuming
that the road is only 2 lanes wide. This is then summed and returned.

## Internal Design

<!-- TODO: Add sequence diagrams. -->

Calculate Area of a rectangle:

These steps below are outlined in figure 4.

1. User moves the map, adjusts zoom level or changes input.
2. The bounds of the rectangle are send to the backend service.
3. This calculates the total area of the bounds.
4. This is returned to the user.


Calculate Total Surface Area of Roads: These steps below are outlined in figure
5

1.  User requests to calculate total surface area of roads.
2.  These parameters are sent to the back-end service.
3.  These are used to call OpenStreetMap API
4.  It then iterates over data and calculates the distance of all of the roads.
5.  The area of these roads is then calculated with lane width.
6.  These results are summed.
7.  This is returned to the user.

## Software Architecture

Figure shows how architecture of the back-end code. It is broken up into 4 main
classes, which calculate area, sum data, calculate distance and calculate the
area of a road.

<!-- TODO: Add class diagram. -->

## Algorithms

<!-- TODO: Add pseudocode for key functions. -->

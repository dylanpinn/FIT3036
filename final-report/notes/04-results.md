# Results

* Finding reliable data to test against is hard.
* Unit tests allow testing smaller parts of the application.
* OpenStreetMap API returns data from outside the requested bounds. As the data
  points can start within the bounds and finish outside it is excluded. This
  reduces the accuracy.
* Lane information isn't always included in the OpenStreetMap API so assumptions
  are made about the default number of lanes.
* Using a standard lane width (INCLUDE LANE WIDTH INFORMATION AND WHERE IT WAS
  FOUND).
* Program has 2 main outputs:
  * Area of the bounds.
  * Total surface area of the road between the bounds.
* Bounds is the rectangle area comprising of a set of coordinates; North, South,
  East and West.
* Created throwaway spikes to test implementation of the backend API. This
  included querying a small set of data and performing the calculations on it.
  This helped to fine-tune and improve the accuracy of the algorithms used.
* In the initial research, I couldn't find any other implementations/research
  that did these calculations using vector data. This was implemented through
  trial and error.

## Externally Observable Features

* Input
  * User can manipulate the Google Map component using either touch/mouse.
  * User can input coordinates for the Map to centre on this position.
* Output
  * The area in km^2 of the requested area is displayed to the user.
  * This is a hard-coded square of size 1km^2.
  * The user then can request the total surface area of the roads within this
    area.
  * This result is presented to the user.

## Performance

* The backend API is hosted on AWS Lambda, this restricts the amount of time the
  functions and run for and the amount of space that they can occupy.
  * The current settings are:
    * 1024 MB of memory
    * 6 seconds to time-out.

The following are taken from AWS CloudWatch metrics

### Area Function

* Average invocation time
  * 3 ms
* Average memory usage
  * 30 MB

### Road Surface Area Function

* Average invocation time
  * 1800 ms
* Average memory usage
  * 28 MB

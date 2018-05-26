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

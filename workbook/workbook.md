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

Use OpenStreetMaps to generate OSM JSON file of all of the streets within this
area

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
* Sum all of the road area

# Week 3

## Components to Project

* GUI
  * Web app
  * Google Maps embed to move square 1km box around map
  * Button to generate result
  * This posts latitude and longitude of the area to the backend API
* API
  * Has an endpoint to receive data and return a result
  * Need to connect to Open Street Maps to generate data for area
  * Need parse result calculating length of roads and multiplying by lane width
  * Need to keep track of total and then return total area

Started preparing LaTex project proposal document with outlined sections.

## Project Requirements

1.  Functional Requirements (e.g., web hosting, platform…)
1.  Non-functional Requirements

## Project Plan

1.  Overview - Project objectives, requirements and constraints.
1.  Risk Analysis - What are the main project risks, their probabilities and
    risk reduction strategies?
1.  Resource Requirements - Hardware and software (more specific than Functional
    Requirements)
1.  Schedule - Corresponding to tasks identified above (e.g. in a Gantt chart,
    PERT chart, Kanban, etc...)

## Overview

* For a given 1 square km area in Victoria, calculate the surface area of all of
  the roads within that area.
* Use Google maps street/satellite views to help
* Constraints
  * Available information online
  * No / Limited access to council records

# Week 4

Created [Trello Board](https://trello.com/b/fgAiXzRE) with the following lists

* todo
* doing
* done

Created tickets for each of the sections of the Project Specification

Project Requirements - Functional Requirements

* System shall allow a user to select a 1 square km area on Google Maps
* System shall calculate the total area of the roads in the nominated square
  area

Project Requirements - Non-functional requirements

* System shall be available via the Internet
* System shall be testable
* System shall be cheap to host
* System shall be easy to deploy
* System shall be easy to maintain

Project Plan - Overview

* Project objectives:
  * Our company secured a contract for a local council in Victoria to re-surface
    roads in a designated square kilometre area.
  * Can use
    * Google Maps and related
    * Satellite/aerial views
  * Work out the total area of roads in the nominated square kilometre to give a
    quote.
  * Need to write related code along with an elegant GUI to support the
    calculations.
* Requirements:
  * Use any method to calculate the total area of the roads.
  * Has to be testable.
  * Easy to use GUI.
* Constraints:
  * Only have access to publicly available data.

# Week 5

* Creating Front end prototype to experiment with Google Maps API.
  * <https://tomchentw.github.io/react-google-maps/#introduction/>
* Bootstrap application using Facebook's `create-react-app`
  https://github.com/facebook/create-react-app
* Create backend spike application to test the OpenStreetMap API
* Found golang package to utilise the Overpass API
  https://github.com/serjvanilla/go-overpass

## Query to get relevant data from Overpass API

```bash
[out:json][timeout:25];
  (
    node['highway']['highway'!='footway']['highway'!='pedestrian']
    ['-highway'!='path'](-36.95687426637871,145.13076760784406,-36.93890796069632,145.1532484622462);
    way['highway']['highway'!='footway']['highway'!='pedestrian']
    ['-highway'!='path'](-36.95687426637871,145.13076760784406,-36.93890796069632,145.1532484622462);
    relation['highway']['highway'!='footway']['highway'!='pedestrian']
    ['-highway'!='path'](-36.95687426637871,145.13076760784406,-36.93890796069632,145.1532484622462);
    );
    out body;
  >;
out skel qt;
```

# Week 6

## Project Plan - Schedule

* Create Gantt chart using [Team Gantt](https://teamgantt.com). This allows
  working back from the due date to correctly meet deadlines.

## Project Plan - Risk

* Started creating risk register
* Add more to project plan - risk analysis

## External Design - User Interface

* Create Mock-up of User Interface for Front end of app.

## Project plan - resource requirements

Hardware is all SASS, PASS, IASS solutions to keep costs down and ease of use.

Hardware:

* AWS to host all of the required components: AWS Lambda to run backend code AWS
* API Gateway to route backend requests to lambda functions AWS S3 to host
* frontend code AWS Cloudfront - CDN for frontend AWS Cloudformation - Provision
* infrastructure CI/CD tools to build, test and deploy

Software:

* Local development environment NodeJS to build frontend Latex to build
* documentation Go Programming language to build backend

## External Design - Functionality

API will be created that will take 4 position parameters, each boundary is made
up of a Latitude and Longitude.

This method calls the Open Street Maps API with these params to return all of
the streets within the boundaries.

This is then passed to a method that will use the Haversine distance calculation
to calculate distance between all of the nodes. If lane information is provided
then this is multiplied by by the default lane length (3.5m) if not then the
default is used. (NEED TO CHECK IF HAS MULTIPLE LANES). This is then summed and
returned.

Lane width 3.5m <https://www.driverknowledgetests.com/resources/road-widths/>

Haversine formula <https://en.wikipedia.org/wiki/Haversine_formula/>

Another API is exposed for the frontend UI.

It takes 4 position parameters, each with boundary is made up of a Latitude and
Longitude. This will calculate the total area of the 4 points and return it.

Calculate the area of 4 points:
<http://mathforum.org/library/drmath/view/63767.html/>

## External Design - Performance

Time: We would like the response from the API to calculate the area of the
square to be very fast (< 0.5s) as this will run whenever, the area is changed.

The main method that will calculate the total surface area of the all of the
roads will also need to be sum what fast as we do not want the user to have to
wait a long time while this is calculated. < 1m

Space: AWS Lambda, which is where the backend code is run, can run between
128MB-3008MB memory to run the method. The default is 1024MB which is what I
will be using.

## Internal Design

* Generate sequence diagrams for main methods in program.

## Software Architecture

* Generate class diagram

## Test Plan - Coverage

* These will automatically be run through development using tools to test
  runners.
* Tests will be run automatically through CI/CD service before deploying changes
  to ensure that functionality is enforced.
* Use jest and react-testing-library for testing frontend components.
* Use Go inbuilt testing package for unit testing backend classes, functions.

## Test Plan - Test Methods

* Unit tests on all class methods. This verifies that the individual functions
  behave as expected.
* Integration tests for API backends to ensure that correct response is returned
  for known parameters.
* Unit test frontend components to ensure that they behave and interact in the
  correct manor.
* Acceptance testing to make sure requirements are met.
* Able to generate test coverage reports for front end and back end code.
  80-100% test coverage is acceptable.
* System tests will test the system as a whole and test the entire
  functionality.

## Test Plan - Sample Test Cases

* Test a known Area to calculate the total area.
* Test a known Distance to know the length of it.
* Test a known Area to sanity check the surface area of the roads within it.

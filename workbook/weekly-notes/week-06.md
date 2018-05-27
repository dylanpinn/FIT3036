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

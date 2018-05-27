# Test Report

## Introduction

To test the project it involves an combination of automated and manual tests.
The automated tests for the project test are unit tests and test small pieces of
the application in isolation. The manual tests are system tests that ensure that
the system works as a whole.

## Test Report

The tests performed met the expectations of the system. The backend application
has fairly comprehensive unit tests to ensure correctness and that changes to do
not break expected functionality. Integration tests for both the backend and
frontend applications test to ensure that the application is working as
expected.

### Unit Testing

#### Backend Application

Unit tests have been written for all of the major functionality of the backend
application. These are run automatically on each change to ensure that any
errors are caught early in development.

`CalculateDistance`

* Test a known distance to check that the distance calculation works as
  expected.

`PointInsideBounds`

* Test a range of coordinates and bounds to ensure that we are not excluding
  data that is within the bounds.

`CalculateArea`

* Test a known area to ensure that the calculate area methods return the correct
  values.

`CalculateRoadArea`

* We were unable to find any data about this to test that this works. Manually
  calculated the expected values from an API call and run this as a test to
  ensure that the method works as expected.

Integration tests for the API function handlers have been written to ensure that
the API is returning the correct response code.

#### Frontend Application

Unit tests for small components have been written as these allow us to write
small tests that ensure that the component works as expected.

An integration tests runs to make sure that the application renders correctly.

### System Testing

Manual system tests are performed on the system. These are mainly sanity checks
to ensure that the results are within the expected bounds.

* Check that an area with no roads returns 0.
  * Move the map to an area with no roads, such as the ocean.
* Check various areas within cities and rural areas and check that the returned
  result is always less than 1 square kilometre.expected
  * Check that the result looks correct. If not many roads within the bounds
    then the number should be low. If many roads then ensure that the result is
    higher.

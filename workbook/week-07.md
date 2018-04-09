# Week 7

- Add more to project plan - risk analysis

## Project plan - resource requirements

Hardware is all SASS, PASS, IASS solutions to keep costs down and ease of use.

Hardware:

- AWS to host all of the required components: AWS Lambda to run backend code AWS
- API Gateway to route backend requests to lambda functions AWS S3 to host
- frontend code AWS Cloudfront - CDN for frontend AWS Cloudformation - Provision
- infrastructure CI/CD tools to build, test and deploy

Software:

- Local development environment NodeJS to build frontend Latex to build
- documentation Go Programming language to build backend

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

Lane width 3.5m https://www.driverknowledgetests.com/resources/road-widths/

Haversine formula https://en.wikipedia.org/wiki/Haversine_formula

Another API is exposed for the frontend UI.

It takes 4 position parameters, each with boundary is made up of a Latitude and
Longitude. This will calculate the total area of the 4 points and return it.

Calculate the area of 4 points:
http://mathforum.org/library/drmath/view/63767.html

## External Design - Performance

Time: We would like the response from the API to calculate the area of the
square to be very fast (< 0.5s) as this will run whenever, the area is changed.

The main method that will calculate the total surface area of the all of the
roads will also need to be sum what fast as we do not want the user to have to
wait a long time while this is calculated. < 1m

Space: AWS Lambda, which is where the backend code is run, can run between
128MB-3008MB memory to run the method. The default is 1024MB which is what I
will be using.


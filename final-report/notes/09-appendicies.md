# Appendices

## Production and Deployment

### Frontend Application

Git repository: https://github.com/dylanpinn/FIT3036-frontend

#### Local Setup

Requirements

* NodeJS >= 6 (https://nodejs.org/en/)
* Yarn package manager (http://yarnpkg.com/)

Installation

* `yarn install`

Run Locally

* `yarn start`
* Open http://localhost:3000/

#### Deployment

* https://epic-aryabhata-b7b828.netlify.com/ hosted on Netlify.
* Automatically deploys `master` branch on successful build.

### Backend Application

Git repository: https://github.com/dylanpinn/FIT3036-backend

#### Local Setup

Requirements

* Go programming language >= 1.10 (https://golang.org/)
* `dep` Go package manager (https://github.com/golang/dep)

Installation

* `dep ensure -v`

Run Locally

* `go run local/main.go`

#### Deployment

Requirements

* AWS CLI (https://aws.amazon.com/cli/) - configured with API keys.
* Hosted on AWS Lambda and access through AWS API Gateway.
* Deployment handled by the `serverless` framework (https://serverless.com/)
* `yarn install` to setup local version of the framework.
* `make deploy` to deploy the application
  * It will display the remote URLs in the output.
* `make remove` to remove the application

## GUI Features

* Google Map iFrame that mirrors the functionality found on
  https://maps.google.com
* Latitude & Longitude number inputs. These manually move the centre of the map
  to the desired coordinate.
* "Calculate Area" button that performs a HTTP POST request to one of the
  backend services.
* Can either use the map controls or the input to control the map.
* The centre square is automatically drawn at a 1km^2 area around the centre of
  the map.

## User Interface

* Running the backend locally vs remotely.
  * Different endpoints.
* Frontend interface.

## Internal Testing

* Introduction to unit tests involved in both the frontend and backend
  applications.
* Frontend tests:
  * `yarn test`
* Backend tests:
  * `go test ./...`

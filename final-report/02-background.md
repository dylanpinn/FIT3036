## Background

## Project Info

Main project risks (probability)

* Cannot find appropriate road data for calculations. (medium)
* Cannot access data from OpenStreetMap API. (low)
* Google Maps off-line. (low)
* Problems with infrastructure. (low)
* Completing the project on time (medium)

Risk reduction strategies

* Research sources for street data from various sources. Google Maps did not
  provide enough data to be useful. OpenStreetMap provided data and API to
  access data.
* Planning out the project; working on it piece by piece so that not having to
  complete it all at the last minute.

Risks actually encountered

* Finding data sources.
* Finding time to complete the project while working full time and completing
  assessments for other subjects.

## Resource Requirements

### Hardware

We have decided to use as much Software as a Service (SaaS), Platform as a
Service (PaaS) and Infrastructure as a Service (IaaS) solutions to keep costs
down.

Amazon Web Services (AWS) has been chosen to use due to its comprehensive free
tier and prior experience with the platform. The following AWS services are
going to be utilised:

* AWS Lambda — Functions as service; allows running back-end code without
  maintaining server infrastructure (AWS, 2018a).
* AWS APIGateway — Allows creating public API endpoints for Lambda functions
  (AWS, 2018b).
* AWS S3 — Cheap scalable storage to store front-end code (AWS, 2018c).
* AWS Cloudfront — CDN for front-end code. Speeds up delivery by caching content
  (AWS, 2018d).
* AWS Cloudformation — Service to provision services on AWS (AWS, 2018e)

We are going to use continuous integration and continuous deployment using
Travis CI which offers free plans for Open Source software (CI, 2018). This
allows us to use the latest devops practices to automate running tests and
deploying the latest tested code.

### Software

The following is an outline of the software required for the project:

* Local development environment — Code editor, IDE, terminal, etc.
* NodeJS — Required to build front-end code.
* Go Programming Language — Required to build back-end code.
* LATEX — Required to build documentation.
* NodeJS - Required to build presentation.

## Tasks

* Project Plan
* Project
  * Front End
  * Back End
* Presentation
* Final Report
* Test Plan
* Workbook

<!-- TODO: Add Gantt chart. -->

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
    ['-highway'!='path']
    (-36.95687426637871,145.13076760784406,-36.93890796069632,145.1532484622462);
    way['highway']['highway'!='footway']['highway'!='pedestrian']
    ['-highway'!='path']
    (-36.95687426637871,145.13076760784406,-36.93890796069632,145.1532484622462);
    relation['highway']['highway'!='footway']['highway'!='pedestrian']
    ['-highway'!='path']
    (-36.95687426637871,145.13076760784406,-36.93890796069632,145.1532484622462);
    );
    out body;
  >;
out skel qt;
```

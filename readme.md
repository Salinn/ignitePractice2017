
Maps

-add map packages @mapbox/polyline and react-native-maps

-import libraries into the component you want

-add API key to manifest--> <meta-data
                                            android:name="com.google.android.geo.API_KEY"
                                            android:value="AIzaSyAUesAYa1f8yqY4OuCq33CjBJUNBWp15r8"/>

-add MapView to render where the map should be displayed

-Add Google Map API call from https://medium.com/@ali_oguzhan/react-native-maps-with-google-directions-api-bc716ed7a366

-add in fitToMarkers
        - I want to call onMapReady in new MapView

- for marker styles can play with color. will want to get icon though


- in Actions, call the polyline calculation: use start and end location objects (transform at start of function using startlocation= start.lat)


- in acions, we will also call the region, start and end lcoations, and send the polyline for the directions

- component is where i set up the MapView, set the poitns on the map, and draw the polyline

- in reducer, call the Trip Success action

- in container, i will have the render function, calling the state of the components

- make sure that all things have pieces in reducer
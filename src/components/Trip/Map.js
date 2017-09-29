//React
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Components
import MapView, { PROVIDER_GOOGLE }  from 'react-native-maps';
import Polyline from '@mapbox/polyline';


const width=600;
const height=100;
const ASPECT_RATIO = width / height;
const LATITUDE = 43.085374;
const LONGITUDE = -70.795421;
const LATITUDE_DELTA = 0.5;
const SPACE=.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Map = () => {
    const region = {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }

    const points = [43.046569,-71.467996];




    return (
        <View>
            <MapView
                ref={(ref) => { this.mapRef = ref; }}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={false}
                initialRegion={region}
                onLayout={() => this.mapRef.fitToCoordinates(points, { edgePadding: { top: 50, right: 10, bottom: 10, left: 10 }, animated: false })} >

            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        width: 450,
        height: 200,
    },
});

export default Map

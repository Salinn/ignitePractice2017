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
const LATITUDE_DELTA = 0.0922;
const SPACE=.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Map = () => {
    const region = {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }

    return (
        <View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={false}
                initialRegion={region}>
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

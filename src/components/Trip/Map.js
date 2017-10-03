//React
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//Components
import MapView, { PROVIDER_GOOGLE }  from 'react-native-maps';
import Polyline from '@mapbox/polyline';




const Map = ({ trip }) => {



    return (
        <View>
            <MapView
                ref={(ref) => { mapRef = ref; }}
                provider={PROVIDER_GOOGLE}
                style={styles.mapstyle}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={false}
                initialRegion={trip.region}
                >
            <MapView.Marker
                title={"Test 1" }
                coordinate={trip.startLocation}
                pinColor = "blue"
                />
            <MapView.Marker
                title={"Test 2" }
                coordinate={trip.endLocation}
                />

                    <MapView.Polyline
              coordinates={trip.coordinates}
              strokeWidth={4}
              strokeColor="blue"/>


            </MapView>
            <MapView

            onMapReady ={() => mapRef.fitToCoordinates([trip.startLocation,trip.endLocation], { edgePadding: { top: 100, right: 100, bottom: 100, left: 100 }, animated: false })}>
            </MapView>

        </View>
    );
};

const styles = StyleSheet.create({
    mapstyle: {
        width: 450,
        height: 600,
    },
            container: {
            ...StyleSheet.absoluteFillObject,
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
            map: {
            ...StyleSheet.absoluteFillObject,
        },
            bubble: {
            backgroundColor: 'rgba(255,255,255,0.7)',
            paddingHorizontal: 18,
            paddingVertical: 12,
            borderRadius: 20,
        },
            button: {
            marginTop: 12,
            paddingHorizontal: 12,
            alignItems: 'center',
            marginHorizontal: 10,
        },
            buttonContainer: {
            marginVertical: 40,
            backgroundColor: 'transparent',
        },
});

export default Map

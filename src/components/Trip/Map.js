//React
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//Components
import MapView, { PROVIDER_GOOGLE }  from 'react-native-maps';
import Polyline from '@mapbox/polyline';




const Map = ({ region }) => {

    const point1 = {
        latitude:43.085374,
        longitude:-70.795421,
    };
    const point2 = {
        latitude:43.063417,
        longitude:-70.791046,
    };

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
                initialRegion={region}
                >
            <MapView.Marker
                title={"Test 1" }
                coordinate={point1}
                />
            <MapView.Marker
                title={"Test 2" }
                coordinate={point2}
                />
            

            </MapView>
            <MapView

            onMapReady ={() => mapRef.fitToCoordinates([point1,point2], { edgePadding: { top: 100, right: 5, bottom: 100, left: 5 }, animated: false })}>

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

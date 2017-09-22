//React
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Components
import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';

const Map = ({ trip }) => {

    return (
        <View>
            <MapView
                provider={this.props.provider}
                style={styles.map}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={false}
                initialRegion={this.state.region}
            >
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
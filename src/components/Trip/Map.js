//React
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Components
import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';

const Map = ({ trip }) => {

    return (
        <View>
            <Text>
                { trip.name }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Map
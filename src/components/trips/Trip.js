//React
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Components
import Map from '../Trip/Map';

const Trip = ({ trip }) => {

    return (
        <View>
            <Text>
                { trip.name }
            </Text>
            <Map />
        </View>
    );
};

const styles = StyleSheet.create({});

export default Trip
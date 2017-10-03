//React
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Components
import Map from './Map';

const Trip = ({ trip }) => {
    return (
        <View>
            <Map trip={trip} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default Trip
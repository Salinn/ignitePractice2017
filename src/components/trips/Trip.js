//React
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Components

const Trip = ({ trip }) => {

    return (
        <View>
            <Text>
                { trip.name }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Trip
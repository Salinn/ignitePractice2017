//React
import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
//Components
import Trip from './Trip';

const Trips = ({ trips, onPress }) => {
    const _keyExtractor = (item, index) => item.id;

    const _renderItem = ({ item }) => (
        <Trip trip={ item } onPress={ onPress } />
    );

    return (
        <FlatList data={ trips }
                  renderItem={ _renderItem }
                  keyExtractor={ _keyExtractor } />
    );
};

const styles = StyleSheet.create({});

export default Trips
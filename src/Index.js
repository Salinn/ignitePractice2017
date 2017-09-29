//React
import React, { Component } from 'react';
//Routing
import TripScreen from './container/TripScreen';
//Redux
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

const store = configureStore();

export default class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <TripScreen />
            </Provider>
        );
    }
}

import { combineReducers } from 'redux';
import trips from './TripsReducer';
import map from './TripReducer';

const rootReducer = combineReducers({
    trips,
    map,
});

export default rootReducer;
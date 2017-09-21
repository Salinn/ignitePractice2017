import { combineReducers } from 'redux';
import trips from './TripsReducer';
import trip from './TripReducer';

const rootReducer = combineReducers({
    trips,
    trip,
});

export default rootReducer;
import { combineReducers } from 'redux';
import trips from './TripsReducer';

const rootReducer = combineReducers({
    trips,
});

export default rootReducer;
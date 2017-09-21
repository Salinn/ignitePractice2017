import * as types from '../actions/types'
import initialState from './initialState';

export default function tripsReducer(state = initialState.trips, action) {
    switch (action.type) {
        case types.FETCH_TRIPS_SUCCESS:
            return { ...state, lastMonthsTrips: action.trips };
        default:
            return state;
    }
}
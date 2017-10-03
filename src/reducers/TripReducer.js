import * as types from '../actions/types'
import initialState from './initialState';

export default function tripReducer(state = initialState.trip, action) {
    switch (action.type) {
        case types.FETCH_TRIP_SUCCESS:
            return { ...state, region: action.region };
        case types.FETCH_POLYLINE_SUCCESS:
            return{...state, coordinates:action.coordinates};
        case types.FETCH_START_SUCCESS:
            return{...state, startLocation:action.startLocation};
        case types.FETCH_END_SUCCESS:
            return{...state, endLocation:action.endLocation};
        default:
            return state;
    }
}


import * as types from '../actions/types'
import initialState from './initialState';

export default function tripReducer(state = initialState.trip, action) {
    switch (action.type) {
        case types.FETCH_TRIP_SUCCESS:
            return { ...state, region: action.region };
        default:
            return state;
    }
}
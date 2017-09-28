import * as types from '../actions/types'
import initialState from './initialState';

export default function tripReducer(state = initialState.map, action) {
    switch (action.type) {
        case types.FETCH_TRIP_SUCCESS:
            return { ...state, tripStart: action.map, tripEnd:action.map };

        default:
            return state;
    }
}
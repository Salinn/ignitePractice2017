import * as types from './types'
// import * as TripsApi from '../..util/api/TripsApi';

export const fetchMap = ({ user_id }) => async dispatch => {
    try {
        // let payload = await TripsApi.getTrips({ user_id });
        dispatch(fetchMapSuccess({ map: region }))
    } catch(error) {
        console.log(error);
    }
};

export const fetchMapSuccess = ({ map }) => {
    return { type: types.FETCH_TRIP_SUCCESS, map }
};

const region = {
    latitude: 43.085374,
    longitude: -70.795421,
    latitudeDelta: 0.0922,

};
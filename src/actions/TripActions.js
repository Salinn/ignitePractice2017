import * as types from './types'
// import * as TripsApi from '../..util/api/TripsApi';

export const fetchTrip = ({ user_id }) => async dispatch => {
    try {
        // let payload = await TripsApi.getTrips({ user_id });
        const region =  trips[Math.floor(Math.random()*trips.length)];
        dispatch(fetchMapSuccess({ region }))
    } catch(error) {
        console.log(error);
    }
};

export const fetchMapSuccess = ({ region }) => {
    return { type: types.FETCH_TRIP_SUCCESS, region }
};


const a_region = {
    latitude: 43.085374,
    longitude: -70.795421,
    latitudeDelta: 0.0922,
    longitudeDelta: 6 * 0.1
};

const c_region = {
    latitude: 45.085374,
    longitude: -72.795421,
    latitudeDelta: 0.0922,
    longitudeDelta: 6 * 0.1
};

const b_region = {
    latitude: 33.085374,
    longitude: -60.795421,
    latitudeDelta: 0.0922,
    longitudeDelta: 6 * 0.1
};

const trips = [
    a_region,
    b_region,
    c_region
];
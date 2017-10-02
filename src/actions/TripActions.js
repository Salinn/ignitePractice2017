import * as types from './types'
// import * as TripsApi from '../..util/api/TripsApi';
import Polyline from '@mapbox/polyline';

export const fetchTrip = ({ user_id }) => async dispatch => {
    try {
        // let payload = await TripsApi.getTrips({ user_id });
        // const region =  trips[Math.floor(Math.random()*trips.length)];
       // let payload = TripAPI.fetchTrip({ tripId })
        dispatch(fetchMapSuccess({ region }))
        dispatch(fetchPolyFillLine({ startLocation, endLocation}))
    } catch(error) {
        console.log(error);
    }
};

export const fetchPolyFillLine = ({ startLocation, endLocation }) => async dispatch => {
    try {

        let resp = fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLocation }&destination=${ endLocation }`);
        let respJson = await resp.json();
        let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
        let coordinates = points.map((point, index) => {
            return {
                latitude: point[0],
                longitude: point[1]
            }
        });

        dispatch(fetchPolyFillLineSuccess({ coordinates }))
    } catch(error) {
        console.log(error);
    }
};

export const fetchMapSuccess = ({ region }) => {
    return { type: types.FETCH_TRIP_SUCCESS, region }

};

export const fetchPolyFillLineSuccess  = ({ coordinates }) => {
    return { type: types.FETCH_POLYLINE_SUCCESS, coordinates }

};



//old code



const region = {
    latitude: 43.085374,
    longitude: -70.795421,
    latitudeDelta: 0.01,
    longitudeDelta: 6 * 0.1
};


const startLocation = {
    latitude:43.085374,
    longitude:-70.795421,
};
const endLocation = {
    latitude:43.063417,
    longitude:-70.791046,
};


const c_region = {
    latitude: 42.938767,
    longitude: -72.281986,
    latitudeDelta: 0.01,
    longitudeDelta: 6 * 0.1
};

const b_region = {
    latitude: 40.784879,
    longitude: -75.657700,
    latitudeDelta: 0.0922,
    longitudeDelta: 6 * 0.1
};

const trips = [
    //a_region,
    b_region,
    c_region
];


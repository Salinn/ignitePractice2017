import * as types from './types'
// import * as TripsApi from '../..util/api/TripsApi';
import Polyline from '@mapbox/polyline';






//old code

export const fetchTrip = ({ user_id }) => async dispatch => {
    try {
        // let payload = await TripsApi.getTrips({ user_id });
        // const region =  trips[Math.floor(Math.random()*trips.length)];
        dispatch(fetchMapSuccess({ region }))
        dispatch(Directions({ line }))
    } catch(error) {
        console.log(error);
    }
};

export const fetchMapSuccess = ({ region }) => {
    return { type: types.FETCH_TRIP_SUCCESS, region }

};

export const fetchPolyline = ({ user_id }) => async dispatch => {
    try {
        // let payload = await TripsApi.getTrips({ user_id });
        // const region =  trips[Math.floor(Math.random()*trips.length)];
        dispatch(fetchMapSuccess({ region }))
        dispatch(fetchPolyline({ line }))
    } catch(error) {
        console.log(error);
    }
};


async function getDirections() {
    let resp = fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ point1 }&destination=${ point2 }`);
    let respJson = await resp.json();
    let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
    let coords = points.map((point, index) => {
        return {
            latitude: point[0],
            longitude: point[1]
        }
    });
    this.setState({coords: coords})
    return coords;
}



const region = {
    latitude: 43.085374,
    longitude: -70.795421,
    latitudeDelta: 0.01,
    longitudeDelta: 6 * 0.1
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
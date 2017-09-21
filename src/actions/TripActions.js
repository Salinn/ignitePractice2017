import * as types from './types'
// import * as TripsApi from '../..util/api/TripsApi';

export const fetchTrips = ({ user_id }) => async dispatch => {
    try {
        // let payload = await TripsApi.getTrips({ user_id });
        dispatch(fetchTripsSuccess({ trips: payload.data.trips }))
    } catch(error) {
        console.log(error);
    }
};

export const fetchTripsSuccess = ({ trips }) => {
    return { type: types.FETCH_TRIPS_SUCCESS, trips }
};

const payload = {
    data: {
        trips: [
            { id: 1, name: 'Grocery Shopping' },
            { id: 2, name: 'Gas' },
            { id: 3, name: 'Corys House' },
            { id: 4, name: 'Parents House' },
            { id: 5, name: 'Grocery Shopping' },
            { id: 6, name: 'Gas' },
            { id: 7, name: 'Mount Major' },
            { id: 8, name: 'Gas' },
            { id: 9, name: 'Things for real' },
            { id: 10, name: 'Gas' },
        ]
    }
};
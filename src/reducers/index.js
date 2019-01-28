import { combineReducers } from 'redux';
import {
    roomsInitialState,
    roomsActionTypes
} from './../constants';

export const reducerGenerator = (apiRequestAction, setAction, initialState) => (state = initialState, { type, payload }) => {
    switch(type) {
        case apiRequestAction:
            return {
                ...state,
                loading: true,
            }
        case setAction:
            return {
                ...state,
                loading: false,
                ...payload,
            }
        default:
            return state
    }
};

export default combineReducers({
    rooms: reducerGenerator(
        roomsActionTypes.getRooms,
        roomsActionTypes.setRooms,
        roomsInitialState,
    ),
})
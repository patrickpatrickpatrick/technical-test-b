import { roomsActionTypes } from './../constants';

const setActionCreator = (type, payload = {}) => ({
    type,
    payload,
})

export const setRoomsAction = payload => setActionCreator(roomsActionTypes.setRooms, payload);
export const getRoomsAction = payload => setActionCreator(roomsActionTypes.getRooms, payload);
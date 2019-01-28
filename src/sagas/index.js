import { put, call, all, take } from 'redux-saga/effects';
import { apiRequest } from './../utils';
import { roomsActionTypes } from './../constants';
import { setRoomsAction } from './../actions';

const apiUrl = `https://api.spork.digital/test/`

export function* fetchRooms(params = {}) {    
    const apiRequestOutcome = yield call(
        apiRequest,
        apiUrl,
        ``,
        params,
    )

    yield put(setRoomsAction(apiRequestOutcome));
}

export function* resourceRequestWatcher() {
    while(true) {
        const getRoomsRequest = yield take(roomsActionTypes.getRooms);
        yield call(fetchRooms, getRoomsRequest.payload);
    }
};

export default function* rootSaga() {
   yield all([
        resourceRequestWatcher(),
   ]);
}
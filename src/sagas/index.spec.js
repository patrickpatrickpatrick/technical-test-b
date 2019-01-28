import * as utils from './../utils';
import { runSaga } from 'redux-saga';
import {
    fetchRooms,
    resourceRequestWatcher,
} from './index.js';
import {
    getRoomsAction,
} from './../actions';
import {
    roomsActionTypes
} from './../constants';
import { 
    call,
} from 'redux-saga/effects';

jest.mock('./../utils');

const userResp = {data: [{name: '123'}]};

describe('saga', () => {
   it('fetches rooms on fetch room action dispatch', async () => {
        const resourceRequestSaga = resourceRequestWatcher();
        utils.apiRequest.mockResolvedValue(userResp);
        resourceRequestSaga.next();

        expect(
            resourceRequestSaga.next(
                getRoomsAction()
            ).value
        ).toEqual(
            call(fetchRooms, {})
        );    
    });

    it('sets the result of api for fetching rooms', async () => {
        const dispatched = [];
        utils.apiRequest.mockResolvedValue(userResp);

        const saga = await runSaga({
            dispatch: (action) => dispatched.push(action),
            getState: () => ({}),
        }, fetchRooms).done;

        expect(dispatched).toEqual([
            {
                "payload": {
                    "data": [
                        {
                            "name": "123"
                        }
                    ]
                },
                "type": roomsActionTypes.setRooms,
            }    
        ]);
    });
});
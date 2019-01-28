export const roomsInitialState = {
    page: 0,
    status: null,
    date: null,
    resultsPerPage: 0,
    title: '',
    numberOfResults: 0,
    results: [],
    loading: false,    
}

export const roomsActionTypes = {
    getRooms: `GET_ROOMS`,
    setRooms: `SET_ROOMS`,
}


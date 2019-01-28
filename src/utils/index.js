export const noop = x => {}; // for defaults that require functions for testing

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }

    return response;
}

export const apiRequest = (apiUrl, endpoint, params = {}, config = {}) => {
    const url = new URL(`
        ${apiUrl}${endpoint}
    `);
    url.search = new URLSearchParams(params);
    
    return fetch(
        url,
        config
    ).then(
        handleErrors
    ).then(
        response => response.json()
    ).then(
        response => response
    ).catch(
        error => error
    );
};
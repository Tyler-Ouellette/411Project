fetch(get, 'http://localhost:5000/api/auth', config);

global.fetch = require('jest-fetch-mock');

const config = {
    headers: {
        'X-Auth-Token': process.env.XAuthToken,
    },
};

test('Get Auth User', () => {
    fetch.mockResponseOnce(JSON.stringify({
        user: {
            'X-Auth-Token': `${process.env.XAuthToken}`
        }
    }));
    
    https://documenter.getpostman.com/preview/10827403-f5c28f78-9415-4ec7-9fd8-7da385082577?versionTag=latest&apiName=CURRENT&version=latest&top-bar=ffffff&right-sidebar=303030&highlight=ef5b25
}))
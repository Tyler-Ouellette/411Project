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
    
    
}))
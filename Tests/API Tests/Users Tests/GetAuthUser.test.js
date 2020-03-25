global.fetch = require('jest-fetch-mock');
test('Get Auth User', () => {
    // fetch(get, 'http://localhost:5000/api/auth', config);
    fetch.mockResponseOnce(
        JSON.stringify({
            user: {
                'X-Auth-Token': `${process.env.XAuthToken}`,
            },
        })
    );
});

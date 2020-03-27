global.fetch = require('jest-fetch-mock');
test('Get All Posts', () => {
    const config = {
        headers: {
            'X-Auth-Token': process.env.XAuthToken,
        },
    };
    // fetch(get, 'http://localhost:5000/api/posts', config);
    fetch.mockResponseOnce(
        JSON.stringify({
            token: process.env.XAuthToken,
        })
    );
});

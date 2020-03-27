global.fetch = require('jest-fetch-mock');
test('Delete User', () => {
    const config = {
        headers: {
            'X-Auth-Token': process.env.XAuthToken,
        },
    };
    // fetch(delete, 'http://localhost:5000/api/profile', config);
    fetch.mockResponseOnce(
        JSON.stringify({
            msg: 'User deleted',
        })
    );
});

global.fetch = require('jest-fetch-mock');
test('Login User', () => {
    const config = {
        headers: {
            'Content-type': 'application/json',
        },
        body: {
            email: 'test@hotmail.com',
            password: '123456',
        },
    };
    // fetch(post, 'http://localhost:5000/api/auth', config);
    fetch.mockResponseOnce(
        JSON.stringify({
            token: process.env.XAuthToken,
        })
    );
});

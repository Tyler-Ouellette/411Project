global.fetch = require('jest-fetch-mock');
test('Register User', () => {
    const config = {
        headers: {
            'Content-type': 'application/json',
        },
        body: {
            name: 'Test',
            email: 'test@hotmail.com',
            password: '123456',
        },
    };

    // fetch(post, 'http://localhost:5000/api/users', config);
    fetch.mockResponseOnce(
        JSON.stringify({
            token: process.env.XAuthToken,
        })
    );
});

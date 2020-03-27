global.fetch = require('jest-fetch-mock');
test('Comment On a Post', () => {
    const config = {
        headers: {
            'Content-type': 'application/json',
            'X-Auth-Token': process.env.XAuthToken,
        },
        body: {
            text: 'Hi',
        },
    };
    // fetch(post, 'http://localhost:5000/api/posts/comment/5e6cc50bee541d6eb9a7c0ce', config);
    fetch.mockResponseOnce(
        JSON.stringify({
            token: process.env.XAuthToken,
        })
    );
});

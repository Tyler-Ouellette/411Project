global.fetch = require('jest-fetch-mock');
test('Delete Post', () => {
    const config = {
        headers: {
            'X-Auth-Token': process.env.XAuthToken,
        },
    };
    // fetch(delete, 'http://localhost:5000/api/posts/5e6cc4ffee541d6eb9a7c0cd', config);
    fetch.mockResponseOnce(
        JSON.stringify({
            msg: 'Post removed',
        })
    );
});

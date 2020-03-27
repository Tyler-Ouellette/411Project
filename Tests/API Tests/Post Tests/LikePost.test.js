global.fetch = require('jest-fetch-mock');
test('Delete Comment', () => {
    const config = {
        headers: {
            'X-Auth-Token': process.env.XAuthToken,
        },
    };
    // fetch(put, 'http://localhost:5000/api/posts/like/5e6cc50bee541d6eb9a7c0ce', config);
    fetch.mockResponseOnce(
        JSON.stringify([
            {
                _id: '5e797821d690b101ba9884ee',
                user: '5e693c4a9198b054301d435b',
            },
        ])
    );
});

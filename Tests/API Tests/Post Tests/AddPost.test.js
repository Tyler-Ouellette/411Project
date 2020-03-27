global.fetch = require('jest-fetch-mock');
test('Add Post', () => {
    const config = {
        headers: {
            'Content-type': 'application/json',
            'X-Auth-Token': process.env.XAuthToken,
        },
        body: {
            text: 'THIS IS A DEV TEST TEST POST',
        },
    };
    // fetch(post, 'http://localhost:5000/api/posts', config);
    fetch.mockResponseOnce(
        JSON.stringify({
            _id: '5e79768ed690b101ba9884ec',
            text: 'THIS IS A DEV TEST TEST POST',
            name: 'Test',
            avatar: '//www.gravatar.com/avatar/8d89c3087cc6cb98793ab7c0f5658c56?s=200&r=pg&d=mm',
            user: '5e693c4a9198b054301d435b',
            likes: [],
            comments: [],
            date: '2020-03-24T02:55:10.589Z',
            __v: 0,
        })
    );
});

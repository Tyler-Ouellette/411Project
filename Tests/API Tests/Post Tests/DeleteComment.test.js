global.fetch = require('jest-fetch-mock');
test('Delete Comment', () => {
    const config = {
        headers: {
            'X-Auth-Token': process.env.XAuthToken,
        },
    };
    // fetch(delete, 'https://localhost:5000/api/posts/comment/5e6cc50bee541d6eb9a7c0ce/5e6d1a392a15d1bc33192d72', config);
    fetch.mockResponseOnce(
        JSON.stringify([
            {
                date: '2020-03-24T03:06:21.636Z',
                _id: '5e79792dd690b101ba9884f0',
                text: "'; Select * from users;",
                name: 'Test',
                avatar: '//www.gravatar.com/avatar/8d89c3087cc6cb98793ab7c0f5658c56?s=200&r=pg&d=mm',
                user: '5e693c4a9198b054301d435b',
            },
            {
                date: '2020-03-24T03:05:01.727Z',
                _id: '5e7978ddd690b101ba9884ef',
                text: 'Hi',
                name: 'Test',
                avatar: '//www.gravatar.com/avatar/8d89c3087cc6cb98793ab7c0f5658c56?s=200&r=pg&d=mm',
                user: '5e693c4a9198b054301d435b',
            },
            {
                date: '2020-03-14T17:55:06.578Z',
                _id: '5e6d1a7a2a15d1bc33192d77',
                text: 'DEV DEV',
                name: 'Test',
                avatar: '//www.gravatar.com/avatar/8d89c3087cc6cb98793ab7c0f5658c56?s=200&r=pg&d=mm',
                user: '5e693c4a9198b054301d435b',
            },
            {
                date: '2020-03-14T17:54:58.965Z',
                _id: '5e6d1a722a15d1bc33192d76',
                text: 'THIS IS A TEST',
                name: 'Test',
                avatar: '//www.gravatar.com/avatar/8d89c3087cc6cb98793ab7c0f5658c56?s=200&r=pg&d=mm',
                user: '5e693c4a9198b054301d435b',
            },
            {
                date: '2020-03-14T17:54:17.854Z',
                _id: '5e6d1a492a15d1bc33192d75',
                text: 'Hi',
                name: 'Tyler Ouellette',
                avatar: '//www.gravatar.com/avatar/8c60865f13d2096b73435dc490edde38?s=200&r=pg&d=mm',
                user: '5e693895237a8552b639a798',
            },
            {
                date: '2020-03-14T17:54:11.430Z',
                _id: '5e6d1a432a15d1bc33192d73',
                text: 'DELETE ME',
                name: 'Tyler Ouellette',
                avatar: '//www.gravatar.com/avatar/8c60865f13d2096b73435dc490edde38?s=200&r=pg&d=mm',
                user: '5e693895237a8552b639a798',
            },
        ])
    );
});

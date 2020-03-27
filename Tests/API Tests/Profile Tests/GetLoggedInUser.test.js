global.fetch = require('jest-fetch-mock');
test('Get Logged In User', () => {
    const config = {
        headers: {
            'X-Auth-Token': process.env.XAuthToken,
        },
    };

    // fetch(post, 'http://localhost:5000/api/users', config);
    fetch.mockResponseOnce(
        JSON.stringify({
            skills: ['HTML', 'CSS'],
            _id: '5e6a4ae31a74d1192a2bc731',
            user: {
                _id: '5e693c4a9198b054301d435b',
                name: 'Test',
                avatar: '//www.gravatar.com/avatar/8d89c3087cc6cb98793ab7c0f5658c56?s=200&r=pg&d=mm',
            },
            __v: 20,
            status: 'Web Developer',
            company: 'TEST',
            bio: 'TEST',
            location: 'TEST',
            website: 'https://test.com',
            date: '2020-03-12T15:10:20.242Z',
            education: [
                {
                    current: false,
                    _id: '5e6cc250ee541d6eb9a7c0c8',
                    school: 'TESTER ACCOUNT',
                    degree: 'DEV TEST',
                    fieldofstudy: 'TEST',
                    from: '2010-08-02T04:00:00.000Z',
                    to: '2020-03-04T05:00:00.000Z',
                    description: 'TEST',
                },
                {
                    current: false,
                    _id: '5e6cc0efee541d6eb9a7c0c2',
                    school: 'University of Windsor',
                    degree: 'Applied Computing For University Graduates',
                    fieldofstudy: 'Comp Sci',
                    from: '2010-08-02T04:00:00.000Z',
                    to: '2020-03-04T05:00:00.000Z',
                    description: 'Got Degree BRUV',
                },
                {
                    current: false,
                    _id: '5e6cc054ee541d6eb9a7c0c1',
                    school: 'TESTER ACCOUNT',
                    degree: 'DEV TEST',
                    fieldofstudy: 'TEST',
                    from: '2010-08-02T04:00:00.000Z',
                    to: '2020-03-04T05:00:00.000Z',
                    description: 'TEST',
                },
                {
                    current: false,
                    _id: '5e6cc03eee541d6eb9a7c0c0',
                    school: 'TESTER ACCOUNT',
                    degree: 'DEV TEST',
                    fieldofstudy: 'TEST',
                    from: '2010-08-02T04:00:00.000Z',
                    to: '2020-03-04T05:00:00.000Z',
                    description: 'TEST',
                },
            ],
            experience: [
                {
                    current: true,
                    _id: '5e6cbef5ee541d6eb9a7c0be',
                    title: 'TEST2222',
                    company: 'TESTTEST',
                    location: 'Windsor, ON',
                    from: '2020-09-03T04:00:00.000Z',
                    description: 'TEST',
                },
                {
                    current: true,
                    _id: '5e6cbeeaee541d6eb9a7c0bd',
                    title: 'TEST',
                    company: 'TESTTEST',
                    location: 'Windsor, ON',
                    from: '2020-09-03T04:00:00.000Z',
                    description: 'TEST',
                },
            ],
        })
    );
});

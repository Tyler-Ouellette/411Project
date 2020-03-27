global.fetch = require('jest-fetch-mock');
test('Delete Education', () => {
    const config = {
        headers: {
            'X-Auth-Token': process.env.XAuthToken,
        },
    };
    //fetch(delete, 'localhost:5000/api/profile/education/5e6cc0efee541d6eb9a7c0c2', config);
    fetch.mockResponseOnce(
        JSON.stringify({
            skills: ['HTML', 'CSS'],
            _id: '5e6a4ae31a74d1192a2bc731',
            user: '5e693c4a9198b054301d435b',
            __v: 23,
            status: 'Web Developer',
            company: 'TEST',
            bio: 'TEST',
            location: 'TEST',
            website: 'https://test.com',
            date: '2020-03-12T15:10:20.242Z',
            education: [
                {
                    current: false,
                    _id: '5e79750ad690b101ba9884eb',
                    school: 'TESTER ACCOUNT',
                    degree: 'DEV TEST',
                    fieldofstudy: 'TEST',
                    from: '2010-08-02T04:00:00.000Z',
                    to: '2020-03-04T05:00:00.000Z',
                    description: 'TEST',
                },
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
                    _id: '5e7974a7d690b101ba9884ea',
                    title: 'Full Stack Web Dev',
                    company: 'Halight Inc.',
                    location: 'Windsor, ON',
                    from: '2020-09-03T04:00:00.000Z',
                    description: 'Student Loves Learning',
                },
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

//localhost:5000/api/profile/education
PUT

const config = {
    headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': process.env.XAuthToken,
    },
    body: {
        school: 'TESTER ACCOUNT',
        degree: 'DEV TEST',
        fieldofstudy: 'TEST',
        from: '8-2-2010',
        to: '3-4-2020',
        description: 'TEST',
    },
};

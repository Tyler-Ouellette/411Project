
PUT//localhost:5000/api/profile/experience


const config = {
    headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': process.env.XAuthToken,
    },
    body: {
        title: 'Full Stack Web Dev',
        company: 'Halight Inc.',
        location: 'Windsor, ON',
        from: '2020-09-03T04:00:00.000Z',
        current: 'true',
        description: 'Student Loves Learning',
    },
};

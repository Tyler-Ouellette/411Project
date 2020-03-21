DELETE http://localhost:5000/api/profile/education/5e6cc0efee541d6eb9a7c0c2


const config = {
    headers: {
        'X-Auth-Token': process.env.XAuthToken,
    },
    // body: {
    //     "title": "Full Stack Web Dev",
    //     "company": "Halight Inc.",
    //     "location": "Windsor, ON",
    //     "from": "2020-09-03T04:00:00.000Z",
    //     "current": "true",
    //     "description": "Student Loves Learning"
    // }
};

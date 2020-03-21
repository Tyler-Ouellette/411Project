DELETE --> http://localhost:5000/api/profile

const config = {
    headers: {
        'X-Auth-Token': process.env.XAuthToken,
    },
};
fetch(get,'http://localhost:5000/api/auth', config);

const config = {
    headers: {
        'X-Auth-Token': process.env.XAuthToken,
    },
};

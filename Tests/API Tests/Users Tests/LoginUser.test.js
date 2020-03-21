fetch(post, 'http://localhost:5000/api/auth', config);

const config = {
    headers: {
        'X-Auth-Token': process.env.XAuthToken,
    },
    body: {
        email: 'test@hotmail.com',
        password: '123456',
    },
};

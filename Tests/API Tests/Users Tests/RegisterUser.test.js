POST --> "http://localhost:5000/api/users"

const config = {
    headers: {
        'Content-type': 'application/json',
    },
    body: {
        name: 'Test',
        email: 'test@hotmail.com',
        password: '123456',
    },
};
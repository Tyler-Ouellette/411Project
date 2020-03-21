GET http://localhost:5000/api/posts

const config = {
    headers: {
        'X-Auth-Token': process.env.XAuthToken,
    },
}
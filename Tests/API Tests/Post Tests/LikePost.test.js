PUT http://localhost:5000/api/posts/like/5e6cc50bee541d6eb9a7c0ce

const config = {
    headers: {
        'X-Auth-Token': process.env.XAuthToken,
    },
}
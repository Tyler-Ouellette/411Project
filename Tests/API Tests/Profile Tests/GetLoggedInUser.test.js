GET http://localhost:5000/api/profile/me

const config = {

 headers: {
        'X-Auth-Token': process.env.XAuthToken,
    },
}
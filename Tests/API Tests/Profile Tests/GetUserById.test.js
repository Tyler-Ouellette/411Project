GET http://localhost:5000/api/profile/user/5e693c4a9198b054301d435b

const config = {
    headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': process.env.XAuthToken,
    },
    body: {
        "status": "Web Developer",
        "skills": "HTML"
    }   
};
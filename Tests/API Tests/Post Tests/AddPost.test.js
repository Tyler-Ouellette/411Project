POST http://localhost:5000/api/posts

const config = {
    headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': process.env.XAuthToken,
    },
    body: {
	    "text": "THIS IS A DEV TEST TEST POST"
    }
};
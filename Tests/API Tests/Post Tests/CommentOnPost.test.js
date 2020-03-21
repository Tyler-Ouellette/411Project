POST http://localhost:5000/api/posts/comment/5e6cc50bee541d6eb9a7c0ce


const config = {
    headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': process.env.XAuthToken,
    },
    body :
    {
	    "text": "Hi"
    }
}
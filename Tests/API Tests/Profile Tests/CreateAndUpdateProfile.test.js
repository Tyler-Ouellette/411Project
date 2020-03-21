POST http://localhost:5000/api/profile

const config = {
    headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': process.env.XAuthToken,
    },
    body: {
	"status": "Web Developer",
	"skills": "HTML, CSS",
	"company":"TEST",
	"website":"https://test.com",
	"location":"TEST",
	"bio":"TEST",
	"social": {
		"facebook": "https://facebook.com"
	},
	"experience": [],
	"education": []
	
    }
};
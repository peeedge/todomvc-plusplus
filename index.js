const express = require('express');

let app = express();

app.use((request, response, next) => {
	request.user = { name: 'PJ' };
	next();
});

app.get('/hello', (request, response) => {
	response.send('Hello ${request.user.name}');
});

app.listen(3000);
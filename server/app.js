const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());



app.listen(port, () => {
	console.log(`the server is runing on port ${port}`);
})


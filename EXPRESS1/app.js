const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best content on the internet so far so use it wisely";
    const params = {'title': 'PubG is the best game', "content": con};
    res.status(200).render('index.pug', params);
});

// Set up the server to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

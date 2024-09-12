const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// getting-started mongoose
const mongoose = require('mongoose');
const bodyparser = require('body-parser'); // pore install korechi
const { subscribe } = require("diagnostics_channel");
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/contactDance');
}
//Difine mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    number: String,
    email: String,
    yourself: String
});

const contact = mongoose.model('contact', contactSchema);

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params);
})

app.post('/contact', (req, res) => { // Contact form submit korrar jonno
    var myData = new contact(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("Item was not send to the database")
    })
})

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
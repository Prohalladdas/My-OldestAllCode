// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/poluKart');

    // console.log("WE ARE CONNECTED ")
}

const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function speak() {
    const greeting =  'My name is ' + this.name 
    console.log(greeting);
};

const Kitten = mongoose.model('poluKitty', kittySchema);

async function run() {
    await main();

    const poluKitty = new Kitten({ name: 'PoluKitty' });
    const poluKitty2 = new Kitten({ name: 'PoluKitty2' });
    // console.log(poluKitty.name); // 'PoluKitty'
    // poluKitty.speak();

    // Save the document to the database
    await poluKitty.save();
    await poluKitty2.save();

    // Now, you can speak after saving
    poluKitty.speak();
    poluKitty2.speak();

  
    // const poluKitties = await Kitten.find();
    // console.log(poluKitties);

    const foundPoluKitty2 = await Kitten.findOne({ name: 'PoluKitty2' });
    console.log(foundPoluKitty2);
}

run();


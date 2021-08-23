const { kMaxLength } = require('buffer');
const mongoose = require('mongoose');
// get mongoose to connect to mongoDB
mongoose.connect('mongodb://localhost:27017/person', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection open............");
    })
    .catch(error => {
        console.log("Something went wrong. :(", error);
    })

    const personSchema = new mongoose.Schema({
        first: String,
        last: String
    })

    personSchema.virtual('fullName').get(function() {
        return `${this.first} ${this.last}`
    })

    personSchema.pre('save', async function() {
        console.log('About to Save')
    })

    personSchema.post('save', async function() {
        console.log('Save')
    })

    const Person = mongoose.model('Person', personSchema);
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipsDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(error)
    })

    // user Schema
    const userSchema = new mongoose.Schema({
        first: String,
        last: String,
        addresses: [
            {
                _id: { id: false },
                street: String,
                city: String,
                state: String,
                country: String
            }
        ]
    })

    const User = mongoose.model('User', userSchema);

    // make new user
    const makeUser = async () => {
        const user = new User({first: 'Tom', last: 'Garcia'})
        user.addresses.push({
            street: '332 New Road St',
            city: 'New York',
            state: 'NY',
            country: 'United State'
        })
        const result = await user.save();
        console.log(result);
    }

    const addAddress = async (id) => {
        const user = await User.findById(id);
        user.addresses.push(
            {
                street: '994 3rd St.',
                city: 'New York',
                state: 'NY',
                country: 'United State'
            }
        )
        const res = await user.save()
        console.log(res);
    }

    // makeUser();
    addAddress('612e76ba8b6add746900eaad')

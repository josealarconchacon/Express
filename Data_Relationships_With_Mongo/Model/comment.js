const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipsDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(error)
    })

const userSchema = new Schema({
    username: String,
    age: Number
})

const commentSchema = new Schema({
    text: String,
    likes: Number,
    user:{type: Schema.Types.ObjectId, ref: 'User'}
})

// Model
const User = mongoose.model('User', userSchema);
const Comment = mongoose.model('Comment', commentSchema)

const addComment = async () => {
    const newUser = new User({username: 'quebola', age: 99});
    const f_comment = new Comment({text: 'New Comment', likes: 1000})
    f_comment.newUser = newUser;
    newUser.save();
    f_comment.save();
}
addComment();
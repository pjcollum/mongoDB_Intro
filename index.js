const mongoose = require('mongoose');
const UserSchema = require('./models/user');

mongoose.connect('mongodb+srv://pete:catdogcar@usersignup-zziud.mongodb.net/userdb?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

const user = new UserSchema({
    name: 'David Ward',
    email: 'davidward@hotmail.co.uk',
    password: 'myPassword'
});

//user.save();


UserSchema.find({}, (err, docs) => {
    console.log(docs);
});
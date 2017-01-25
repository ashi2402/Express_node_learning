var mongoose = require('mongoose');
var schema = mongoose.schema;

//create a schema

var mySchema = new schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    admin: Boolean,
    location: String,
    meta: {
        age: Number,
        website: String,
    },
    created_at: Date,
    updated_at: Date
});

// we need to create model for this schema

var User = mongoose.model('User', mySchema);

//make this available to our users in our Node applications
module.exports = User;
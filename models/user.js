var mongoose = require('../config/db');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type:String, unique:true},
    password: String,
    mailid: String,
    firstname: String,
    lastname: String,
    contact: Number,
    address:[
        { street: String,
         city: String,
         pincode: Number,
        country: String
        }
    ]
},
    {collection : 'Employees'});
    userSchema.methods.validPassword = function( password ) {
    // EXAMPLE CODE!
    if (password === this.password){
        return true;
    }
    else {
        return false;
    }
    };

 Employee = mongoose.model('Employee', userSchema);

module.exports = Employee;



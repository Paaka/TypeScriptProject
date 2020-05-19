const mongoose = require('mongoose');

const userSchema = mongoose.schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('Users', userSchema);

module.exports = User;

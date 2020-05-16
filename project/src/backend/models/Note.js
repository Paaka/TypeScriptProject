const mongoose = require('mongoose');

const Note = mongoose.model('notes', {
    boardID: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
});

module.exports = Note;

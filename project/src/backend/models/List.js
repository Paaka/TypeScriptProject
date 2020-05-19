const mongoose = require('mongoose');

const List = mongoose.model('Lists', {
    listTitle: {
        type: String,
        required: true,
        trim: true,
    },
    dashboardID: {
        type: String,
        required: true,
    },
});

module.exports = List;

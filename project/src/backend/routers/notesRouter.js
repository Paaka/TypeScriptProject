const express = require('express');
const Note = require('../models/Note');

const router = new express.Router();

router.post('/notes', async (req, res) => {
    const newNote = new Note(req.body);

    try {
        await newNote.save();
        res.send(newNote);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;

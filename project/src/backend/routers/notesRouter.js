const express = require('express');
const Note = require('../models/Note');
const List = require('../models/List');

const router = new express.Router();

router.post('/notes', async (req, res) => {
    const newList = new List(req.body);
    try {
        await newList.save();
        res.send(newList);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/notes', async (req, res) => {
    try {
        const allNotes = await Note.find({});
        res.send('hi');
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;

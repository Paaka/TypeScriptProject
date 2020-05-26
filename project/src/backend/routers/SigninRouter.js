const express = require('express');
const User = require('../models/User');

const router = new express.Router();

router.post('/SignIn', async (req, res) => {
    const newUser = new User(req.body);

    try {
        await newUser.save();

        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;

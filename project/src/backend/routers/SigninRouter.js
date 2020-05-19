const express = require('express');

const router = new express.Router();

router.post('/SignIn', async (req, res) => {
    res.send('Logogowanie');
});

module.exports = router;

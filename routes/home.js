const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});
router.get('/1', (req, res) => {
    res.render('product');
});
module.exports = router;
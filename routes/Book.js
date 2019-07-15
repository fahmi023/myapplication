const express = require('express');

const BookController = require('../controllers/Book');

const router = express.Router();

router.post('/create', BookController.postCreate);

router.post('/update', BookController.postUpdate);

router.post('/destroy', BookController.postDestroy);


module.exports = router
const express = require('express');
const router = express.Router();
const generateShortUrl=require('../controllers/shortUrl.js')

router.post('/',generateShortUrl);

module.exports= router;
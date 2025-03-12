const express = require('express');
const router = express.Router();
const {generateShortUrl,viewURL,createShortId}=require('../controllers/shortUrl.js')


router.post('/',generateShortUrl);
router.get('/',viewURL);
router.get('/:shortid',createShortId);
module.exports= router;
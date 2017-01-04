var express = require('express');
var router = express.Router();
var shortURL = require('../shortURL.js').shortURL;
var config = require('../config.js').config;
/*
@params url
*/
router.post('/url', function (req, res) {
    try {
        var sURL = shortURL.getShortURL(req.body.url);
        res.json({ success: true, data: { url: config.hostName+'/'+sURL }, msg: 'ok', code: 200 });
    }
    catch (ex) {
        console.log(ex);
        res.json({ success: false, data: {}, msg: 'ERR_OCCURED', code: 500 });
    }
});

module.exports = router;
/**
 * Short URL will create highly random string of text based on given long url
 */
var crypto = require("crypto");
exports.shortURL = new function () {
    this.getShortURL = function (url) {
        var sURL = '',
            _rand = crypto.randomBytes(25).toString('hex'),
            _base = _rand.length;
        for (var i = 0; i < 7; i++)
            sURL += _rand.charAt(Math.floor(Math.random() * _rand.length));
        return sURL;
    };
}
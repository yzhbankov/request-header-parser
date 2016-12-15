/**
 * Created by Iaroslav Zhbankov on 15.12.2016.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {

    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    var language = req.acceptsLanguages("en-US", "ru-RU");
    var os = req.headers['user-agent'].split('(')[1].split(')')[0];

    res.send({
        "ipaddress": ip,
        "language": language,
        "software": os
    });
});

app.listen(8080, function () {
    console.log("Ready listening on port 8080!");
});
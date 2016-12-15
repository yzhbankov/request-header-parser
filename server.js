/**
 * Created by Iaroslav Zhbankov on 15.12.2016.
 */
var express = require('express');
var app = express();
var publicIp = require('public-ip');

app.get('/', function (req, res) {
    var ipAdress;
    publicIp.v4().then(function (ip) {
        ipAdress = ip;
        var language = req.acceptsLanguages("en-US", "ru-RU");
        var os = req.headers['user-agent'].split('(')[1].split(')')[0];

        res.send({
            "ipaddress": ipAdress,
            "language": language,
            "software": os
        });
    });
});

app.listen(8080, function () {
    console.log("Ready listening on port 8080!");
});
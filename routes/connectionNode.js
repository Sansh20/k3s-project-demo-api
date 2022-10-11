var express = require('express');
var router = express.Router();
var os = require("os")

/* GET home page. */
router.get('/', function(req, res, next) {  

    var hostname = os.hostname();
    
    res.json({"status":"success", "hostname": hostname});
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//   k8sApi.listNamespacedPod('default').then((resk) => {
//     res.send(resk.response);
// });
    res.send("j");
});

module.exports = router;

var express = require('express');
var router = express.Router();

const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send(k8sApi);
});

module.exports = router;

var express = require('express');
var router = express.Router();

const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

/* GET users listing. */
router.get('/', function(req, res, next) {
  k8sApi.listNamespacedPod('default').then((res) => {
    console.log(res.response);
});
});

module.exports = router;

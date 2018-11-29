'use strict'

var varapiv1esperjobsController = require('./apiv1esperjobsControllerService');

module.exports.addEsperjob = function addEsperjob(req, res, next) {
  varapiv1esperjobsController.addEsperjob(req.swagger.params, res, next);
};
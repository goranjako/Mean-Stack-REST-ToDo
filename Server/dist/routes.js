"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setRoutes;

var _express = _interopRequireDefault(require("express"));

var _require = require('./util/validation'),
    validateCustomersBody = _require.validateCustomersBody,
    validate = _require.validate;

function setRoutes(app) {
  var router = _express["default"].Router();

  app.use('/', router);
}
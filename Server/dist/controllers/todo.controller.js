"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _todo = _interopRequireDefault(require("../services/todo.service"));

var TodoController = /*#__PURE__*/function () {
  function TodoController() {
    (0, _classCallCheck2["default"])(this, TodoController);
  }

  (0, _createClass2["default"])(TodoController, [{
    key: "create",
    value: // Insert
    function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var todo, obj;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                todo = {
                  id: req.body.id,
                  item: req.body.item,
                  isCompleted: req.body.isCompleted
                };
                _context.next = 4;
                return _todo["default"].addTodo(todo);

              case 4:
                obj = _context.sent;
                return _context.abrupt("return", res.status(200).json({
                  success: true,
                  msg: "Todo is Created successfully."
                }));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                res.status(422).json(_context.t0.msg);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function create(_x, _x2, _x3) {
        return _create.apply(this, arguments);
      }

      return create;
    }() // Get by id

  }, {
    key: "getById",
    value: function () {
      var _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var obj;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _todo["default"].getById(req.params.id);

              case 3:
                obj = _context2.sent;

                if (!obj) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", res.status(200).json(obj));

              case 8:
                return _context2.abrupt("return", res.status(400).json({
                  error: "Todo not found"
                }));

              case 9:
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(400).json({
                  error: "Todo not found"
                }));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }));

      function getById(_x4, _x5) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }() // Update by id

  }, {
    key: "put",
    value: function () {
      var _put = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var data, id, custumer;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = {
                  id: req.body.id,
                  item: req.body.item,
                  isCompleted: req.body.isCompleted
                };
                id = req.params.id;
                _context3.prev = 2;
                _context3.next = 5;
                return _todo["default"].update(id, data);

              case 5:
                custumer = _context3.sent;
                return _context3.abrupt("return", res.status(200).json({
                  success: true,
                  msg: " Todo is Updated successfully."
                }));

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                return _context3.abrupt("return", res.status(400).json({
                  success: false,
                  msg: "Todo does not exist!"
                }));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 9]]);
      }));

      function put(_x6, _x7) {
        return _put.apply(this, arguments);
      }

      return put;
    }() // Delete by id

  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _todo["default"]["delete"]({
                  _id: req.params.id
                });

              case 3:
                return _context4.abrupt("return", res.json({
                  success: true,
                  msg: "Todo is Deleted successfully."
                }));

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", res.status(400).json({
                  success: false,
                  msg: "Todo does not exist!"
                }));

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));

      function _delete(_x8, _x9) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return TodoController;
}();

var _default = new TodoController();

exports["default"] = _default;
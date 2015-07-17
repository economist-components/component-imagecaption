"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var ImageCaption = (function (_React$Component) {
  _inherits(ImageCaption, _React$Component);

  function ImageCaption(props) {
    _classCallCheck(this, ImageCaption);

    _React$Component.call(this, props);
  }

  ImageCaption.prototype.render = function render() {
    return _react2["default"].createElement(
      "figure",
      null,
      this.props.textposition === "top" ? _react2["default"].createElement(
        "figcaption",
        null,
        this.props.caption
      ) : null,
      _react2["default"].createElement("img", { src: this.props.src }),
      this.props.textposition !== "top" ? _react2["default"].createElement(
        "figcaption",
        null,
        this.props.caption
      ) : null
    );
  };

  return ImageCaption;
})(_react2["default"].Component);

exports["default"] = ImageCaption;
module.exports = exports["default"];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3FCQUFrQixPQUFPOzs7O0lBRUosWUFBWTtZQUFaLFlBQVk7O0FBRW5CLFdBRk8sWUFBWSxDQUVsQixLQUFLLEVBQUU7MEJBRkQsWUFBWTs7QUFHN0IsZ0NBQU0sS0FBSyxDQUFDLENBQUM7R0FDZDs7QUFKa0IsY0FBWSxXQU0vQixNQUFNLEdBQUEsa0JBQUc7QUFDUCxXQUNFOzs7TUFDSSxBQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFHLEtBQUssR0FBSTs7O1FBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO09BQWMsR0FBRyxJQUFJO01BQ3pGLDBDQUFLLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQUFBQyxHQUFFO01BQzFCLEFBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEtBQUcsS0FBSyxHQUFJOzs7UUFBYSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87T0FBYyxHQUFHLElBQUk7S0FDbkYsQ0FDVDtHQUNIOztTQWRrQixZQUFZO0dBQVMsbUJBQU0sU0FBUzs7cUJBQXBDLFlBQVkiLCJmaWxlIjoidW5kZWZpbmVkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VDYXB0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmaWd1cmU+XG4gICAgICAgICB7KHRoaXMucHJvcHMudGV4dHBvc2l0aW9uPT09XCJ0b3BcIikgPyA8ZmlnY2FwdGlvbj57dGhpcy5wcm9wcy5jYXB0aW9ufTwvZmlnY2FwdGlvbj4gOiBudWxsfVxuICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuc3JjfS8+XG4gICAgICAgICB7KHRoaXMucHJvcHMudGV4dHBvc2l0aW9uIT09XCJ0b3BcIikgPyA8ZmlnY2FwdGlvbj57dGhpcy5wcm9wcy5jYXB0aW9ufTwvZmlnY2FwdGlvbj4gOiBudWxsfVxuICAgICAgPC9maWd1cmU+XG4gICAgKTtcbiAgfVxufVxuIl19

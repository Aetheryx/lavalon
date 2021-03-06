"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayPause = function (_React$Component) {
  _inherits(PlayPause, _React$Component);

  function PlayPause(state) {
    _classCallCheck(this, PlayPause);

    var _this = _possibleConstructorReturn(this, (PlayPause.__proto__ || Object.getPrototypeOf(PlayPause)).call(this, state));

    _this.state = {
      playing: false
    };
    return _this;
  }

  _createClass(PlayPause, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "playpause", className: "columns is-mobile" },
        _react2.default.createElement("div", { className: "column is-1", style: { background: '#ffffff' } }),
        _react2.default.createElement("div", { className: "column" }),
        _react2.default.createElement("i", {
          className: "column is-1 fas fa-2x fa-backward",
          onClick: this.props.prevNext.bind(null, false)
        }),
        _react2.default.createElement(
          "div",
          { className: "column is-1", onClick: this.props.playPause },
          _react2.default.createElement("i", {
            className: "fas fa-2x fa-pause-circle",
            style: { opacity: this.props.currentlyPlaying ? 1 : 0, position: 'absolute' }
          }),
          _react2.default.createElement("i", {
            className: "fas fa-2x fa-play-circle",
            style: { opacity: this.props.currentlyPlaying ? 0 : 1, position: 'absolute' }
          })
        ),
        _react2.default.createElement("i", {
          className: "column is-1 fas fa-2x fa-forward",
          onClick: this.props.prevNext.bind(null, true)
        }),
        _react2.default.createElement("div", { className: "column" }),
        _react2.default.createElement("div", { className: "column is-1", style: { background: '#ffffff' } })
      );
    }
  }]);

  return PlayPause;
}(_react2.default.Component);

exports.default = PlayPause;
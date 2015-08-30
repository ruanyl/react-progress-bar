'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Progress = (function (_Component) {
  _inherits(Progress, _Component);

  function Progress(props) {
    _classCallCheck(this, Progress);

    _get(Object.getPrototypeOf(Progress.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Progress, [{
    key: 'render',
    value: function render() {
      var progressStyle = {
        display: 'inline-block',
        position: 'fixed',
        top: 0,
        left: 0,
        width: this.props.percent + '%',
        maxWidth: '100% !important',
        height: this.props.height + 'px',
        boxShadow: '1px 1px 1px rgba(0,0,0,0.4)',
        borderRadius: '0 1px 1px 0',
        WebkitTransition: this.props.speed + 's width, ' + this.props.speed + 's background-color',
        transition: this.props.speed + 's width, ' + this.props.speed + 's background-color'
      };
      progressStyle = Object.assign({}, progressStyle, this.props.style);

      if (this.props.color && this.props.color !== 'rainbow') {
        progressStyle.backgroundColor = this.props.color;
      } else {
        progressStyle.backgroundImage = 'linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #FF2D55)';
        progressStyle.backgroundSize = '100vw ' + this.props.height + 'px';
      }

      return _react2['default'].createElement('div', { className: 'progress', style: progressStyle });
    }
  }]);

  return Progress;
})(_react.Component);

exports['default'] = Progress;

Progress.defaultProps = {
  height: 2,
  percent: 0,
  speed: .4
};
module.exports = exports['default'];

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Motorsw = function (_React$Component) {
    _inherits(Motorsw, _React$Component);

    function Motorsw(props) {
        _classCallCheck(this, Motorsw);

        var _this = _possibleConstructorReturn(this, (Motorsw.__proto__ || Object.getPrototypeOf(Motorsw)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(Motorsw, [{
        key: 'render',
        value: function render() {
            if (this.state.liked) {
                return 'You liked this.';
            }

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { 'class': 'imgBlock' },
                        React.createElement('img', { src: '../images/partners/motorsw.svg', alt: 'logo motorsw' })
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'blockText' },
                        React.createElement(
                            'h6',
                            null,
                            'MotorSW'
                        ),
                        React.createElement(
                            'span',
                            null,
                            'Desenvolvido e testado por quem entende de oficina. F\xE1cil de usar, 100% online. Facilite seu dia.'
                        )
                    )
                )
            );
        }
    }]);

    return Motorsw;
}(React.Component);

var domContainer = document.querySelector('#motorsw');
ReactDOM.render(React.createElement(Motorsw, null), domContainer);
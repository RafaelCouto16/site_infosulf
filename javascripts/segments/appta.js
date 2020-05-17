'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Appta = function (_React$Component) {
    _inherits(Appta, _React$Component);

    function Appta(props) {
        _classCallCheck(this, Appta);

        var _this = _possibleConstructorReturn(this, (Appta.__proto__ || Object.getPrototypeOf(Appta)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(Appta, [{
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
                    { 'class': 'imgBlock' },
                    React.createElement('img', { src: '../images/partners/appta.svg', alt: 'logo appta' })
                ),
                React.createElement(
                    'div',
                    { 'class': 'blockText' },
                    React.createElement(
                        'h6',
                        null,
                        'APPTA'
                    ),
                    React.createElement(
                        'span',
                        null,
                        'O APPTA \xE9 um sistema completo e f\xE1cil de usar. Porque nenhum lojista precisa de complica\xE7\xE3o'
                    )
                )
            );
        }
    }]);

    return Appta;
}(React.Component);

var domContainer = document.querySelector('#appta');
ReactDOM.render(React.createElement(Appta, null), domContainer);
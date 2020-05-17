'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Conciliadora = function (_React$Component) {
    _inherits(Conciliadora, _React$Component);

    function Conciliadora(props) {
        _classCallCheck(this, Conciliadora);

        var _this = _possibleConstructorReturn(this, (Conciliadora.__proto__ || Object.getPrototypeOf(Conciliadora)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(Conciliadora, [{
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
                    React.createElement('img', { src: '../images/partners/conciliadora.svg', alt: 'logo conciliadora' })
                ),
                React.createElement(
                    'div',
                    { 'class': 'blockText' },
                    React.createElement(
                        'h6',
                        null,
                        'Conciliadora'
                    ),
                    React.createElement(
                        'span',
                        null,
                        'A Conciliadora confere automaticamente todas as suas transa\xE7\xF5es de cart\xE3o em segundos, desde a venda at\xE9 o pagamento em dep\xF3sito banc\xE1rio. Um sistema completo de concilia\xE7\xE3o de cart\xE3o e concilia\xE7\xE3o banc\xE1ria.'
                    )
                )
            );
        }
    }]);

    return Conciliadora;
}(React.Component);

var domContainer = document.querySelector('#conciliadora');
ReactDOM.render(React.createElement(Conciliadora, null), domContainer);
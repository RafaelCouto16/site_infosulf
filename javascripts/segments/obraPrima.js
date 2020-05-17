'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObraPrima = function (_React$Component) {
    _inherits(ObraPrima, _React$Component);

    function ObraPrima(props) {
        _classCallCheck(this, ObraPrima);

        var _this = _possibleConstructorReturn(this, (ObraPrima.__proto__ || Object.getPrototypeOf(ObraPrima)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(ObraPrima, [{
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
                    React.createElement('img', { src: '../images/partners/obraPrima.svg', alt: 'logo obra prima' })
                ),
                React.createElement(
                    'div',
                    { 'class': 'blockText' },
                    React.createElement(
                        'h6',
                        null,
                        'Obra Prima'
                    ),
                    React.createElement(
                        'span',
                        null,
                        'O Obra Prima \xE9 uma ferramenta de gest\xE3o f\xE1cil de usar e r\xE1pida de implantar! Comece a usar j\xE1, cadastrando suas obras e projetos! Conhe\xE7a todas as vantagens que o Obra Prima pode trazer para a sua empresa.'
                    )
                )
            );
        }
    }]);

    return ObraPrima;
}(React.Component);

var domContainer = document.querySelector('#obraPrima');
ReactDOM.render(React.createElement(ObraPrima, null), domContainer);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Leigado = function (_React$Component) {
    _inherits(Leigado, _React$Component);

    function Leigado(props) {
        _classCallCheck(this, Leigado);

        var _this = _possibleConstructorReturn(this, (Leigado.__proto__ || Object.getPrototypeOf(Leigado)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(Leigado, [{
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
                    React.createElement('img', { src: '../images/partners/leigado.svg', alt: 'logo leigado' })
                ),
                React.createElement(
                    'div',
                    { 'class': 'blockText' },
                    React.createElement(
                        'h6',
                        null,
                        'Leigado'
                    ),
                    React.createElement(
                        'span',
                        null,
                        'Com o sistema Leigado voc\xEA cadastra seus animais e controla hist\xF3rico e genealogia, reprodutores e dosagens de s\xEAmem, separe os animais em lotes, inclua medicamentos e vacinas no calend\xE1rio da fazenda, controle diversas propriedades, controle ainda peso, altura e escore corporal. Obtenha todas essas informa\xE7\xF5es de forma pr\xE1tica, em qualquer lugar ou meio. Al\xE9m de outras funcionalidades n\xE3o menos importantes que as j\xE1 citadas.'
                    )
                )
            );
        }
    }]);

    return Leigado;
}(React.Component);

var domContainer = document.querySelector('#leigado');
ReactDOM.render(React.createElement(Leigado, null), domContainer);
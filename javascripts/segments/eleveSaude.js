'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EleveSaude = function (_React$Component) {
    _inherits(EleveSaude, _React$Component);

    function EleveSaude(props) {
        _classCallCheck(this, EleveSaude);

        var _this = _possibleConstructorReturn(this, (EleveSaude.__proto__ || Object.getPrototypeOf(EleveSaude)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(EleveSaude, [{
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
                    React.createElement('img', { src: '../images/partners/eleveSaude.svg', alt: 'logo eleve saude' })
                ),
                React.createElement(
                    'div',
                    { 'class': 'blockText' },
                    React.createElement(
                        'h6',
                        null,
                        'Eleve Sa\xFAde'
                    ),
                    React.createElement(
                        'span',
                        null,
                        'Eleve Sa\xFAde - O melhor software m\xE9dico para a gest\xE3o de consult\xF3rios e cl\xEDnicas. Especialmente desenvolvido para gest\xE3o de cl\xEDnicas e consult\xF3rios m\xE9dicos, permite que o m\xE9dico tenha acesso ao prontu\xE1rio eletr\xF4nico, consultas e agenda de cada m\xE9dico de qualquer lugar, por qualquer meio, possibilitando prescri\xE7\xE3o digital de medicamentos de forma simples e inteligente'
                    )
                )
            );
        }
    }]);

    return EleveSaude;
}(React.Component);

var domContainer = document.querySelector('#eleveSaude');
ReactDOM.render(React.createElement(EleveSaude, null), domContainer);
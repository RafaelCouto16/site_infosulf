'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MouraFranquias = function (_React$Component) {
    _inherits(MouraFranquias, _React$Component);

    function MouraFranquias(props) {
        _classCallCheck(this, MouraFranquias);

        var _this = _possibleConstructorReturn(this, (MouraFranquias.__proto__ || Object.getPrototypeOf(MouraFranquias)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(MouraFranquias, [{
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
                    React.createElement('img', { src: '../images/partners/moura.svg', alt: 'logo moura' })
                ),
                React.createElement(
                    'div',
                    { 'class': 'blockText' },
                    React.createElement(
                        'h6',
                        null,
                        'FranquiasMoura'
                    ),
                    React.createElement(
                        'span',
                        null,
                        '\xC9 um software de integra\xE7\xE3o entre gest\xE3o corporativa e rede de franquias, sendo desenvolvido para atender o mercado de franchising. Buscando sempre novas formas de auxiliar o franqueador nas \xE1reas corporativas, executamos desde a expans\xE3o da marca, atrav\xE9s da capta\xE7\xE3o de leads at\xE9 o gerenciamento das unidades franqueadas, tudo isso em tempo real.'
                    )
                )
            );
        }
    }]);

    return MouraFranquias;
}(React.Component);

var domContainer = document.querySelector('#mouraFranquias');
ReactDOM.render(React.createElement(MouraFranquias, null), domContainer);
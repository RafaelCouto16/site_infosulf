'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MouraFar = function (_React$Component) {
    _inherits(MouraFar, _React$Component);

    function MouraFar(props) {
        _classCallCheck(this, MouraFar);

        var _this = _possibleConstructorReturn(this, (MouraFar.__proto__ || Object.getPrototypeOf(MouraFar)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(MouraFar, [{
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
                        'FarMoura'
                    ),
                    React.createElement(
                        'span',
                        null,
                        'Para ampliar a capacidade de atendimento de farm\xE1cias e drogarias, o software FarMoura faz atualiza\xE7\xF5es autom\xE1ticas, gera relat\xF3rios para a Anvisa com um clique e oferece uma s\xE9rie de outros recursos, que simplificam a \xE1rea administrativa. A gest\xE3o dos neg\xF3cios fica mais \xE1gil, e voc\xEA pronto para atender um volume maior de clientes.'
                    )
                )
            );
        }
    }]);

    return MouraFar;
}(React.Component);

var domContainer = document.querySelector('#mouraFar');
ReactDOM.render(React.createElement(MouraFar, null), domContainer);
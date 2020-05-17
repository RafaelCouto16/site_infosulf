'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Intsys = function (_React$Component) {
    _inherits(Intsys, _React$Component);

    function Intsys(props) {
        _classCallCheck(this, Intsys);

        var _this = _possibleConstructorReturn(this, (Intsys.__proto__ || Object.getPrototypeOf(Intsys)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(Intsys, [{
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
                    React.createElement('img', { src: '../images/partners/Intsys.svg', alt: 'logo intsys' })
                ),
                React.createElement(
                    'div',
                    { 'class': 'blockText' },
                    React.createElement(
                        'h6',
                        null,
                        'Instsys'
                    ),
                    React.createElement(
                        'span',
                        null,
                        'A INTSYS \xE9 um sistema que oferece informa\xE7\xF5es claras atendendo \xE0s normas da legisla\xE7\xE3o tribut\xE1ria atualizada. Por meio de demonstrativos gerenciais, relat\xF3rios de controles e gera\xE7\xE3o de arquivos para o Fisco, plano de contas configur\xE1vel, concilia\xE7\xE3o de contas, porta\xE7\xF5es: Sped Cont\xE1bil, Manad, Sinco entre outros. Permite contabiliza\xE7\xE3o por centro de custos, rateios de formas variadas, possibilita trabalhar com v\xE1rios planos de contas ou com um \xFAnico para todas as empresas.'
                    )
                )
            );
        }
    }]);

    return Intsys;
}(React.Component);

var domContainer = document.querySelector('#intsys');
ReactDOM.render(React.createElement(Intsys, null), domContainer);
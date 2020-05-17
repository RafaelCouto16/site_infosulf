'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopCellAutoPecas = function (_React$Component) {
    _inherits(TopCellAutoPecas, _React$Component);

    function TopCellAutoPecas(props) {
        _classCallCheck(this, TopCellAutoPecas);

        var _this = _possibleConstructorReturn(this, (TopCellAutoPecas.__proto__ || Object.getPrototypeOf(TopCellAutoPecas)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(TopCellAutoPecas, [{
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
                    React.createElement('img', { src: '../images/partners/topcell.svg', alt: 'logo topcell' })
                ),
                React.createElement(
                    'div',
                    { 'class': 'blockText' },
                    React.createElement(
                        'h6',
                        null,
                        'TopCell'
                    ),
                    React.createElement(
                        'span',
                        null,
                        'Desenvolvido a partir das necessidades reais de uma auto pe\xE7as, o sistema oferece todos os controles habituais de contas a receber e a pagar, fluxo de caixa, DRE e etc e al\xE9m disso possui um avan\xE7ado acompanhamento de entregas (delivery) onde o gestor poder\xE1 acompanhar o hist\xF3rico de cada cliente inclusive das devolu\xE7\xF5es, seus motivos e custo das mesmas. Tenha o controle de sua auto pe\xE7as em suas m\xE3os.'
                    )
                )
            );
        }
    }]);

    return TopCellAutoPecas;
}(React.Component);

var domContainer = document.querySelector('#topCellAutoPecas');
ReactDOM.render(React.createElement(TopCellAutoPecas, null), domContainer);
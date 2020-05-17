'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntsysEmpresarial = function (_React$Component) {
    _inherits(IntsysEmpresarial, _React$Component);

    function IntsysEmpresarial(props) {
        _classCallCheck(this, IntsysEmpresarial);

        var _this = _possibleConstructorReturn(this, (IntsysEmpresarial.__proto__ || Object.getPrototypeOf(IntsysEmpresarial)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(IntsysEmpresarial, [{
        key: 'render',
        value: function render() {
            if (this.state.liked) {
                return 'You liked this.';
            }

            return React.createElement(
                'div',
                { 'class': 'infoSegments' },
                React.createElement(
                    'div',
                    { 'class': 'partnerImage' },
                    React.createElement('img', { src: 'img/Intsys.svg', alt: 'logo intsys' })
                ),
                React.createElement(
                    'div',
                    { 'class': 'blocksInfo' },
                    React.createElement(
                        'div',
                        { 'class': 'blockInfo' },
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'h6',
                                null,
                                'Compras'
                            ),
                            React.createElement(
                                'ul',
                                null,
                                React.createElement(
                                    'li',
                                    null,
                                    'Cota\xE7\xE3o de produtos com fornecedores vari\xE1veis'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Pedido de compras'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Gerenciamento e fluxo de produ\xE7\xE3o'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Controle de mat\xE9riaprimas'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Entrada dos produtos acabados automaticamente no estoque'
                                )
                            ),
                            React.createElement(
                                'div',
                                { 'class': 'blockLink' },
                                React.createElement(
                                    'a',
                                    { href: '' },
                                    'Saiba Mais'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return IntsysEmpresarial;
}(React.Component);

var domContainer = document.querySelector('#intsysEmpresarial');
ReactDOM.render(React.createElement(IntsysEmpresarial, null), domContainer);
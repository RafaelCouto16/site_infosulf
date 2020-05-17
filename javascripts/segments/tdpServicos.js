'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TdpServicos = function (_React$Component) {
    _inherits(TdpServicos, _React$Component);

    function TdpServicos(props) {
        _classCallCheck(this, TdpServicos);

        var _this = _possibleConstructorReturn(this, (TdpServicos.__proto__ || Object.getPrototypeOf(TdpServicos)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(TdpServicos, [{
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
                    React.createElement('img', { src: '../images/partners/tdp.svg', alt: 'logo tdp' })
                ),
                React.createElement(
                    'div',
                    { 'class': 'blockText' },
                    React.createElement(
                        'h6',
                        null,
                        'FACILITE Ordem de Servi\xE7os'
                    ),
                    React.createElement(
                        'span',
                        null,
                        'O FACILITE Ordem de Servi\xE7os atende a gera\xE7\xE3o, emiss\xE3o e controle de Ordens de Servi\xE7os interna para Empresas que realizam realizam manuten\xE7\xE3o em equipamentos diversos. Lojas de Informatica, Celular, Maquinas e Equipamentos Of\xEDcina Mec\xE2nica entre outras podem se beneficiardas funcionalidades oferecidas por este Sistema.'
                    )
                )
            );
        }
    }]);

    return TdpServicos;
}(React.Component);

var domContainer = document.querySelector('#tdpServicos');
ReactDOM.render(React.createElement(TdpServicos, null), domContainer);
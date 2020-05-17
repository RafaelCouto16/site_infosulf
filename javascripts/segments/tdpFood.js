'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TdpFood = function (_React$Component) {
    _inherits(TdpFood, _React$Component);

    function TdpFood(props) {
        _classCallCheck(this, TdpFood);

        var _this = _possibleConstructorReturn(this, (TdpFood.__proto__ || Object.getPrototypeOf(TdpFood)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(TdpFood, [{
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
                        'FACILITE Food'
                    ),
                    React.createElement(
                        'span',
                        null,
                        'Com o Facilite voc\xEA agiliza seus processo, reduz o tempo de espera do cliente, controla melhor seu estoque incluindo insumos, possibilita a integra\xE7\xE3o com os melhores App de pedidos como o iFood e Wabiz, melhora a produtividade de seus gar\xE7ons e ainda permite a emiss\xE3o de uma comanda para cada componente da mesa ou bar.'
                    )
                )
            );
        }
    }]);

    return TdpFood;
}(React.Component);

var domContainer = document.querySelector('#tdpFood');
ReactDOM.render(React.createElement(TdpFood, null), domContainer);
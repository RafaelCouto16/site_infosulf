'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MouraPostos = function (_React$Component) {
    _inherits(MouraPostos, _React$Component);

    function MouraPostos(props) {
        _classCallCheck(this, MouraPostos);

        var _this = _possibleConstructorReturn(this, (MouraPostos.__proto__ || Object.getPrototypeOf(MouraPostos)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(MouraPostos, [{
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
                        'PostoMoura'
                    ),
                    React.createElement(
                        'span',
                        null,
                        'As vantagens que o PostoMoura proporciona aos seus usu\xE1rios s\xE3o muitas. Al\xE9m de facilitar as tarefas administrativas e organizar o financeiro, o ERP oferece recursos exclusivos, como a personaliza\xE7\xE3o de exclusivos.'
                    )
                )
            );
        }
    }]);

    return MouraPostos;
}(React.Component);

var domContainer = document.querySelector('#mouraPostos');
ReactDOM.render(React.createElement(MouraPostos, null), domContainer);
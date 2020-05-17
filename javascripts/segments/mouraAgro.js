'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MouraAgro = function (_React$Component) {
    _inherits(MouraAgro, _React$Component);

    function MouraAgro(props) {
        _classCallCheck(this, MouraAgro);

        var _this = _possibleConstructorReturn(this, (MouraAgro.__proto__ || Object.getPrototypeOf(MouraAgro)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(MouraAgro, [{
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
                    React.createElement('img', { src: '../images/partners/motorsw.svg', alt: 'logo motorsw' })
                ),
                React.createElement(
                    'div',
                    { 'class': 'blockText' },
                    React.createElement(
                        'h6',
                        null,
                        'AgroMoura'
                    ),
                    React.createElement(
                        'span',
                        null,
                        'As vantagens que o AgroMoura proporciona aos seus usu\xE1rios s\xE3o muitas. Al\xE9m de facilitar as tarefas administrativas e organizar o financeiro, o ERP oferece recursos exclusivos, como a personaliza\xE7\xE3o de telas e documentos diretamente na palma da sua m\xE3o.'
                    )
                )
            );
        }
    }]);

    return MouraAgro;
}(React.Component);

var domContainer = document.querySelector('#mouraAgro');
ReactDOM.render(React.createElement(MouraAgro, null), domContainer);
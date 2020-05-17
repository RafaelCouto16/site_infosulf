'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MouraPet = function (_React$Component) {
    _inherits(MouraPet, _React$Component);

    function MouraPet(props) {
        _classCallCheck(this, MouraPet);

        var _this = _possibleConstructorReturn(this, (MouraPet.__proto__ || Object.getPrototypeOf(MouraPet)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(MouraPet, [{
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
                        'PetMoura'
                    ),
                    React.createElement(
                        'span',
                        null,
                        'Desenvolvido especialmente para pet shops, cl\xEDnicas veterin\xE1rias e centros de est\xE9tica, o PetMoura dinamiza a gest\xE3o do seu neg\xF3cio e o atendimento ao cliente. Assim, os bichinhos ganham mais aten\xE7\xE3o e voc\xEA aumenta sua capacidade de atendimento.'
                    )
                )
            );
        }
    }]);

    return MouraPet;
}(React.Component);

var domContainer = document.querySelector('#mouraPet');
ReactDOM.render(React.createElement(MouraPet, null), domContainer);
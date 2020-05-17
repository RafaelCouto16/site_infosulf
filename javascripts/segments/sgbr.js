'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sgbr = function (_React$Component) {
    _inherits(Sgbr, _React$Component);

    function Sgbr(props) {
        _classCallCheck(this, Sgbr);

        var _this = _possibleConstructorReturn(this, (Sgbr.__proto__ || Object.getPrototypeOf(Sgbr)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(Sgbr, [{
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
                    React.createElement('img', { src: '../images/partners/sgbr.svg', alt: 'logo sgbr' })
                ),
                React.createElement(
                    'div',
                    { 'class': 'blockText' },
                    React.createElement(
                        'h6',
                        null,
                        'SGBR'
                    ),
                    React.createElement(
                        'span',
                        null,
                        'Um sistema completo e interativo que automatiza suas tarefas e integra diferentes \xE1reas do seu neg\xF3cio. O SG Master \xE9 a ferramenta ideal para ajudar a sua empresa crescer de forma correta, cumprindo toda a legisla\xE7\xE3o vigente. Atende micro, pequenos e m\xE9dios estabelecimentos comerciais de forma assertiva, suprindo suas principais necessidades, automatizando as rotinas di\xE1rias e apoiando na gest\xE3o do neg\xF3cio.'
                    )
                )
            );
        }
    }]);

    return Sgbr;
}(React.Component);

var domContainer = document.querySelector('#sgbr');
ReactDOM.render(React.createElement(Sgbr, null), domContainer);
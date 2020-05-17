'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MouraOS = function (_React$Component) {
    _inherits(MouraOS, _React$Component);

    function MouraOS(props) {
        _classCallCheck(this, MouraOS);

        var _this = _possibleConstructorReturn(this, (MouraOS.__proto__ || Object.getPrototypeOf(MouraOS)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(MouraOS, [{
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
                        'O.S.Moura'
                    ),
                    React.createElement(
                        'span',
                        null,
                        'O software O.S.Moura automatiza a administra\xE7\xE3o da empresa, unindo os pontos essenciais do neg\xF3cio com os in\xFAmeros recursos exclusivos, assim manter tudo sob controle fica muito mais f\xE1cil.'
                    )
                )
            );
        }
    }]);

    return MouraOS;
}(React.Component);

var domContainer = document.querySelector('#mouraOS');
ReactDOM.render(React.createElement(MouraOS, null), domContainer);
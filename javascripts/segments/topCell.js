'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopCell = function (_React$Component) {
    _inherits(TopCell, _React$Component);

    function TopCell(props) {
        _classCallCheck(this, TopCell);

        var _this = _possibleConstructorReturn(this, (TopCell.__proto__ || Object.getPrototypeOf(TopCell)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(TopCell, [{
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
                        'O TopCell \xE9 um sistema totalmente integrado e modular que oferece ao gestor informa\xE7\xF5es r\xE1pidas e precisas a fim de auxili\xE1-lo em suas tomadas de decis\xE3o. Voltado para o varejo em geral, foi desenvolvido para as necessidades mais espec\xEDficas do seguimento de vestu\xE1rio, cal\xE7ados e acess\xF3rios.'
                    )
                )
            );
        }
    }]);

    return TopCell;
}(React.Component);

var domContainer = document.querySelector('#topCell');
ReactDOM.render(React.createElement(TopCell, null), domContainer);
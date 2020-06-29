'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Systems = function (_React$Component) {
	_inherits(Systems, _React$Component);

	function Systems(props) {
		_classCallCheck(this, Systems);

		var _this = _possibleConstructorReturn(this, (Systems.__proto__ || Object.getPrototypeOf(Systems)).call(this, props));

		_this.state = { liked: false };
		return _this;
	}

	_createClass(Systems, [{
		key: 'render',
		value: function render() {
			if (this.state.liked) {
				return 'You liked this.';
			}

			var list = localStorage.getItem('list');
			var segmentsList = [];
			segmentsList.push(segments[parseInt(list)]);

			return React.createElement(
				'div',
				null,
				segmentsList.map(function (i, index) {
					return React.createElement(
						'div',
						{ key: index, 'class': 'text-center bgCustomLightBlue titleCustom pt-4 pb-4 mt-4' },
						React.createElement(
							'span',
							null,
							i.phrase
						)
					);
				}),
				segmentsList[0].systems.map(function (i, index) {
					return index % 2 == 0 ? React.createElement(
						'div',
						{ key: index, 'class': 'd-flex flex-column-reverse flex-lg-row align-items-center justify-content-center bgCustomBlue mt-4 pt-4 pb-4' },
						React.createElement(
							'div',
							{ 'class': 'text-center mt-3 textBlockCustom' },
							React.createElement(
								'div',
								null,
								React.createElement(
									'span',
									{ 'class': 'titleCustom' },
									i.title
								)
							),
							React.createElement(
								'div',
								{ 'class': 'mt-3' },
								React.createElement(
									'span',
									{ 'class': 'textCustom' },
									i.text
								)
							),
							React.createElement(
								'div',
								{ 'class': 'mt-4' },
								React.createElement(
									'a',
									{ href: 'knowMore/' + i.knowMore, 'class': 'bgCustomLightBlue textCustom buttonCustom' },
									'Saiba mais'
								)
							)
						),
						React.createElement(
							'picture',
							null,
							React.createElement('img', { src: '../images/partners/' + i.image, alt: '', 'class': 'imageSizeCustom2 ml-lg-5' })
						)
					) : React.createElement(
						'div',
						{ 'class': 'd-flex flex-column-reverse flex-lg-row-reverse align-items-center justify-content-center bgCustomLightBlue mt-4 pt-4 pb-4' },
						React.createElement(
							'div',
							{ 'class': 'text-center mt-3 textBlockCustom' },
							React.createElement(
								'div',
								null,
								React.createElement(
									'span',
									{ 'class': 'titleCustom' },
									i.title
								)
							),
							React.createElement(
								'div',
								{ 'class': 'mt-3' },
								React.createElement(
									'span',
									{ 'class': 'textCustom' },
									i.text
								)
							),
							React.createElement(
								'div',
								{ 'class': 'mt-4' },
								React.createElement(
									'a',
									{ href: 'knowMore/' + i.knowMore, 'class': 'bgCustomBlue textCustom buttonCustom' },
									'Saiba mais'
								)
							)
						),
						React.createElement(
							'picture',
							null,
							React.createElement('img', { src: '../images/partners/' + i.image, alt: '', 'class': 'imageSizeCustom2 mr-lg-5' })
						)
					);
				})
			);
		}
	}]);

	return Systems;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Systems, null), domContainer);
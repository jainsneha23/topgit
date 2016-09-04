webpackJsonp([1],{

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _Aboutme = __webpack_require__(189);
  
  var _Aboutme2 = _interopRequireDefault(_Aboutme);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = _Aboutme2.default; /**
                                        * React App SDK (https://github.com/kriasoft/react-app)
                                        *
                                        * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
                                        *
                                        * This source code is licensed under the MIT license found in the
                                        * LICENSE.txt file in the root directory of this source tree.
                                        */

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(31);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(32);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(33);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(36);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(35);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(6);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(115);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Aboutme = __webpack_require__(382);
  
  var _Aboutme2 = _interopRequireDefault(_Aboutme);
  
  var _Aboutme3 = __webpack_require__(388);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React App SDK (https://github.com/kriasoft/react-app)
   *
   * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var AboutPage = function (_React$Component) {
    (0, _inherits3.default)(AboutPage, _React$Component);
  
    function AboutPage() {
      (0, _classCallCheck3.default)(this, AboutPage);
      return (0, _possibleConstructorReturn3.default)(this, (AboutPage.__proto__ || (0, _getPrototypeOf2.default)(AboutPage)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(AboutPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = _Aboutme3.title;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _Layout2.default,
          { className: _Aboutme2.default.content },
          _react2.default.createElement(
            'h1',
            null,
            _Aboutme3.title
          ),
          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: _Aboutme3.html } })
        );
      }
    }]);
    return AboutPage;
  }(_react2.default.Component);
  
  exports.default = AboutPage;

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(15)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React App SDK (https://github.com/kriasoft/react-app)\n *\n * Copyright © 2015-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@media screen and (max-width: 1024px) {\n\n  .Aboutme_content_3D1 {\n    padding: 0 16px;\n  }\n\n}\n", "", {"version":3,"sources":["/./routes/Aboutme/Aboutme.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;EAEE;IACE,gBAAgB;GACjB;;CAEF","file":"Aboutme.css","sourcesContent":["/**\n * React App SDK (https://github.com/kriasoft/react-app)\n *\n * Copyright © 2015-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@media screen and (max-width: 1024px) {\n\n  .content {\n    padding: 0 16px;\n  }\n\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"content": "Aboutme_content_3D1"
  };

/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(261);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(17)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./Aboutme.css", function() {
  			var newContent = require("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./Aboutme.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 388:
/***/ function(module, exports) {

  module.exports = {"title":"TopGit — finding the best github projects!","html":"<h3>Contact Me At:</h3>\n<ul>\n<li>Sneha Jain</li>\n<li><a href=\"mailto:mystery.sneha@gmail.com\">mystery.sneha@gmail.com</a></li>\n<li>8105266097</li>\n</ul>\n<h3>TopGit</h3>\n<p>It is a front end application which would let the users help list and browse top github projects conveniently</p>\n<h3>Highlights</h3>\n<ol>\n<li>Pagination with 10 pages visible on the bottom of active page. Enables user to quickly navigate to different pages.  Right and left arrow to go next page beyond 10.</li>\n<li>Responsive and elegant web page.</li>\n<li>Filter bar on the right pane is collapsible when user is opening website in mobile device or the browser is small.</li>\n<li>Search based on stars, language.</li>\n<li>Search based on stars have a number range from 0 to 1000 and user can select minimum and maximum stars by dragging the point on the number range line.</li>\n<li>Auto complete on search based on languages</li>\n<li>Busy animation added for loading of resources</li>\n</ol>\n<h3>Installation</h3>\n<p>Dillinger requires <a href=\"https://nodejs.org/\">Node.js</a> v4+ to run.</p>\n<p>Install the dependencies and devDependencies and start the server.</p>\n<pre><code class=\"language-sh\">$ <span class=\"hljs-built_in\">cd</span> topgit\n$ npm install\n$ npm start\n</code></pre>\n"};

/***/ }

});
//# sourceMappingURL=1.js.map?85d741ce94e7386af1e8
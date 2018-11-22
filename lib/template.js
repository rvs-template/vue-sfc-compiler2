'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * parse html to render function
                                                                                                                                                                                                                                                                   */

exports.default = parse;

var _vueTemplateCompiler = require('vue-template-compiler');

var compiler = _interopRequireWildcard(_vueTemplateCompiler);

var _vueTemplateEs2015Compiler = require('vue-template-es2015-compiler');

var _vueTemplateEs2015Compiler2 = _interopRequireDefault(_vueTemplateEs2015Compiler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var defaultConfig = {
  preserveWhitespace: false
};

function parse(template) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var compiled = compiler.compile(template.content, _extends({}, defaultConfig, config));

  return {
    render: (0, _vueTemplateEs2015Compiler2.default)('function() { ' + compiled.render + ' }')
  };
}
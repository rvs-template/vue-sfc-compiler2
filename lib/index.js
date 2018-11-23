'use strict';

var _vueTemplateCompiler = require('vue-template-compiler');

var compiler = _interopRequireWildcard(_vueTemplateCompiler);

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _babel = require('./babel');

var _babel2 = _interopRequireDefault(_babel);

var _inject = require('./inject');

var _inject2 = _interopRequireDefault(_inject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = function (code) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var component = compiler.parseComponent(code);
  var styles = component.styles,
      template = component.template;

  var script = component.script || { content: 'export default {};' };

  var js = void 0;
  if (template) {
    var render = (0, _template2.default)(template, config.template);
    js = (0, _babel2.default)((0, _inject2.default)(script.content, render), config.babel);
  } else {
    js = (0, _babel2.default)((0, _inject2.default)(script.content), config.babel);
  }

  var css = styles && styles[0] ? styles[0].content : '';
  return { js: js, css: css };
};
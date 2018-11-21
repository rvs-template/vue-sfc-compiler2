'use strict';

var _vueTemplateCompiler = require('vue-template-compiler');

var compiler = _interopRequireWildcard(_vueTemplateCompiler);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = function (code) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var component = compiler.parseComponent(code);
  var styles = component.styles,
      template = component.template;

  var script = component.script || { content: 'export default {};' };

  var js = void 0;
  if (template) {} else {}
  return { js: js, css: css };
};
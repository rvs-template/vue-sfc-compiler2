import * as compiler from 'vue-template-compiler';

module.exports = function(code, config = {}) {
  const component = compiler.parseComponent(code);
  const { styles, template } = component;
  const script = component.script || { content: 'export default {};' };

  let js;
  if (template) {

  } else {

  }
  return { js, css };
}
import * as compiler from 'vue-template-compiler';
import parseTemplate from './template';
import babel from './babel';

module.exports = function(code, config = {}) {
  const component = compiler.parseComponent(code);
  const { styles, template } = component;
  const script = component.script || { content: 'export default {};' };
  console.log(template, '💖')
  // const render = parseTemplate(template, config);
  const js = babel(script, config);
  return { js, css: styles };
}
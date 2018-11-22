/**
 * parse html to render function
 */

import * as compiler from 'vue-template-compiler';
import compilerES2015 from 'vue-template-es2015-compiler';

const defaultConfig = {
  preserveWhitespace: false
};

export default function parse(template, config = {}) {
  const compiled = compiler.compile(template.content, {
    ...defaultConfig,
    ...config
  });

  return {
    render: compilerES2015(`function() { ${compiled.render} }`)
  }
}

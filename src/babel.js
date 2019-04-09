import { transform } from '@babel/core';
import path from 'path';

const defaultConfig = {
  configFile: path.resolve(__dirname, '../babel.config.js')
};

export default function(source, config = {}) {
  return transform(source, {
    ...defaultConfig,
    ...config
  }).code;
}
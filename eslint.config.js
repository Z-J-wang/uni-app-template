import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from '@vue/eslint-config-prettier';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      'node_modules',
      'public',
    ],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  pluginPrettier,
];

import path from 'path';
import { appendFileSync } from 'fs';
import { spawnSync } from 'child_process';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import autoPreprocess from 'svelte-preprocess';
import sveld from 'sveld';
import pkg from './package.json';

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase());

function prependTagOption(exceptions = []) {
  return {
    markup({ content, filename }) {
      const name = path.basename(filename, '.svelte');
      const tagName = exceptions.includes(name) ? '{null}' : `a-${name}`;
      const optionsTag = `<svelte:options tag="${tagName}" />`;
      return { code: optionsTag + '\n\n' + content };
    },
  };
}

const icons = [
  'more-horizontal',
  'chevron-left',
  'chevron-right',
  'x',
  'paperclip',
  'plus',
  'trash-2',
  'star',
  'clock',
];

const sveltePreprocess = autoPreprocess({
  scss: {
    importer(url, prev) {
      if (url === 'node_modules/attractions/_variables') {
        return { file: path.resolve('_variables.scss') };
      }
    },
    renderSync: true,
  },
});

export default [
  {
    input: 'index.js',
    output: [
      { file: pkg.module, format: 'es' },
      { file: pkg.main, format: 'umd', name },
    ],
    plugins: [
      svelte({
        preprocess: sveltePreprocess,
        emitCss: false,
      }),
      resolve(),
      terser({
        module: true,
      }),
    ],
  },
  {
    input: 'index.js',
    output: {
      file: 'dist/custom-elements.js',
      format: 'iife',
      name: 'attractions',
    },
    plugins: [
      svelte({
        compilerOptions: {
          customElement: true,
        },
        preprocess: [prependTagOption(icons), sveltePreprocess],
      }),
      resolve(),
      sveld(),
      {
        name: 'utilsTypings',
        writeBundle() {
          // Note that this fails silently on Windows due to poor glob support
          //  which is strange because it works in tsconfig's `include` option
          spawnSync(
            'tsc',
            [
              'utils/*.js',
              '--declaration',
              '--allowJs',
              '--emitDeclarationOnly',
              '--outDir',
              'types',
            ],
            { shell: true }
          );
          // Since writeBundle hook is parallel, we need to wait for sveld to finish first
          setTimeout(() => {
            appendFileSync(
              './types/index.d.ts',
              'export * as utils from "./utils";\n'
            );
          }, 1000);
        },
      },
      terser({
        module: true,
      }),
    ],
  },
];

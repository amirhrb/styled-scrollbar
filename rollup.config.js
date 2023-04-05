// This plugin uses the Babel compiler to transform your code.
import babel from '@rollup/plugin-babel';
// This allows Rollup to bundle both CJS and ES6 modules together.
import commonjs from '@rollup/plugin-commonjs';
// Excludes peer dependencies from the bundle.
import external from 'rollup-plugin-peer-deps-external';
// This plugin allows Rollup to correctly bundle and alias packages installed via npm.
import resolve from '@rollup/plugin-node-resolve';
// This plugin uses TypeScript to compile your code into JavaScript that Rollup can use.
import typescript from 'rollup-plugin-typescript2';
// This can significantly reduce the size of the output file and improve page load speed.
import { terser } from 'rollup-plugin-terser';
/* Makes it possible to use ES6+ language features such as `async/await`, `Promise`, etc.,
while still targeting older browsers that do not have these features.
This plugin is used to avoid generating potentially duplicated code when
transpiling the code with Babel.*/
import transformRuntime from '@babel/plugin-transform-runtime';
/*Determines which transformations and 
polyfills are required to convert the code into the desired target format.
This plugin is used to identify the necessary polyfills and 
transforms required based on the targeted environment.*/
import presetEnv from '@babel/preset-env';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true,
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      presets: [presetEnv],
      plugins: [transformRuntime],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    terser(),
  ],
  // If you are using React version 17 or higher, make sure to add the following line to avoid warnings.
  external: Object.keys(pkg.peerDependencies || {}),
};

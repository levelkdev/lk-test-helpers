'use strict'

const fs = require('fs')
const rimraf = require('rimraf')
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const pkg = require('../package.json')

const bundles = [
  {
    format: 'cjs',
    plugins: [],
    babelPresets: ['es2015-rollup'],
    babelPlugins: [
      'transform-es2015-destructuring',
      'transform-es2015-function-name',
      'transform-es2015-parameters',
      'transform-async-to-generator'
    ]
  }
]

let promise = Promise.resolve()

// Clean up the output directory
rimraf('dist/*', () => {
  // Compile source code into a distributable format with Babel and Rollup
  for (const config of bundles) {
    promise = promise.then(() => rollup.rollup({
      entry: 'src/main.js',
      external: Object.keys(pkg.dependencies),
      plugins: [
        babel({
          babelrc: false,
          exclude: 'node_modules/**',
          presets: config.babelPresets,
          plugins: config.babelPlugins
        })
      ].concat(config.plugins)
    }).then(bundle => bundle.write({
      dest: 'dist/main.js',
      format: config.format,
      sourceMap: true
    })))
  }

  // Copy package.json and LICENSE
  promise = promise.then(() => {
    delete pkg.devDependencies
    delete pkg.scripts
    fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, '  '), 'utf-8')
    fs.writeFileSync('dist/LICENSE', fs.readFileSync('LICENSE', 'utf-8'),
    'utf-8')
  })

  promise.catch(err => console.error(err.stack))

})

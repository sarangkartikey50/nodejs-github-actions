module.exports = {
  entryPoints: [`${process.cwd()}/src/index.ts`],
  bundle: true,
  outfile: `build/bundle.js`,
  minifyWhitespace: true,
  sourcemap: true,
  format: 'iife',
  globalName: 'bundle',
};

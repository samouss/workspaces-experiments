const modules = process.env.BABEL_ENV !== 'es' ? 'commonjs' : false;

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'ie >= 10'],
        },
        modules,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-stage-2',
  ],
};

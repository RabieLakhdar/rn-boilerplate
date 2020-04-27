module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          atoms: './src/components/atoms',
          molecules: './src/components/molecules',
          organisms: './src/components/organisms',
          navigations: './src/navigations',
          scenes: './src/scenes',
          services: './src/services',
          styles: './src/styles',
          utils: './src/utils',
        },
      },
    },
  },
};

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '~assets': './assets',
            '~domain': './src/domain',
            '~modules': './src/modules',
            '~view': './src/view',
          },
          root: ['.'],
        },
      ],
    ],
    presets: ['module:metro-react-native-babel-preset'],
  };
};

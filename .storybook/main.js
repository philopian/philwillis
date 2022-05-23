const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: (config) => {
    /**
     * Add support for alias-imports
     * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
     */
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [path.resolve(__dirname, '../stories/'), path.resolve(__dirname, '../')],
      '@/components': path.resolve(__dirname, '../components/'),
      '@/pages': path.resolve(__dirname, '../pages/'),
      '@/hooks': path.resolve(__dirname, '../hooks/'),
      '@/styles': path.resolve(__dirname, '../styles/'),
      '@/libs': path.resolve(__dirname, '../libs/'),
      '@/layouts': path.resolve(__dirname, '../layouts/'),
      '@/models': path.resolve(__dirname, '../models/'),
      '@/utils': path.resolve(__dirname, '../utils/'),
      '@/types': path.resolve(__dirname, '../types/'),
    }

    /**
     * Fixes font import with /
     * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
     */
    config.resolve.roots = [path.resolve(__dirname, '../public'), 'node_modules']

    return config
  },
}

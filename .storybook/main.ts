import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  framework: '@storybook/react-vite',
}

// module.exports = {
//   presets: ['@storybook/react'],
//   telemetry: false,

//   framework: {
//     name: '@storybook/react',
//     options: {}
//   },

//   docs: {
//     autodocs: true
//   },

//   typescript: {
//     reactDocgen: 'react-docgen-typescript'
//   },

//   addons: ['@chromatic-com/storybook']
// }

export default config;

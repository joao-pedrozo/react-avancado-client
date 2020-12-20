module.exports = {
    stories: ['../src/components/**/stories.tsx'],
    addons: [
        '@storybook/addon-essentials', 
    ],
    webpackFinal: (config) => {
      config.resolve.modules.push(`${process.cwd()}/src`) // Add absolute path to storybook acess, process.cwd acess root paste
      return config
    }
  }
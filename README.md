# webpack-base-app

To speed up the generic build configuration of a number of small projects, I've created a base application setup that I can easily extend from. Using Webpack (a module builder), most of the basic configuration is done for you with and features a concept of build modes. "dev" is currently the only build mode configured but more can be created without much effort.

## Build Modes

Having a concept of build modes means we can change the behaviour of the build process. Each build mode consists of 3 main files:

- **app.config.js** - This file deals with the general configuration of the application and will be accessible when it is built. It derives its base configuration from the common file found in /config/common.js. Currently, dev mode simply overwrites the name of the application with the current mode so that we can easily identify what mode we are using when in the browser.
- **webpack.config.js** - This file tweaks the behaviour of Webpack. When installing new (pre)loaders, you will need to add it within this file. I've split the configuration for each (pre)loader into separate files to prevent this file from becoming too big. These files can be found in build/webpack/<(pre)loader name>.
- **app.entry.coffee** - This file doesn't have to be written in CoffeeScript, it could instead be a normal JavaScript file. However, since CoffeeScript is supported, there isn't really any reason not to. Due to the nature of Webpack, an entry file is required. This file is the first file Webpack starts from and tends to include a number of require statements to initialise the application. It's best to keep this file as simple as possible.

An example of another build mode could be one called 'live'. This mode would minify the all the code and wouldn't bundle any test specs or additional libraries to aid development.

## Pre-loaders

- **ESLint (**eslint-loader**)** - The pluggable linting utility for JavaScript and JSX.
- **CoffeeLint (**coffee-lint-loader**)** - A style checker that helps keep CoffeeScript code clean and consistent. 

## Loaders

- **CoffeeScript (**coffee-loader**)** - A little language that compiles into JavaScript.
- **JSX With CoffeeScript (**cjsx-loader**)** - Writing JSX alongside CoffeeScript.
- **Rewire (**rewire-loader**)** - Easy dependency injection for unit testing.
- **File (**file-loader**)** - Require files other than scripts.
- **CSS (**css-loader**)** - Enhance CSS with import functionality similar to Sass. 
- **Sass (**sass-loader**)** - CSS with superpowers.
- **Style (**style-loader**)** - Add exports of a module as style to DOM.

## Plugins

- **Extract Text (**extract-text-webpack-plugin**)** - Extract text from the bundle into a separate file.

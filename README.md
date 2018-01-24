Simple, ready-to-use setup for:
- Webpack
- Babel (presets-env, presets-react)
- React
- Styled components (babel-plugin-styled-components, for proper Chrome DevTools support)
- CSS Modules
- Eslint
- Prettier
- Git

# Installation

1 Download to a local folder (or clone by running 'git clone https://github.com/jfhector/prototype' in your terminal)

2 Run 'npm install'

3 Run 'npm start'

# Requirements

- nodejs
- npm

# Recommended extensions for VSCode

This boilerplate works best with these VSCode extensions (or equivalent in your code editor of choice):
- ESLint
- Prettier
- Stylelint
- vscode-styled-components

(See the 'VSCODE-USER-SETTINGS' file for ready-to-use VSCode settings).

# Watch outs

**Tilde on babel-plugin-styled-components dependency in package.json**

This set-up works with babel-plugin-styled-components 1.4.0, but didn't compile with 1.5.0. So ensure that 1.5.x doesn't install automatically I've used a ~ by the version number in package.json. Replace it with a caret only after testing. Alternatively, you can uninstall this dependency and remove its mention from .babelrc.

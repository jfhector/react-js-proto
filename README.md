# react-rapid-prototyping-boilerplate

Simple, ready to use boiler place setting up:
- Webpack
- Babel (presets-env, presets-react)
- React
- Styled components
- babel-plugin-styled-components

# Installation

1 Clone in a local folder
2 Run npm install
3 Run npm start

# Watch outs: ~ on babel-plugin-styled-components dependency in package.json

This set-up works with babel-plugin-styled-components 1.4.0, but didn't compile with 1.5.0. So ensure that 1.5.x doesn't install automatically I've used a ~ by the version number in package.json. Replace it with a caret only after testing.

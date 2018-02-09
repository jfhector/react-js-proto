const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const rewireStyledComponents = require('react-app-rewire-styled-components')

module.exports = function override(config, env) {
      config = rewireStyledComponents(config, env)
      config = rewireReactHotLoader(config, env)
      return config
}

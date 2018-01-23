# react-rapid-prototyping-boilerplate

Simple, ready to use boiler place setting up:
- Webpack
- Babel (presets-env, presets-react)
- React
- Styled components (babel-plugin-styled-components, for proper DevTools support)
- Eslint
- Prettier

# Installation

1 Download to a local folder

2 Run 'npm install' in your terminal

3 Run 'npm start'

# Recommended extensions on VSCode

This boiler plate makes use of these extensions:
- ESLint
- Prettier
- Stylelint
- vscode-styled-components

# Watch outs: ~ on babel-plugin-styled-components dependency in package.json

This set-up works with babel-plugin-styled-components 1.4.0, but didn't compile with 1.5.0. So ensure that 1.5.x doesn't install automatically I've used a ~ by the version number in package.json. Replace it with a caret only after testing.


# My VSCode user settings, including setup for Prettier and Stylelint

`{

      // ZOOM
      
      "window.zoomLevel": 2,
      
      // TAB SIZE
      
      "editor.tabSize": 6,
      
      "editor.detectIndentation": false,
      
      // SNIPPETS
      
      "editor.snippetSuggestions": "bottom",
      
      // EXPLORER
      
      "explorer.openEditors.visible": 0,
      
      "editor.minimap.enabled": false,
      
      "workbench.statusBar.visible": true,
      
      // PRETTIER
      
      // Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.
      
      "editor.formatOnSave": false,
      
      // Enable/disable default JavaScript formatter (For Prettier)
      
      "javascript.format.enable": false,
      
      // Use 'prettier-eslint' instead of 'prettier'. Other settings will only be fallbacks in case they could not be inferred from eslint rules.
      
      "prettier.eslintIntegration": false,
      
      // STYLELINT
      
      "stylelint.enable": true,
      
      "css.validate": false,
      
      "scss.validate": false
      
}`

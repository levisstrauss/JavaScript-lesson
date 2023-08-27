
//-------------- Babel ------------------->

/*
npm install --save-dev @babel/core @babel/cli @babel/preset-env

   - Create a .babelrc config file

       {
        "presets": ["@babel/preset-env"]
       }

   - Transpile JS:

        npx babel src --out-dir dist
*/


//-------------------- Webpack ---------------->
/*
       - Install Webpack:
       npm install --save-dev webpack webpack-cli

       - Create a webpack.config.js
       module.exports = {
         entry: './src/index.js',
         output: {
            filename: 'bundle.js',
            path: __dirname + '/dist'
         }
       };

       - Bundle JS
         npx webpack --config webpack.config.js
 */
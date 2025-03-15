const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // Ponto de entrada principal
  mode: 'development',    // Modo de desenvolvimento
  devServer: {
    port: 3001,           // Porta onde o Auth será servido
    historyApiFallback: true, // Redireciona todas as requisições para o index.html
  },
  output: {
    publicPath: 'http://localhost:3001/', // Caminho público para os assets
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,   // Para arquivos JS/JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'], // Suporte a React e ES6+
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Certifique-se de que aponta para o HTML
    }),
    new ModuleFederationPlugin({
        name: 'auth',
        filename: 'remoteEntry.js',
        exposes: {
            './AuthApp': './src/App',
        },
        remotes: {
          container: 'container@http://localhost:3000/remoteEntry.js',
        },
        shared: {
            react: {
                singleton: true,
                requiredVersion: '^19.0.0',
            },
            'react-dom': {
                singleton: true,
                requiredVersion: '^19.0.0',
            },
            'react-router-dom': { 
              singleton: true,
              requiredVersion: '"react-router-dom": "^7.1.5"'
            },
        },
    }),
  ],
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './index.js', // Ponto de entrada principal
  mode: 'development',    // Modo de desenvolvimento
  devServer: {
    port: 3003,           // Porta onde o Blog será servido
    historyApiFallback: true, // Redireciona todas as requisições para o index.html
  },
  output: {
    publicPath: 'http://localhost:3003/', // Caminho público para os assets
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,   // Para arquivos JS/JSX
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
        name: 'admin',
        filename: 'remoteEntry.js',
        exposes: {
            './AdminApp': './src/App',
        },
        remotes: {
          container: 'container@http://localhost:3000/remoteEntry.js',
          // blog: 'blog@http://localhost:3002/remoteEntry.js',
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
              requiredVersion: '^7.1.5'
            },
        },
    }),
  ],
};

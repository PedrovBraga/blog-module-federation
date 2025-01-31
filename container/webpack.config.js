const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // Entrada principal
  mode: 'development', // Modo de desenvolvimento
  output: {
    publicPath: 'http://localhost:3000/', // URL base do container
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3000, // Porta do container
    static: path.join(__dirname, 'dist'),
    hot: true, // Atualização ao vivo
  },
  module: {
    rules: [
      {
        test: /\.m?js$/, // Suporte a arquivos JS/JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Suporte a React e ES6+
          },
        },
      },
    ],
  },
  plugins: [
    // Plugin para HTML
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template base
    }),
    // Configuração do Module Federation
    new ModuleFederationPlugin({
      name: 'container', // Nome do container
      remotes: {
        auth: 'auth@http://localhost:3001/remoteEntry.js', // Remote do auth
        blog: 'blog@http://localhost:3002/remoteEntry.js', // Remote do blog
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
      },
    }),
  ],
};
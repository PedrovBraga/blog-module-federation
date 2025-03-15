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
    historyApiFallback: true, // Garante que rotas internas funcionem
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
            presets: [['@babel/preset-env', { targets: 'defaults' }], '@babel/preset-react'], // Suporte a React e ES6+
          },
        },
      },
      {
        test: /\.css$/, // Regra para processar arquivos CSS
        use: ['style-loader', 'css-loader'],
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
      filename: 'remoteEntry.js',
      exposes: {
        './BootstrapCSS': './src/bootstrap-css.js',
        './Layout': './src/components/Layout.js'
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
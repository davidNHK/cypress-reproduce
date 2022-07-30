import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      bundler: 'webpack',
      framework: 'react',
      webpackConfig: {
        externals: {},
        module: {
          rules: [
            {
              exclude: /node_modules/,
              test: /\.tsx?$/,
              use: {
                loader: 'babel-loader',
              },
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
          ],
        },
        resolve: {
          extensionAlias: {
            '.js': ['.js', '.jsx', '.tsx', '.ts'],
            '.jsx': ['.jsx', '.tsx'],
          },
        },
      },
    },
  },
  screenshotOnRunFailure: false,
  video: false,
});

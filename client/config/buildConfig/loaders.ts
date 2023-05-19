import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

export const loadersHandler = (isDevMode: boolean): RuleSetRule[] => {
  return [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
    },
    {
      test: /\.(css|scss)$/,
      exclude: /node_modules/,
      use: [
        isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              auto: true,
              localIdentName: isDevMode
                ? '[path][name]__[local]--[hash:base64:5]'
                : '[hash:base64:5]',
            },
          },
        },
        'sass-loader',
      ],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      ],
    },
  ];
};

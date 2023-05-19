import TerserPlugin from 'terser-webpack-plugin';

import { BuildOptions } from './types';

export const optimizationHandler = ({ isDevMode }: BuildOptions): any => {
  return isDevMode
    ? { minimize: false }
    : {
        minimizer: [
          new TerserPlugin({
            parallel: true,
            terserOptions: {
              compress: {
                passes: 2,
              },
            },
          }),
        ],
        splitChunks: {
          chunks: 'all',
        },
      };
};

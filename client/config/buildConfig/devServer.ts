import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types';

export const devServerHandler = ({ port, paths }: BuildOptions): DevServerConfiguration => {
  return {
    port,
    static: paths.public,
    hot: true,
    open: true,
    liveReload: true,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  };
};

import { Configuration } from 'webpack';

import { pluginsHandler } from './plugins';
import { loadersHandler } from './loaders';
import { optimizationHandler } from './optimization';
import { resolversHandler } from './resolvers';
import { devServerHandler } from './devServer';
import { BuildOptions } from './types';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { isDevMode, paths, mode } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: isDevMode ? '[name].js' : 'bundle.[chunkhash].js',
    },
    plugins: pluginsHandler(options),
    module: {
      rules: loadersHandler(isDevMode),
    },
    resolve: resolversHandler(),
    optimization: optimizationHandler(options),
    devtool: isDevMode ? 'eval-source-map' : 'eval-cheap-module-source-map',
    devServer: devServerHandler(options),
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};

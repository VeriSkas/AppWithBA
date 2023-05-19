import webpack, { Configuration } from 'webpack';

import { loadersHandler } from '../buildConfig/loaders';
import { resolversHandler } from '../buildConfig/resolvers';

export const webpackFinalConfig = async (
  config: Configuration,
  { configType }: any
): Promise<Configuration> => {
  const isDevMode = configType.toLowerCase() === 'development';

  config?.module?.rules?.push(...loadersHandler(isDevMode));
  config?.resolve?.extensions?.push(...(resolversHandler().extensions ?? []));
  config?.plugins?.push(
    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(isDevMode),
    })
  );

  return config;
};

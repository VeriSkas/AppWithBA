import path, { join } from 'path';
import { Configuration } from 'webpack';

import { buildWebpackConfig } from './config/buildConfig//buildWebpackConfig';
import * as types from './config/buildConfig/types';

const __filename = path.resolve(process.cwd(), 'webpack.config.ts');
const __dirname = path.dirname(__filename);

export default (env: types.Env, argv: any): Configuration => {
  const isDevMode: boolean = argv.mode === 'development';
  const paths: types.BuildPath = {
    entry: join(__dirname, 'src', 'index.tsx'),
    entryHtml: join(__dirname, 'public', 'index.html'),
    build: join(__dirname, 'build'),
    public: join(__dirname, 'public'),
  };
  const mode: types.BuildMode = env.mode ?? 'development';
  const port: number = env.port ?? 3000;

  return buildWebpackConfig({
    isDevMode,
    paths,
    mode,
    port,
  });
};

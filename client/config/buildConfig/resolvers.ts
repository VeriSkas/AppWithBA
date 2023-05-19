import { ResolveOptions } from 'webpack';

export const resolversHandler = (): ResolveOptions => {
  return {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
  };
};

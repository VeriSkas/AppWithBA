export interface Env {
  mode?: BuildMode;
  port?: number;
}

export type BuildMode = 'development' | 'production';

export interface BuildOptions {
  isDevMode: boolean;
  paths: BuildPath;
  mode: BuildMode;
  port: number;
}

export interface BuildPath {
  [key: string]: string;
}

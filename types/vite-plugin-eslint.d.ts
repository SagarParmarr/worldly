import type { PluginOption } from 'vite';

export interface ViteEslintPluginOptions {
  cache?: boolean;
  include?: string | string[];
  exclude?: string | string[];
  formatter?: string;
  lintOnStart?: boolean;
  emitWarning?: boolean;
  emitError?: boolean;
  [key: string]: unknown;
}

declare module 'vite-plugin-eslint' {
  export default function eslintPlugin(
    options?: ViteEslintPluginOptions
  ): PluginOption;
}

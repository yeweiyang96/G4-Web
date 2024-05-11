// extra-webpack.config.ts
import { Configuration } from 'webpack';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

export default {
  plugins: [
    new NodePolyfillPlugin({
      excludeAliases: ['console'],
    }),
  ],
  output: {
    publicPath: 'auto',
    scriptType: 'text/javascript',
  },
  // module: {
  //   parser: {
  //     javascript: {
  //       // importMeta: false,
  //       // url: true,
  //     },
  //   },
  // },
  resolve: {
    fallback: {
      fs: false,
      // url: require.resolve('url/'),
      // 'worker-loader': false,
    },
  },
} as Configuration;

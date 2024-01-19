import { BuildOptions } from "../types/types";
import { removeDatatestIdBabelPlugin } from "./removeDatatestIdBabelPlugin";

export function buildBabelLoader(options: BuildOptions) {
    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';

    const plugins = [];

    if (isProd) {
        plugins.push([
            removeDatatestIdBabelPlugin,
            {
                props: ['data-testid']
            }
        ]);
    }

    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                // в конфиге бабеля тоже самое, можно оставить только в одном месте
                presets: [
                    '@babel/preset-env',
                    "@babel/preset-typescript",
                    [
                        "@babel/preset-react",
                        {
                            "runtime": isDev ? "automatic" : "classic"
                        }
                    ],
                ],
                plugins: plugins.length ? plugins : undefined,
            }
        }
    };
}
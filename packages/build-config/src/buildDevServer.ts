import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        open: true,
        // это только для дев, если раздавать статику через nginx то нвдо делать проксирование на index.html
        historyApiFallback: true,
        hot: true,
    };
}
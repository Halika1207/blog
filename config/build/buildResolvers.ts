import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";
import path from "path";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [path.resolve(__dirname, options.paths.src), 'node_modules'],
        alias: {
            "@widgets": path.resolve(__dirname, options.paths.src + "/widgets"),
            "@entities": path.resolve(__dirname, options.paths.src + "/entities"),
            "@shared": path.resolve(__dirname, options.paths.src + "/shared"),
            "@features": path.resolve(__dirname, options.paths.src + "/features"),
            "@pages": path.resolve(__dirname, options.paths.src + "/pages"),
        },
        mainFiles: ["index"],
    }
}

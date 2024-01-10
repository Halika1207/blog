import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'; //to access built-in plugins

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin(
          {template: path.resolve(__dirname, 'public', 'index.html')}
        ),
    ],
    
};

export default config;

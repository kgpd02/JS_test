var path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    module: {
        rules: [
            //es6
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            //scss
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        disable: true, // webpack@2.x and newer
                    },
                },
            ],
            }
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/'),
            core: path.resolve(__dirname, 'src/core/'),
            root: path.resolve(__dirname, '')
        }
    }
};

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode : 'development',
    entry : {
        bundle : path.resolve(__dirname, 'src/index.js')
    },
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : '[name].js',
    },

    plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        }),
        
      ],

 

    module : {
        rules : [
           {
            test : /\.scss$/,
            use : [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ],
           },
        ] 
    },

  
}
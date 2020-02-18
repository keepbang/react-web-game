const path = require('path');//경로를 쉽게 준다.
const webpack = require('webpack');

module.exports = {
    name: 'test_Webpack', //이름설정
    mode: 'development', //모드(개발용)
    devtool: 'eval', //빠르게 하겠다는뜻
    resolve: {
        extensions : ['.js','.jsx']
    },

    entry: {
        app: ['./App'],
    },//입력


    module:{
        rules:[{
          test: /\.jsx?/,
          loader: 'babel-loader',
          options: {
              presets:[
                  ['@babel/preset-env',{
                      targets : {
                          browsers: ['> 5% in KR', 'last 2 chrome versions'],
                      },
                      debug : true,
                  }]
                  ,'@babel/preset-react',
              ],
              plugins: [
                  'react-hot-loader/babel'
              ],
          },
        }],
      },
      plugins: [
          
      ],

    output: {
        path: path.join(__dirname, 'dist'),//__dirname: 현재폴더 안에있는 dist
        filename: 'app.js',
        publicPath:'/dist/',
    }//출력
};


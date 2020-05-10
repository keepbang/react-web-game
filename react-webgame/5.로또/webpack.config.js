const path = require('path');//경로를 쉽게 준다.
const webpack = require('webpack');

module.exports = {
    name: 'lotto_webpack', //이름설정
    mode: 'development', //모드(개발용)
    devtool: 'eval', //빠르게 하겠다는뜻
    resolve: {
        extensions : ['.js','.jsx']
    },

    entry: {
        app: ['./client'],
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
                  '@babel/plugin-proposal-class-properties',//class형 컴포넌트 사용시
                  'react-hot-loader/babel'
              ],
          },
        }],
      },
      plugins: [
          
      ],

    output: {
        path: path.join(__dirname, 'dist'),//__dirname: 현재폴더 안에있는 dist
        filename: 'app.js',//해당 파일로 모든 스크립트들이 모인다
        publicPath:'/dist/',
    }//출력
};
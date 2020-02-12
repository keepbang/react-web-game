const path = require('path');//경로를 쉽게 준다.

module.exports = {
    name: 'word-relay-setting', //이름설정
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
                '@babel/preset-env','@babel/preset-react'
            ],
        },
      }],
    },

    output: {
        path: path.join(__dirname, 'dist'),//__dirname: 현재폴더 안에있는 dist
        filename: 'app.js'
    }//출력
};


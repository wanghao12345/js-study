/**
 * Created by wanghao on 2019/3/17
 */

// webpack打包极限优化--基本介绍

// 1.为什么我们需要构建工具

// (a)转换ES6语法
// (b)转换JSX
// (c)CSS前缀补全/预处理器
// (d)压缩混淆
// (e)图片压缩


// 2.初级分析-使用Webpack内置的stats

// (a)stats：构建的统计信息
// (b)package.json中使用status
/*
"scripts": {
  "build:stats": "webpack ---env production --json > stats.json"
  ...
}
*/
// (c)Node API中使用
/*
const webpack = require('webpack');
const config = require('./webpack.config.js')("production");

webpack(config, (err, stats) => {
  if (err) {
    return console.error(err);
  }
  if (stats.hasErrors()) {
    return console.error(stats.toString("errors-only"))
  }
  console.log(stats);
})
*/

// 3.速度分析-使用speed-measure-webpack-plugin
/*
const speedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const webpackConfig = smp.wrap({
  plugins: {
    new MyPlugin(),
    new MyOtherPlugin()
  }
})
可以看到每个loader和插件执行耗时
*/

// 4.体积分析-使用webpack-bundle-analyzer
/*
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  plugins: {
    new BundleAnalyzerPlugin()
  }
}
构建完成后会在8888端口展示各个打包后文件的大小
*/

// webpack打包极限优化--构建速度优化

// 1.速度优化策略
// (a)使用webpack4
// (b)多进程/多实例构建
// (c)分包
// (d)缓存
// (e)缩小构建目标

// 2.使用webpack4-优化原因
// (a)V8带来的优化（for of替代forEach、Map和Set替代Object、includes替代indexOf）
// (b)默认使用更快的md4 hash算法
// (c)webpacks AST可以直接从loader传递给AST，减少解析时间
// (d)使用字符串方法替代正则表达式

// 3.多进程/多实例-使用HappyPack解析资源
/*
原理：每次webpack解析一个模块，HappyPack会将它及它的依赖分配给worker线程中
exports.plugins = {
  new HappyPack({
    id: 'jsx',
    threads: 4, // 固定线程数，但是不建议
    loaders: ['babel-loader']
  }),
  new HappyPack({
    id: 'styles',
    threads: 2, // 固定线程数，但是不建议
    loaders: ['style-loader', 'css-loader', 'less-loader']
  })
}
*/

// 4.多进程/多实例-并行压缩
// 方法一：使用parallel-uglify-plugin插件（webpack3使用）
/*
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
module.exports = {
  plugins: [
    new ParallelUglifyPlugin({
      uglifyJS: {
        output:{
          beautity: false,
          comments: false,
        },
        compress: {
          warnings: false,
          drop_console: true,
          collapse_vars: true,
          reduce_vars: true
        }
      }
    })
  ]
}
*/

// 方法二：使用uglifyjs-webpack-plugin开启parallel参数（webpack4使用）
/*
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false,
        parse: {},
        compress: {},
        mangle: true,
        output: null,
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_fnames: false
      },
      parallel: true
    })
  ]
}
*/

// 5.分包-设置Externals
/*
思路：将react、react-dom基础包通过cdn引入，不打入bundle中
方法：使用html-webpack-externals-plugin
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
plugins: [
  new HtmlWebpackExternalsPlugin({
    external: [
      {
        module: 'react',
        entry: '........./react-with-addons.min.js?_bid=313',
        global: 'React'
      },
      {
        module: 'react-dom',
        entry: '........./react-dom.min.js?_bid=313',
        global: 'ReactDOM'
      }
    ]
  })
]
*/

// 6.进一步分包-预编译资源模块
/*
思路：将react、react-dom、redux、react-redux基础包和业务基础包打包成一个文件。
方法：使用DLLPlugin进行分包，DllReferencePlugin对manifest.json引用
module.exports = {
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: './build/library/[name].json'
    })
  ]
}
*/

// 7.缓存
/*
目的：提升二次构建速度
方法：使用HardSourceWebpackPlugin或者cache-loader
比较推荐使用HardSourceWebpackPlugin，速度更快
*/

// 8.缩小构建目标
/*
目的：尽可能的少构建模块
比如babel-loader不解析node_modules

module.exports = {
  rules: {
    test: /\.js$/,
    loader: 'happypack/loader',
    exclude: 'node_modules'
  }
}

*/

// webpack打包极限优化--构建体积优化

// 1.体积优化策略
// (a)Scope Hoisting
// (b)Tree-shaking
// (c)公共资源分离
// (d)图片压缩
// (e)动态Polyfill

// 2.Scope Hoisting
/*
原理：将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突
对比：通过scope hoisting可以减少函数声明代码
代码示例：
module.exports = {
  plugins: [
    new webpack.opimize.ModuleConcatenationPlugin()
  ]
}
要求：必须是ES6的语法，CJS的方式不支持
*/

// 3.Tree-shaking
/*
概念：1个模块可能有多个方法，只要其中的某个方法使用到了，则整个文件都会被打到bundle里面去，Tree-shaking
就是只把用到的方法打入bundle，没用到的方法会在uglify阶段被删掉
使用：webpack默认支持，在.babelrc里设置modules：false即可
要求：必须是ES6的语法，CJS的方式不支持
*/

// 4.公共资源分离
/*
目的：提取多页面公共JS chunk代码
使用：webpack3使用CommonsChunkPlugin
     webpack4使用SplitChunksPlugin
*/

// 5.图片压缩
/*
要求：基于Node库的imagemin或者tinypng API
使用：配置image-webpack-loader
*/




































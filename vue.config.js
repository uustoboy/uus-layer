module.exports = {
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // 启用 CSS modules for all css / pre-processor files.
        // modules: false,
        loaderOptions: {
            sass: {
                prependData: '@import "./node_modules/base_mixins/_base_mixins.scss";'
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        requireModuleExtension: false
    }
    // CSS 相关选项
    // css: {
    //     // 项目package.json查看@vue/cli-service版本号进行配置
    //     // v3用modules v4用requireModuleExtension
    //     modules: false,
    //     // https://github.com/vuejs/vue-cli/blob/dev/docs/zh/guide/css.md#css-modules
    //     // 如果你想去掉文件名中的 .module，可以设置 vue.config.js 中的 css.requireModuleExtension 为 false
    //     // requireModuleExtension: false,
    //     // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    //     extract: true, //Default: 生产环境下是 true，开发环境下是 false
    //     requireModuleExtension: false,
    //     // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
    //     sourceMap: false,
    //     //向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
    //     loaderOptions: {
    //         //配置全局样式变量
    //         // https://cli.vuejs.org/zh/guide/css.html
    //         css: {
    //             loaderOptions: {
    //                 sass: {
    //                     // @/ 是 src/ 的别名
    //                     // 所以这里假设你有 `src/variables.sass` 这个文件
    //                     // 注意：在 sass-loader v7 中，这个选项名是 "data"
    //                     data: `
    //                         @import "./node_modules/base_mixins/_base_mixins.scss";
    //                         $src: "${process.env.VUE_APP_OSS_SRC}";
    //                     `
    //                 }
    //             }
    //         }, //Default: {}
    //         // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 true 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
    //     }
    // }
}
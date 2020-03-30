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
    },
    chainWebpack: config => {
        config.module
            .rule("eslint")
            .use("eslint-loader")
            .loader("eslint-loader")
            .tap(options => {
            options.fix = true;
            return options;
            });
    }
    
}
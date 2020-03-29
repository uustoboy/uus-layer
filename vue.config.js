module.exports = {
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // 启用 CSS modules for all css / pre-processor files.
        modules: false,
        loaderOptions: {
            sass: {
                data: `
                    @import "./node_modules/base_mixins/_base_mixins.scss";
                    $src: "${process.env.VUE_APP_OSS_SRC}";
                `
            }
        }
    }
}
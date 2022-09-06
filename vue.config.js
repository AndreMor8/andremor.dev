module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                options.compilerOptions = {
                    isCustomElement(tag) {
                        switch (tag) {
                            case 'lite-youtube': return true;
                            default: return false;
                        }
                    }
                };
                return options;
            })
    },
    configureWebpack: {
        performance: {
            maxEntrypointSize: 512000,
            maxAssetSize: 512000,
        }
    }
}
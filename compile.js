var path = require('path')
module.exports = {
    less: {
        plugins: []
    },
    babel: {
        presets: [
            "es2015"
        ],
        plugins: [
            [
               "transform-react-jsx",
               {"pragma": "require(\"react\").createElement"}
            ],
            "transform-flow-strip-types",
            "syntax-flow",
            "syntax-jsx",
            "transform-react-display-name",
            "transform-decorators-legacy",
            "transform-class-properties"
        ]
    },
    test: {
        files: [
            (function () {
                if (process.env.files) {
                    return process.env.files
                }
                else {
                    return 'test/**/*.test.js'
                }
            })()
        ],
        launchers: {
                // ie family
                sl_ie_9: {
                    base: 'SauceLabs',
                    browserName: 'internet explorer',
                    platform: 'Windows 7',
                    version: '9'
                },
                sl_ie_10: {
                    base: 'SauceLabs',
                    browserName: 'internet explorer',
                    platform: 'Windows 8',
                    version: '10'
                },
                sl_ie_11: {
                    base: 'SauceLabs',
                    browserName: 'internet explorer',
                    platform: 'Windows 8.1',
                    version: '11'
                },
                sl_edge: {
                    base: 'SauceLabs',
                    browserName: 'MicrosoftEdge',
                    platform: 'Windows 10'
                },
                // the cool kids
                sl_chrome: {
                    base: 'SauceLabs',
                    browserName: 'chrome',
                    platform: 'Windows 7'
                },
                sl_firefox: {
                    base: 'SauceLabs',
                    browserName: 'firefox',
                    platform: 'Windows 7'
                },
                sl_mac_safari: {
                    base: 'SauceLabs',
                    browserName: 'safari',
                    platform: 'Windows 7'
                },
                sl_mac_safari: {
                    base: 'SauceLabs',
                    browserName: 'safari',
                    platform: 'OS X 10.10'
                },        // mobile
                sl_ios_safari_8: {
                    base: 'SauceLabs',
                    browserName: 'iphone',
                    version: '8.4'
                },
                sl_ios_safari_9: {
                    base: 'SauceLabs',
                    browserName: 'iphone',
                    version: '9.3'
                },
                sl_android_4_4: {
                    base: 'SauceLabs',
                    browserName: 'android',
                    version: '4.4'
                },
                sl_android_5_1: {
                    base: 'SauceLabs',
                    browserName: 'android',
                    version: '5.1'
                }
        }
    },
    fis: function (fis) {

    },
    alias: {
        'vue': 'vue/dist/vue.js',
        [path.resolve('./lib/index.css')]: path.resolve('./lib/index.less')
    }
}

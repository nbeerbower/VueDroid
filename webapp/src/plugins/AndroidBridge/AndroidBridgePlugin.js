const AndroidBridgePlugin = {
    install(Vue, options) {
        const { bridge } = options;
        Vue.prototype.$bridge = bridge;

        // load modules
        const files = require.context('./modules', false, /\.js$/);
        files.keys().forEach((key) => {
          const filename = key.replace(/(\.\/|\.js)/g, '');
          require('./modules/' + filename).default(bridge);
        });
    }
};

export default AndroidBridgePlugin;

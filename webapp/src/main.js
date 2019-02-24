import Vue from 'vue';
import App from './App.vue';

import AndroidBridgePlugin from './plugins/AndroidBridge/AndroidBridgePlugin';

Vue.config.productionTip = false;

function setupWebViewJavascriptBridge(callback) {
  const bridge = window.WebViewJavascriptBridge || window.WKWebViewJavascriptBridge;
  if (bridge) { return callback(bridge); }
  const callbacks = window.WVJBCallbacks || window.WKWVJBCallbacks;
  if (callbacks) { return callbacks.push(callback); }
  window.WVJBCallbacks = window.WKWVJBCallbacks = [callback];
}

function startVue() {
  new Vue({
    render: h => h(App),
  }).$mount('#app');
}

setupWebViewJavascriptBridge((bridge) => {
  Vue.use(AndroidBridgePlugin, { bridge });
  startVue();
});

// Start the Vue app if in dev mode
if (process.env.NODE_ENV === 'development') {
  // log out handler calls
  Vue.prototype.$bridge = {
    registerHandler: (handler) => {
      console.log('registerHandler: %s', handler);
    },
    callHandler: (handler) => {
      console.log('callHandler: %s', handler);
    }
  };

  startVue();
}

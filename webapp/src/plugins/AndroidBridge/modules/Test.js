export default (bridge) => {
  bridge.registerHandler('ping', (data, callback) => {
    callback('pong');
  });
};

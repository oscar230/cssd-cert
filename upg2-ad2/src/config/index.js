/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
(function init() {
  const router = require('router');
  const appInfo = require('appInfo');

  router.get('/', (req, res) => {
    res.render({
      title: appInfo.appName,
    });
  });
}());

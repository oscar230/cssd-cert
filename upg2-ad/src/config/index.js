/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
// index.js
(function init() {
  const router = require('router');
  const portletContextUtil = require('PortletContextUtil');
  const properties = require('Properties');
  const appInfo = require('appInfo');

  router.get('/', (req, res) => {
    const currentUserEmail = properties.get(portletContextUtil.getCurrentUser(), 'mail');
    const { appName } = appInfo;

    res.render({
      currentUserEmail,
      appName,
    });
  });
}());

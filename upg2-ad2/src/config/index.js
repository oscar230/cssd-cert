/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
(function init() {
  const router = require('router');
  const portletContextUtil = require('PortletContextUtil');
  const properties = require('Properties');

  router.get('/', (req, res) => {
    res.render({
      title: properties.get(portletContextUtil.getCurrentPage(), 'displayName'),
    });
  });
}());

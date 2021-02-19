/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
define((require) => {
  const Component = require('Component');
  const logUtil = require('LogUtil');
  const adsTemplate = require('./template/Ads');
  const adTemplate = require('./template/Ad');
  const adEditTemplate = require('./template/adEditTemplate');

  return Component.extend({
    getTemplate() {
      if (this.state.route === '/') {
        return adsTemplate;
      }
      if (this.state.route === '/ad') {
        return adTemplate;
      }
      if (this.state.route === '/edit') {
        return adEditTemplate;
      }
      logUtil.error(`Route ${this.state.route} does not exist.`);
    },
    className: 'up2-ad',
    filterState: ({ route, name }) => ({ route, name }),
  });
});

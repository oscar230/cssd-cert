/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-undef
define((require) => {
  const PCU = require('PortletContextUtil');
  const properties = require('Properties');
  const logUtil = require('LogUtil');

  return {
    currentUser: () => {
      try {
        return PCU.getCurrentUserIdentity();
      } catch (e) {
        logUtil.error(e);
        return e;
      }
    },

    getUser: (id) => {
      try {
        return {
          id,
          name: properties.get('id', 'displayName'),
        };
      } catch (e) {
        logUtil.error(e);
        return e;
      }
    },
  };
});

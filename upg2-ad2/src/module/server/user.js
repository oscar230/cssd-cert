/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-undef
define((require) => {
  const PCU = require('PortletContextUtil');
  const properties = require('Properties');
  const logUtil = require('LogUtil');

  return {
    currentUserName: () => {
      try {
        return PCU.getCurrentUserIdentity().toString();
      } catch (e) {
        logUtil.error(e);
        return e;
      }
    },

    currentUserId: () => {
      try {
        return PCU.getCurrentUser().toString();
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

/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
// AdsDS.js
define((require) => {
  const storage = require('storage');
  const ads = storage.getCollectionDataStore('ads');
  const logUtil = require('LogUtil');

  // Define this module
  return {
    getAllAds: (max = 10) => {
      try {
        return ads.find('*', parseInt(max, 10)).toArray();
      } catch (e) {
        logUtil.error(e);
        return false;
      }
    },

    getAd: (id) => {
      try {
        return ads.get(id).toArray();
      } catch (e) {
        logUtil.error(e);
        return false;
      }
    },

    editAd: (id, member) => {
      try {
        ads.set(id, member).instantIndex();
      } catch (e) {
        logUtil.error(e);
        return false;
      }
      return true;
    },

    remove: (id) => {
      try {
        ads.remove(id).instantIndex();
      } catch (e) {
        logUtil.error(e);
      }
    },

    search: (condition) => {
      const query = `ds.analyzed.name:${condition}*`;
      try {
        return ads.find(query, 100).toArray();
      } catch (e) {
        logUtil.error(e);
        return false;
      }
    },
  };
});

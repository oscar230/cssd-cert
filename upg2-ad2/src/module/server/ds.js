/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-undef
define((require) => {
  const storage = require('storage');
  const ads = storage.getCollectionDataStore('ads');
  const logUtil = require('LogUtil');

  const MAX = 100;

  return {
    get(id) {
      try {
        if (typeof id !== 'undefined') {
          return ads.get(id);
        }
        return ads.find('*', parseInt(MAX, 10));
      } catch (e) {
        logUtil.error(e);
        return false;
      }
    },
    search(term) {
      try {
        return ads.find(term, parseInt(MAX, 10));
      } catch (e) {
        logUtil.error(e);
        return false;
      }
    },
    add(ad) {
      try {
        const data = ads.add(ad);
        ads.instantIndex(data.dsid);
        return true;
      } catch (e) {
        logUtil.error(e);
        return false;
      }
    },
    edit(id, ad) {
      try {
        ads.set(id, ad);
        return true;
      } catch (e) {
        logUtil.error(e);
        return false;
      }
    },
    remove(id) {
      try {
        ads.remove(id).instantIndex();
        return true;
      } catch (e) {
        logUtil.error(e);
        return false;
      }
    },
  };
});

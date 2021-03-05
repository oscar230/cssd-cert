/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
// /module/server/dataStoreProvider.js
define((require) => {
  const storage = require('storage');
  const members = storage.getCollectionDataStore('members2');
  const logUtil = require('LogUtil');

  // Define this module
  return {
    getAllMembers: () => {
      const result = members.find('*', 100);

      try {
        data = result.toArray();
        return data;
      } catch (e) {
        logUtil.error(e);
        return false;
      }
    },

    editMember: (id, member) => {
      try {
        const updateMember = members.set(id, member);
        updateMember.instantIndex();
      } catch (e) {
        logUtil.error(e);
      }

      return true;
    },

    remove: (id) => {
      try {
        const removeMember = members.remove(id);
        removeMember.instantIndex();
      } catch (e) {
        logUtil.error(e);
      }
    },

    search: (condition) => {
      const query = `ds.analyzed.name:${condition}*`;
      const results = members.find(query, 100);

      try {
        data = results.toArray();
        return data;
      } catch (e) {
        logUtil.error(e);
      }
    },
  };
});

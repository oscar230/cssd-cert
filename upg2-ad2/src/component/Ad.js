/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-undef
define((require) => {
  const Component = require('Component');
  const template = require('/template/ad');
  const user = require('/module/server/user');

  return Component.extend({
    tagName: 'tr',
    template,
    filterState() {
      return {
        owner: user.currentUserId(),
      };
    },
  });
});

/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
define((require) => {
  const ListComponent = require('ListComponent');

  return ListComponent.extend({
    childProperty: 'adList',
    childComponentPath: 'Ad',
    filterState: ({ adList }) => ({ adList }),
  });
});

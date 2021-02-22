/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
define((require) => {
  const ListComponent = require('ListComponent');

  return ListComponent.extend({
    tagName: 'ul',
    childProperty: 'ads',
    childComponentPath: 'Ad',
    filterState: ({ ads }) => ({ ads }),
  });
});

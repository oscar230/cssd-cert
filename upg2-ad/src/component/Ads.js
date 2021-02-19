/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-undef
define((require) => {
  const ListComponent = require('ListComponent');

  return ListComponent.extend({
    tagName: 'ul',
    childProperty: 'ads',
    childComponentPath: 'Ads',
    filterState: ({ ads }) => ({ ads }),
  });
});

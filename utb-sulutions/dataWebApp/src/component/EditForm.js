/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
define((require) => {
  const Component = require('Component');
  const template = require('/template/editForm');
  return Component.extend({
    template,

    filterState: ({ member }) => ({ member }),
  });
});

/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-undef
define((require) => {
  const Component = require('Component');
  const template = require('/template/main');

  return Component.extend({
    template,

    className: 'webapp-boilerplate',

    filterState: ({ message }) => ({
      message,
    }),
  });
});

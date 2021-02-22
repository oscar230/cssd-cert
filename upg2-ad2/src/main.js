/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-undef
define((require) => {
  const Component = require('Component');
  const template = require('/template/main');
  const addedTemplate = require('/template/added');
  const addTemplate = require('/template/add');

  return Component.extend({
    getTemplate() {
      if (this.state.route === '/added') {
        return addedTemplate;
      }
      if (this.state.route === '/add') {
        return addTemplate;
      }
      // Fallback
      return template;
    },
    className: 'upg2-ad2',
    filterState: ({ route, title, message }) => ({ route, title, message }),
  });
});

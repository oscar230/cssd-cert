/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-undef
define((require) => {
  const Component = require('Component');
  const template = require('/template/main');
  const displayTemplate = require('/template/display');
  const addTemplate = require('/template/add');
  const editTemplate = require('/template/edit');
  const reportTemplate = require('/template/report');

  return Component.extend({
    // Selector for templates based on route
    getTemplate() {
      if (this.state.route === '/add') {
        return addTemplate;
      }
      if (this.state.route === '/ad') {
        return displayTemplate;
      }
      if (this.state.route === '/edit') {
        return editTemplate;
      }
      if (this.state.route === '/report') {
        return reportTemplate;
      }
      // Fallback
      return template;
    },
    className: 'upg2-ad2',
    filterState: ({ route }) => ({ route }),
  });
});

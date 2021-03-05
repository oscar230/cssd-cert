/* eslint-disable import/no-absolute-path */
/* eslint-disable func-names */
/* eslint-disable object-shorthand */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-undef
define((require) => {
  const Component = require('Component');
  const template = require('/template/main');
  const thanksTemplate = require('/template/thanks');
  const membersTemplate = require('/template/members');
  const editTemplate = require('/template/edit');

  return Component.extend({
    getTemplate: function () {
      if (this.state.route === '/signup') {
        return thanksTemplate;
      }
      if (this.state.route === '/members') {
        return membersTemplate;
      }
      if (this.state.route === '/edit') {
        return editTemplate;
      }
      return template;
    },
    className: 'webapp-boilerplate',

    filterState: ({ route, name }) => ({ route, name }),
  });
});

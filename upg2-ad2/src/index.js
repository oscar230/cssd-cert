/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
(function init() {
  const router = require('router');
  const i18n = require('i18n');

  router.get('/', (req, res) => {
    const title = i18n.get('title');
    const message = i18n.get('showingAll');
    res.render('/', {
      title,
      message,
    });
  });
}());

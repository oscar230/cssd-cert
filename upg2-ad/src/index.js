/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
(function init() {
  const router = require('router');

  router.get('/', (req, res) => {
    res.render('/', {});
  });
}());

/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
(function init() {
  const router = require('router');
  const i18n = require('i18n');
  const ads = require('/module/server/ds');

  router.get('/', (req, res) => {
    res.render('/', {
      title: i18n.get('title'),
      message: i18n.get('showingAll'),
    });
  });

  router.get('/:id', (req, res) => {
    res.render('/', {
      title: i18n.get('title'),
      message: i18n.get('showingSome'),
      id: req.params.id,
    });
  });

  router.post('/', (req, res) => {
    ads.add({
      title: req.params.title,
      content: req.params.content,
      link: (new URL(req.params.link)).href,
    });
    res.render('/posted', {
      title: i18n.get('title'),
      message: i18n.get('added'),
    });
  });
}());

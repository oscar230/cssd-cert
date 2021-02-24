/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
(function init() {
  const router = require('router');
  const ads = require('/module/server/ds');
  const user = require('/module/server/user');

  // HTML for all list and ROOT
  router.get('/', (req, res) => {
    res.render('/', {
      adList: ads.get(),
    });
  });

  // HTML get one specfic
  router.get('/ad/:id', (req, res) => {
    res.render('/ad', {
      ad: ads.get(req.params.id),
    });
  });

  // HTML for adding
  router.get('/add', (req, res) => {
    res.render('/add');
  });

  // DS Add
  router.post('/add', (req, res) => {
    ads.add({
      title: req.params.title,
      content: req.params.content,
      link: req.params.link,
      price: req.params.price,
      imageLink: req.params.imageLink,
      contact: user.currentUser(),
    });
    res.redirect('/');
  });

  // DS Edit
  router.post('/edit', (req, res) => {
    ads.edit(req.params.id, {
      title: req.params.title,
      content: req.params.content,
      link: req.params.link,
      price: req.params.price,
      imageLink: req.params.imageLink,
    });
    res.redirect('/');
  });

  // DS Remove
  router.post('/remove', (req, res) => {
    ads.remove(req.params.id);
    res.redirect('/');
  });
}());

/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
(function init() {
  const router = require('router');
  const ads = require('/module/server/ds');
  const user = require('/module/server/user');
  const randomAd = require('/module/server/randomAd');

  // HTML for all list and ROOT
  router.get('/', (req, res) => {
    res.render('/', {
      adList: ads.get(),
    });
  });

  // HTML get one specfic
  router.get('/ad', (req, res) => {
    res.render('/ad', {
      ad: ads.get(req.params.id),
    });
  });

  // HTML for adding
  router.get('/add', (req, res) => {
    res.render('/add');
  });

  // HTML for editing
  router.get('/edit', (req, res) => {
    res.render('/edit', {
      ad: ads.get(req.params.id),
    });
  });

  // DS Random ad
  router.post('/rnd', (req, res) => {
    ads.add(randomAd.getAd(user.currentUserId()));
    res.render('/', {
      adList: ads.get(),
    });
  });

  // DS Add
  router.post('/add', (req, res) => {
    const r = ads.add({
      title: req.params.title,
      content: req.params.content,
      link: req.params.link,
      price: req.params.price,
      imageLink: req.params.imageLink,
      contact: user.currentUserId(),
    });
    res.send(JSON.stringify(r));
    res.render('/', {
      adList: ads.get(),
    });
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
    res.render('/', {
      adList: ads.get(),
    });
  });

  // DS Remove
  router.post('/remove', (req, res) => {
    ads.remove(req.params.id);
    res.render('/', {
      adList: ads.get(),
    });
  });
}());

// res.redirect('/'); Jag kunde inte lista ut hur denna funkar, hade varit bra
// på vissa ställen. Mvh Oscar.

/* eslint-disable prefer-const */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
(function init() {
  const router = require('router');
  const ads = require('/module/server/ds');
  const user = require('/module/server/user');
  const randomAd = require('/module/server/randomAd');
  const mail = require('/module/server/mail');
  let appData = require('appData');

  // Users need to authenticate before.
  const authenticatedPaths = [
    '/add',
    '/edit',
    '/rnd',
    '/add',
  ];

  const maxAdsPerUser = parseInt(appData.get('maxNum'), 10);

  // Middleware for authenticated links
  router.use((req, res, next) => {
    if (authenticatedPaths.includes(req.path) && user.currentUserId() === 'Anonymous') {
      res.send('<p><b>Error!</b><br>You need to authenticate before performing this opertion!</p><br><a href="/">Go home</a>');
    } else {
      next();
    }
  });

  // HTML for all list and ROOT
  router.get('/', (req, res) => {
    res.render('/', {
      adList: ads.get(),
      anon: user.currentUserId() === 'Anonymous',
      canAdd: ads.get().filter((a) => a.contact === user.currentUserId()).length < maxAdsPerUser,
    });
  });

  // HTML get ad and display
  router.get('/ad', (req, res) => {
    const ad = ads.get(req.params.id);
    res.render('/ad', {
      ad,
      reports: ad.reports,
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

  // HTML for reporting
  router.get('/report', (req, res) => {
    const ad = ads.get(req.params.id);
    if (typeof ad !== 'undefined' && user.currentUserId() !== ad.contact) {
      res.render('/report', {
        ad,
      });
    } else {
      res.send('<p>You cannot report your own content!</p>');
    }
  });

  // DS Random ad
  router.post('/rnd', (req, res) => {
    if (ads.get().filter((a) => a.contact === user.currentUserId()).length < maxAdsPerUser) {
      ads.add(randomAd.getAd(user.currentUserId()));
    } else {
      res.send('<p>Ad limit reached!</p>');
    }
    res.render('/', {
      adList: ads.get(),
      anon: user.currentUserId() === 'Anonymous',
    });
  });

  // DS Add
  router.post('/add', (req, res) => {
    if (ads.get().filter((a) => a.contact === user.currentUserId()).length < maxAdsPerUser) {
      ads.add({
        title: req.params.title,
        content: req.params.content,
        link: req.params.link,
        price: req.params.price,
        imageLink: req.params.imageLink,
        contact: user.currentUserId(),
        contactNumber: req.params.contactNumber,
        contactEmail: req.params.contactEmail,
        reports: [],
      });
    } else {
      res.send('<p>Ad limit reached!</p>');
    }
    res.render('/', {
      adList: ads.get(),
      anon: user.currentUserId() === 'Anonymous',
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
      contact: user.currentUserId(),
      contactNumber: req.params.contactNumber,
      contactEmail: req.params.contactEmail,
      reports: ads.get(req.params.id).reports,
    });
    res.render('/', {
      adList: ads.get(),
      anon: user.currentUserId() === 'Anonymous',
    });
  });

  // DS Remove
  router.post('/remove', (req, res) => {
    ads.remove(req.params.id);
    res.render('/', {
      adList: ads.get(),
      anon: user.currentUserId() === 'Anonymous',
    });
  });

  // DS Remove all
  router.post('removeAll', (req, res) => {
    const CUI = user.currentUserId();
    ads.get()
      .filter((adc) => adc.contact === CUI)
      .forEach((adr) => ads.remove(adr.dsid));
    res.render('/', {
      adList: ads.get(),
      anon: user.currentUserId() === 'Anonymous',
    });
  });

  // DS Report
  router.post('/report', (req, res) => {
    const ad = ads.get(req.params.id);
    const subject = 'Your ad has been reported.';
    const content = `A report has been filed for ad ${ad.title}, that you a responsible for. Reason for report is: ${req.params.reason}`;
    res.send(mail.send(ad.contactEmail, content, subject));
    res.render('/', {
      adList: ads.get(),
      anon: user.currentUserId() === 'Anonymous',
    });
  });
}());

// res.redirect('/'); Jag kunde inte lista ut hur denna funkar, hade varit bra
// på vissa ställen. Mvh Oscar.

/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
(function () {
  const router = require('router');
  const ads = require('./AdsDS');
  const appData = require('appData');

  router.get('/', (req, res) => {
    const maxAds = appData.get('maxAds');
    res.render('/', {
      ads: ads.getAllAds(maxAds),
    });
  });

  router.get('/ad', (req, res) => {
    res.render('/ad', {
      ad: ads.getAllAds(req.params.id),
    });
  });
}());

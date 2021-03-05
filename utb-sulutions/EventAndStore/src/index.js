(function () {
  'use strict';

  const router = require('router');
  const appData = require('appData');

  router.get('/', (req, res) => {
    const pageName = appData.get("page", "displayName");

    res.render('/', {
      pageName,
    });
  });

  router.get("/getProperty", (req, res) => {
    res.json({
      property: req.params.property,
      propertyValue: appData.get("page", req.params.property)
    });
  });
})();

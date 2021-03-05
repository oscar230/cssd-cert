/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
(function init() {
  const router = require('router');
  const appData = require('appData');
  const storage = require('storage');
  const logUtil = require('LogUtil');
  const dataStore = storage.getCollectionDataStore('members2');
  const dataStoreProvider = require('/module/server/dataStoreProvider');

  router.get('/', (req, res) => {
    const message = 'Hello, world!';
    const name = appData.get('name');

    res.render('/', {
      message,
      name,
    });
  });

  router.post('/signup', (req, res) => {
    const member = {
      name: req.params.name,
      email: req.params.email,
      age: req.params.age,
    };

    try {
      const data = dataStore.add(member);
      dataStore.instantIndex(data.dsid);

      res.render('/signup', { name: data.name });
    } catch (e) {
      logUtil.error(e);
    }
  });

  router.get('/members', (req, res) => {
    res.render('/members', {
      members: dataStoreProvider.getAllMembers(),
    });
  });

  router.get('/edit', (req, res) => {
    try {
      const member = dataStore.get(req.params.id);
      res.render('/edit', {
        member,
      });
    } catch (e) {
      logUtil.error(e);
    }
  });

  router.post('/editMember', (req, res) => {
    const member = {
      name: req.params.name,
      email: req.params.email,
      age: parseInt(req.params.age, 10),
    };

    dataStoreProvider.editMember(req.params.dsid, member);

    res.render('/members', {
      members: dataStoreProvider.getAllMembers(),
    });
  });

  router.post('/remove', (req, res) => {
    dataStoreProvider.remove(req.params.dsid);

    res.render('/members', {
      members: dataStoreProvider.getAllMembers(),
    });
  });

  router.post('/search', (req, res) => {
    res.render('/members', {
      members: dataStoreProvider.search(req.params.name),
    });
  });
}());

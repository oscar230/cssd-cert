/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
(function init() {
  const router = require('router');
  const events = require('events');
  const rlu = require('ResourceLocatorUtil');
  const mailBuilder = require('MailBuilder');
  const log = require('LogUtil');
  const searcherBuilder = require('SearcherBuilder');
  const properties = require('Properties');

  events.on('sv:publishing:publish', (options) => {
    const page = rlu.getNodeByIdentifier(options.node);

    log.info(`Handling sv:publishing:publish, options: ${JSON.stringify(options)}`);

    const mail = mailBuilder.setSubject(`${page} was published.`).setTextMessage(`${options.emitter} published ${page}.`).addRecipient('oscar.andersson@soleil.se').build();

    mail.send();
  });

  events.on('sv:trashcan:add', (options) => {
    const page = rlu.getNodeByIdentifier(options.node);

    log.info(`Handling sv:publishing:publish, options: ${JSON.stringify(options)}`);

    const mail = mailBuilder.setSubject(`${page} was added to the trashcan.`).setTextMessage(`${options.emitter} published ${page}.`).addRecipient('oscar.andersson@soleil.se').build();

    mail.send();
  });

  router.post('/search', (req, res) => {
    const searchResults = searcherBuilder.build().search(req.params.name, 10);
    if (searchResults.hasHits()) {
      const array = properties.getArray(searchResults.hits, 'displayName');
      res.json({ searchHits: array });
    }
  });

  router.get('/myroute', (req, res) => {
    res.json({ message: 'Hello from GET' });
  });

  router.post('/myroute', (req, res) => {
    res.json({ message: 'Hello from POST' });
  });

  router.put('/myroute', (req, res) => {
    res.json({ message: 'Hello from PUT' });
  });

  router.delete('/myroute', (req, res) => {
    res.json({ message: 'Hello from DELETE' });
  });
}());

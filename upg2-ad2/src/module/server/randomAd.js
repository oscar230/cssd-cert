/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-undef
define((require) => {
  const requester = require('Requester');
  const logUtil = require('LogUtil');
  const context = function getRandomContext() {
    let text = '';
    try {
      requester.get('https://baconipsum.com/api/?type=meat-and-filler')
        .done((result) => {
          text = Array.from(result).toString();
        })
        .fail((message, status) => {
          throw new Error(`Failed! Status: ${status}, Message: ${message}.`);
        });
    } catch (e) {
      logUtil.error(e);
      return e;
    }
    return text;
  };

  return {
    getAd: (user) => ({
      title: context().slice(0, 16),
      content: context(),
      link: 'https://soleil.se/',
      price: Math.floor(Math.random() * Math.floor(1000)),
      imageLink: 'https://picsum.photos/200/300',
      contact: user,
      contactName: `Debug User (${user})`,
      contactNumber: '054-444 44 44',
      contactEmail: 'oscar.andersson@soleil.se',
    }),
  };
});

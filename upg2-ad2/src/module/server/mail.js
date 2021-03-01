/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-undef
define((require) => {
  const mailBuilder = require('MailBuilder');
  const logUtil = require('LogUtil');
  const sendMail = function sendMail(adress, content, subject) {
    try {
      mailBuilder.setSubject(subject)
        .setTextMessage(content)
        .addRecipient('oscar.andersson@soleil.se')
        .build()
        .send();
      return 'Mail sent.';
    } catch (e) {
      logUtil.error(e);
      return JSON.stringify(e);
    }
  };

  return {
    send: (adress, content, subject) => sendMail(adress, content, subject),
  };
});

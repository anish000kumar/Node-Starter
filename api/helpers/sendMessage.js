import Twilio from 'twilio';
import log from './log';

export default function sendMessage(data) {
  return new Promise((resolve, reject) => {
    //{from, to, body}
    const accountSid = process.env.TWILIO_SID;
    console.log('>>>', accountSid);
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = new Twilio(accountSid, authToken);

    client.messages
      .create(data)
      .then(message => {
        log.success(message);
        resolve(1);
      })
      .catch(err => {
        log.error(err);
        reject(err);
      })
      .done();
  });
}

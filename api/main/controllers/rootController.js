import { version } from '@api/package.json';
import mailer from '@helpers/sendMail';
import messenger from '@helpers/sendMessage';
import { trycatch } from '@helpers';

function rootController() {
  function index(req, res) {
    res.json({
      version,
      success: true,
    });
  }

  function about(req, res) {
    res.send('Just an app');
  }

  function getVersion(req, res) {
    res.json({
      version,
    });
  }

  async function sendMail(req, res) {
    const done = await mailer(req.body);
    res.json({
      success: done,
      message: 'Email sent',
    });
  }

  async function sendMessage(req, res) {
    const done = await messenger(req.body);
    res.json({
      success: done,
      message: 'SMS sent',
    });
  }

  return trycatch({
    index,
    about,
    getVersion,
    sendMail,
    sendMessage,
  });
}

export default rootController;

import { version } from '@api/package.json';

function rootController(context) {
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

  return {
    index,
    about,
    getVersion,
  };
}

export default rootController;

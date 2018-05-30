var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', 'mac', 'FitControl.app', 'Contents', 'MacOS', 'FitControl');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', 'linux', 'FitControl');
      default:
        throw 'Unsupported platform';
    }
  }
};

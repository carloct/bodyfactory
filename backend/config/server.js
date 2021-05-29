const path = require('path');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f9743259b26222d264adb972be9fb282'),
    },
    watchIgnoreFiles: [
      path.join(__dirname, '../', 'eng.traineddata')
    ]
  },
});

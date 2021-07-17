if (process.env.NODE_ENV === 'production') module.exports = require('@store/config/configureStoreProd');
else module.exports = require('@store/config/configureStoreDev')

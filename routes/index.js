const router = require('express').Router();
const apiRouterUser = require('./api/users.js');

router.use('/auth', apiRouterUser);
// router.use('/user', apiRouterFilm);

module.exports = router;
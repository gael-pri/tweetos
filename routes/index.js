const router = require('express').Router();

router.get('/', (requ, res) => {
    res.render('home');
})

module.exports = router;
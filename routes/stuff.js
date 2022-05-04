const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');
const stuffCrtl = require('../controllers/stuff');
const auth = require('../middleware/auth');

router.post('/', auth, multer, stuffCrtl.createThing);

router.get('/:id', auth, stuffCrtl.getOneThing);

router.put('/:id', auth, multer, stuffCrtl.updateOneThing);

router.delete('/:id', auth, stuffCrtl.deleteOneThing);

router.get('/', auth, stuffCrtl.getAllThings);

module.exports = router;

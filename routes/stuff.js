const express = require('express');
const router = express.Router();

const stuffCrtl = require('../controllers/stuff');

router.post('/', stuffCrtl.createThing);

router.get('/:id', stuffCrtl.getOneThing);

router.put('/:id', stuffCrtl.updateOneThing);

router.delete('/:id', stuffCrtl.deleteOneThing);

router.get('/', stuffCrtl.getAllThings);

module.exports = router;

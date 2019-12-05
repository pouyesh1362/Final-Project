const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/:id', ctrl.houses.index);
router.get('/show', ctrl.houses.show);
router.post('/create', ctrl.houses.create);
router.post('/destroy', ctrl.houses.destroy);
router.put('/update', ctrl.houses.update);

module.exports = router;
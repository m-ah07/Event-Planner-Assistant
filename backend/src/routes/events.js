const router = require('express').Router();
const eventController = require('../controllers/eventController');
const auth = require('../middleware/auth');

router.get('/', auth, eventController.getAllEvents);

router.get('/:id', auth, eventController.getEventById);

router.post('/', auth, eventController.createEvent);

router.put('/:id', auth, eventController.updateEvent);

router.delete('/:id', auth, eventController.deleteEvent);

module.exports = router;

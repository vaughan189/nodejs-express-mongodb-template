const router = require('express').Router();
const contact = require('../controller/Contact');

router.route('/').get(contact.getAll).post(contact.insert);
router
  .route('/:contact_id')
  .get(contact.findById)
  .patch(contact.update)
  .put(contact.update)
  .delete(contact.delete);

module.exports = router;

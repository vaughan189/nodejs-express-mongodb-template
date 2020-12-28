const router = require('express').Router();
const user = require('../controller/User');

router.route('/').get(user.getAll).post(user.insert);
router
  .route('/:user_id')
  .get(user.getById)
  .put(user.update)
  .delete(user.delete);

module.exports = router;

const { User } = require('../model');

exports.insert = function (req, res) {
  const contact = new User();
  contact.name = req.body.name ? req.body.name : contact.name;
  contact.gender = req.body.gender;
  contact.email = req.body.email;
  contact.phone = req.body.phone;
  // save the contact and check for errors
  contact.save(function (err) {
    if (err) {
      res.json(err);
    }
    res.json({
      message: 'New User created!',
      data: contact,
    });
  });
};

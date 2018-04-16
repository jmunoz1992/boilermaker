const router = require('express').Router();
const HttpError = require('../utils/HttpError');
const { User } = require('../db/models');

// This marries the original auth code we wrote to Passport.
// An alternative would be to use the "local strategy" option with Passport.

// login, i.e. "you remember `me`, right?"
// `/login` is optional because the verb and `auth/local` connotate login
router.put('/login', (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({
    where: { email, password }
  })
  .then(user => {
    if (!user) throw HttpError(404);
    req.login(user, err => {
      if (err) {
        return next(err);
      }
      res.send(user); // 200 is the default status!
    });
  })
  .catch(next);
});

// signup, i.e. "let `me` introduce myself"
// `/signup` is optional
router.post('/signup', (req, res, next) => {
  const { name, phone, email, password } = req.body;
  User.create({
    name,
    phone,
    email,
    password
  })
  .then(user => {
    req.login(user, err => {
      if (err) { return next(err); }
      res.status(201).send(user); // 201 created makes a lot of sense as a status here!
    });
  })
  .catch(next);
});

// logout, i.e. "please just forget `me`"
// `/logout` is optional
router.delete('/logout', (req, res, next) => {
  req.logout();
  res.sendStatus(204);
});


// check currently-authenticated user, i.e. "who am I?"
// `/me` is optional
router.get('/me', (req, res, next) => {
  res.send(req.user);
});

module.exports = router;

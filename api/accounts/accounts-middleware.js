const Accounts = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
 if(req.body.name && req.body.name.trim()) {
   req.body.name = req.body.name.trim();
   next()
 } else {
   next({
     status: 400,
     message: 'account requires a valid name',
   })
 }
}

exports.checkAccountNameUnique = (req, res, next) => {
  const name = req.body.name;
  if(name || name.trim()) {
    res.status(404).json({message: 'that name is taken'})
  } else {
    req.name = name.trim();
    next();
  }
}

exports.checkAccountId = (req, res, next) => {
  const id = req.params.id;
  const account = Accounts.getById(id);
  if(!account) {
    res.status(404).json({message: 'account not found'});
  } else {
    req.account = account;
    next();
  }
}


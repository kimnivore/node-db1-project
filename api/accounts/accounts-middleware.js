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

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Accounts.getById(req.params.id);
    if(!account) {
      next({ status: 404, message: 'account not found'})
    } else {
      req.account = account;
      next()
    }  
  } catch(err){
    next(err)
  }
}


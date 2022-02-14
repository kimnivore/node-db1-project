const router = require('express').Router()
const Accounts = require('./accounts-model');
const {checkAccountPayload, checkAccountNameUnique, checkAccountId} = require('./accounts-middleware');


router.get('/', (req, res, next) => {
  Accounts.getAll()
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(error => {
      next(error);
      res.status(500).json({
        message: 'Error retrieving accounts',
      })
    })
})

router.get('/:id', (req, res, next) => {

})

router.post('/', (req, res, next) => {
  
})

router.put('/:id', (req, res, next) => {
  
});

router.delete('/:id', (req, res, next) => {
  
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router;

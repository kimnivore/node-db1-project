const db = require('../../data/db-config');


//http :9000/api/accounts
// SELECT * FROM accounts;
const getAll = () => {
  return db('accounts')
    .select('id', 'name', 'budget');
}

//http :9000/api/accounts/1
// SELECT * FROM accounts where id = 1;
const getById = id => {
  return db('accounts')
    .where('id', 'name', 'budget');
}

//http post :9000/api/accounts name='kim' budget=100
// INSERT INTO accounts (name, budget) VALUES ('kim', '100');
const create = account => {
  const [id] = db('accounts').insert(account);
  return getById(id);
}

//http put :9000/api/accounts/1 name="kimmy" budget="100"
// UPDATE accounts SET name = 'kimmy', budget = '100' WHERE id = 1;
const updateById = (id, account) => {
  db('accounts')
    .where('id', id)
    .update(account)
  return getById(id);
}

//http delete :9000/api/accounts/14
// DELETE FROM accounts WHERE id = 14;
const deleteById = id => {
 const result = db('shippers')
  .where('id', id)
  .del()
  return result;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}

/**
 * GET test request
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function getUsers(req, res, next) {
  return new Promise((resolve, reject) => {
    resolve({ title: 'Users' })
  });
};

module.exports = getUsers;

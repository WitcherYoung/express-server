/**
 * GET test request
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function getTest(req, res, next) {
	return new Promise((resolve, reject) => {
		resolve({ title: 'Express' })
	});
};

module.exports = getTest;

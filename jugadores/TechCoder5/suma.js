
module.exports = (...params) => {
	return params.reduce((total, num) => {
		total += num; return total;
	}, 0);
}


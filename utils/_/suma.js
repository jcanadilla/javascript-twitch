
module.exports = (...params) => {
	const resultado = params.reduce((total, num) => {
		if (typeof num === 'string') {
			num = (num.includes('.') || num.includes(',')) ? parseFloat(num) : parseInt(num, 10);
		}
		total += num; return total;
	}, 0);
	return resultado;
}


module.exports = (mes) => {
	let checkMes = mes;
	if (typeof mes === 'string') { checkMes = mes.toUpperCase()};
	
	switch (checkMes) {
		case 11:
		case 'NOVIEMBRE':
		case 4:
		case 'ABRIL':
		case 6:
		case 'JUNIO':
		case 9:
		case 'SEPTIEMBRE':
			return 30;
		case 2:	
		case 'FEBRERO':
			return 28;
		default:
			return 31;
	}
}

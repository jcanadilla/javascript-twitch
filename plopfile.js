
module.exports = (plop) => {

	plop.setGenerator('Jugador', {
		description: 'Genera la carpeta y los archivos de un jugador',
		prompts: [
			{
				type: 'input',
				name: 'player',
				message: 'Introduce tu nick de Twitch',
				validate: (name) => {
					return !name.includes(' ');
				}
			}
		],
		actions: [
			{
				type: 'addMany',
				destination: 'jugadores/{{player}}',
				base: 'plop-templates',
				templateFiles: 'plop-templates/*.js'
			}
		]
	})
}

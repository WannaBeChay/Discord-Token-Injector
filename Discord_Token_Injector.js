// Made be WannaBeChay

//Isto aqui é o "Injetor"
// 1º Parte

		function login(token) {
		setInterval(() => {
		document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
		}, 50);
		setTimeout(() => {
		location.reload();
		}, 2500);
		}

// 2º Parte

		login('TOKEN')

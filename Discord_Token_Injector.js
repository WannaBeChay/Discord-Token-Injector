// Made be WannaBeChay

//This its the Injector

		function login(token) {
		setInterval(() => {
		document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
		}, 50);
		setTimeout(() => {
		location.reload();
		}, 2500);
		}

// Next put this

		login('TOKEN')
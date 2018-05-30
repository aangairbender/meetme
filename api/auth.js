export default {
	loginAttempt: (username, password, successCallback, failureCallback) => {
		fetch('https://s-n.herokuapp.com/api/auth/token/obtain/', {
				method: 'POST',
			    headers: {  
			      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
			    },  
				body: 'username=' + username + '&password=' + password
			})
			.then(
				function (response) {
					console.log(response);
					if (response.status !== 200) {
						response.json().then((data) => {
							let error = ''
							for (let i in data)
								error += i + ':' + data[i] + '\n'
							failureCallback(error)
						})
						return
					}
					response.json().then((data) => {
						if (data.access != 'undefined')
							successCallback(data.access, data.refresh)
						else
							failureCallback('Unknown error')
					})
				}
			)
			.catch((error) => {
				console.log(error);
				failureCallback('Fetch error: ' + error)
			})
	},
	registerAttempt: (email, username, password, successCallback, failureCallback) => {
		fetch('some_url_for_register', {
			method: 'POST',
			body: 'email=' + email + '&username=' + username + '&password=' + password
		})
		.then(
			function (response) {
				if (response.status !== 200) {
					failureCallback('Server responded with status ' + response.status)
					return
				}
				response.json().then((data) => {
					if (data.access != 'undefined')
						successCallback(data.access, data.refresh)
					else if (data.non_field_errors != 'undefined')
						failureCallback(data.non_field_errors)
					else
						failureCallback('Unknown error')
				})
			}
		)
		.catch((error) => {
			failureCallback('Fetch error: ' + error)
		})
	}
}

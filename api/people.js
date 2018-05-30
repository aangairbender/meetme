export default {
	getAllPeople: (accessToken, successCallback, failureCallback) => {
		fetch('https://s-n.herokuapp.com/people/', {
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
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
						successCallback(data)
					})
				}
			)
			.catch((error) => {
				console.log(error);
				failureCallback('Fetch error: ' + error)
			})
	},
	getPeopleLikeMe: (accessToken, successCallback, failureCallback) => {
		console.log(accessToken);
		fetch('https://s-n.herokuapp.com/people/', {
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
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
						console.log(data);
						successCallback(data)
					})
				}
			)
			.catch((error) => {
				console.log(error);
				failureCallback('Fetch error: ' + error)
			})
	},
	getPeopleInRange: (range, accessToken, successCallback, failureCallback) => {
		fetch('https://s-n.herokuapp.com/people/like_me/', {
				headers: {
					'Authorization': 'Bearer ' + accessToken
				}
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
						successCallback(data)
					})
				}
			)
			.catch((error) => {
				console.log(error);
				failureCallback('Fetch error: ' + error)
			})
	}
	
}

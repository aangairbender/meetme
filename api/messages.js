export default {
	getMessages: (accessToken, target, longPoll, successCallback, failureCallback) => {
		console.log(accessToken);
		fetch('https://s-n.herokuapp.com/messages/dialog?username='+target+'&long_polling='+longPoll, {
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
	sendMessage: (accessToken, target, message, successCallback) => {
		console.log(accessToken+' '+target+' '+message);
		fetch('https://s-n.herokuapp.com/messages/send', {
				method: 'POST',
			    headers: {  
					"Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					'Authorization': 'Bearer ' + accessToken
			    },  
				body: 'username=' + target + '&message=' + message
			})
			.then(
				function (response) {
					if (response.status !== 201) {
						console.log(response);
						return
					}
					response.json().then((data) => {
						successCallback()
					})
				}
			)
	},
	
}

function parse() {
    
    // step 1: create an instance of the object
    var request = new XMLHttpRequest();

    // step 2: create or "open" HTTP request
    request.open("GET", "data.json", true);

    // step 3: set up way to manage response - to a function
    request.onreadystatechange = parseData(request);

    // step 4: execute the request
    request.send();

}

function parseData(request) {

	console.log(request.readyState);
	console.log(request.status);

	if (request.readyState == 4 && request.status == 200) {

		console.log('here');

		var message = JSON.parse(request.responseText);

		message_list = document.getElementById("messages");

		console.log(message_list.length);

		for (var i = 0; i < message.length; i++) {

			message_list.innerHTML += '<p class="message">' + message[i]['content'] + ' ' + message[i]['username'] + '</p>';

		}
		
	}

}
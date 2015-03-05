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

	if (request.readyState == 4 && request.status == 200) {

		console.log('here');

		var message = JSON.parse(request.responseText);

		message_list = document.getElementById("messages");

		console.log(message_list.length);

		for (var i = 0; i < message_list.length; i++) {

			message_list.innerHTML += '<p class="message">' + message[i]['content'] + ' ' + message[i]['username'] + '</p>';

		}
		
	}

}
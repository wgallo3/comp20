function parse() {
    
    // step 1: create an instance of the object
    var request = new XMLHttpRequest();

    // step 2: create or "open" HTTP request
    request.open("GET", "data.json", true);

    // step 3: set up way to manage response - to a function
    request.onreadystatechange = parseData;

    // step 4: execute the request
    request.send();

}

function parseData() {

	message_to_add = JSON.parse();

	message_list = document.getElementById("messages").value;
	
	message_list.innerHTML += '<p class="message">' + message_to_add['content'] + " " + message_to_add['username'] "</p>";
}
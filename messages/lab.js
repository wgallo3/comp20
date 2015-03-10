function parse() {
    
    // step 1: create an instance of the object
    request = new XMLHttpRequest();

    // step 2: create or "open" HTTP request
    request.open("GET", "http://messagehub.herokuapp.com/messages.json", true);

    // step 3: set up way to manage response - to a function
    request.onreadystatechange = parseData;

    // step 4: execute the request
    request.send();

}

function parseData() {

    if (request.readyState == 4 && request.status == 200) {

        message = JSON.parse(request.responseText);

        message_list = document.getElementById("messages");

        for (i = 0; i < message.length; i++) {

            message_list.innerHTML += '<p class="message">' + message[i]['content'] + ' ' + message[i]['username'] + '</p>';

        }
        
    }

}


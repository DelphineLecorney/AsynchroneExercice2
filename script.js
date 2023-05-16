// Create a body element and append it to the html
let body = document.createElement('body');
document.documentElement.appendChild(body);

// Create a inputelement and append it to the html
let input = document.createElement('input');
input.type = 'text'; 
input.placeholder = 'Enter a name';
input.classList.add('input');
body.appendChild(input);

// Create a button element, a text node, a class and append button
let buttonJson = document.createElement('button');
let messageButton = document.createTextNode('fetch query');
buttonJson.classList.add('buttonJson');
buttonJson.appendChild(messageButton);
body.appendChild(buttonJson);



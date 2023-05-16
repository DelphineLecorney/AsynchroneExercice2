
// Retrieve elements from the DOM
const section = document.getElementsByClassName('section');
const input = document.getElementById('name');
const button = document.querySelector('.section-button');
const body = document.body;

// Function to fetch name and handle response
const fetchName = (name) => {
  fetch("https://api.agify.io/?name=" + name)
    .then((response) => response.json())
    .then((data) => {
      section.innerHTML = ""; // Clear the body

      // Create and append a div for the result
      let divResult = document.createElement('div');
      divResult.textContent = JSON.stringify(data);
      body.appendChild(divResult);
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });
};

// Add event
button.addEventListener('click', () => {
  let name = input.value;
  fetchName(name);
});


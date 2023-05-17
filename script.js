// Retrieve elements from the DOM
const section = document.querySelector('.section');
const input = document.getElementById('name');
const button = document.querySelector('.section-button');
const select = document.getElementById('sort-select');
const body = document.body;

// Create a new div for the results
const resultDiv = document.createElement('div');
section.appendChild(resultDiv);

// Function to fetch name and handle response
const fetchName = (name, countryId) => {
  fetch(`https://api.agify.io/?name=${name}&country_id=${countryId}`)
    .then((response) => response.json())
    .then((data) => {
      // Clear the result div
      resultDiv.innerHTML = "";

      // Create and append a div for the result
      let divResult = document.createElement('div');
      divResult.textContent = JSON.stringify(data);
      section.appendChild(divResult);
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });
};

// Add event
button.addEventListener('click', () => {
  let name = input.value;
  let countryId = select.value;
  fetchName(name, countryId);
});

// Add select event
select.addEventListener('change', () => {
  let name = input.value;
  let countryId = select.value;
  fetchName(name, countryId);
});

// Retrieve elements from the DOM
const section = document.getElementsByClassName('section');
const input = document.getElementById('name');
const button = document.querySelector('.section-button');
const select = document.getElementById('sort-select');
const body = document.body;

// Function to fetch name and handle response
const fetchName = (name, countryId) => {
  fetch(`https://api.agify.io/?name=${name}&country_id=${countryId}`)
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

// Add select event listener
select.addEventListener('change', () => {
  let countryId = select.value;

  if (countryId === 'France') {
    fetchName('', 'FR');
  } else if (countryId === 'Belgium') {
    fetchName('', 'BE');
  } else if (countryId === 'Italy') {
    fetchName('', 'IT');
  }
});

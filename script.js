document.getElementById('voting-form').addEventListener('submit', function (event) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Grab the values from the inputs
  const ageInput = document.getElementById('age').value.trim();
  const nameInput = document.getElementById('name').value.trim();

  // 1. Validation: Check if either input is empty
  if (!ageInput || !nameInput) {
    alert("Please enter valid details");
    return; // Stop execution here if validation fails
  }

  // Convert age to a number for comparison
  const age = Number(ageInput);

  // 2. Promise Logic
  const checkVotingEligibility = new Promise((resolve, reject) => {
    // 4-second delay
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${nameInput}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput}. You aren't old enough.`);
      }
    }, 4000);
  });

  // 3. Handling the Promise resolution and rejection
  checkVotingEligibility
    .then((successMessage) => {
      alert(successMessage);
    })
    .catch((errorMessage) => {
      alert(errorMessage);
    });
});
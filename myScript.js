const reviewsFrom = document.getElementById('review-submit-form');
const loadingSpinner = document.getElementById('loading-spinner');

//? get the number of selected stars

// Get all the radio buttons
const ratingRadios = document.querySelectorAll('input[name="rating"]');
var selectedStar = 0;

// Add event listener to each radio button
ratingRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    // Get the value of the selected radio button
    const selectedValue = document.querySelector(
      'input[name="rating"]:checked'
    ).value;

    // selected star to a local variable
    selectedStar = selectedValue;
  });
});

//? submit the reviews to the googel sheets
reviewsFrom.addEventListener('submit', function (e) {
  e.preventDefault();
  loadingSpinner.style.display = 'block'; // toggle spinner on
  var data = new FormData(reviewsFrom);
  data.append('Stars', selectedStar);
  const action = e.target.action;
  console.log(data);
  fetch(action, {
    method: 'POST',
    body: data,
  }).then(() => {
    loadingSpinner.style.display = 'none';
    window.location.href = '/';
  });
});

//?? redirect to home page after contact form sends data to the formspree site
function contactOnClickFunc() {
  setTimeout(function () {
    window.location.href = '/'; // Replace with your desired URL
  }, 3000);
}

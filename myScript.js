const form = document.getElementById('review-submit-form');
const loadingSpinner = document.getElementById('loading-spinner');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  loadingSpinner.style.display = 'block'; // toggle spinner on
  const data = new FormData(form);
  const action = e.target.action;
  fetch(action, {
    method: 'POST',
    body: data,
  }).then(() => {
    loadingSpinner.style.display = 'none';
    window.location.href = '/';
  });
});

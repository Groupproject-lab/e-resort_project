document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Thank you, ${name}! Your room has been booked.`);
});
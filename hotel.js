document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Hide the form
    document.querySelector('.booking-form').classList.add('hidden');
  
    // Show confirmation message
    document.getElementById('confirmationMessage').classList.remove('hidden');
  });
  
$(document).ready(function(){
  $("#menu-icon").click(function(){
      $("#nav-links").toggle();
  });
});
$(window).resize(function() {
  if ($(window).width() > 768) {
      $("#nav-links").hide();
  }
});
// JavaScript to toggle the hamburger menu
document.getElementById('menu-icon').addEventListener('click', function () {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('nav-active');
});
const category = "Test"; 
category = document.getElementById('category').value;
if (category === '-') {
    alert("Please select a valid category.");
}
const projects = ["Caring Community", "Stay Active", "Training"];
projects.forEach((project) => console.log(project));
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Form submitted");
});

// Selecting the hamburger menu icon and nav-links
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle the "show" class when menu icon is clicked
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


$(document).ready(function() {
  // Handle form submission with AJAX
  $('#contactForm').submit(function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Get form data
      var formData = {
          name: $('#name').val(),
          email: $('#email').val(),
          message: $('#message').val(),
          phone: $('#phone').val(),
          category: $('#category').val()
      };

      // Send AJAX request
      $.ajax({
          type: 'POST',
          url: 'submit_form.php', // Server script that will handle the form submission
          data: formData,
          dataType: 'json',
          success: function(response) {
              // Display success message
              $('#formResponse').html('<p>Thank you for your message. We will get back to you soon!</p>');
              $('#contactForm')[0].reset(); // Clear the form
          },
          error: function() {
              // Display error message
              $('#formResponse').html('<p>Sorry, there was an error submitting your message. Please try again.</p>');
          }
      });
  });
});
$.getJSON('projects.json', function(data) {
  $.each(data.projects, function(index, project) {
      // Generate dynamic HTML for each project
  });
});
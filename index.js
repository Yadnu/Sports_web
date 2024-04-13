document.addEventListener('DOMContentLoaded', function() {
    // Get the Home, Sign Up, and Sign In links
    var homeLink = document.querySelector('.navbar-nav .home-link');
    var signUpLink = document.querySelector('.navbar-nav .sign-up-link');
    var signInLink = document.querySelector('.navbar-nav .sign-in-link');
  
    // Add event listener for Home link click
    homeLink.addEventListener('click', function(event) {
      // Prevent the default behavior of the link
      event.preventDefault();
  
      // Replace this with your desired action for Home link click
      alert('Home link clicked!');
      // You can add your logic here, such as redirecting to the home page or displaying home content.
    });
  
    // Add event listener for Sign Up link click
    signUpLink.addEventListener('click', function(event) {
      // Prevent the default behavior of the link
      event.preventDefault();
  
      // Replace this with your desired action for Sign Up link click
      alert('Sign Up link clicked!');
      // You can add your logic here, such as redirecting to the sign up page or displaying sign up form.
    });
  
    // Add event listener for Sign In link click
    signInLink.addEventListener('click', function(event) {
      // Prevent the default behavior of the link
      event.preventDefault();
  
      // Replace this with your desired action for Sign In link click
      alert('Sign In link clicked!');
      // You can add your logic here, such as redirecting to the sign in page or displaying sign in form.
    });
  });
  
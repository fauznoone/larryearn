document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll("button");

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      alert("Welcome to LARRY EARN! This feature is coming soon.");
    });
  });

});

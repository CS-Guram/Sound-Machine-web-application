function openModal(url) {
  // Get the modal element
  var modal = document.getElementById("myModal");

  // Set the iframe source to the URL
  modal.querySelector("iframe").src = url;

  // Show the modal
  modal.style.display = "block";
}

// Add click event listeners to the areas
document.getElementById("violin-area").addEventListener("click", function(event) {
  // Prevent the default behavior of the click (i.e., navigating to the URL)
  event.preventDefault();

  // Open the URL in a modal
  openModal("https://www.youtube.com/embed/dsU9zmnZ37g");
});

document.getElementById("viola-area").addEventListener("click", function(event) {
  // Prevent the default behavior of the click (i.e., navigating to the URL)
  event.preventDefault();

  // Open the URL in a modal
  openModal("https://www.youtube.com/embed/OUbktXzOuYU");
});

document.getElementById("guitar-area").addEventListener("click", function(event) {
  // Prevent the default behavior of the click (i.e., navigating to the URL)
  event.preventDefault();

  // Open the URL in a modal
  openModal("https://www.youtube.com/embed/KHiRXusjvmk");
});

document.getElementById("cello-area").addEventListener("click", function(event) {
  // Prevent the default behavior of the click (i.e., navigating to the URL)
  event.preventDefault();

  // Open the URL in a modal
  openModal("https://www.youtube.com/embed/qpbX7SbXOtU");
});

document.getElementById("harp-area").addEventListener("click", function(event) {
  // Prevent the default behavior of the click (i.e., navigating to the URL)
  event.preventDefault();

  // Open the URL in a modal
  openModal("https://www.youtube.com/embed/_2Qj5lrqqAQ");
});

document.getElementById("bass-area").addEventListener("click", function(event) {
  // Prevent the default behavior of the click (i.e., navigating to the URL)
  event.preventDefault();

  // Open the URL in a modal
  openModal("https://www.youtube.com/embed/J60xh7ZBeyw");
});










function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  document.getElementById("modal-iframe").src = "";
}

// Add click event listener to the close button
var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
  closeModal();
});



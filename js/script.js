document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("search").addEventListener("click", function () {
    document.querySelector(".ri-search-line").style.display = "none";
  });

  var pictures = [
    { src: "Media/Emergency.png", className: "img-eme" },
    { src: "Media/Emergency2.png", className: "img-eme" },
    { src: "Media/Emergency3.png", className: "img-eme" },
  ];
  var currentIndex = 0;
  var pictureElement = document.querySelector(".img-eme");

  document.querySelector(".next").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % pictures.length; // Increment index, wrap around if necessary

    // Apply fade-out class to current image
    pictureElement.classList.add("fade-out");

    // Wait for transition to complete and then update the image source and class
    setTimeout(function () {
      pictureElement.src = pictures[currentIndex].src;
      pictureElement.className = "img-eme " + pictures[currentIndex].className;

      // Remove fade-out class to trigger fade-in effect
      pictureElement.classList.remove("fade-out");
    }, 500); // Adjust this delay to match the transition duration in CSS
  });

  document.querySelector(".prev").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + pictures.length) % pictures.length; // Decrement index, wrap around if necessary

    // Apply fade-out class to current image
    pictureElement.classList.add("fade-out");

    // Wait for transition to complete and then update the image source and class
    setTimeout(function () {
      pictureElement.src = pictures[currentIndex].src;
      pictureElement.className = "img-eme " + pictures[currentIndex].className;

      // Remove fade-out class to trigger fade-in effect
      pictureElement.classList.remove("fade-out");
    }, 500); // Adjust this delay to match the transition duration in CSS
  });
});

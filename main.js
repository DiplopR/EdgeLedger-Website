function initMap() {
        // Coordinates for the map center (e.g., New York City)
        const location = { lat: 28, lng: 84 };

        // Create a map object
        const map = new google.maps.Map(document.getElementById("map"), {
          center: location,
          zoom: 12,
        });

        // Add a marker at the location
        const marker = new google.maps.Marker({
          position: location,
          map: map,
        });
    }

// Opacity thing

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 150) {
    navbar.style.opacity = '0.9';
  } else {
    navbar.style.opacity = '1';
  }
});



// Smooth Scrolling

$(document).ready(function () {
  $('#navbar a, .btn').on('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      const targetOffset = $(hash).offset().top - 100; // scroll 100px above
      $('html, body').animate({
        scrollTop: targetOffset
      }, 600);
    }
  });
});


// SCROLL REVEAL
window.sr = ScrollReveal({ reset: false });
sr.reveal(
  '.reveal', {
    duration: 1000,
    delay: 200,
    rotate: { x: 10, y: 0, z: 0 },
    distance: '50px',
    easing: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    mobile: true,
    viewFactor: 0.4
  });

// SMOOTH SCROLL TO SECTION
$(document).ready(function(){
  // Add smooth scrolling to all links
  $('a').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

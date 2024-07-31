/*Nav-bar design*/
// fonction to toggle menu for mobile
function toggleMenu() {
    const navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('active');
  }
  
  // Function to toggle the dropdown menu
  function toggleDropdown(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const dropdownMenu = this.nextElementSibling; // Select the next sibling of the clicked dropdown toggle
    dropdownMenu.classList.toggle('active');
  }
  
  // Attach event listeners to dropdown toggles
  document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', toggleDropdown);
  });
  
  // Optional: Close the menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInside = document.querySelector('.navbar').contains(event.target);
    if (!isClickInside) {
      document.querySelector('.navbar-menu').classList.remove('active');
    }
  });
/* end Nav-bar */
 
/*let index = 0;

function showSlide(n) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  
  if (n >= totalSlides) index = 0;
  if (n < 0) index = totalSlides - 1;

  slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  index++;
  showSlide(index);
}

function prevSlide() {
  index--;
  showSlide(index);
}

// Optional: Auto slide every 5 seconds
setInterval(nextSlide, 5000);

  */
/***********Carousel script********************* */
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  if (index >= totalSlides) {
      currentSlide = 0;
  } else if (index < 0) {
      currentSlide = totalSlides - 1;
  } else {
      currentSlide = index;
  }

  slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-slide
setInterval(nextSlide, 5000);
document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (menuToggle) {
      menuToggle.addEventListener("click", function () {
          navMenu.classList.toggle("active");
      });
  }

  // Handle Navigation Links
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
      const href = link.getAttribute("href");
      // Additional functionality for nav links can be added here
      console.log(`Link points to: ${href}`);
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Add automatic slide changer
function autoSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(autoSlides, 5000); // Change slide every 5 seconds
}

autoSlides();
document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links correctly
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            let target = this.getAttribute("href");
            
            if (target && target.startsWith("#")) {
                event.preventDefault(); // Prevent default only for in-page links
                let targetElement = document.querySelector(target);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: "smooth"
                    });
                }
            } else if (target && !target.startsWith("#")) {
                window.location.href = target; // Navigate normally to another page
            }
        });
    });
});
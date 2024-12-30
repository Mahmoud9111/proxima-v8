
document.getElementById('current-year').textContent = new Date().getFullYear();







//<!--smoth scrolling-->
const lenis = new Lenis()

lenis.on('scroll', (e) => {
console.log(e)
})

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



//<!--Nav-->

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Toggle visibility and add animation for mobile menu
menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("hidden");
if (!navLinks.classList.contains("hidden")) {
navLinks.classList.add("dropdown-enter");
setTimeout(() => {
  navLinks.classList.remove("dropdown-enter");
  navLinks.classList.add("dropdown-active");
}, 10); // Trigger animation
} else {
navLinks.classList.remove("dropdown-active");
}
});


//hero
// Shrink Hero Section on Scroll and Add Rounded Corners
const heroSection = document.getElementById('hero-section');
const initialHeight = heroSection.offsetHeight;

window.addEventListener('scroll', () => {
const scrollY = window.scrollY;

// Shrinking effect
const shrinkFactor = Math.max(0.90, 1 - scrollY / 1000); // Shrink down to 90% of its size
heroSection.style.transform = `scale(${shrinkFactor})`;

// Rounded corners effect
const borderRadius = Math.min(scrollY / 6, 50); // Gradually round up to 50px
heroSection.style.borderRadius = `${borderRadius}px`;
heroSection.style.transition = 'transform 0.2s ease, border-radius 0.2s ease';

});





const logo = document.querySelector(".text-xl.font-bold a"); // Select the logo
const requestDemoButton = document.querySelector(".bg-orange-600"); // Select the Request a Demo button
const navLinksContainer = document.querySelector(".blurred-section"); // Select the middle nav links container
const navLinks1 = document.querySelectorAll(".blurred-section a"); // Select all links inside the middle nav

// Create the new link but keep it hidden initially
const newLink = document.createElement("a");
newLink.href = "#";
newLink.textContent = "Rent";
newLink.classList.add(
"text-gray-800",
"hover:text-gray-600",
"hidden" // Initially hidden
);
navLinksContainer.appendChild(newLink); // Add the new link to the nav container

// Add a scroll event listener
window.addEventListener("scroll", () => {
const scrollY = window.scrollY;

// Hide the logo and request demo button on scroll
if (scrollY > 50) {
logo.classList.add("hidden");
requestDemoButton.classList.add("hidden");
navLinksContainer.classList.add("bg-white", "text-black"); // Change background to white
navLinksContainer.classList.remove("blurred-section");
newLink.classList.remove("hidden"); // Show the new link
newLink.classList.add("bg-orange-500","text-white","rounded-full","px-6"); // Add dark gray color


// Change links to dark gray
navLinks1.forEach((link) => {
  link.classList.remove("text-gray-300"); // Remove the light gray color
  link.classList.add("text-gray-800", "hover:text-gray-600"); // Add dark gray color\
});
} else {
logo.classList.remove("hidden");
requestDemoButton.classList.remove("hidden");
navLinksContainer.classList.remove("bg-white", "text-black");
navLinksContainer.classList.add("blurred-section");
newLink.classList.add("hidden"); // Hide the new link again

// Revert links to their original light gray color
navLinks1.forEach((link) => {
  link.classList.remove("text-gray-800", "hover:text-gray-600"); // Remove dark gray color
  link.classList.add("text-gray-300", "hover:text-white"); // Add light gray color
});
}
});

//<!--Nav-->



//<!--QA-->
// JavaScript to toggle accordion
document.querySelectorAll('.faq-item').forEach(item => {
item.addEventListener('click', () => {
  item.classList.toggle('active');
  
  // Change arrow icon
  const icon = item.querySelector('span');
  if (item.classList.contains('active')) {
      icon.innerHTML = '&#9650;'; // Up arrow
  } else {
      icon.innerHTML = '&#9660;'; // Down arrow
  }
});
});

//<!--QA-->



//<!--horizontal scrolling-->
gsap.registerPlugin(ScrollTrigger);

function initScrollTrigger() {
const scrollContent = document.querySelector(".scroll-content");
const scrollWidth = scrollContent.scrollWidth;
const windowWidth = window.innerWidth;

// Reset existing ScrollTriggers
ScrollTrigger.getAll().forEach(trigger => trigger.kill());

if (windowWidth > 768) {
// Enable horizontal scrolling for larger screens
gsap.to(".scroll-content", {
x: () => -(scrollWidth - windowWidth),
ease: "power1.inOut",
scrollTrigger: {
trigger: ".horizontal-container",
start: "top top",
end: () => "+=" + (scrollWidth - windowWidth),
scrub: 1.5,
pin: true,
},
});
} else {
// For smaller screens, ensure vertical scrolling
gsap.set(".scroll-content", { x: 0 }); // Reset horizontal position
document.querySelector(".horizontal-container").style.height = "auto"; // Ensure full vertical height
}
}

// Initialize on page load
initScrollTrigger();

// Reinitialize on window resize
window.addEventListener("resize", initScrollTrigger);

//<!--horizontal scrolling-->



//<!--aos-->
AOS.init({
offset: 300,
duration: 1400,
});




//<!--email js fot the contact us-->
//<!-- EmailJS for the contact form -->

document.getElementById("Submit").addEventListener("click", function (event) {
event.preventDefault(); // لمنع إعادة تحميل الصفحة عند النقر على الزر

// Gather the input data
const message2 = document.getElementById("message2").value;

// Prepare the data for EmailJS
const params = {
message2: message2, // إرسال الرسالة
};

const serviceID = "service_nszaja6"; // استبدل بالقيمة الخاصة بك
const templateID = "template_skw5ktp"; // استبدل بالقيمة الخاصة بك

emailjs
.send(serviceID, templateID, params)
.then((res) => {
alert("Your details have been sent successfully!");
// Clear the inputs
document.getElementById("message2").value = "";
})
.catch((err) => console.error("Failed to send email: ", err));
});



//<!--horiz eqipnmets-->
function scrollCards(direction) {
const container = document.querySelector('.overflow-x-auto');
const scrollAmount = 320; // Adjust this value based on card width + gap
if (direction === 'left') {
  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
} else {
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}
}



// ✅ Find all <p> tags with class "lead" and log their content
let pa = document.getElementsByClassName('lead');
console.log(Array.from(pa).map(p => p.textContent));

// ✅ Add hover effect to elements with class "hovereffect"
let hoverElements = document.getElementsByClassName('hovereffect');

// getElementsByClassName returns a collection, so loop over them
Array.from(hoverElements).forEach(el => {
  el.addEventListener('mouseover', function () {
    this.style.color = 'red';
  });

  el.addEventListener('mouseout', function () {
    this.style.color = ''; // reset color on mouse out
  });
});

// ✅ Handle Contact Form submission
let contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Stop form from submitting

  const formData = new FormData(this);
  let name = formData.get('name');
  let email = formData.get('email');
  let message = formData.get('message');

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  alert("Thank you! Your message has been received.");
  this.reset();
});

const navItems = document.querySelectorAll('nav ul li');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'active' class from all items
    navItems.forEach(i => i.classList.remove('active'));
    // Add 'active' to clicked item
    item.classList.add('active');
  });
});

// Rate and Bug buttons
const rateButton = document.querySelector('button:nth-of-type(1)');
const bugButton = document.querySelector('button:nth-of-type(2)');

rateButton.addEventListener('click', () => {
  alert('Thanks for rating this page!');
});

bugButton.addEventListener('click', () => {
  alert('Please describe the issue to support@vlabs.ac.in');
});

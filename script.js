const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const whatsappForm = document.querySelector('#whatsapp-contact-form');
whatsappForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(whatsappForm);
  const message = [
    'Hello MDFI Social Foundation,',
    '',
    `Name: ${formData.get('name')}`,
    `Email: ${formData.get('email')}`,
    `Area of interest: ${formData.get('interest')}`,
    '',
    'Message:',
    formData.get('message')
  ].join('\n');

  window.location.href = `https://wa.me/917398567898?text=${encodeURIComponent(message)}`;
});

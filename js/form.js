// Contact form demo
document.getElementById('send').addEventListener('click', e => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill name, email, and a short message.');
    return;
  }

  alert(`Thanks ${name}! This demo form would send your message in a real deployment.`);

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});

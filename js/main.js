// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Sections and navigation
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('[data-section]');

function showSection(id) {
  sections.forEach(s => {
    if (s.id === id) {
      s.hidden = false;
      s.classList.add('active');
    } else {
      s.hidden = true;
      s.classList.remove('active');
    }
  });
  tabs.forEach(t => t.setAttribute('aria-current', t.dataset.target === id ? 'true' : 'false'));
  history.replaceState(null, '', '#' + id);
}

// Open initial section
const initial = location.hash?.replace('#', '') || 'home';
if (document.getElementById(initial)) showSection(initial);

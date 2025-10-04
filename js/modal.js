// Modal logic
// === MODAL LOGIC ===

// Open modal when "View" clicked
document.querySelectorAll("[data-open]").forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-open");
    document.getElementById(modalId).hidden = false;
  });
});

// Close modal when "X" clicked
document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    button.closest(".modal").hidden = true;
  });
});

// Close modal when clicking outside
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.hidden = true;
  });
});


// Open modal
document.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => {
  const id = b.dataset.open;
  if (id === 'case-stop') {
    modalTitle.textContent = 'Stop Food Waste — Case study';
    modalBody.innerHTML = `
      <h4>Problem</h4>
      <p>A lack of coordination between food donors and local organizations led to waste while some lacked access to food.</p>
      <h4>Process</h4>
      <ol>
        <li>Research: interviewed NGOs and donors.</li>
        <li>Wireframes for donation flows.</li>
        <li>Prototyped in Figma.</li>
      </ol>
      <h4>Solution</h4>
      <p>Role-based web app with donation listings and map pickup integration.</p>
    `;
  } else if (id === 'case-pet') {
    modalTitle.textContent = 'Pet Shop Management — Case study';
    modalBody.innerHTML = `
      <h4>Problem</h4>
      <p>Pet stores needed an offline way to manage inventory and customers.</p>
      <h4>Process</h4>
      <ol>
        <li>Defined admin/employee/customer roles.</li>
        <li>Built Java desktop app with local DB.</li>
        <li>Tested PDF receipts and flows.</li>
      </ol>
      <h4>Solution</h4>
      <p>Desktop app with CRUD features and PDF bill printing.</p>
    `;
  }
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}));

// Close modal
modal.querySelector('.close').addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
});

// Close on Escape
window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    modal.querySelector('.close').click();
  }
});

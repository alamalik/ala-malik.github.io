// Handle tab clicks and navigation buttons
document.querySelectorAll('.tab, [data-target]').forEach(btn => {
  btn.addEventListener('click', e => {
    const target = btn.dataset.target;
    if (target) showSection(target);
  });
});

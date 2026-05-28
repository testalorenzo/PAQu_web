// Copy BibTeX to clipboard
document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copy-bibtex');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const text = document.getElementById('bibtex').textContent;
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.textContent = 'Copied!';
      setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
    });
  });
});

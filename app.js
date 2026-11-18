function toggleMenu(){document.querySelector('.sidebar').classList.toggle('open')}function toggleKorean(){document.body.classList.toggle('hide-ko')}function speakSection(id){const el=document.getElementById(id);if(!el||!('speechSynthesis' in window))return; speechSynthesis.cancel();const s=[...el.querySelectorAll('.en')].map(e=>e.innerText).join(' ');const u=new SpeechSynthesisUtterance(s);u.lang='en-US';u.rate=.87;speechSynthesis.speak(u)}
const sidebar = document.querySelector('.sidebar');
const menuButton = document.querySelector('.menu');
if (sidebar && menuButton) {
  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'pill close-menu';
  closeButton.textContent = '목차 닫기';
  sidebar.prepend(closeButton);
  menuButton.setAttribute('aria-controls', sidebar.id);
  menuButton.setAttribute('aria-expanded', 'false');

  function setMenuOpen(open) {
    sidebar.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    (open ? closeButton : menuButton).focus({preventScroll:true});
  }

  window.toggleMenu = () => setMenuOpen(!sidebar.classList.contains('open'));
  closeButton.addEventListener('click', () => setMenuOpen(false));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && sidebar.classList.contains('open')) setMenuOpen(false);
  });
}

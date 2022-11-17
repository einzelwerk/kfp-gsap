class Nav {
  constructor(btn, menu) {
    this.btn = btn;
    this.menu = menu;
    this.state = false;
    this.listener();
  }

  listener() {
    document.addEventListener('click', (e) => {
      if (this.state && this.btn.contains(e.target)) {
        this.closeNav();
      } else if (!this.state && this.btn.contains(e.target)) {
        this.openNav();
      }
    });
  }

  openNav() {
    this.state = true;
    this.menu.classList.add('opened');
    this.btn.classList.add('opened');
    this.btn.setAttribute('aria-expanded', true);
    this.btn.setAttribute('aria-label', 'Menü schließen');
  }

  closeNav() {
    this.state = false;
    this.menu.classList.remove('opened');
    this.btn.classList.remove('opened');
    this.btn.setAttribute('aria-expanded', false);
    this.btn.setAttribute('aria-label', 'Menü öffnen');
  }
}

(() =>
  new Nav(
    document.querySelector('.mobile-menu-btn'),
    document.querySelector('#nav')
  ))();

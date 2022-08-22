const modals = () => {
  let btnPressed = false;
  function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]');

    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }

        btnPressed = true;

        if (destroy) {
          item.remove();
        }

        windows.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });

        showModal(modalSelector);
      });
    });

    close.addEventListener('click', e => {
      if (e.target !== e.target.getAttribute('[data-modal]')) {
        hiddenCloser(modal);
      }

      windows.forEach(item => {
        hiddenCloser(item);
      });
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        hiddenCloser(modal);
      }
    });
  }

  function hiddenCloser(bodyToHide) {
    bodyToHide.style.display = 'none';

    bodyToHide.style.display === 'block'
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
    document.body.style = `0px`;
  }

  function showModal(modalSelector) {
    const modalToShow = document.querySelector(modalSelector);
    modalToShow.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style = `${scroll}px`;
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      let display;

      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }
      });

      if (!display) {
        showModal(selector);
        let scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  }

  function calcScroll() {
    const div = document.createElement('div');
    div.setAttribute('id', 'technical');
    div.style.cssText = `width: 50px; height: 50px; overflow-y = scroll; visibility: hidden`;

    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  //func shows modal wind. if the end of the site by user and delete gift picture
  // function openByScroll(selector) {
  //   window.addEventListener('scroll', () => {
  //     if (
  //       !btnPressed &&
  //       window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight
  //     ) {
  //       document.querySelector(selector).click();
  //     }
  //   });
  // }

  // for old browsers needs to rewrite code:
  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

  openByScroll('.fixed-gift');
  calcScroll();

  showModalByTime('.popup-consultation', 60000);
};

export default modals;

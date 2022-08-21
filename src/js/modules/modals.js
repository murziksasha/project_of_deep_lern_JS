const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll();

    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach(item => {
          item.style.display = 'none';
        });

        showModal(modal);

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
      if (e.target === modal && closeClickOverlay) {
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

  function showModal(bodyToHide) {
    bodyToHide.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style = `${scroll}px`;
  }

  function showModalByTime(selector, time) {
    const modal = document.querySelector(selector);
    setTimeout(() => {
      let display;

      document.querySelectorAll('[data-modal]').forEach((item)=>{
        if(getComputedStyle(item.display !== 'none')){
          display ='block';
        }
      });

      if(!display){
        showModal(modal);

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

  bindModal('.button-design', '.popup-design','.popup-design .popup-close');
  bindModal('.button-consultation','.popup-consultation','.popup-consultation .popup-close');


  calcScroll();

  showModalByTime('.popup-consultation', 5000);

};

export default modals;

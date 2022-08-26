const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  });

  //smothing scroll implementation

  const element = document.documentElement,
    body = document.body;

  const calscScroll = () => {
    upElem.addEventListener('click', e => {
      const target = e.currentTarget;
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);

      if (target.hash !== '') {
        e.preventDefault();
        let hashElement = document.querySelector(target.hash), //получаем хеш адрев в адресной строке
            hashElementTop = 0;  //перменная которая будет вычеслять сколько до ТОП страницы
        while (hashElement.offsetParent) { //получаем родителя
          hashElementTop +=hashElement.offsetTop;  //вычисляем сколько осталось пикселей до верхней границы родительского элемента
          hashElement = hashElement.offsetParent;
        }

        hashElementTop = Math.round(hashElementTop);
        smoothScroll(scrollTop, hashElementTop, target);
      }
    });
  };

  const smoothScroll = (from, to, hash) => {
    let timeInterval = 1,
        prevScrollTop,
        speed;

    if (to > from) {
      speed = 30;
    } else {
      speed = -30;
    }

    let move = setInterval(()=> {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);
      if(
        prevScrollTop === scrollTop || //мы достигли результата некуда вращать страницу
        (to > from && scrollTop >= to) ||
        (to < from && scrollTop <= to) // эти условия точно гарантируют что долистали до конца
      ) {
        clearInterval(move);
        history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
      } else {
        body.scrollTop += speed;
        element.scrollTop +=speed;
        prevScrollTop = scrollTop;
      }
    }, timeInterval);
  };
  calscScroll();
};

export default scrolling;

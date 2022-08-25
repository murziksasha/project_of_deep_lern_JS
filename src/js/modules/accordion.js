const accordion = (triggersSelector, itemsSelector) => {
  const btns = document.querySelectorAll(triggersSelector);

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      const target = e.currentTarget;
      target.classList.toggle('active-style');
      target.nextElementSibling.classList.toggle('active-content');

      if(target.classList.contains('active-style')) {
        target.nextElementSibling.style.maxHeight = target.nextElementSibling.scrollHeight + 80 + 'px';
      } else {
        target.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });

  // blocks = document.querySelectorAll(itemsSelector);

  //accordion with css style version implement
  // blocks.forEach(block => {
  //   block.classList.add('animated', 'fadeInDown');
  // });

  // btns.forEach(btn => {
  //   btn.addEventListener('click', e => {
  //     const target = e.currentTarget;
  //     if (!target.classList.contains('active')) {
  //       btns.forEach(btn => {
  //         btn.classList.remove('active', 'active-style');
  //       });
  //       target.classList.add('active', 'active-style');
  //     }
  //   });
  // });
};

export default accordion;

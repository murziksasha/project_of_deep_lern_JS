const accordion = (triggersSelector, itemsSelector) => {
  const btns = document.querySelectorAll(triggersSelector),
    blocks = document.querySelectorAll(itemsSelector);

  blocks.forEach(block => {
    block.classList.add('animated', 'fadeInDown');
  });

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      const target = e.currentTarget;
      if (!target.classList.contains('active')) {
        btns.forEach(btn => {
          btn.classList.remove('active', 'active-style');
        });
        target.classList.add('active', 'active-style');
      }
    });
  });
};

export default accordion;

const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach(input => {
    input.addEventListener('keypress', e => {
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        e.preventDefault();
      }
    });
  });
};

export const checkEngTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach(input => {
    input.addEventListener('keypress', e => {
      if (e.key.match(/[^a-z 0-9]/gi)) {
        e.preventDefault();
      }
    });
  });
};

export default checkTextInputs;

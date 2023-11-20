const checkInput = (selector) => {
  const input = document.querySelector(selector);
  input.addEventListener('input', () => {
    input.value = input.value.replace(/\d/, '');
  });
};


export default checkInput;

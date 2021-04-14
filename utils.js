export function animeLetter() {
  let istag = false;
  const lettersSelector = document.querySelector('.animate');

  const letters = lettersSelector.innerHTML.split('');
  const animateLetters = letters.map((letter) => {
    if (letter === '<') {
      istag = true;
      return letter;
    }

    if (letter === '>') {
      istag = false;
      return letter;
    }

    if (!istag) {
      if (letter === ' ') {
        return (letter = `<span class="space">${letter}</span>`);
      }

      if (letter !== ' ') {
        return (letter = `<span class=animateLetter>${letter}</span>`);
      }
    } else return letter;
  });

  lettersSelector.innerHTML = animateLetters.join('');
}

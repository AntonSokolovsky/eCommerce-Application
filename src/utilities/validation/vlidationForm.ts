export default function formValidation():void {
  const targetInputs = Array.from(document.querySelectorAll('.input'));
  const sortInputs: Element[] = [];
  for (let i = 0; i < targetInputs.length; i++) {
    if (targetInputs[i].closest('.adressContainer')?.classList.contains('hide')) {
      continue;
    } else {
      sortInputs.push(targetInputs[i]);
    }
  }
  const doesElementsHaveClass = sortInputs.every((e) => e.classList.contains('accept'));
  const formButton = document.querySelector('.buttonRegSign') as HTMLInputElement;
  if (doesElementsHaveClass) {
    formButton.disabled = false;
  } else {
    formButton.disabled = true;
  }
}
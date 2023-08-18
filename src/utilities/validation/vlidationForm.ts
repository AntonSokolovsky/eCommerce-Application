export default function formValidation():void {
  const targetInputs = Array.from(document.querySelectorAll('.input'));
  const doesElementsHaveClass = targetInputs.every((e) => e.classList.contains('accept'));
  const formButton = document.querySelector('.buttonRegSign') as HTMLInputElement;
  if (doesElementsHaveClass) {
    formButton.disabled = false;
  } else {
    formButton.disabled = true;
  }
}
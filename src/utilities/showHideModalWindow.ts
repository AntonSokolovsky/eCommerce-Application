export default function showHideModalWindow(mode: string):void {
  const inputElem: HTMLInputElement | null = document.querySelector('.editField');
  const saveBtnPass: HTMLElement | null = document.querySelector('.saveButton');
  const closeBtnPass: HTMLElement | null = document.querySelector('.closeButton');
  const saveBtnMail: HTMLElement | null = document.querySelector('.saveButtonMail');
  const closeBtnMail: HTMLElement | null = document.querySelector('.closeButtonMail');
  console.log(inputElem);
  const modalPassWindow: HTMLElement | null = document.querySelector('.modalPassWindow');
  const modalMailWindow: HTMLElement | null = document.querySelector('.modalMailWindow');
  if (mode === 'password') {
    modalPassWindow?.removeAttribute('style');
  if (inputElem) {
    inputElem.focus();
  }
  saveBtnPass?.addEventListener('click', () => {
    modalPassWindow?.setAttribute('style', 'display: none;');
    saveBtnPass?.removeEventListener('click', () => {});
  });
  closeBtnPass?.addEventListener('click', () => {
    modalPassWindow?.setAttribute('style', 'display: none;');
    closeBtnPass?.removeEventListener('click', () => {});
  });
  } else {
    modalMailWindow?.removeAttribute('style');
  if (inputElem) {
    inputElem.focus();
  }
  saveBtnMail?.addEventListener('click', () => {
    modalMailWindow?.setAttribute('style', 'display: none;');
    saveBtnMail?.removeEventListener('click', () => {});
  });
  closeBtnMail?.addEventListener('click', () => {
    modalMailWindow?.setAttribute('style', 'display: none;');
    closeBtnMail?.removeEventListener('click', () => {});
  });
  }
}
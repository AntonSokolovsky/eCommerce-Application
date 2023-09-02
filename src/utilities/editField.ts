export default function editFields(e: Event) {
  const target = e.target;
  let targetParentElem: HTMLElement | null;
  let elemToEdit: HTMLElement | null;
  let inputElem: HTMLInputElement | null;
  let textToEdit = '';
  if (target instanceof HTMLElement) {
    targetParentElem = target.parentElement;
    target.innerHTML = 'save';
    if (targetParentElem?.querySelector('.text') && targetParentElem?.querySelector('.editFieldInput')) {
      elemToEdit = targetParentElem?.querySelector('.text');
      inputElem = targetParentElem?.querySelector('.editFieldInput');
      if (elemToEdit?.innerHTML) {
        textToEdit = elemToEdit?.innerHTML;
      }
      if (elemToEdit && inputElem) {
        if (!inputElem.classList.contains('hide')) {
          elemToEdit.innerHTML = inputElem.value;
          target.innerHTML = 'Edit Mode';
        }
        elemToEdit.classList.toggle('hide');
        inputElem?.classList.toggle('hide');
        inputElem.focus();
        inputElem.value = textToEdit;
      }
    }
  }
}
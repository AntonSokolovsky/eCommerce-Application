export function getInputValue(classNameInputElement: string) {
  const inputElement = document.querySelector(`.${classNameInputElement}`);

  if (inputElement) {
    if (inputElement instanceof HTMLInputElement) {
      const value = inputElement.value;
      return value;
    }
  }
  //ToDo fix this function by avoiding return undefind. Or add an undefind type to the interface
  return '';
}

export function getValue(element: HTMLElement | null) {
  if (element instanceof HTMLInputElement) {
    const value = element.value;
    return value;
  }
  return '';
}
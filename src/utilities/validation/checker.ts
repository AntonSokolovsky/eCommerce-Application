import formValidation from '../validation/vlidationForm';

export default function check(rules: HTMLElement, regExpression: RegExp, value: string, Input: HTMLElement, passwordToCheck?: string) {
  if (passwordToCheck) {
    if (regExpression.test(value) && value === passwordToCheck) {
      if (!Input.classList.contains('accept')) Input.classList.add('accept');
      rules.style.display = 'none';
    } else {
      if (Input.classList.contains('accept')) Input.classList.remove('accept');
    }
  } else {
    if (regExpression.test(value)) {
      if (!Input.classList.contains('accept')) Input.classList.add('accept');
      rules.style.display = 'none';
    } else {
      if (Input.classList.contains('accept')) Input.classList.remove('accept');
    }
  }
  formValidation();
}
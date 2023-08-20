import formValidation from '../validation/vlidationForm';

export default function check(rules: HTMLElement, regExpression: RegExp, value: string, Input: HTMLElement, passwordToCheck?: string) {
  if (passwordToCheck) {
    if (regExpression.test(value) && value === passwordToCheck) {
      console.log('Good');
      if (!Input.classList.contains('accept')) Input.classList.add('accept');
      rules.style.display = 'none';
    } else {
      console.log('Bad');
      if (Input.classList.contains('accept')) Input.classList.remove('accept');
    }
  } else {
    if (regExpression.test(value)) {
      console.log('Good');
      if (!Input.classList.contains('accept')) Input.classList.add('accept');
      rules.style.display = 'none';
    } else {
      console.log('Bad');
      if (Input.classList.contains('accept')) Input.classList.remove('accept');
    }
  }
  formValidation();
}
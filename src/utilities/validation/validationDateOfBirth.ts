import formValidation from '../validation/vlidationForm';
const regExpression = /^\d{4}.\d{2}.\d{2}$/;

export default function validationDateOfBirth(e: Event):void {
  const targetInput = (e.target as HTMLElement);
  const rules = targetInput.nextElementSibling as HTMLElement;
  targetInput.addEventListener('input', () => {
    const val = (targetInput as HTMLInputElement).value;
    rules.style.display = 'block';
    if (regExpression.test(val)) {
      const currentDate = new Date();
      const userDate = new Date(val);
      if (currentDate.getFullYear() - userDate.getFullYear()) {
        if (!targetInput.classList.contains('accept')) targetInput.classList.add('accept');
        rules.style.display = 'none';
      }
    } else {
      if (targetInput.classList.contains('accept')) targetInput.classList.remove('accept');
    }
  });
  formValidation();
  targetInput.addEventListener('blur', () => rules.style.display = 'none');
  targetInput.removeEventListener('input', () => rules.style.display = 'block');
  targetInput.removeEventListener('blur', () => rules.style.display = 'none');
}
import check from '../validation/checker';

const regExpression = /^(?=.*[a-zA-Z])[a-zA-Z]+$/;

export default function validationFirstLastName(e: Event):void {
  const targetInput = (e.target as HTMLElement);
  const rules = targetInput.nextElementSibling as HTMLElement;
  targetInput.addEventListener('input', () => {
    const val = (targetInput as HTMLInputElement).value;
    rules.style.display = 'block';
    check(rules, regExpression, val, targetInput);
  });
  targetInput.addEventListener('blur', () => rules.style.display = 'none');
  targetInput.removeEventListener('input', () => rules.style.display = 'block');
  targetInput.removeEventListener('blur', () => rules.style.display = 'none');
}
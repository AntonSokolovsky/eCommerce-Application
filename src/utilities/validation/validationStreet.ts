import check from '../validation/checker';

const regExpression = /.+/;

export default function validationStreet(e: Event):void {
  const targetInput = (e.target as HTMLElement);
  const password = (document.querySelector('.password_input') as HTMLInputElement).value;
  const rules = targetInput.parentElement?.querySelector('.Requirements') as HTMLElement;
  targetInput.addEventListener('input', () => {
    const val = (targetInput as HTMLInputElement).value;
    rules.style.display = 'block';
    check(rules, regExpression, val, targetInput, password);
  });
  targetInput.addEventListener('blur', () => rules.style.display = 'none');
  targetInput.removeEventListener('input', () => rules.style.display = 'block');
  targetInput.removeEventListener('blur', () => rules.style.display = 'none');
}
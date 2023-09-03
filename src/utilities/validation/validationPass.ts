import check from '../validation/checker';

const regExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?!.*\s).{8,}$/;

export default function validationPassword(e: Event):void {
  console.log(e);
  const targetInput = (e.target as HTMLElement);
  const rules = targetInput.parentElement?.querySelector('.Requirements') as HTMLElement;
  targetInput.addEventListener('keyup', () => {
    const val = (targetInput as HTMLInputElement).value;
    rules.style.display = 'block';
    check(rules, regExpression, val, targetInput);
  });
  targetInput.addEventListener('blur', () => rules.style.display = 'none');
  targetInput.removeEventListener('keyup', () => rules.style.display = 'block');
  targetInput.removeEventListener('blur', () => rules.style.display = 'none');
}
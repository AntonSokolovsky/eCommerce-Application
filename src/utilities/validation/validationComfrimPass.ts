import check from '../validation/checker';

const regExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?!.*\s).{8,}$/;

export default function validationComfrimPassword(e: Event):void {
  const targetInput = (e.target as HTMLElement);
  const password = (document.querySelector('.password_input') as HTMLInputElement).value;
  const rules = targetInput.parentElement?.querySelector('.Requirements') as HTMLElement;
  console.log(targetInput);
  targetInput.addEventListener('keyup', () => {
    const val = (targetInput as HTMLInputElement).value;
    rules.style.display = 'block';
    check(rules, regExpression, val, targetInput, password);
  });
  targetInput.addEventListener('blur', () => rules.style.display = 'none');
  targetInput.removeEventListener('keyup', () => rules.style.display = 'block');
  targetInput.removeEventListener('blur', () => rules.style.display = 'none');
}
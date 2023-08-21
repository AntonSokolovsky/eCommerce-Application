import check from '../validation/checker';
import { countryList } from '../validation/postalCodes';

let regExpression: RegExp;

export default function validationPostalCode(e: Event):void {
  const country:string = (document.querySelector('.Country_input') as HTMLInputElement).value;
  const entries = Object.entries(countryList);
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][0] === country) {
      regExpression = entries[i][1].PostalCodeRegExp;
      break;
    } else { 
      regExpression = /\d+/;
    }
  }
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
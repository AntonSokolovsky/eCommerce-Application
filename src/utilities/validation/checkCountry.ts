import check from '../validation/checker';

const regExpression = /.+/;

export default function checkCountry(e: Event):void {
  const targetInput = (e.target as HTMLElement);
  const countries = targetInput.parentElement?.querySelector('.Requirements') as HTMLElement;
  countries.style.display = 'block';
  const countriesList = countries.querySelectorAll('.text');
  targetInput.addEventListener('input', () => {
    const val = (targetInput as HTMLInputElement).value;
    countries.style.display = 'block';
    check(countries, regExpression, val, targetInput);
  });
  countriesList.forEach((c) => {
    c.addEventListener('click', function () {
      (targetInput as HTMLInputElement).value = c.innerHTML;
      countries.style.display = 'none';
      if (!targetInput.classList.contains('accept')) targetInput.classList.add('accept');
    });
  });
  targetInput.removeEventListener('input', () => countries.style.display = 'block');
  targetInput.removeEventListener('blur', () => countries.style.display = 'none');
  countriesList.forEach((c) => {
    c.removeEventListener('click', () => countries.style.display = 'none');
  });
}
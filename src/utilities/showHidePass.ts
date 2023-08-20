export default function showHidePass(e: Event):void {
  const targetInput = (e.target as HTMLElement).previousElementSibling;
  if ((targetInput as HTMLInputElement).type === 'password') {
    (targetInput as HTMLInputElement).type = 'text';
  } else {
    (targetInput as HTMLInputElement).type = 'password';
  }
  if ((e.target as HTMLElement).classList.contains('showPass')) {
    (e.target as HTMLElement).classList.remove('showPass');
    (e.target as HTMLElement).classList.add('hidePass');
  } else {
    (e.target as HTMLElement).classList.remove('hidePass');
    (e.target as HTMLElement).classList.add('showPass');
  }
}
export default function registerCheckBoxStatus(e: Event):void {
  const targetInput = (e.target as HTMLInputElement);
  const shippingAdressContainer = document.querySelector('.shippingAdressContainer');
  if (targetInput.checked) {
    shippingAdressContainer?.classList.add('hide');
  } else {
    shippingAdressContainer?.classList.remove('hide');
  }
}
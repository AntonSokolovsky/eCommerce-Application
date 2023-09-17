export default function setItems() {
  const width = window.innerWidth;
  const countsOnPC = 12;
  const countsOnTablet = 12;
  const countsOnSmallTablet = 9;
  const countsOnTL = 6;
  let targetCount;
            
  if (width > 1100) {
    targetCount = countsOnPC;
  } else if (width > 750 && width < 1100) {
    targetCount = countsOnTablet;
  } else if (width > 550 && width < 750) {
    targetCount = countsOnSmallTablet;
  } else if (width < 550) {
    targetCount = countsOnTL;
  }

  return targetCount;
}
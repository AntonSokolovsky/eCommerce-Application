import { countryList } from './validation/postalCodes';

export function getCountryCode(countryName: string): string {
  const countryCodes = new Map<string, string>();
  Object.entries(countryList).forEach(([key, value]) => {
    countryCodes.set(key, value.codeCountry);
  });

  return countryCodes.get(countryName) || '';
}
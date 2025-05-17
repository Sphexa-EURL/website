import { landingPageConfig } from "@/config/landing-page";

export function getCodeFromCountryName(countryName: string) {
  const country = landingPageConfig.language.countries.find(
    (country) => country.name === countryName
  );
  return country ? country.code : null;
}

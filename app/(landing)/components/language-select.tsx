'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/ui/select';
import { landingPageConfig } from '@/config/landing-page';
import * as React from 'react';
import { redirect } from 'next/navigation';
import ReactCountryFlag from 'react-country-flag';
import Trigger from './trigger';
import { getCodeFromCountryName } from '@/lib/country';

export default function LanguageSelect() {
  const [open, setOpen] = React.useState(false);

  return (
    <Select
      onValueChange={(value: string) => {
        const countryCode = getCodeFromCountryName(value);
        console.log('countryCode', countryCode);
        if (countryCode === null) {
          return;
        }

        if (countryCode === landingPageConfig.language.defaultCountry) {
          redirect('/');
        } else {
          redirect(
            (getCodeFromCountryName(value) as string).toLocaleLowerCase()
          );
        }
      }}
      onOpenChange={setOpen}
    >
      <Trigger open={open}>
        <SelectValue placeholder="Language"></SelectValue>
      </Trigger>
      <SelectContent className="rounded-md">
        {landingPageConfig.language.countries.map((country) => (
          <SelectItem key={country.code} value={country.name}>
            <ReactCountryFlag key={country.code} countryCode={country.code} />
            {country.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

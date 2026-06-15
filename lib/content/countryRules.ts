import type { LocalizedText } from './types';

export type CountryCode = 'ES' | 'IT' | 'PT' | 'FR' | 'NL';

export type Country = {
  code: CountryCode;
  name: LocalizedText;
  /** Country-specific rule shown in the localised Traffic Rules module. */
  minAgeRule: LocalizedText;
};

/**
 * Countries offered in the settings selector and the country-specific rule
 * variants for the Traffic Rules module. This is intentionally a small, static
 * table; the same shape can later be served from a CMS.
 */
export const countries: Country[] = [
  {
    code: 'ES',
    name: { en: 'Spain', es: 'España' },
    minAgeRule: {
      en: 'In Spain you must be at least 16 years old to ride. No driving licence is required.',
      es: 'En España debes tener al menos 16 años para conducir. No se necesita carné de conducir.',
    },
  },
  {
    code: 'IT',
    name: { en: 'Italy', es: 'Italia' },
    minAgeRule: {
      en: 'In Italy you must be at least 14 years old to ride an eBike with pedal assist.',
      es: 'En Italia debes tener al menos 14 años para conducir una eBike con asistencia al pedaleo.',
    },
  },
  {
    code: 'PT',
    name: { en: 'Portugal', es: 'Portugal' },
    minAgeRule: {
      en: 'In Portugal pedal-assist eBikes follow bicycle rules; riders are typically 16 or older.',
      es: 'En Portugal las eBikes con asistencia siguen las normas de las bicicletas; los conductores suelen tener 16 años o más.',
    },
  },
  {
    code: 'FR',
    name: { en: 'France', es: 'Francia' },
    minAgeRule: {
      en: 'In France pedal-assist eBikes are treated as bicycles; no licence is required.',
      es: 'En Francia las eBikes con asistencia se consideran bicicletas; no se requiere licencia.',
    },
  },
  {
    code: 'NL',
    name: { en: 'Netherlands', es: 'Países Bajos' },
    minAgeRule: {
      en: 'In the Netherlands pedal-assist eBikes follow bicycle rules and have no minimum age for assistance up to 25 km/h.',
      es: 'En los Países Bajos las eBikes con asistencia siguen las normas de las bicicletas y no tienen edad mínima para asistencia hasta 25 km/h.',
    },
  },
];

export function getCountry(code: string): Country | undefined {
  return countries.find((c) => c.code === code);
}

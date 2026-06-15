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
    name: {
      en: 'Spain',
      es: 'España',
      it: 'Spagna',
      nl: 'Spanje',
      fr: 'Espagne',
      ca: 'Espanya',
      pt: 'Espanha',
    },
    minAgeRule: {
      en: 'In Spain you must be at least 16 years old to ride. No driving licence is required.',
      es: 'En España debes tener al menos 16 años para conducir. No se necesita carné de conducir.',
      it: 'In Spagna devi avere almeno 16 anni per guidare. Non è richiesta la patente.',
      nl: 'In Spanje moet je minstens 16 jaar oud zijn om te rijden. Een rijbewijs is niet vereist.',
      fr: 'En Espagne, vous devez avoir au moins 16 ans pour rouler. Aucun permis de conduire n\'est requis.',
      ca: 'A Espanya has de tenir com a mínim 16 anys per conduir. No cal carnet de conduir.',
      pt: 'Em Espanha tens de ter pelo menos 16 anos para conduzir. Não é necessária carta de condução.',
    },
  },
  {
    code: 'IT',
    name: {
      en: 'Italy',
      es: 'Italia',
      it: 'Italia',
      nl: 'Italië',
      fr: 'Italie',
      ca: 'Itàlia',
      pt: 'Itália',
    },
    minAgeRule: {
      en: 'In Italy you must be at least 14 years old to ride an eBike with pedal assist.',
      es: 'En Italia debes tener al menos 14 años para conducir una eBike con asistencia al pedaleo.',
      it: 'In Italia devi avere almeno 14 anni per guidare una eBike a pedalata assistita.',
      nl: 'In Italië moet je minstens 14 jaar oud zijn om op een eBike met trapondersteuning te rijden.',
      fr: 'En Italie, vous devez avoir au moins 14 ans pour rouler sur un eBike à assistance au pédalage.',
      ca: 'A Itàlia has de tenir com a mínim 14 anys per conduir una eBike amb assistència al pedaleig.',
      pt: 'Em Itália tens de ter pelo menos 14 anos para conduzir uma eBike com assistência ao pedal.',
    },
  },
  {
    code: 'PT',
    name: {
      en: 'Portugal',
      es: 'Portugal',
      it: 'Portogallo',
      nl: 'Portugal',
      fr: 'Portugal',
      ca: 'Portugal',
      pt: 'Portugal',
    },
    minAgeRule: {
      en: 'In Portugal pedal-assist eBikes follow bicycle rules; riders are typically 16 or older.',
      es: 'En Portugal las eBikes con asistencia siguen las normas de las bicicletas; los conductores suelen tener 16 años o más.',
      it: 'In Portogallo le eBike a pedalata assistita seguono le regole delle biciclette; i conducenti hanno solitamente 16 anni o più.',
      nl: 'In Portugal volgen eBikes met trapondersteuning de fietsregels; bestuurders zijn doorgaans 16 jaar of ouder.',
      fr: 'Au Portugal, les eBikes à assistance au pédalage suivent les règles des bicyclettes ; les conducteurs ont généralement 16 ans ou plus.',
      ca: 'A Portugal les eBikes amb assistència segueixen les normes de les bicicletes; els conductors solen tenir 16 anys o més.',
      pt: 'Em Portugal as eBikes com assistência ao pedal seguem as regras das bicicletas; os condutores têm normalmente 16 anos ou mais.',
    },
  },
  {
    code: 'FR',
    name: {
      en: 'France',
      es: 'Francia',
      it: 'Francia',
      nl: 'Frankrijk',
      fr: 'France',
      ca: 'França',
      pt: 'França',
    },
    minAgeRule: {
      en: 'In France pedal-assist eBikes are treated as bicycles; no licence is required.',
      es: 'En Francia las eBikes con asistencia se consideran bicicletas; no se requiere licencia.',
      it: 'In Francia le eBike a pedalata assistita sono considerate biciclette; non è richiesta la patente.',
      nl: 'In Frankrijk worden eBikes met trapondersteuning als fietsen behandeld; een rijbewijs is niet vereist.',
      fr: 'En France, les eBikes à assistance au pédalage sont considérés comme des bicyclettes ; aucun permis n\'est requis.',
      ca: 'A França les eBikes amb assistència es consideren bicicletes; no cal cap llicència.',
      pt: 'Em França as eBikes com assistência ao pedal são tratadas como bicicletas; não é necessária licença.',
    },
  },
  {
    code: 'NL',
    name: {
      en: 'Netherlands',
      es: 'Países Bajos',
      it: 'Paesi Bassi',
      nl: 'Nederland',
      fr: 'Pays-Bas',
      ca: 'Països Baixos',
      pt: 'Países Baixos',
    },
    minAgeRule: {
      en: 'In the Netherlands pedal-assist eBikes follow bicycle rules and have no minimum age for assistance up to 25 km/h.',
      es: 'En los Países Bajos las eBikes con asistencia siguen las normas de las bicicletas y no tienen edad mínima para asistencia hasta 25 km/h.',
      it: 'Nei Paesi Bassi le eBike a pedalata assistita seguono le regole delle biciclette e non hanno un\'età minima per l\'assistenza fino a 25 km/h.',
      nl: 'In Nederland volgen eBikes met trapondersteuning de fietsregels en geldt er geen minimumleeftijd voor ondersteuning tot 25 km/u.',
      fr: 'Aux Pays-Bas, les eBikes à assistance au pédalage suivent les règles des bicyclettes et n\'ont pas d\'âge minimum pour l\'assistance jusqu\'à 25 km/h.',
      ca: 'Als Països Baixos les eBikes amb assistència segueixen les normes de les bicicletes i no tenen edat mínima per a l\'assistència fins a 25 km/h.',
      pt: 'Nos Países Baixos as eBikes com assistência ao pedal seguem as regras das bicicletas e não têm idade mínima para assistência até 25 km/h.',
    },
  },
];

export function getCountry(code: string): Country | undefined {
  return countries.find((c) => c.code === code);
}

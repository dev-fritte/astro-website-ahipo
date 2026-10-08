// Single source of truth for contact data, used by the contact block, footer,
// translations and the structured data (JSON-LD) in the base layout.
// Note: the imprint and privacy pages contain their own static legal texts.

export const CONTACT = {
    phone: '+49 7611 5534480',
    mobile: '+49 176 83417714',
    email: 'info@ahipo.de',
} as const;

export const ADDRESS = {
    street: 'Stühlingerstraße 1',
    postalCode: '79106',
    city: 'Freiburg',
    cityLong: 'Freiburg im Breisgau',
    countryCode: 'DE',
} as const;

export const SOCIAL = {
    instagram: 'https://www.instagram.com/rechtsanwaeltin_ahipo/',
    xing: 'https://www.xing.com/profile/Melanie_Ahipo',
} as const;

/** `+49 7611 5534480` -> `+4976115534480` */
const compact = (phoneNumber: string) => phoneNumber.replace(/\s/g, '');

export const phoneHref = (phoneNumber: string) => `tel:${compact(phoneNumber)}`;
export const whatsappHref = (phoneNumber: string) => `https://wa.me/${compact(phoneNumber)}/`;
export const mailHref = (email: string) => `mailto:${email}`;

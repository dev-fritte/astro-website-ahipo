// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import {type Multilingual} from '@/i18n';

export const SITE_TITLE: string | Multilingual = "Melanie Ahipo";

export const SITE_DESCRIPTION: string | Multilingual = {
    en: "A starter template for Astro with i18n support.",
    de: 'Rechtsanwältin & rechtliche Betreuerin'
};

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
    en: "This page is not available in your language.",
    de: 'Diese Seite ist in deiner Sprache nicht vorhanden',
};

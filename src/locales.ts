// locale settings for this theme
// https://astro-i18n-starter.pages.dev/setup/

export const DEFAULT_LOCALE_SETTING: string = 'de';

export const LOCALES_SETTING: LocaleSetting = {
    'en': {
        'label': 'English'
    },
    'de': {
        'label': 'Deutsch'
    }
};

interface LocaleSetting {
    [key: Lowercase<string>]: {
        label: string;
        lang?: string;
    };
} // refer: https://starlight.astro.build/reference/configuration/#locales

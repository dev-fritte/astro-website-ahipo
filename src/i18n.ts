import {DEFAULT_LOCALE_SETTING, LOCALES_SETTING} from './locales';
import {getRelativeLocaleUrl} from 'astro:i18n';
import translations from '@/i18n/translations.ts';


/**
 * User-defined locales list
 * @constant @readonly
 */
export const LOCALES = LOCALES_SETTING as Record<string, LocaleConfig>;
type LocaleConfig = {
    readonly label: string;
    readonly lang?: string;
};


/**
 * Type for the language code
 * @example
 * "en" | "de" | ...
 */
export type Lang = keyof typeof LOCALES;


/**
 * Default locale code
 * @constant @readonly
 */
export const DEFAULT_LOCALE = DEFAULT_LOCALE_SETTING;


/**
 * Type for the multilingual object
 * @example
 * { en: "Hello", de: "Hallo", ... }
 */
export type Multilingual = { [key in Lang]?: string };


/**
 * Helper to get the translation function
 * @param - The current language
 * @returns - The translation function
 */
export function useTranslations(lang: Lang) {
    return function t(multilingual: Multilingual | string): string {
        if (typeof multilingual === 'string') {
            return translations[lang][multilingual] ?? translations[DEFAULT_LOCALE][multilingual] ?? multilingual;
        } else {
            return (multilingual[lang] ?? multilingual[DEFAULT_LOCALE]) ?? '';
        }
    };
}


/**
 * Helper to get corresponding path list for all locales
 * @param url - The current URL object
 * @returns - The list of locale paths
 */
export function getLocalePaths(url: URL): LocalePath[] {
    return Object.keys(LOCALES).map((lang) => {
        return {
            lang: lang,
            path: getRelativeLocaleUrl(lang, url.pathname.replace(/^\/[a-zA-Z-]+/, ''))
        };
    });
}

type LocalePath = {
    lang: Lang;
    path: string;
};


/**
 * Helper to get locale parms for Astro's `getStaticPaths` function
 * @returns - The list of locale params
 * @see https://docs.astro.build/en/guides/routing/#dynamic-routes
 */
export const localeParams = Object.keys(LOCALES).map((lang) => ({
    params: {lang},
}));

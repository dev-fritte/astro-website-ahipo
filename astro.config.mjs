import {defineConfig} from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

import svgr from 'vite-plugin-svgr'

import jopSoftwarecookieconsent from '@jop-software/astro-cookieconsent';

// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwind(), icon(), jopSoftwarecookieconsent({
        guiOptions: {
            consentModal: {
                layout: 'box',
                position: 'bottom left',
                equalWeightButtons: true,
                flipButtons: false,
            },
            preferencesModal: {
                layout: 'box',
                position: 'right',
                equalWeightButtons: true,
                flipButtons: false,
            },
        },
        categories: { // Required, at least one category is required
            necessary: {
                enabled: true, // this category is enabled by default
                readOnly: true, // this category cannot be disabled
            },
            // preferences: {
            //     enabled: true, // this category is enabled by default
            // },
            // statistics: {
            //     enabled: true,
            // },
            // marketing: {
            //     enabled: true,
            // },
        },
        language: { // Required, at least one language is required
            autoDetect: 'document',
            default: 'en',
            translations: { // This is a template content
                en: {
                    consentModal: {
                        title: 'Cookie preferences',
                        description: 'Manage which cookies you want to allow or reject for various processing purposes.',
                        acceptAllBtn: 'Allow all',
                        acceptNecessaryBtn: 'Only neccessary',
                        showPreferencesBtn: 'Manage categories',
                    },
                    preferencesModal: {
                        title: 'Manage cookie preferences',
                        acceptAllBtn: 'Allow all',
                        acceptNecessaryBtn: 'Deny all',
                        savePreferencesBtn: 'Allow selection',
                        closeIconLabel: 'Close cookie preferences',
                        sections: [
                            {
                                title: 'Cookies are important for certain website functions.',
                                description: 'Cookies are required for most websites in order to store settings or analyze user behavior on the website. This site does not currently use cookies.',
                            },
                            {
                                title: 'Necessary',
                                description: 'Cookies that are necessary for the operation of the website',
                                linkedCategory: 'necessary',
                            },
                            // {
                            //     title: 'Preferences',
                            //     description: 'Preference cookies ...',
                            //     linkedCategory: 'preferences',
                            // },
                            // {
                            //     title: 'Statistics',
                            //     description: 'Statistic cookies ...',
                            //     linkedCategory: 'statistics',
                            // },
                            // {
                            //     title: 'Marketing',
                            //     description: 'Marketing cookies ...',
                            //     linkedCategory: 'marketing',
                            // },
                            // {
                            //     title: 'More information',
                            //     description: `Cookies are ...`,
                            // },
                        ],
                    },
                },
                de: {
                    consentModal: {
                        title: 'Cookie Einstellungen',
                        description: 'Verwalten Sie, welche Cookies sie für verschiedene Verwarbeitungszwecke erlauben oder ablehnen möchten',
                        acceptAllBtn: 'Alle erlauben',
                        acceptNecessaryBtn: 'Nur notwendige',
                        showPreferencesBtn: 'Kategorien verwalten',
                    },
                    preferencesModal: {
                        title: 'Cookie-Einstellungen verwalten',
                        acceptAllBtn: 'Alle erlauben',
                        acceptNecessaryBtn: 'Alle ablehnen',
                        savePreferencesBtn: 'Auswahl zulassen',
                        closeIconLabel: 'Kategorieauswahl schließen ',
                        sections: [
                            {
                                title: 'Cookies sind wichtig für bestimmte Funktionen von Webseiten',
                                description: 'Cookies werden für die meisten Webseiten benötigt, um Einstellungen zu speichern oder das Nutzerverhalten auf der Webseite zu analysieren. Diese Seite benutzt derzeit keine Cookies.',
                            },
                            {
                                title: 'Erforderlich',
                                description: 'Cookies, die erforderlich für den Betrieb der Webseite sind',
                                linkedCategory: 'necessary',
                            },
                        ],
                    },
                },
            },
        },
    })
    ],
    site: 'https://ahipo.de',
    i18n: {
        defaultLocale: 'de',
        locales: ['en', 'de'],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: false,
        },
    },
    vite: {
        plugins: [
            svgr({
                include: '**/*.svg?react',
                svgrOptions: {
                    plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
                    svgoConfig: {
                        plugins: [],
                    },
                },
            }),
        ],
    },
});

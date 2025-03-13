type translations = {
    [key: string]: {
        [key: string]: string
    }
}

const translations: translations = {
    'en': {
        'nav.home': 'Home',
        'nav.imprint': 'Imprint',
        'nav.privacy': 'Privacy',
    },
    'de': {
        'nav.home': 'Zuhause',
        'nav.imprint': 'Impressum',
        'nav.privacy': 'Datenschutz',
    },
} as const;

export default translations;

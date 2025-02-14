export const getLanguagePath = (currentLanguage: string | undefined) => {
    if (currentLanguage === 'de') {
        return '/en'
    }

    return '/de'
}

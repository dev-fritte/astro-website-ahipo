type translations = {
    [key: string]: {
        [key: string]: string
    }
}

const translations: translations = {
    'en': {
        'nav.home': 'Home',
        'general.imprint': 'Imprint',
        'general.privacy': 'Privacy',
        'general.contact': 'Contact',
        'hero.title': 'Lawyer and conservator',
        'features.title': 'I represent you in the following areas',
        'features.legal.title': 'Criminal law / Foreign law',
        'features.legal.text': 'As an experienced criminal lawyer, I am here to provide you with the expertise and commitment to effectively represent your legal interests. Whether you are facing criminal charges or need legal support to protect your rights, I am here to help you.',
        'features.assistance.title': 'Conservatorship',
        'features.assistance.text': 'As a conservator, my mission is to assist people in challenging life situations and to advocate for their legal and personal interests. I support my clients with empathy, expertise and commitment to ensure that their needs and interests are represented.',
        'content1.title': 'Personally there for you -',
        'content1.subheader': 'reliable, committed and flexible',
        'content1.text1': 'In my position as an independent lawyer and conservator in Freiburg im Breisgau, I have specialized in a variety of legal areas. With over 6 years of experience in this field, I provide my clients with competent and committed support.',
        'content1.text2': 'As a lawyer, I am particularly active in criminal law and represent my clients with passion and expertise. My focus is on the areas of criminal law, immigration law and guardianship law. I attach great importance to responding to the individual needs of my clients and representing them in the best possible way.',
        'content1.text3': 'I represent clients in Freiburg im Breisgau and the surrounding area as well as nationwide. Feel free to contact me to discuss your legal questions and work out solutions together.',
        'footer.socials.title': 'Follow me on my socials'
    },
    'de': {
        'personal.name': 'Melanie Ahipo',
        'personal.address.street': 'Stühlingerstraße 1',
        'personal.address.city': '79106 Freiburg',
        'nav.home': 'Zuhause',
        'general.imprint': 'Impressum',
        'general.privacy': 'Datenschutz',
        'general.contact': 'Kontakt',
        'hero.title': 'Rechtsanwältin und rechtliche Betreuerin',
        'features.title': 'Ich vertrete Sie in den folgenden Gebieten',
        'features.legal.title': 'Strafrecht / Ausländerrecht',
        'features.legal.text': 'Als erfahrene Rechtsanwältin für Strafrecht stehe ich Ihnen mit Fachwissen und Engagement zur Seite, um Ihre rechtlichen Belange effektiv zu vertreten. Ob Sie mit strafrechtlichen Anschuldigungen konfrontiert sind oder rechtliche Unterstützung im Strafrecht oder Ausländerrecht benötigen, um Ihre Rechte zu schützen - ich bin hier, um Ihnen zu helfen.',
        'features.assistance.title': 'Rechtliche Betreuung',
        'features.assistance.text': 'Als professionelle rechtliche Betreuerin ist es meine Mission, Menschen in unterschiedlichsten und herausfordernden Lebenssituationen beizustehen und für ihre rechtlichen und persönlichen Belange einzutreten. Mit Einfühlungsvermögen, Fachwissen und Engagement stehe ich meinen Klienten zur Seite, um sicherzustellen, dass ihre Bedürfnisse und Interessen vertreten werden.',
        'content1.title': 'Persönlich für Sie da -',
        'content1.subheader': 'zuverlässig, engagiert und flexibel',
        'content1.text1': 'In meiner Position als selbstständige Rechtsanwältin und rechtliche Betreuerin in Freiburg im Breisgau habe ich mich auf die oben genanten Rechtsgebiete spezialisiert. Mit über 7 Jahren Erfahrung auf diesem Gebiet stehe ich meinen Mandanten und Klienten kompetent und engagiert zur Seite.',
        'content1.text2': 'Als Rechtsanwältin bin ich insbesondere im Strafrecht, Ausländerrecht und Betreuungsrecht tätig und vertrete meine Mandanten und Klienten mit Leidenschaft und Fachkenntnis. Dabei lege ich großen Wert darauf, individuell auf die Bedürfnisse meiner Mandanten und Klienten einzugehen und sie bestmöglich zu vertreten.',
        'content1.text3': 'Ich vertrete in Freiburg im Breisgau und Umgebung sowie bundesweit. Kontaktieren Sie mich gerne, um Ihre rechtlichen Fragen zu besprechen und gemeinsam Lösungen zu erarbeiten.',
        'footer.socials.title': 'Folgen Sie mir auf Social Media'
    },
} as const;

export default translations;

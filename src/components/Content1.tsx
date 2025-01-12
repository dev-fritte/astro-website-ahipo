import React from 'react'
import {ContentBlock} from '@components/ContentBlock.tsx'

export const Content1: React.FC = () => {
    return (
        <ContentBlock>
            <div className="mt-10 w-full flex flex-col gap-10">

                <div>
                    <h2 className={'text-4xl'}>{'Persönlich für Sie da -'}</h2>
                    <h2 className={'text-4xl'}>{'zuverlässig, engagiert und flexibel'}</h2>
                </div>

                <div className={'flex-1 flex justify-around gap-10 flex-wrap'}>

                    <div className={'flex-1 flex flex-col gap-4 min-w-[250px]'}>
                        <p className={'max-w-[500px]'}>{'In meiner Position als selbstständige Rechtsanwältin und\n' +
                            'rechtliche Betreuerin bei der renommierten Kanzlei RAFIAH in\n' +
                            'Freiburg im Breisgau habe ich mich auf eine Vielzahl von\n' +
                            'Rechtsgebieten spezialisiert. Mit über 6 Jahren Erfahrung auf\n' +
                            'diesem Gebiet stehe ich meinen Mandanten kompetent und\n' +
                            'engagiert zur Seite.'}</p>

                        <p className={'max-w-[500px]'}>{'Als Rechtsanwältin bin ich insbesondere im Strafrecht tätig und\n' +
                            'vertrete meine Mandanten mit Leidenschaft und Fachkenntnis.\n' +
                            'Mein Fokus liegt dabei auf den Bereichen Strafrecht,\n' +
                            'Ausländerrecht und Betreuungsrecht. Dabei lege ich großen Wert\n' +
                            'darauf, individuell auf die Bedürfnisse meiner Mandanten\n' +
                            'einzugehen und sie bestmöglich zu vertreten.'}</p>

                        <p className={'max-w-[500px]'}>{'Ich vertrete in Freiburg im Breisgau und Umgebung sowie\n' +
                            'bundesweit. Kontaktieren Sie mich gerne, um Ihre rechtlichen\n' +
                            'Fragen zu besprechen und gemeinsam Lösungen zu erarbeiten.'}</p>
                    </div>

                    <div className={'flex-1'}>
                        <img src={'.'} alt={'Laptop'}/>
                    </div>

                </div>

            </div>
        </ContentBlock>
    );
}

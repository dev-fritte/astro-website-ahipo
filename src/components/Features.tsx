import React from 'react'
import {ContentBlock} from '@components/ContentBlock.tsx'

export const Features: React.FC = () => {
    return (
        <ContentBlock>
            <div className="mt-10 w-full flex flex-col gap-10">

                <div className={'self-center text-center'}>
                    <h2 className={'text-4xl'}>{'Ich vertrete Sie in den folgenden Gebieten'}</h2>
                </div>

                <div className={'flex-1 flex justify-around gap-10 flex-wrap'}>

                    <div className={'flex-1 flex justify-center'}>
                        <div className={'max-w-[500px] min-w-[250px] flex flex-col gap-4 text-center'}>
                            <h3 className={'text-3xl'}>{'Strafrecht'}</h3>
                            <p>{'Als erfahrene Rechtsanwältin für Strafrecht stehe ich Ihnen mit\n' +
                                'Fachwissen und Engagement zur Seite, um Ihre rechtlichen\n' +
                                'Belange effektiv zu vertreten. Ob Sie mit strafrechtlichen\n' +
                                'Anschuldigungen konfrontiert sind oder rechtliche\n' +
                                'Unterstützung benötigen, um Ihre Rechte zu schützen - ich bin\n' +
                                'hier, um Ihnen zu helfen.'}</p>
                        </div>
                    </div>

                    <div className={'flex-1 flex justify-center'}>
                        <div className={'max-w-[500px] min-w-[250px] flex flex-col gap-4 text-center'}>
                            <h3 className={'text-3xl'}>{'Rechtliche Betreuung'}</h3>
                            <p>{'Als professionelle rechtliche Betreuerin ist es meine Mission,\n' +
                                'Menschen in herausfordernden Lebenssituationen beizustehen\n' +
                                'und für ihre rechtlichen und persönlichen Belange einzutreten.\n' +
                                'Mit Einfühlungsvermögen, Fachwissen und Engagement stehe\n' +
                                'ich meinen Klienten zur Seite, um sicherzustellen, dass ihre\n' +
                                'Bedürfnisse und Interessen vertreten werden.'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </ContentBlock>
    );
}

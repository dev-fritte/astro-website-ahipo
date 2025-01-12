import React from 'react'
import {ContentBlock} from '@components/ContentBlock.tsx'

export const Hero: React.FC = () => {
    return (
        <div className={'w-full flex bg-corporate-main'}>
            <ContentBlock>
                <div className="mt-20 text-corporate-light w-full flex justify-center gap-20">

                    <div className={'flex-1 justify-end'}>
                        <img src={'.'} alt={'Melanie Ahipo'}/>
                    </div>

                    <div className={'flex-1 flex flex-col gap-4 pb-10'}>
                        <div className={'uppercase'}>
                            <h1 className={'text-8xl'}>{'Melanie'}</h1>
                            <h1 className={'text-8xl'}>{'Ahipo'}</h1>
                        </div>
                        <p className={'text-2xl'}>{'Rechtsanwältin und rechtliche Betreuerin'}</p>
                    </div>
                </div>
            </ContentBlock>
        </div>
    );
}

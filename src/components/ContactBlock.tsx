import React from 'react'
import {ContentBlock} from '@components/ContentBlock.tsx'

export const ContactBlock: React.FC = () => {
    return (
        <div className={'w-full flex bg-corporate-main'}>
            <ContentBlock>
                <div className="w-full flex flex-col gap-10 text-corporate-light py-4">
                    <div className={'self-center'}>
                        <h3 className={'text-4xl'}>{'Kontakt'}</h3>
                    </div>

                    <div className={'flex gap-2 justify-around flex-wrap'}>
                        <button className={'w-20'}>{'Anruf'}</button>
                        <button className={'w-20'}>{'E-Mail'}</button>
                        <button className={'w-20'}>{'WhatsApp'}</button>
                    </div>
                </div>
            </ContentBlock>
        </div>
    );
}

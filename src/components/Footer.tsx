import React from 'react'
import Logo from 'src/images/ahipo_logo.svg?react';
import {ContentBlock} from '@components/ContentBlock.tsx'


export const Footer: React.FC = () => {
    return (
        <footer className={'py-4 w-full bottom-0'}>
            <ContentBlock>
                <div className={'flex flex-col gap-4'}>
                    <div className={'w-56'}>
                        <Logo/>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <p>{'Rechtsanwälting und rechtliche Betreuerin'}</p>
                            <p>{'Melanie Ahipo'}</p>
                            <p>{'Musterstraße 1A'}</p>
                            <p>{'12345 Musterstadt'}</p>
                        </div>
                    </div>
                </div>
            </ContentBlock>
        </footer>
    );
}

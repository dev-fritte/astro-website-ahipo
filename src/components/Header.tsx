import React from 'react'
import Logo from 'src/images/ahipo_logo.svg?react';
import {ContentBlock} from '@components/ContentBlock.tsx'

export const Header: React.FC = () => {
    return (
        <nav className={'w-full h-40 flex'}>
            <ContentBlock>
                <div className="w-full px-3 flex justify-between items-center">
                    <div className={'w-80'}>
                        <Logo/>
                    </div>

                    <div className={'flex gap-2'}>
                        <div>{'Sprache'}</div>
                        <button>{'Kontakt'}</button>
                    </div>
                </div>
            </ContentBlock>
        </nav>
    );
}

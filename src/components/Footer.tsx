import React from 'react';
import {ContentBlock} from '@/components/ContentBlock.tsx';


export const Footer: React.FC = () => {
    return (
        <footer className={'py-4 w-full bottom-0'}>
            <ContentBlock>
                <div className={'flex-1 flex flex-col gap-10'}>
                    <div className={'w-56'}>
                    </div>

                    <div className="flex-1 flex justify-between">
                        <div>
                            <p>{'Rechtsanwälting und rechtliche Betreuerin'}</p>
                            <p>{'Melanie Ahipo'}</p>
                            <p>{'Musterstraße 1A'}</p>
                            <p>{'12345 Musterstadt'}</p>
                        </div>

                        <div>
                            <p>{'Folgen Sie mir auf Social Media'}</p>
                        </div>
                    </div>

                    <div className={'flex gap-4 text-sm'}>
                        <a href={'/imprint'}>{'Impressum'}</a>
                        <div className="inline-block w-0.5 self-stretch bg-corporate-main"></div>
                        <a href={'/privacy'}>{'Datenschutzerklärung'}</a>
                    </div>
                </div>
            </ContentBlock>
        </footer>
    );
}

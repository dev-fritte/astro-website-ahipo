import React, {type PropsWithChildren} from 'react'

type ContentBlockProps = {
    disableVerticalPadding?: boolean
}

export const ContentBlock: React.FC<PropsWithChildren<ContentBlockProps>> = ({disableVerticalPadding, children}) => {
    return (
        <div className={`w-full flex-1 flex px-20 ${disableVerticalPadding ? '' : 'py-8'}`}>
            {children}
        </div>
    );
}

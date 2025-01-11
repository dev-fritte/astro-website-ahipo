import React, {type PropsWithChildren} from 'react'

export const ContentBlock: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="w-full flex-1 flex px-20">
            {children}
        </div>
    );
}

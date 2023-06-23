import React, {ChangeEvent} from 'react';

type SuperInputType = {
    value?: any
    className: any
    id: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SuperInput: React.FC<SuperInputType> = ({
                                                         value,
                                                         id,
                                                         onChange,
                                                         className
                                                     }) => {
    return (
        <div>
            <input
                type={"number"}
                id={id}
                onChange={onChange}
                value={value}
                className={className}
            />
        </div>
    );
};


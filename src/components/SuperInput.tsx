import React from 'react';


type SuperInputPropsType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    value: string
}

export const SuperInput: React.FC<SuperInputPropsType> = ({
                                                              value,
                                                              ...rest
                                                          }) => {

    return (
        <div >

            <input
                type={'number'}
                value={value}
                {...rest}
            />
        </div>
    );
};

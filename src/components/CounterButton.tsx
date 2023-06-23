import React from 'react';


type ButtonPropsType = {
    onClick?: () => void
    name: string
    className?: string
    disabled?: boolean

}

export const CounterButton: React.FC<ButtonPropsType> = ({
                                                      onClick,
                                                      name,
                                                      className,
                                                      disabled
                                                  }) => {
    return (
        <div>
            <button
                onClick={onClick}
                className={className}
                disabled={disabled}
            >
                {name}
            </button>
        </div>
    );
};


import React from 'react';
import s from './Counter.module.css'

type TitleCounterType = {
    disabledButton: boolean
    count: number
    errorBoxClass: string
    correctValue: boolean
    incorrectInputValue: boolean
}

export const TitleCounter: React.FC<TitleCounterType> = ({
                                                             disabledButton,
                                                             count,
                                                             correctValue,
                                                             incorrectInputValue,
                                                             errorBoxClass
                                                         }) => {

    const titleCounter = () => {
        const defaultValue = 'enter values and press \'set\''
        const errorValue = 'Incorrect value!'

        if (correctValue && !disabledButton) {
            return defaultValue
        } else if (incorrectInputValue) {
            return errorValue
        } else {
            return count
        }

    }
    return (
        <div className={s.a}>
              <span className={errorBoxClass}
              >
                    {titleCounter()}
                </span>
        </div>
    );
};


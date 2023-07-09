import React from 'react';
import {CounterButton} from "./CounterButton";
import s from './Counter.module.css'
import {TitleCounter} from "./TitleCounter";

type CounterPropsType = {
    count: number
    addCounter: () => void
    resCounter: () => void
    startValue: number
    maxValue: number
    disabledButton: boolean
}

export const Counter: React.FC<CounterPropsType> = ({
                                                        count,
                                                        addCounter,
                                                        resCounter,
                                                        startValue,
                                                        maxValue,
                                                        disabledButton,


                                                    }) => {
    const isMaxValueCount = count === maxValue // максимальное значение счетчика
    const isIncorrectValue = startValue >= maxValue
    const isIncorrectInputValue = startValue < 0 || isIncorrectValue
    const errorBoxClass = isIncorrectInputValue || isMaxValueCount ? s.limitedCounterValue : s.outputCounterValue
    const isCorrectValue = startValue < maxValue && startValue > -1
    const incButtonClass = isMaxValueCount || !disabledButton ? s.disabledButton : s.button
    const resButtonClass = isIncorrectInputValue || !disabledButton ? s.disabledButton : s.button
    const disabledIncButton = isMaxValueCount || isIncorrectValue
    // !disabledButton кнопка не задизейблина

    return (
        <div className={s.countContainer}>
            <div
            >
                <TitleCounter
                    correctValue={isCorrectValue}
                    incorrectInputValue={isIncorrectInputValue}
                    errorBoxClass={errorBoxClass}
                    disabledButton={disabledButton}
                    count={count}
                />
            </div>
            <div className={s.buttonContainer}>
                <CounterButton
                    disabled={disabledIncButton}
                    onClick={addCounter}
                    name={'inc'}
                    className={incButtonClass}/>
                <CounterButton
                    disabled={isIncorrectValue}
                    onClick={resCounter}
                    name={'reset'}
                    className={resButtonClass}/>

            </div>


        </div>
    );
};


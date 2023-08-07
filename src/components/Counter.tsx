import React from 'react';
import {CounterButton} from "./CounterButton";
import s from './Counter.module.css'
import {TitleCounter} from "./TitleCounter";
import {useDispatch, useSelector} from "react-redux";
import {StateStoreType} from "./state/store";
import {incActionCreator, resActionCreator, StateType} from "./state/counter-reducer";
import {counterSelector} from "./selector/counterSelector";


export const Counter = () => {

    const dispatch = useDispatch()
    const count = useSelector<StateStoreType, StateType>(counterSelector)

    const addCounter = () => {
        if (count.startValue < count.maxValue) {
            dispatch(incActionCreator())
        }
    }

    const resCounter = () => {
        dispatch(resActionCreator())
    }

    const isMaxValueCount = count.count === count.maxValue // максимальное значение счетчика
    const isIncorrectValue = count.startValue >= count.maxValue
    const isIncorrectInputValue = count.startValue < 0 || isIncorrectValue
    const errorBoxClass = isIncorrectInputValue || isMaxValueCount ? s.limitedCounterValue : s.outputCounterValue
    const isCorrectValue = count.startValue < count.maxValue && count.startValue > -1
    const incButtonClass = isMaxValueCount || !count.disabledButton ? s.disabledButton : s.button
    const resButtonClass = isIncorrectInputValue || !count.disabledButton ? s.disabledButton : s.button
    const disabledIncButton = isMaxValueCount || isIncorrectValue

    return (
        <div className={s.countContainer}>
            <div
            >
                <TitleCounter
                    correctValue={isCorrectValue}
                    incorrectInputValue={isIncorrectInputValue}
                    errorBoxClass={errorBoxClass}
                    disabledButton={count.disabledButton}
                    count={count.count}
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


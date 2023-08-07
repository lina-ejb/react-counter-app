import React, {ChangeEvent} from 'react';
import {CounterButton} from "./CounterButton";
import s from "./Counter.module.css";
import {SuperInput} from "./SuperInput";
import {counterSelector} from "./selector/counterSelector";
import {useDispatch, useSelector} from "react-redux";
import {
    changeMaxValueAC,
    changeStartValueAC,
    disabledButtonAC,
    disabledCounterButtonAC,
    StateType
} from "./state/counter-reducer";
import {StateStoreType} from "./state/store";

type CounterSettingsType = {

}

export const CounterSettings: React.FC<CounterSettingsType> = () => {

    const dispatch = useDispatch()
    const count = useSelector<StateStoreType, StateType>(counterSelector)

    const startOnChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartValueAC(Number(e.currentTarget.value)))
        dispatch(disabledCounterButtonAC())
    }

    const maxOnChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(Number(e.currentTarget.value)))
        dispatch(disabledCounterButtonAC())
    }

    const valueToCounterHandler = () => {
        dispatch(disabledButtonAC())

    }

    const isIncorrectValue = count.startValue >= count.maxValue
    const isIncorrectInputValue = count.startValue < 0 || isIncorrectValue
    const inputClassName = isIncorrectValue ? s.errorInput : s.input
    const startInputCLassName = isIncorrectInputValue ? s.errorInput : s.input
    const buttonSettingClassName = count.disabledButton || isIncorrectInputValue ? s.disabledButton : s.button

    return (
        <div className={s.countContainer}>
            <div className={s.settingValue}>
                <label
                    htmlFor="maxValue">
                    max value:
                </label>
                <SuperInput
                    id={'maxValue'}
                    value={(count.maxValue).toString()}
                    onChange={maxOnChangeCallback}
                    className={inputClassName}

                />
                <label
                    htmlFor={'startValue'}>
                    start value:
                </label>
                <SuperInput
                    id={'startValue'}
                    value={(count.startValue).toString()}
                    onChange={startOnChangeCallback}
                    className={startInputCLassName}
                />
            </div>
            <div className={s.buttonContainer}>
                <CounterButton
                    name={'set'}
                    className={buttonSettingClassName}
                    onClick={valueToCounterHandler}
                    disabled={count.disabledButton}
                />
            </div>

        </div>
    );
};


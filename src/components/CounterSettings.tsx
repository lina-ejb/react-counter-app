import React, {ChangeEvent} from 'react';
import {CounterButton} from "./CounterButton";
import s from "./Counter.module.css";
import {SuperInput} from "./SuperInput";

type CounterSettingsType = {
    startValue: number
    maxValue: number
    setStartValue?: (e: number) => void
    setMaxValue?: (e: number) => void
    setCount: (value: number) => void
    setDisabledButton: (value: boolean) => void
    disabledButton: boolean
    count:number
}

export const CounterSettings: React.FC<CounterSettingsType> = ({
                                                                   startValue,
                                                                   maxValue,
                                                                   setStartValue,
                                                                   setMaxValue,
                                                                   setCount,
                                                                   disabledButton,
                                                                   setDisabledButton,
                                                                  ...rest
                                                               }) => {


    const startOnChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (setStartValue) setStartValue(Number(e.currentTarget.value))
        setDisabledButton(false)
    }

    const maxOnChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (setMaxValue) setMaxValue(Number(e.currentTarget.value))
        setDisabledButton(false)
    }

    const valueToCounterHandler = () => {
        setCount(startValue)
        setDisabledButton(!disabledButton) // button disabled

    }

    const isIncorrectValue = startValue >= maxValue
    const isIncorrectInputValue = startValue < 0 || isIncorrectValue
    const inputClassName = isIncorrectValue ? s.errorInput : s.input
    const startInputCLassName = isIncorrectInputValue ? s.errorInput : s.input
    const buttonSettingClassName = disabledButton || isIncorrectInputValue ? s.disabledButton : s.button

    return (
        <div className={s.countContainer}>
            <div className={s.settingValue}>
                <label
                    htmlFor="maxValue">
                    max value:
                </label>
                <SuperInput
                    id={'maxValue'}
                    value={(maxValue).toString()}
                    onChange={maxOnChangeCallback}
                    className={inputClassName}

                />
                <label
                    htmlFor={'startValue'}>
                    start value:
                </label>
                <SuperInput
                    id={'startValue'}
                    value={(startValue).toString()}
                    onChange={startOnChangeCallback}
                    className={startInputCLassName}
                />
            </div>
            <div className={s.buttonContainer}>
                <CounterButton
                    name={'set'}
                    className={buttonSettingClassName}
                    onClick={valueToCounterHandler}
                    disabled={disabledButton}
                />
            </div>

        </div>
    );
};


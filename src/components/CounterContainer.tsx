import React, {useEffect, useRef, useState} from 'react';
import {Counter} from "./Counter";
import s from './Counter.module.css'
import {CounterSettings} from "./CounterSettings";

const CounterContainer = () => {

    const [count, setCount] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)
    const [disabledButton, setDisabledButton] = useState(false)
    const ref = useRef(false)

    useEffect(() => {
        let maxValue = localStorage.getItem('counter-value-max')
        let startValue = localStorage.getItem('counter-value-start')
        let disabledButton = localStorage.getItem('counter-button')
        if (maxValue) {
            setMaxValue(JSON.parse(maxValue))
        }
        if (startValue) {
            setStartValue(JSON.parse(startValue))
        }
        if (disabledButton) {
            setDisabledButton(JSON.parse(disabledButton))
        }
        if (startValue) {
            setCount(JSON.parse(startValue))
        }
    }, [])

    useEffect(() => {
        if (!ref.current) {
            ref.current = true
            return
        }
        localStorage.setItem('counter-value-start', JSON.stringify(startValue))
        localStorage.setItem('counter-value-max', JSON.stringify(maxValue))
        localStorage.setItem('counter-button', JSON.stringify(disabledButton))

    }, [startValue, maxValue, disabledButton])
    // console.log(maxValue)
    // console.log(startValue)

// increase counter
    const addCounter = () => {
        if (startValue < maxValue) {
            setCount(count + 1)
        }
    }

    const resCounter = () => {
        setCount(startValue)
    }


    return (
        <div className={s.container}>
            <CounterSettings
                startValue={startValue}
                maxValue={maxValue}
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
                setCount={setCount}
                disabledButton={disabledButton}
                setDisabledButton={setDisabledButton}
                count={count}

            />
            <Counter
                startValue={startValue}
                maxValue={maxValue}
                count={count}
                addCounter={addCounter}
                resCounter={resCounter}
                disabledButton={disabledButton}
            />

        </div>
    )
}


export default CounterContainer;
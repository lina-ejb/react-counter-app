import React from 'react';
import {Counter} from "./Counter";
import s from './Counter.module.css'
import {CounterSettings} from "./CounterSettings";

const CounterContainer = () => {

    return (
        <div className={s.container}>
            <CounterSettings/>
            <Counter/>

        </div>
    )
}


export default CounterContainer;
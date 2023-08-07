import {StateStoreType} from "../state/store";
import {StateType} from "../state/counter-reducer";


export const counterSelector = (state: StateStoreType): StateType => state.counter
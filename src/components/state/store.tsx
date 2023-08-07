import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../../localStorage";

const persistedState = loadState()

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer, persistedState)

export type StateStoreType = ReturnType<typeof rootReducer>

store.subscribe(() => {
    saveState(
        {counter: store.getState().counter}
    )
})
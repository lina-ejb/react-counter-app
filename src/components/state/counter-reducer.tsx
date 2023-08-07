export type StateType = {
    count: number
    startValue: number
    maxValue: number
    disabledButton: boolean
    disabledCounterButton: boolean
}


export const initialCount: StateType = {
    count: 0,
    startValue: 0,
    maxValue: 5,
    disabledButton: false,
    disabledCounterButton: true,
}

const INCREMENT_COUNTER = 'INCREMENT-COUNTER';
const RESET_COUNTER = 'RESET-COUNTER';
const DISABLED_BUTTON = 'DISABLED-BUTTON';
const CHANGE_START_VALUE = 'CHANGE-START-VALUE'
const CHANGE_MAX_VALUE = 'CHANGE-MAX-VALUE'
const DISABLED_COUNTER_BUTTON = 'DISABLED-COUNTER-BUTTON'

type ActionCountType =
    IncrementTypeAC
    | ResetTypeAC
    | DisabledButtonTypeAC
    | ChangeStartValueTypeAC
    | ChangeMaxValueTypeAC
    | DisabledCounterButtonTypeAC

export const counterReducer = (state: StateType = initialCount, action: ActionCountType): StateType => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                count: state.count + 1
            }
        case RESET_COUNTER: {
            return {
                ...state,
                count: state.startValue
            }
        }
        case DISABLED_BUTTON: {
            return {
                ...state,
                disabledButton: !state.disabledButton,
            }

        }
        case DISABLED_COUNTER_BUTTON: {
            return {
                ...state,
                disabledButton: false,
            }
        }
        case CHANGE_START_VALUE: {

            return {
                ...state,
                count: action.payload.startValue,
                startValue: action.payload.startValue
            }
        }
        case CHANGE_MAX_VALUE: {
            return {
                ...state,
                maxValue: action.payload.maxValue
            }
        }

        default:
            return state
    }

}

export type IncrementTypeAC = ReturnType<typeof incActionCreator>
export const incActionCreator = () => {
    return {
        type: INCREMENT_COUNTER,

    } as const
}

export type ResetTypeAC = ReturnType<typeof resActionCreator>
export const resActionCreator = () => {
    return {
        type: RESET_COUNTER,

    } as const
}
export type DisabledButtonTypeAC = ReturnType<typeof disabledButtonAC>
export const disabledButtonAC = () => {
    return {
        type: DISABLED_BUTTON,

    } as const
}
export type DisabledCounterButtonTypeAC = ReturnType<typeof disabledCounterButtonAC>
export const disabledCounterButtonAC = () => {
    return {
        type: DISABLED_COUNTER_BUTTON,

    } as const
}
export type ChangeStartValueTypeAC = ReturnType<typeof changeStartValueAC>
export const changeStartValueAC = (startValue: number) => {
    return {
        type: CHANGE_START_VALUE,
        payload: {
            startValue
        }

    } as const
}

export type ChangeMaxValueTypeAC = ReturnType<typeof changeMaxValueAC>
export const changeMaxValueAC = (maxValue: number) => {
    return {
        type: CHANGE_MAX_VALUE,
        payload: {
            maxValue
        }

    } as const
}

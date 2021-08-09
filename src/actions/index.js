export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const ADD_ACTION = '+'
export const SUBTRACT_ACTION = '-'
export const MULTIPLY_ACTION = '*'
export const CLEAR_DISPLAY = 'CE'
export const TOTAL_TO_MEMORY = 'M+'
export const MEMORY_CLEAR = 'MC'

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const addAction = (input) => {
    return({type:ADD_ACTION, payload:input})
}

export const subtractAction = (input) => {
    return({type:SUBTRACT_ACTION, payload:input})
}

export const multiplyAction = (input) => {  
    return({type:MULTIPLY_ACTION, payload:input})
}

export const clearAction = () => {  
    return({type:CLEAR_DISPLAY})
}

export const operatorAction = (input) => {
    
    return({type:CHANGE_OPERATION, payload:input})
}

export const memoryClearAction = () => {
    return ({type:MEMORY_CLEAR})
}

export const totalToMemoryAction = () => {
    return ({type:TOTAL_TO_MEMORY})
}

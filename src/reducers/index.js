import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, CLEAR_DISPLAY, MEMORY_CLEAR, TOTAL_TO_MEMORY, operatorAction} from './../actions';


export const initialState = {
    total: '',
    operation: '+',
    memory: ''
};

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case(ADD_ACTION):
            return num1 + num2;
        case(MULTIPLY_ACTION):
            return num1 * num2;
        case(SUBTRACT_ACTION):
            return num1 - num2;
        
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        case(ADD_ACTION):
            return ({
                ...state,
                total: state.total + action.payload
            })

        case(SUBTRACT_ACTION):
            return ({
                ...state,
                total: state.total - action.payload
            })

        case(MULTIPLY_ACTION):
            return ({
                ...state,
                total: state.total * action.payload
            })

        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total: 0,
                

                
            })
        case(MEMORY_CLEAR):
            return ({
                ...state,
                memory: 0
            })
        case(TOTAL_TO_MEMORY):
            return ({
                 ...state,
                 memory: state.total
            })
        
            
        default:
            return state;
    }
}

export default reducer;
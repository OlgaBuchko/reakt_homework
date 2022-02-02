import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'Inc_A':
            return {
                ...state, count_a: state.count_a + action.payload
            }
        case 'Dec_A':
            return {
                ...state, count_a: state.count_a - action.payload
            }
        case 'Reset_A':
            return {
                ...state, count_a: 0
            }
        case 'Inc_B':
            return {
                ...state, count_b: state.count_b + action.payload
            }
        case 'Dec_B':
            return {
                ...state, count_b: state.count_b - action.payload
            }
        case 'Reset_B':
            return {
                ...state, count_b: 0
            }
        case 'Inc_C':
            return {
                ...state, count_c: state.count_c + action.payload
            }
        case 'Dec_C':
            return {
                ...state, count_c: state.count_c - action.payload
            }
        case 'Reset_C':
            return {
                ...state, count_c: 0
            }
        default:throw new Error('AMMMM????')
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, {count_a: 0, count_b: 0, count_c: 0})

    return (
        <div>
            <div>
                <div>{state.count_a}</div>
                <button onClick={() => dispatch({type: 'Inc_A', payload: 1})}>inc</button>
                <button onClick={() => {
                    dispatch({type: 'Dec_A', payload: 1})
                }}>dec
                </button>
                <button onClick={() => {
                    dispatch({type: 'Reset_A'})
                }}>reset
                </button>
            </div>
            <div>
                <div>{state.count_b}</div>
                <button onClick={() => {
                    dispatch({type: 'Inc_B', payload: 5})
                }}>inc
                </button>
                <button onClick={() => {
                    dispatch({type: 'Dec_B', payload: 5})
                }}>dec
                </button>
                <button onClick={() => {
                    dispatch({type: 'Reset_B'})
                }}>reset
                </button>
            </div>
            <div>
                <div>{state.count_c}</div>
                <button onClick={() => {
                    dispatch({type: 'Inc_C', payload: 10})
                }}>inc
                </button>
                <button onClick={() => {
                    dispatch({type: 'Dec_C', payload: 10})
                }}>dec
                </button>
                <button onClick={() => {
                    dispatch({type: 'Reset_C'})
                }}>reset
                </button>
            </div>
        </div>
    );
}

export default App;

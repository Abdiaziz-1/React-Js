import React, {useReducer} from 'react'
const initialState = {
    countA : 0,
    countB : 0,
}
const reducer = (state, action) => {
 switch(action.type) {
    case "IncrementA" : 
      return {... state, countA : state.countA + 1}
    case "DecrementA" :
        return { ...state, countA : state.countA - 1}
    case "IncrementB" :
        return { ...state, countB : state.countB + 1}
    case "DecrementB" :
        return { ...state,countB : state.countB -1}
    case "ResetBoth" : 
        return initialState
    default :
     return state;            

 }
     
}

const DoubleCounter = () => {

    const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
        <h2>State A : {state.countA}</h2>
      <button onClick={() => dispatch({type: "IncrementA"})}>Increment A +</button>
      <button onClick={() => dispatch({type: "DecrementA"})}>Decrement A -</button>
        <h2>State B {state.countB}</h2>
       <button onClick={() => dispatch({type: "IncrementB"})}>Increment B +</button>
      <button onClick={() => dispatch({type: "DecrementB"})}>Decrement B -</button>
      <br />
      <br />

      <button onClick={() => dispatch({type: "ResetBoth"})}>Reset ALL</button>
    </div>
  )
}

export default DoubleCounter
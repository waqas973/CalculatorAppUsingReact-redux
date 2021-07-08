import * as math from "mathjs";


const initialState = {
    display: '0',
    accumulated: '0',
    prevOp : '',
    history : '0' 
}

export  const rootReducer = (state = initialState , action)=>{
      switch(action.type){
          case "UPDATE":{
             const updateDisplay = action.payload;
              return {
                ...state,
                display: state.display == '0' || state.prevOp === "operator" ? updateDisplay.input
                  : state.display + updateDisplay.input,
                prevOp: updateDisplay.operation,
              }
            }
          case "ADD":{
            const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4)
            : state.history;
           return {
                ...state,
                display: state.display,
                history: state.history == '0' && state.accumulated == "0" ? state.display + " + "
                  : state.accumulated != "0" ? state.accumulated + " + "
                    : history() + state.display + " + ",
                prevOp: "operator"
              }
          }
          case "SUBSTRACT": {
            const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4)
              : state.history;
            return {
              ...state,
              display: state.display,
              history: state.history == '0' && state.accumulated == "0" ? state.display + " - "
                : state.accumulated != "0" ? state.accumulated + " - "
                  : history() + state.display + " - ",
              prevOp: "operator"
            }
          }
          case "MULTIPLY": {
            const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4)
              : state.history;      
            return {
              ...state,
              display: state.display,
              history: state.history == '0' && state.accumulated == "0" ? state.display + " * "
                : state.accumulated != "0" ? state.accumulated + " * "
                  : history() + state.display + " * ",
              prevOp: "operator"
            }
          }
      
          case "DIVIDE": {
            const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4)
              : state.history;
      
            return {
              ...state,
              display: state.display,
              history: state.history == '0' && state.accumulated == "0" ? state.display + " / "
                : state.accumulated != "0" ? state.accumulated + " / "
                  : history() + state.display + " / ",
              prevOp: "operator"
            }
          }
          // clear resets state
          case "CANCEL": {
            
            return {
                ...state,
                
               display :  state.display.slice(0,state.display.length - 1),
               
            }
          }
          case "CLEAR": {
            return {
              ...state,
              display: '0',
              prevOp: "clear",
              accumulated: 0,
              history: "0"
            }
          }
          case "EQUAL": {
            let states = state.history + state.display;
           let maths = math.evaluate(states);
            if (state.prevOp === "equal") {
              return {
                ...state
              }
            } else {
              return {
                ...state,
                history: math.round(maths, 4).toString(),
                display: math.round(maths,4).toString(),
                accumulated: maths.toString(),
                prevOp: "equal",
              }
            }
          }
          default: return state;
          }
      }


export const updateDisplay = (content)=>{
    return{
        type:"UPDATE",
        payload:{
            input:content,
            operation:"num"
        }
       
    }
}
export const addition = (content)=>{
    return{
        type:"ADD",
        payload:{
            operation:"operator"
        }
 }};
 export const subtraction = (content)=>{
    return {
        type : "SUBSTRACT",
        payload : {
            operation: "operator"
        }
}};
export const multiplication = (content)=>{
    return {
        type : "MULTIPLY",
        payload : {
            operation: "operator"
        }
}};
export const division = (content)=>{
    return {
        type : "DIVIDE",
        payload : {
            operation: "operator"
        }
}};
export const clearDisplay = (content)=>{
    return {
        type : "CLEAR",
        payload : {
            operation: "clear"
        }
}};
export const cancelDisplay = (content)=>{
    return {
        type : "CANCEL",
        payload : {
            operation: "cancel"
        }
}};
 export const equal = (content)=>{
    return{
        type:"EQUAL",
        payload:{
            operation:"equal"
        }
 }};

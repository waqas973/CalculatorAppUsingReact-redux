import './App.css';
import {getDisplay} from './selector/selector';
import {connect}  from 'react-redux';
import {updateDisplay} from './action/actions.js';
import {addition} from './action/actions';
import {subtraction} from './action/actions';
import {multiplication} from './action/actions';
import {division} from './action/actions';
import {clearDisplay} from './action/actions';
import {equal} from './action/actions';
import {cancelDisplay} from "./action/actions";
function App(props) {

   const  handleClick = (e)=>{
       const name = e.target.name;
       
       if(name === '+'){
        props.addition(name);
       }else if(name === '-'){
        props.subtraction(name);  
       }else if(name === '*'){
        props.multiplication(name);  
       }else if(name === '/'){
        props.division(name);  
       }else if(name === 'clear'){
        props.clearDisplay(name);  
       }else if(name === 'equal'){
        props.equal(name);  
       }else if(name === 'cancel'){
        props.cancelDisplay(name);  
       }
       else{
         props.updateDisplay(name);
       }
    }
  return (
       <div className='containers'>
      <form>
         <input type='text' value={props.display}  />
      </form>
        <div className="items">
       <button onClick={handleClick}  name='clear'  className="clear" >Clear</button>
       <button onClick={handleClick}  name='cancel' >C</button>
       <button onClick={handleClick}  name='/' >&divide;</button>
       <button onClick={handleClick}  name='7' >7</button>
       <button onClick={handleClick}  name='8' >8</button>
       <button onClick={handleClick}  name='9' >9</button>
       <button onClick={handleClick}  name='*' >&times;</button>
       <button onClick={handleClick}  name='4' >4</button>
       <button onClick={handleClick}  name='5' >5</button>
       <button onClick={handleClick}  name='6' >6</button>
       <button onClick={handleClick}  name='-' >&ndash;</button>
       <button onClick={handleClick}  name='1' >1</button>
       <button onClick={handleClick}  name='2' >2</button>
       <button onClick={handleClick}  name='3' >3</button>
       <button onClick={handleClick}  name='+' >+</button>
       <button onClick={handleClick}  name='0' >0</button>
       <button onClick={handleClick}  name="equal" className="equal"  >=</button>
       </div>
       </div>
  );
}
 
const mapStateToProps = (state)=>{
   const displayValue = getDisplay(state);
   return({
     display : displayValue
   });
};
const mapDispatchToProps = dispatch => ({
  updateDisplay: display => dispatch(updateDisplay(display)),
  addition: display => dispatch(addition(display)),
  equal: display => dispatch(equal(display)),
  subtraction: display => dispatch(subtraction(display)),
  multiplication: display => dispatch(multiplication(display)),
  division: display => dispatch(division(display)),
  cancelDisplay: display => dispatch(cancelDisplay(display)),
  clearDisplay: display => dispatch(clearDisplay(display))
});
export default connect(mapStateToProps,mapDispatchToProps )(App);


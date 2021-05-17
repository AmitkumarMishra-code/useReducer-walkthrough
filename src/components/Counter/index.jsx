import { useContext } from "react"
import CounterContext from "../../contexts/CounterStore"
import './styles.css'
export default function Counter(){
    let {counterState, dispatch} = useContext(CounterContext)
    
    return(
        <div className="counter">
            <div className="primary-button" onClick = {() => dispatch('increment')}>+</div>
            <h1>{counterState.counterValue}</h1>
            <div className="primary-button" onClick = {() => dispatch('decrement')}>-</div>
            <button className="reset" onClick = {() => dispatch('reset')}>Reset</button>
        </div>
    )
}
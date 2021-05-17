import { useContext } from 'react'
import CounterContext from '../../contexts/CounterStore'
import './styles.css'
export default function Navbar(props){
    let {counterState} = useContext(CounterContext)
    return(
        <div className="navbar">
            <h1>Navbar</h1>
            <h1>{counterState.counterValue}</h1>
        </div>
    )
}
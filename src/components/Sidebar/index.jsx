import './styles.css'
export default function Sidebar(props){
    return(
        <div className="sidebar">
            <h1>Sidebar</h1>
            {props.children}

        </div>
    )
}
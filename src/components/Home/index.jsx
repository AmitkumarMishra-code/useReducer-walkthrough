import Content from "../Content";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import './styles.css'
import '../../index.css'
import { CounterContextProvider } from "../../contexts/CounterStore";

export default function Home(props){
    return(
        <CounterContextProvider>
        <div className="home">
            <Navbar />
            <div className="flex-row flex-1">
                <Sidebar>
                    <div className="card">Hello there</div>
                    <div className="card">Sayonara</div>
                    <h3>New Element</h3>
                </Sidebar>
                <Content />
            </div>
        </div>
        </CounterContextProvider>
    )
}
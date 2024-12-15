import pads from "./pads"
import {useState} from "react";
export default function App() {
    
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    
    const [panels, setPads] = useState(pads);
    const [visiblePanels, setVisiblePanels] = useState(4);
    let buttons = panels.slice(0, visiblePanels).map(panel => <button key={panel.id} style={{backgroundColor : panel.color}}></button>)
    
    return (
        <main>
            <div className="pad-container">
                {buttons}
                {visiblePanels <= pads.length && <button onClick={() => (setVisiblePanels(prevVisiblePanels => Math.min(prevVisiblePanels + 2, pads.length)))}>Mostrar más</button>}
            </div>
            
        </main>
    )
}

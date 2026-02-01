
import { useState } from "react";

const ToggleBtn = () => {

    const [isDisplay, setIsDisplay] = useState()

    const turn = () => {
        setIsDisplay(!isDisplay)
    }
     
    return(
     <div>
        {isDisplay ? <p>The button is ON</p> : <p>The button is OFF</p> }
        <button onClick={turn}>Turn {isDisplay ? "OFF" : "ON"}</button>
     </div>
    )
}
export default ToggleBtn;
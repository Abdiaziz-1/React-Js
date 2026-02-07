
import { useState, useEffect } from "react";


const Effect = () => {
    const [name, setName] = useState("");
    const [great, setGreat] = useState("Hello");

    useEffect(() => {
        if(!name) {
            document.title = "welcome";
        }
        else {
      document.title = `${great}, ${name}`;
    }
    },[name, great]);

    return(
        <div>
            <h2>Enter Your Name:</h2>
            <input type="text"
             value={name} 
             onChange={(e) => setName(e.target.value)} />

             <h2>Choose a greeting:</h2>
             <input type="text" 
             value={great}
              onChange={(e) =>setGreat (e.target.value)} />
        </div>
    )
}
export default Effect;
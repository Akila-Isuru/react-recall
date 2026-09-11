import { useState } from "react";

export default function InputExample(){
    const[text,setText] = useState<String>("");

    return(
        <div>
            <input 
            type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="type something"
            />

            <p>you tyoed : {text}</p>
        </div>
    );


}
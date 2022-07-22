import React from "react";
import { RpgContext } from "../RpgContext";
import "./settings.css";

function Settings(){

    const ctx = React.useContext(RpgContext);
    const {setCharacters} = ctx.saved;

    const reset = () => {
        const q = prompt("do you want to reset ?");

        if(q && q.toLowerCase() === "yes"){
            fetch('/character', {
                method : 'delete'
            })
            .then(res=>res.text())
                .then(data=>{
                    setCharacters([]);
                    alert(data);
                })
        } else {
            return;
        }
        
    }

    return (
        <div className="settings">
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Settings;
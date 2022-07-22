import React from "react";
import CharacterCard from "../component/CharacterCard";
import { RpgContext } from "../RpgContext";
import './Saved.css'

function Saved(){

    const ctx = React.useContext(RpgContext);
    const {characters} = ctx.saved;

    React.useEffect(()=>{
       
    }, [])

    return (
        <div className="saved">
            {
                characters.length === 0 ? <div className="title"><h1>Go to the Home Page to add a Character</h1></div> 

                :

                <div className="card-container">
                    {
                        characters.map((character)=>{
                            return <CharacterCard 
                                        {...character} 
                                        key={character._id} 
                                    />
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Saved;
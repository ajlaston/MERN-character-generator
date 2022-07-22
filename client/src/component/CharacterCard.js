import React from "react";
import './CharacterCard.css';
import { RpgContext } from "../RpgContext";

function CharacterCard(props) {

    const ctx = React.useContext(RpgContext);
    const { setCharacters, characters } = ctx.saved;

    const [editing, setEditing] = React.useState(false);
    const [formData, setFormData] = React.useState({
        class: props.class,
        name: props.name,
        level: props.level,
        hp: props.hp,
        attk: props.attk,
        def: props.def
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const toggleEdit = () => {
        setEditing(prev => !prev);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`/character/${props._id}`, {
            method : 'put',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(formData)
        }) 
        toggleEdit();
    }

    const handleDelete = () => {
        fetch(`/character/${props._id}`, {
            method: 'delete'
        }).then(() => {
            setCharacters(prev => {
                const filtered = prev.filter(char => char._id !== props._id);
                return filtered;
            })
        })
    }

    return (
        <div>
            {
                editing ?

                    <div className="edit-character">
                        <form className="stat-container" onSubmit={handleUpdate}>
                            <label htmlFor="name">Name: </label>
                            <input name="name" type='text' value={props.name} onChange={handleChange} placeholder="name" />
                            <br />
                            <hr />

                            <label htmlFor="class">Class:</label>
                            <select className="edit-class" name="class" onChange={handleChange} value={formData.class} required>
                                <option>-Choose a Class-</option>
                                <option value="Red Mage">Red Mage</option>
                                <option value="Black Mage">Black Mage</option>
                                <option value='White Mage'>White Mage</option>
                                <option value='Fighter'>Fighter</option>
                                <option value='Ninja'>Ninja</option>
                            </select>
                            <label htmlFor="level">Level: </label>
                            <input name="level" type='number' value={formData.level} onChange={handleChange} placeholder="level" />
                            <br />

                            <label htmlFor="hp">HP: </label>
                            <input name="hp" type='number' value={formData.hp} onChange={handleChange} placeholder="hp" />
                            <br />

                            <label htmlFor="attk">Attack: </label>
                            <input name="attk" type='number' value={formData.attk} onChange={handleChange} placeholder="attack" />
                            <br />

                            <label htmlFor="def">Defense: </label>
                            <input name="def" type='number' value={formData.def} onChange={handleChange} placeholder="defense" />
                            <br />
                            <div className="card-buttons">
                                <button>save</button>
                            </div>
                        </form>

                    </div>

                    :

                    <div className="character">
                        <div className="stat-container">
                            <h3>Name: {formData.name}</h3>
                            <hr />
                            <p>Class: {formData.class}</p>
                            <p>Level: {formData.level}</p>
                            <p>HP: {formData.hp}</p>
                            <p>Attack: {formData.attk}</p>
                            <p>Defense: {formData.def}</p>
                        </div>
                        <div className="card-buttons">
                            <button onClick={toggleEdit}>edit</button>
                            <button onClick={handleDelete}>delete</button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default CharacterCard;
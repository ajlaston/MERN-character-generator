import React from "react";
import { RpgContext } from "../RpgContext";
import './Home.css'


function Home() {
    const ctx = React.useContext(RpgContext);
    const {formData, handleChange, submitForm} = ctx.home;

    return (
        <div className="home">

            <div>
                <h1>Create Character</h1>
                <form className="home-form" onSubmit={submitForm}>
                    <select name="class" onChange={handleChange} required>
                        <option>-Choose a Class-</option>
                        <option value="Red Mage">Red Mage</option>
                        <option value="Black Mage">Black Mage</option>
                        <option value='White Mage'>White Mage</option>
                        <option value='Fighter'>Fighter</option>
                        <option value='Ninja'>Ninja</option>
                    </select>

                    <input id="name" name="name" type='text' onChange={handleChange} value={formData.name} placeholder="Name" required />
                    <input name="level" type='number' onChange={handleChange} value={formData.level} placeholder="Level" required />
                    <input name="hp" type='number' onChange={handleChange} value={formData.hp} placeholder='HP' required />
                    <input name="attk" type='number' onChange={handleChange} value={formData.attk} placeholder="Attack" required />
                    <input name="def" type='number' onChange={handleChange} value={formData.def} placeholder="Defense" required />
                    <button>submit</button>
                </form>

            </div>
        </div>
    )
}

export default Home;
import React from 'react'

function FormComponent(props){
    return (
        <main>
            <form>
                <input name="firstName" 
                value={props.data.firstName} 
                onChange={props.handleChange} placeholder="First Name" /><br />
                <input name="lastName" 
                value={props.data.lastName} 
                onChange={props.handleChange} placeholder="Last Name" /><br />
                <input name="age" 
                value={props.data.age} 
                onChange={props.handleChange} placeholder="Age" /><br />
                
                <label>
                <input type="radio"
                name="gender"
                value="male"
                checked = {props.data.gender === "male"}
                onChange = {props.handleChange}
                />Male
                </label>
                <br/>
                <label>
                <input type="radio"
                name="gender"
                value="female"
                checked = {props.data.gender === "female"}
                onChange = {props.handleChange}
                />Female
                </label>
                <br />
                
                <select value={props.data.destination}
                name="destination"
                onChange={props.handleChange}>
                <option value="---">Choose an option</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="mohali">Mohali</option>
                <option value="panchkula">Panchkula</option>
                <option value="zirakpur">Zirakpur</option>
                </select>
                <br />
                
                <label>
                <input type="checkbox"
                name="veg"
                onChange={props.handleChange}
                checked={props.data.veg}
                />Veg
                <input type="checkbox"
                name="nonveg"
                onChange={props.handleChange}
                checked={props.data.nonveg}
                />Non-Veg
                <input type="checkbox"
                name="lactoseIntolerant"
                onChange={props.handleChange}
                checked={props.data.lactoseIntolerant}
                />lactoseIntolerant
                </label>
                <br />
                
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restrictions:</p>
            
            <p>Veg: {props.data.veg ? "Yes" : "No"}</p>
            <p>Nonveg: {props.data.nonveg ? "Yes" : "No"}</p>
            <p>Lactose Intolerant: {props.data.lactoseIntolerant ? "Yes" : "No"}</p>
        </main>
    )
}

export default FormComponent
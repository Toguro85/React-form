import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            veg : false,
            nonveg : false,
            lactoseIntolerant: false
        }
        
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox"?
        this.setState({
            [name]: value
        }):
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <main>
                <form>
                    <input name="firstName" 
                    value={this.state.firstName} 
                    onChange={this.handleChange} placeholder="First Name" /><br />
                    <input name="lastName" 
                    value={this.state.lastName} 
                    onChange={this.handleChange} placeholder="Last Name" /><br />
                    <input name="age" 
                    value={this.state.age} 
                    onChange={this.handleChange} placeholder="Age" /><br />
                    
                    <label>
                    <input type="radio"
                    name="gender"
                    value="male"
                    checked = {this.state.gender === "male"}
                    onChange = {this.handleChange}
                    />Male
                    </label>
                    <br/>
                    <label>
                    <input type="radio"
                    name="gender"
                    value="female"
                    checked = {this.state.gender === "female"}
                    onChange = {this.handleChange}
                    />Female
                    </label>
                    <br />
                    
                    <select value={this.state.destination}
                    name="destination"
                    onChange={this.handleChange}>
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
                    onChange={this.handleChange}
                    checked={this.state.veg}
                    />Veg
                    <input type="checkbox"
                    name="nonveg"
                    onChange={this.handleChange}
                    checked={this.state.nonveg}
                    />Non-Veg
                    <input type="checkbox"
                    name="lactoseIntolerant"
                    onChange={this.handleChange}
                    checked={this.state.lactoseIntolerant}
                    />lactoseIntolerant
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions:</p>
                
                <p>Veg: {this.state.veg ? "Yes" : "No"}</p>
                <p>Nonveg: {this.state.nonveg ? "Yes" : "No"}</p>
                <p>Lactose Intolerant: {this.state.lactoseIntolerant ? "Yes" : "No"}</p>
            </main>
        )
    }
}

export default App

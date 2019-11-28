import React from 'react'
import FormComponent from './FormComponent'

class Form extends React.Component {
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
        const {name, value, type} = event.target
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
            < FormComponent
             handleChange={this.handleChange}
             data={this.state}
             />
        )
        
    }
}

export default Form

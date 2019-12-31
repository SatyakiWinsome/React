//Use FORMIK library for handling forms in React.js

import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            textArea:"Some default value",
            color: "blue",
            gender:"",
            isChecked: true
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
                this.setState({[name]: checked})
                            :
                                this.setState({
                                    [name]: value
                                })
    }
    
    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                
                {
                    /**
                     * Other useful form elements:
                     * 
                     *  <textarea /> element
                     *  <input type="checkbox" />
                     *  <input type="radio" />
                     *  <select> and <option> elements
                     */
                }
                
                <textarea name="textArea" onChange={this.handleChange} value={this.state.textArea}/>
                <br />
                <label>    
                    <select name="color" value={this.state.color} onChange={this.handleChange}>
                        <option value="blue"> Blue </option>
                        <option value="yellow"> Yellow </option>
                        <option value="orange"> Orange </option>
                        <option value="red"> Red </option>
                    </select>
                </label>
                <br/>
                <input type="checkbox"  name="isChecked" onChange={this.handleChange} checked={this.state.isChecked} />
                <br/>
                <h1> IsChecked? : {`${this.state.isChecked}`} </h1>
                <br/> <br />
                <input type="radio" name="gender" value="male" onChange={this.handleChange} /> Male <br/>
                <input type="radio" name="gender" value="female" onChange={this.handleChange} /> Female
                
                <h1> {this.state.gender} </h1>
                <h1> Color : {this.state.color} </h1>
                <h1>{this.state.textArea}</h1>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App

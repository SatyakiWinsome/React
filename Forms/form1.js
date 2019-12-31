import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            fname: "",
            lname: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name]: value
        })
        
        // Same as
        // this.setState(
        //     {
        //        [event.target.name]: event.target.value 
        //     }
        // )
    }
    
    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.fname} name="fname" placeholder="First Name" onChange={ this.handleChange }/>
                    <br />
                    <input type="text" value={this.state.lname} name="lname" placeholder="Last Name" onChange={ this.handleChange } />
                    <hr />
                    <h1> {this.state.fname} {this.state.lname} </h1>
                </form>
            </div>
        )
    }
}

export default App

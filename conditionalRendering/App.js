import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)  //Will load after 1.5s
    }
    
    render() {
        return (
            <div>
                <Conditional isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default App

// ================================================================================================
// import React, {Component} from "react"
// import Conditional from "./Conditional"

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             isLoading: true
//         }
//     }
    
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 isLoading: false
//             })
//         }, 1500)
//     }
    
//     render() {
//         return(
//             <div>
//             {this.state.isLoading === true ?
//             <h1> Loading... </h1> :
//             <div>
//                 <Conditional isLoading={this.state.isLoading}/>
//             </div>
//             }
//             </div>
//         )
//     }
// }

// export default App

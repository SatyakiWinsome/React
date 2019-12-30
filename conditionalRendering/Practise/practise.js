import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

// function App() {
//     return (
//         <div>
//             Code goes here
//         </div>
//     )
// }

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleOnClick = this.handleOnClick.bind(this)
    }
    handleOnClick(){
        if(this.state.isLoggedIn){
            this.setState(() => {
                return {
                    isLoggedIn: false
                }
            })
        }
        else{
            this.setState(prev => {
                return{
                    isLoggedIn: true
                }
            })
        }
            
    }

    // handleOnClick(){
    //     this.setState(prev =>{
    //         return {
    //             isLoggedIn: !prev.isLoggedIn
    //         }
    //     })
    // }
    

    
    render(){
        let buttontxt = this.state.isLoggedIn === true ? "LogOut" : "LogIn" 
        return(<div>
            { this.state.isLoggedIn  ?  <div>   
                                            <h1> Logged In </h1>
                                            <button onClick={ this.handleOnClick }> {buttontxt} </button>
                                        </div>
                                      :
                                        <div>
                                            <h1> Logged Out </h1>
                                            <button onClick={ this.handleOnClick }> {buttontxt} </button>
                                        </div>
            }
        </div>)
    }
}

export default App

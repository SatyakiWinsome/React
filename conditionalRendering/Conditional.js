import React from "react"

function Conditional(props) {
    if(props.isLoading === true){
        return(
            <h1> Loading... </h1>
        )
    }
    return (
        <div>
            <h1> Loaded </h1>
        </div>
    )
}

export default Conditional

//==============================================================

// import React from "react"

// function Conditional(props) {
//     return (
//         <div>
//             <h1> Loaded </h1>
//         </div>
//     )
// }

// export default Conditional
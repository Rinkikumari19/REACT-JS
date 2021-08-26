
import React, { Component } from 'react'


// class Cond_rend extends Component {
    
//     constructor(){
//         super()
//         this.state = {value:true}
//     }
//     render() {
//         // var num;
//         // if(false){
//         //     num =  "this is true condition"
//         // }
//         // else{
//         //     num =  "this is false condition"
//         // }
//         // return(
//         //     <div>{num}</div>
//         // )

//         // short circuit operator
//         return false && <h1>Hello paglu</h1>

//         // return(
//         //     // Ternary conditional operator
//         //     <div>
//         //         {true?
//         //         (<div>Hello Rinki</div>):
//         //         (<h1>BYyy </h1>)}
               
//         //     </div>
//         // )
//     }
// }
// export default Cond_rend




// // Destruturing props in functional components
// const Cond_rend = (props) => {
//     let {name:myname,id:myid} = props
//     return(
//         <div><h2>{myname}, {myid}</h2></div>
//     )
// }
// export default Cond_rend






// Destrucutring props in class component
class Cond_rend extends Component {
    
    render() {
        let {name, id} = this.props
    
        return (
            <div>
                <h2>{name}, {id}</h2>
            </div>
        )
    }
}

export default Cond_rend

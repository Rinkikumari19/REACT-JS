import React, { Component} from 'react';

class UseState extends Component{
    constructor(){
        super()
        this.state = {
            message:'Hello Everyone'
        }
    }

    changeMessage (){
        this.setState({
            message : 'Today is Tuesday , date is 13 July 2021 :)'
        }) 
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button className='clq-btn' onClick = {() => this.changeMessage()} >click</button>
            </div>
        )
    }
}
export default UseState
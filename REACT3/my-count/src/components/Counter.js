import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    

    increament(){
        this.setState({
            count:this.state.count+1
        })
    }
    decreament(){
        this.setState({
            count:this.state.count-1
        })
    }
    render() {
        return (
            <div>
                <div><h2>count = {this.state.count}</h2></div>
                <button className='btns' style={{ margin: '10px' }} onClick={()=> this.increament()}>Increament</button>
                <button className='btns' onClick={()=> this.decreament()}>Decreament</button>
            </div>
        )
    }
}

export default Counter

import React, { Component } from 'react'

class Nor_class extends Component {
    constructor(props){
        super(props);
        this.state = {productId:"", qut:0, isCart: true}
    }

    addToCart = (pid) => (
        this.setState ((state)=> (
            {productId:pid, qut: state.qut + 1}
        ))
    )

    removeCart = ()=>(
        this.setState ({isCart:false}) 
    )

    render() {
        return (
            <div> 
                <h2>Lifecycle</h2>
                <button onClick={() => this.addToCart(1)}>Add Cart</button>
                <button onClick={() => this.addToCart(2)}>Add Cart</button>
                <button onClick={() => this.addToCart(3)}>Add Cart</button>
                {this.state.isCart && <Cart productId = {this.state.productId} qut={this.state.qut}/>}
                {!this.state.isCart &&<h2>This cart has been removed</h2>}
                <button onClick={this.removeCart}>Remove</button>
            </div>
        )
    }
}

class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {qut:this.props.qut}
    }

    static getDerivedStateFromProps(props, state){
        if(props.qut !== state.qut){
            console.log("should component updated")
            return {qut:props.qut}
        }
        return null
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.qut !== nextProps.qut){
            return true
        }
        return false
    }

    componentWillUnmount(){
        console.log('component distroyed')
    }
    // updateQut = () => {
    //     this.setState((state) => (
    //         {qut: state.qut+1}
    //     ))
    // }
    componentDidMount(){
        console.log("in mount lifecycle in will call in last after render");
    }

    
    componentDidUpdate(prevProps, prevState){
        if(this.props.productId !== prevProps.productId){
            console.log('it will come updating values of props and state');
        }
        
    }

    render(){
        return(
            <div>
                <h3>
                    lifecycle render{this.state.qut}
                </h3>
                {/* <button 
                    onClick = {this.updateQut}> updateQut
                </button> */}
            </div>
            
        )
    }
}



export default Nor_class





// export default cart
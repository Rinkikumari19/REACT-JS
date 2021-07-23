import { Component } from "react";
export var Card = (props) => {
    console.log(props);
    return (
        <div>
            <h1>
                {props.name} , {props.description} , {props.age}
            </h1>
            <img style={{ width: '40%' }} src={props.img} />
        </div>
    )
}
export default Card
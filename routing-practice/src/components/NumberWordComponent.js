import React from "react";

const NumberWordComponent = props => {
    if (isNaN(props.id)) {
        return (
            <h1>The word is: {props.id}</h1>
        )
    }
    return (
        <h1>The number is: {props.id}</h1>
    )
}

export default NumberWordComponent;
import React from "react";

const StyleComponent = props => {
        return (
            <h1 style={{color: props.text, backgroundColor: props.background}}>The word is: {props.word}</h1>
        )
}

export default StyleComponent;
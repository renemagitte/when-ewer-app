import React from 'react';

function FormLabel(props) {
    return (
        
        <p><label htmlFor={props.htmlFor}>{props.label}</label></p>
        
    );
}

export default FormLabel;

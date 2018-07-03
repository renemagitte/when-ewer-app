import React from 'react';

function FormLabel(props) {
    return (
        
        <p><label htmlFor={props.htmlFor} className={props.className}>{props.label}</label></p>
        
    );
}

export default FormLabel;

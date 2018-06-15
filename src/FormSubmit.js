import React from 'react';

function FormSubmit(props) {
    return (
        <p><button type="submit" className={props.className}>{props.buttonText}</button></p>
    );
}

export default FormSubmit;

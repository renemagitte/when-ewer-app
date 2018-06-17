import React from 'react';

function FormInput(props) {
    return (
        
          <input 
                  type="input"
                  name={props.name}
                  id="username"
                  aria-describedby="input"
                  placeholder="Enter name of species"
                  onChange={props.onChange}
                  value={props.input}
          />
        
    );
}

export default FormInput;

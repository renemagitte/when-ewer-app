import React from 'react';

function FormInput(props) {
    return (
        
          <input 
                  type="input"
                  name="input"
                  id="username"
                  aria-describedby="input"
                  placeholder="Enter name of speices"
                  onChange={props.onChange}
                  value={props.input}
          />
        
    );
}

export default FormInput;

import React from 'react';

function FormInput(props) {
    return (
        
        <div class="form-group">
          <input 
                  type="input"
                  className="form-control" 
                  name={props.name}
                  id="username"
                  aria-describedby="input"
                  placeholder={props.placeholder}
                  onChange={props.onChange}
                  value={props.input}
          />
        </div>
    );
}

export default FormInput;

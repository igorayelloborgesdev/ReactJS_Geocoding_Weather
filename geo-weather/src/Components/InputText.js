import React from 'react';

const InputText = ({ value, labelName, name, placeholder, type, onChange, onKeyUp }) => (    
      <div>
        <label>{labelName}</label>
        <input
            type={type}
            value={value}
            name={name}
            className="form-control"
            placeholder={placeholder}
            onChange={onChange}
            onKeyUp={onKeyUp}
        />    
      </div>            
);

export default InputText;
import './Input.css';
import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const { label, inputId, maxLength, step, inputChange, keyName } = props
  return (
    <div className='Input'>
      <label htmlFor={inputId}>{label}</label>
      <input id={keyName} type="number" name={`name_${inputId}`} maxLength={maxLength} step={step} onChange={(e) => { inputChange(e, keyName) }}></input>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  keyName: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  inputChange: PropTypes.func.isRequired
}

export default Input
import './Input.css';
import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const { label, inputId, maxLength, step } = props
  return (
    <div className='Input'>
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} type="number" name={`name_${inputId}`} maxLength={maxLength} step={step} ></input>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired
}

export default Input
import './RadioGroup.css';
import React from 'react'
import PropTypes from 'prop-types'

const RadioGroup = props => {
  const { label, radioButtons } = props;
  return (
    <fieldset className='SelectMutacao'>
      <legend>{label}</legend>
      {radioButtons.map(rbn => {
        return (
          <div>
            <input id={label} type="radio" name={rbn.name} value={rbn.value}></input>
            <label>{rbn.label}</label>
          </div>
        )
      })}
    </fieldset>
  )
}

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  radioButtons: PropTypes.array.isRequired
}

export default RadioGroup
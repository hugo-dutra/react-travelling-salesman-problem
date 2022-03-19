import './RadioGroup.css';
import React from 'react'
import PropTypes from 'prop-types'

const RadioGroup = props => {
  const { label, radioButtons, setTipoMutacao } = props;
  return (
    <fieldset className='SelectMutacao'>
      <legend>{label}</legend>
      {radioButtons.map(rbn => {
        return (
          <div key={`radioButton_${rbn.name}`}>
            <input id={rbn.name} type="radio" name={label} onChange={(e) => { setTipoMutacao(e, rbn.name) }} ></input>
            <label htmlFor={rbn.name}>{rbn.label}</label>
          </div>
        )
      })}
    </fieldset>
  )
}

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  setTipoMutacao: PropTypes.func.isRequired,
  radioButtons: PropTypes.array.isRequired
}

export default RadioGroup
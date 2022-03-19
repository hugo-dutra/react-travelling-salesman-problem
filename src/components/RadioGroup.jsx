import './RadioGroup.css';
import React from 'react'
import PropTypes from 'prop-types'
import Elitismo from './Elitismo';

const RadioGroup = props => {
  const { label, radioButtons, setTipoMutacao, alterarElitismo } = props;
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
      <Elitismo alterarElitismo={(e) => { alterarElitismo(e) }} />
    </fieldset>
  )
}

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  setTipoMutacao: PropTypes.func.isRequired,
  radioButtons: PropTypes.array.isRequired,
  alterarElitismo: PropTypes.func.isRequired
}

export default RadioGroup
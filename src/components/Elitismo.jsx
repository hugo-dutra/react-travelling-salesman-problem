import './Elitismo.css'
import React from 'react'
import PropTypes from 'prop-types'

const Elitismo = props => {
  const { alterarElitismo } = props;
  return (
    <div className='checkboxElitismo'>
      <input type="checkbox" id='checkboxElitismo' name="" value="" onChange={(e) => { alterarElitismo(e) }} />
      <label htmlFor='checkboxElitismo'>Elitismo</label>
    </div>
  )
}

Elitismo.propTypes = {
  alterarElitismo: PropTypes.func.isRequired
}

export default Elitismo
import './Button.css'
import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  const { label, onClick } = props;
  return (
    <button className='Button' onClick={onClick}>{label}</button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
import './Labels.css'
import React from 'react'
import PropTypes from 'prop-types'

const Labels = props => {
  const { evolucoes, distancia } = props;
  return (
    <div className='Labels'>
      <label for="">Evoluções: {evolucoes}</label>
      <label for="">Distância: {distancia}</label>
    </div>
  )
}

Labels.propTypes = {
  evolucoes: PropTypes.string.isRequired,
  distancia: PropTypes.string.isRequired
}

export default Labels
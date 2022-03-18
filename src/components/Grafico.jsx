import './Grafico.css'
import React from 'react'
import PropTypes from 'prop-types'

const Grafico = props => {
  return (
    <div>
      <canvas className='CanvasGrafico'></canvas>

    </div>
  )
}

Grafico.propTypes = {}

export default Grafico
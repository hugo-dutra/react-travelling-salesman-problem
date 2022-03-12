import './MainPanel.css'
import React from 'react';
import { useState } from 'react';
import { drawCircle, clearCanvas } from '../services/CanvasService';
import Canvas from './Canvas';

const circles = [];

const MainPanel = () => {
  const handleCanvasClick = (e) => {
    const { clientX, clientY } = e;
    console.clear();
    console.log(clientX, clientY);
  }

  return (
    <div className='MainPanel'>
      <Canvas />
    </div>
  )
}

export default MainPanel;

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
    <div style={{ width: "100vw", height: "100vh" }}>
      <h1>MainPanel</h1>
      <Canvas />
    </div>
  )
}

export default MainPanel;

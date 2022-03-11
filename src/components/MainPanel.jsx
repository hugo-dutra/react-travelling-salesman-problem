import React from 'react';
import { useState } from 'react';
import { drawCircle, clearCanvas } from '../services/CanvasService';

const circles = [];

const MainPanel = () => {
  const handleCanvasClick = (e) => {
    const { clientX, clientY } = e;
    circles.push({ x: clientX, y: clientY });
    circles.forEach(circle => {
      drawCircle(circle.x, circle.y, 10);
    })
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <h1>MainPanel</h1>
      <canvas id="panelCanvas" onClick={handleCanvasClick} style={{ width: "100vw", height: "100vh" }} ></canvas>
    </div>
  )
}

export default MainPanel;

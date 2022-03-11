import React from 'react';
import { useEffect } from 'react';



const PointPositionCircle = () => {
  useEffect(() => {
    addCircle(300, 100, 10);
  }, [])


  const addCircle = (x, y, radius) => {
    const panelCanvas = document.getElementById("panelCanvas");
    panelCanvas.width = window.innerWidth;
    panelCanvas.height = window.innerHeight;

    const ctx = panelCanvas.getContext("2d");
    ctx.clearRect(0, 0, panelCanvas.width, panelCanvas.height)
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
  }

  return (
    <>
      <canvas id="panelCanvas"></canvas>
    </>
  )
}

export default PointPositionCircle;

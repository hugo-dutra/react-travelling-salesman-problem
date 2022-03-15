
import './Canvas.css'
import { useEffect, useRef } from "react";
import { useState } from 'react';

const Canvas = (props) => {
  const { enviarPontos } = props;
  const canvasRef = useRef(null);
  const [points, setPoints] = useState([]);


  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = '#fff';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, [])

  const addCircle = (e) => {
    const { clientX, clientY } = e;
    const canvas = canvasRef.current;
    points.push({ x: clientX, y: clientY });
    setPoints([...points]);
    canvas.width = window.innerWidth * 0.98;
    canvas.height = window.innerHeight * 0.72;
    const context = canvas.getContext('2d');

    for (let i = 0; i < points.length; i++) {
      context.beginPath();
      context.arc(points[i].x - 5, points[i].y - 5, 5, 0, 2 * Math.PI);
      context.fillStyle = "red";
      context.fill();
      context.stroke();
    }
    enviarPontos(points);
  }

  const clearCanvas = (e) => {
    if (e.button === 2) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      setPoints([]);
      context.clearRect(0, 0, canvas.width, canvas.height)
      e.preventDefault()
      enviarPontos(points);
    }
  }

  return <canvas
    {...props}
    className="CanvasClass"
    ref={canvasRef}
    onClick={(e) => addCircle(e)}
    onContextMenu={(e) => clearCanvas(e)} />
}
export default Canvas

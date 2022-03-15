
import './Canvas.css'
import { useContext, useEffect, useRef } from "react";
import { DataContext } from '../data/DataContext';

const Canvas = (props) => {
  const canvasRef = useRef(null);

  const { points } = useContext(DataContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth * 0.98;
    canvas.height = window.innerHeight * 0.72;
    context.fillStyle = '#fff';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, [])

  const addCircle = (e) => {
    const { clientX, clientY } = e;
    const canvas = canvasRef.current;
    points.push({ x: clientX, y: clientY });
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

  }

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  return <canvas
    {...props}
    className="CanvasClass"
    ref={canvasRef}
    onClick={(e) => addCircle(e)}
  />
}
export default Canvas

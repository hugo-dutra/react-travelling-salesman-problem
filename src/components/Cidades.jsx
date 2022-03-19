import './Cidades.css'
import React, { useContext, useEffect, useRef } from 'react'
import { DataContext } from '../data/DataContext';


const Cidades = props => {
  const { dataState, setDataState } = useContext(DataContext);
  const refCanvas = useRef(null);

  useEffect(() => {
    const { pontos } = dataState;
    if (pontos.length == 0) {
      const { current } = refCanvas;
      const context = refCanvas.current.getContext('2d');
      context.canvas.width = window.innerWidth * 0.55;
      context.canvas.height = window.innerHeight;
      context.clearRect(0, 0, window.innerWidth * 0.55, window.innerHeight);
    };


  }, [dataState])

  const handleClickCanvas = (e) => {
    const { clientX, clientY } = e;
    const { current } = refCanvas;

    const { offsetLeft, offsetTop } = current
    const xFixedClickPosition = clientX - offsetLeft;
    const yFixedClickPosition = clientY - offsetTop;
    const context = refCanvas.current.getContext('2d');
    context.canvas.width = window.innerWidth * 0.55;
    context.canvas.height = window.innerHeight;
    drawPointCity(xFixedClickPosition, yFixedClickPosition, context);
  }

  const drawPointCity = (x, y, ctx) => {
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, 2 * Math.PI);
    ctx.fillStyle = "#FF9200";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "#555";
    ctx.fill();

    setDataState({ ...dataState, ['pontos']: [...dataState.pontos, { x, y }] })
    drawPoints(dataState.pontos, ctx);
  }

  const drawPoints = (pontos, ctx) => {
    pontos.forEach(point => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 7, 0, 2 * Math.PI);
      ctx.fillStyle = "#FF9200";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
      ctx.fillStyle = "#555";
      ctx.fill();
    });
  }


  return (
    <canvas ref={refCanvas} className='CanvasCidades' onClick={handleClickCanvas}></canvas>
  )
}

Cidades.propTypes = {}

export default Cidades
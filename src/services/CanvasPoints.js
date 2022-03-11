const drawCircle = (x, y, radius) => {
  const panelCanvas = document.getElementById("panelCanvas");
  panelCanvas.width = window.innerWidth;
  panelCanvas.height = window.innerHeight;
  const ctx = panelCanvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
}

const clearCanvas = () => {
  const panelCanvas = document.getElementById("panelCanvas");
  const ctx = panelCanvas.getContext("2d");
  ctx.clearRect(0, 0, panelCanvas.width, panelCanvas.height)
}

export drawCircle, clearCanvas;

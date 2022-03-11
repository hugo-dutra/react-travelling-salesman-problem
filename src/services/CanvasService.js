export const drawCircle = (x, y, radius) => {
  var panelCanvas = document.getElementById("panelCanvas");
  panelCanvas.width = window.innerWidth;
  panelCanvas.height = window.innerHeight;
  const ctx = panelCanvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(x, y - panelCanvas.offsetTop, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
}

export const clearCanvas = () => {
  const panelCanvas = document.getElementById("panelCanvas");
  const ctx = panelCanvas.getContext("2d");
  ctx.clearRect(0, 0, panelCanvas.width, panelCanvas.height)
}



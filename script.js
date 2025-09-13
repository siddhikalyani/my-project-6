const svg = document.getElementById("drawingArea");

let isDrawing = false;
let currentPath;

// Mouse down → start new path
svg.addEventListener("mousedown", (e) => {
  isDrawing = true;

  // Create new path
  currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  currentPath.setAttribute("stroke", "blue");
  currentPath.setAttribute("stroke-width", "2");
  currentPath.setAttribute("fill", "none");

  // Start path with "move to" (M)
  const startX = e.offsetX;
  const startY = e.offsetY;
  currentPath.setAttribute("d", `M ${startX} ${startY}`);

  svg.appendChild(currentPath);
});

// Mouse move → extend path
svg.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  const x = e.offsetX;
  const y = e.offsetY;

  // Add line to (L) current point
  const d = currentPath.getAttribute("d");
  currentPath.setAttribute("d", `${d} L ${x} ${y}`);
});

// Mouse up → stop drawing
svg.addEventListener("mouseup", () => {
  isDrawing = false;
});

// Mouse leaves canvas → stop drawing
svg.addEventListener("mouseleave", () => {
  isDrawing = false;
});

window.addEventListener("mousemove", (event) => {
    mx = (event.clientX - viewport.canvas.getBoundingClientRect().left) / (viewport.canvas.getBoundingClientRect().right- viewport.canvas.getBoundingClientRect().left) * viewport.canvas.width;
    my = (event.clientY - viewport.canvas.getBoundingClientRect().top) / (viewport.canvas.getBoundingClientRect().bottom- viewport.canvas.getBoundingClientRect().top) * viewport.canvas.height;
});
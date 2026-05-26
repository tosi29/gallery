(() => {
  const canvas = document.getElementById('noise-grid');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let t = 0;

  function draw() {
    const { width, height } = canvas;
    ctx.fillStyle = '#0b0b11';
    ctx.fillRect(0, 0, width, height);

    for (let y = 20; y < height; y += 24) {
      ctx.beginPath();
      for (let x = 0; x <= width; x += 12) {
        const wave = Math.sin((x * 0.02) + (y * 0.03) + t) * 9;
        const yy = y + wave;
        if (x === 0) ctx.moveTo(x, yy);
        else ctx.lineTo(x, yy);
      }
      ctx.strokeStyle = 'rgba(115, 224, 255, 0.75)';
      ctx.stroke();
    }

    t += 0.03;
    requestAnimationFrame(draw);
  }

  draw();
})();

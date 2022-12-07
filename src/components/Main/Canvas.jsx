import React, { useRef, useEffect } from 'react'

function Canvas(props) {
  const canvasRef = useRef(null);
  const { dwidth, dheight, ...rest } = props;

  function resizeCanvas(canvas) {
    const { width, height } = canvas.getBoundingClientRect()
    console.log(width, height);
    if (canvas.width !== width || canvas.height !== height) {
      const { devicePixelRatio:ratio=1 } = window
      const context = canvas.getContext('2d')
      canvas.width = width*ratio
      canvas.height = height*ratio
      context.scale(ratio, ratio)
      return true
    }

    return false
  }

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#FFFFFF'

    for (let i=0; i < 200; i++){
      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      ctx.moveTo(Math.round(Math.random()*dwidth*2-dwidth/2), Math.round(Math.random()*dheight*2-dheight/2));
      ctx.lineTo(Math.round(Math.random()*dwidth*2-dwidth/2), Math.round(Math.random()*dheight*2-dheight/2));
      ctx.lineTo(Math.round(Math.random()*dwidth*2-dwidth/2), Math.round(Math.random()*dheight*2-dheight/2));
      ctx.fillStyle = 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')'
      ctx.fill();
    }

  }

  useEffect(() => {
    console.log(dwidth, dheight)
  }, [dwidth, dheight]);

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    canvas.height = dheight;
    canvas.width = dwidth;
    draw(context, frameCount)

    //Our draw came here
    const render = () => {
      frameCount++
      // resizeCanvas(canvas);
      canvas.height = dheight;
      canvas.width = dwidth;
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return (
    <canvas ref={canvasRef} {...props} />
  )
}

export default Canvas

import React, { useEffect, useRef } from 'react';

const MouseEffect = () => {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    let mousePos = { x: -1, y: -1 };
    let lastMoveTime = Date.now();
    let isActive = true;

    const getRandomInt = (min, max) => {
      return Math.round(Math.random() * (max - min + 1)) + min;
    };

    const handleMouseMove = (e) => {
      mousePos.x = e.pageX;
      mousePos.y = e.pageY;
      lastMoveTime = Date.now();
      if (!isActive) {
        isActive = true;
      }
    };

    const handleMouseLeave = () => {
      mousePos.x = -1;
      mousePos.y = -1;
    };

    const createBall = () => {
      const currentTime = Date.now();
      if (currentTime - lastMoveTime > 500) {
        isActive = false;
        return;
      }

      if (isActive && mousePos.x > 0 && mousePos.y > 0) {
        const range = 15;
        const color = `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`;
        const sizeInt = getRandomInt(10, 30);
        const left = getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range);
        const top = getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range);

        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.style.cssText = `
          left: ${left}px;
          top: ${top}px;
          background: ${color};
          height: ${sizeInt}px;
          width: ${sizeInt}px;
        `;

        wrap.appendChild(ball);

        ball.addEventListener('animationend', () => {
          ball.remove();
        });
      }
    };

    const intervalId = setInterval(createBall, 1);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <div id="wrap" ref={wrapRef}></div>;
};

export default MouseEffect;
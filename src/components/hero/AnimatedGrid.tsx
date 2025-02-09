import React, { useEffect, useRef } from 'react';

interface Cube {
  x: number;
  y: number;
  z: number;
  rotationX: number;
  rotationY: number;
  targetRotationX: number;
  targetRotationY: number;
}

export default function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cubesRef = useRef<Cube[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize cubes
    const initCubes = () => {
      const cubes: Cube[] = [];
      const gridSize = 6;
      const spacing = 150;
      
      const columns = Math.ceil(canvas.width / spacing) + 2;
      const rows = Math.ceil(canvas.height / spacing) + 2;
      
      for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
          for (let z = 0; z < 2; z++) {
            cubes.push({
              x: (x * spacing) - (canvas.width / 2),
              y: (y * spacing) - (canvas.height / 2),
              z: z * spacing - 200,
              rotationX: 0,
              rotationY: 0,
              targetRotationX: 0,
              targetRotationY: 0,
            });
          }
        }
      }
      cubesRef.current = cubes;
    };

    // Handle canvas resize
    const handleResize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      canvas.width = container.offsetWidth * window.devicePixelRatio;
      canvas.height = container.offsetHeight * window.devicePixelRatio;
      canvas.style.width = `${container.offsetWidth}px`;
      canvas.style.height = `${container.offsetHeight}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      initCubes();
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      mouseRef.current = {
        x: (x * 2) - 1,
        y: (y * 2) - 1
      };
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
      mouseRef.current = { x: 0, y: 0 };
    };

    // Draw cube
    const drawCube = (cube: Cube) => {
      const size = 20;
      const points = [
        [-size, -size, -size],
        [size, -size, -size],
        [size, size, -size],
        [-size, size, -size],
        [-size, -size, size],
        [size, -size, size],
        [size, size, size],
        [-size, size, size],
      ];

      // Apply rotations
      const rotatedPoints = points.map(([x, y, z]) => {
        // Rotate around Y
        const rotY = cube.rotationY;
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const ry = [
          x * cosY + z * sinY,
          y,
          -x * sinY + z * cosY,
        ];

        // Rotate around X
        const rotX = cube.rotationX;
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        return [
          ry[0],
          ry[1] * cosX - ry[2] * sinX,
          ry[1] * sinX + ry[2] * cosX,
        ];
      });

      // Project 3D to 2D with perspective
      const focalLength = 700;
      const projected = rotatedPoints.map(([x, y, z]) => {
        const scale = focalLength / (focalLength + z + cube.z);
        return [
          (x + cube.x) * scale + canvas.width / 2,
          (y + cube.y) * scale + canvas.height / 2,
          z + cube.z,
        ];
      });

      // Draw edges with gradient color based on depth
      const faces = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [0, 4, 7, 3],
        [1, 5, 6, 2],
        [0, 1, 5, 4],
        [3, 2, 6, 7],
      ];

      faces.forEach(face => {
        const avgZ = face.reduce((sum, i) => sum + projected[i][2], 0) / face.length;
        const opacity = 0.08 + Math.min(0.2, Math.max(0, (avgZ + 300) / 1000));
        ctx.strokeStyle = `rgba(17, 24, 39, ${opacity})`;
        ctx.lineWidth = 1.3;

        ctx.beginPath();
        face.forEach((pointIndex, i) => {
          const [x, y] = projected[pointIndex];
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.stroke();
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      cubesRef.current.forEach(cube => {
        // Update rotation targets based on mouse position with reduced sensitivity
        cube.targetRotationX = mouseRef.current.y * Math.PI * 0.15;
        cube.targetRotationY = mouseRef.current.x * Math.PI * 0.15;

        // Smooth rotation with increased damping
        cube.rotationX += (cube.targetRotationX - cube.rotationX) * 0.1;
        cube.rotationY += (cube.targetRotationY - cube.rotationY) * 0.1;

        drawCube(cube);
      });

      requestAnimationFrame(animate);
    };

    // Initialize
    handleResize();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ 
        touchAction: 'none',
      }}
    />
  );
}

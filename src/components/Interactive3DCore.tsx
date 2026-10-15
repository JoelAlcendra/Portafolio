import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Interactive3DCoreProps {
  zenMode?: boolean;
}

export const Interactive3DCore: React.FC<Interactive3DCoreProps> = ({ zenMode = false }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const width = container.clientWidth || 420;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Inner Wireframe Icosahedron (Geometric Engineering Core)
    const innerGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb, // Cobalt Blue
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 2. Inner Solid Glow Sphere (Core energy)
    const coreGeo = new THREE.SphereGeometry(0.75, 24, 24);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7, // Sky Blue
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 3. Outer Geodesic Ring
    const ringGeo = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.y = Math.PI / 3;
    ring2.rotation.z = Math.PI / 6;
    mainGroup.add(ring2);

    // 4. Constellation Vertex Points (Star / Data Nodes)
    const particlesCount = 90;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 1.9 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.06,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    mainGroup.add(particles);

    // Mouse movement interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isHovered = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 1.5;
      targetRotationX = y * 1.5;
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };
    const handleMouseLeave = () => {
      isHovered = false;
      targetRotationX = 0;
      targetRotationY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Window resize handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = performance.now() * 0.001;

      if (!zenMode) {
        // Continuous slow rotation
        const baseSpeed = isHovered ? 0.015 : 0.006;
        innerMesh.rotation.y += baseSpeed;
        innerMesh.rotation.x += baseSpeed * 0.7;

        coreMesh.rotation.y -= baseSpeed * 0.5;

        ring1.rotation.z += baseSpeed * 0.8;
        ring2.rotation.z -= baseSpeed * 0.8;

        particles.rotation.y += baseSpeed * 0.4;
        particles.rotation.x += baseSpeed * 0.2;

        // Mouse Parallax Smooth Lerp
        mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.06;
        mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.06;

        // Subtle pulsing scale
        const pulse = 1 + Math.sin(elapsedTime * 2) * 0.03;
        innerMesh.scale.set(pulse, pulse, pulse);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      innerGeo.dispose();
      innerMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, [zenMode]);

  return (
    <div className="relative w-full max-w-[440px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* 3D WebGL Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center relative z-10"
        title="Núcleo de Arquitectura 3D interactivo - Mueve el cursor para interactuar"
      />

      {/* Ambient Radial Soft Aura behind 3D core */}
      <div 
        className="absolute inset-0 rounded-full blur-[80px] opacity-40 pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(37, 99, 235, 0.2) 50%, transparent 70%)',
        }}
      />

      {/* Floating Modern System Badges Orbiting the 3D Core */}
      <div className="absolute top-4 -left-2 sm:-left-6 z-20 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-200/50 flex items-center gap-2 animate-bounce-slow">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-bold text-slate-800 font-mono-code">Systems Core 8.0</span>
      </div>

      <div className="absolute bottom-6 -right-2 sm:-right-4 z-20 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-200/50 flex items-center gap-2">
        <span className="text-xs font-semibold text-slate-700">Fullstack Node</span>
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 font-mono-code font-bold">React • Python</span>
      </div>

      <div className="absolute -bottom-2 left-6 z-20 px-3 py-1.5 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-md text-[11px] font-mono-code text-slate-600 flex items-center gap-1.5">
        <span className="text-cyan-600 font-bold">⚡</span>
        <span>Barranquilla, CO</span>
      </div>
    </div>
  );
};

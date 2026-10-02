import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { Database, Code2, BarChart3 } from 'lucide-react';

function AnalyticsCore3D() {
  const outerGlassRef = useRef();
  const innerCoreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const internalGroupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (outerGlassRef.current) {
      outerGlassRef.current.rotation.y = time * 0.08;
      outerGlassRef.current.rotation.x = Math.sin(time * 0.05) * 0.05;
    }
    if (innerCoreRef.current) {
      innerCoreRef.current.scale.setScalar(0.45 + Math.sin(time * 1.5) * 0.03);
    }
    if (internalGroupRef.current) {
      internalGroupRef.current.rotation.y = time * -0.12;
      internalGroupRef.current.rotation.z = time * 0.05;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.15;
      ring1Ref.current.rotation.x = time * 0.08;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = time * -0.18;
      ring2Ref.current.rotation.y = time * 0.12;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = time * 0.12;
      ring3Ref.current.rotation.y = time * -0.1;
    }
  });

  // Internal Data Particles Cloud (Micro data nodes following structured paths)
  const particles = useMemo(() => {
    const count = 350;
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorPalette = [
      new THREE.Color('#8B5CF6'), // Violet
      new THREE.Color('#6366F1'), // Indigo
      new THREE.Color('#22D3EE'), // Cyan
      new THREE.Color('#F59E0B'), // Power BI Yellow/Orange
      new THREE.Color('#3B82F6'), // Blue
    ];

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 1.35; // Inside sphere radius 1.35

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    return { pos, colors };
  }, []);

  return (
    <group>
      {/* 1. TRANSPARENT SMOKED GLASS PBR OUTER SPHERE */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere args={[1.5, 64, 64]} ref={outerGlassRef}>
          <meshPhysicalMaterial
            color="#080D1C"
            emissive="#1E1035"
            emissiveIntensity={0.2}
            roughness={0.08}
            metalness={0.2}
            transmission={0.9}
            thickness={1.4}
            ior={1.48}
            transparent={true}
            opacity={0.65}
            clearcoat={1}
            clearcoatRoughness={0.05}
            reflectivity={0.85}
          />
        </Sphere>

        {/* 2. CENTRAL DATA INTELLIGENCE CORE (Emissive Engine Core) */}
        <mesh ref={innerCoreRef} scale={0.45}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#A855F7"
            emissiveIntensity={3}
            roughness={0.05}
          />
        </mesh>
        <mesh scale={0.68}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#8B5CF6"
            emissive="#6366F1"
            emissiveIntensity={1.2}
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* 3. MINIATURE INTERNAL DATA ECOSYSTEM & STRUCTURES */}
        <group ref={internalGroupRef}>
          {/* Mini 3D MySQL Database Cylinder */}
          <group position={[-0.6, -0.3, 0.4]} scale={0.22}>
            <mesh position={[0, 0.6, 0]}>
              <cylinderGeometry args={[0.5, 0.5, 0.3, 24]} />
              <meshStandardMaterial color="#0284C7" emissive="#0284C7" emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0.1, 0]}>
              <cylinderGeometry args={[0.5, 0.5, 0.3, 24]} />
              <meshStandardMaterial color="#0369A1" emissive="#0369A1" emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.4, 0]}>
              <cylinderGeometry args={[0.5, 0.5, 0.3, 24]} />
              <meshStandardMaterial color="#075985" emissive="#075985" emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
            </mesh>
          </group>

          {/* Mini 3D Bar Chart Visual */}
          <group position={[0.5, 0.2, 0.3]} scale={0.18}>
            <mesh position={[-0.6, 0.4, 0]}>
              <boxGeometry args={[0.3, 0.8, 0.3]} />
              <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.7} />
            </mesh>
            <mesh position={[0, 0.7, 0]}>
              <boxGeometry args={[0.3, 1.4, 0.3]} />
              <meshStandardMaterial color="#6366F1" emissive="#6366F1" emissiveIntensity={0.8} />
            </mesh>
            <mesh position={[0.6, 0.5, 0]}>
              <boxGeometry args={[0.3, 1.0, 0.3]} />
              <meshStandardMaterial color="#22D3EE" emissive="#22D3EE" emissiveIntensity={0.9} />
            </mesh>
          </group>

          {/* Mini Python Transformation Data Nodes */}
          <group position={[-0.4, 0.5, -0.3]} scale={0.16}>
            <mesh position={[-0.5, 0, 0]}>
              <sphereGeometry args={[0.3, 16, 16]} />
              <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.8} />
            </mesh>
            <mesh position={[0.5, 0, 0]}>
              <sphereGeometry args={[0.3, 16, 16]} />
              <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.8} />
            </mesh>
            <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.06, 0.06, 1, 16]} />
              <meshStandardMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.6} />
            </mesh>
          </group>

          {/* Internal Particles Cloud */}
          <points>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={particles.pos.length / 3}
                array={particles.pos}
                itemSize={3}
              />
              <bufferAttribute
                attach="attributes-color"
                count={particles.colors.length / 3}
                array={particles.colors}
                itemSize={3}
              />
            </bufferGeometry>
            <pointsMaterial
              size={0.038}
              vertexColors
              transparent
              opacity={0.85}
              blending={THREE.AdditiveBlending}
            />
          </points>
        </group>

        {/* 4. THIN METALLIC HOLOGRAPHIC ORBITAL RINGS */}
        <mesh ref={ring1Ref} rotation={[0.4, 0.2, 0]}>
          <torusGeometry args={[2.0, 0.012, 16, 120]} />
          <meshStandardMaterial
            color="#6366F1"
            emissive="#8B5CF6"
            emissiveIntensity={0.85}
            metalness={0.95}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>

        <mesh ref={ring2Ref} rotation={[-0.6, 0.8, 0.3]}>
          <torusGeometry args={[2.3, 0.009, 16, 120]} />
          <meshStandardMaterial
            color="#22D3EE"
            emissive="#3B82F6"
            emissiveIntensity={0.9}
            metalness={0.95}
            roughness={0.05}
            transparent
            opacity={0.75}
          />
        </mesh>

        <mesh ref={ring3Ref} rotation={[1.1, -0.4, -0.5]}>
          <torusGeometry args={[2.6, 0.008, 16, 120]} />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#7C3AED"
            emissiveIntensity={0.85}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[460px] lg:max-w-[540px] mx-auto flex items-center justify-center my-4 sm:my-0">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-blue-500/30 rounded-full blur-3xl animate-pulse-glow" />

      {/* 3D WebGL Canvas Scene */}
      <div className="relative w-full h-full z-10">
        <Canvas camera={{ position: [0, 0, 5.8], fov: 48 }}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[10, 10, 8]} intensity={1.8} color="#C4B5FD" />
          <directionalLight position={[-10, -10, -5]} intensity={1.2} color="#38BDF8" />
          <pointLight position={[0, 0, 0]} intensity={2} color="#A855F7" />

          <AnalyticsCore3D />

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
        </Canvas>
      </div>

      {/* ============================================================ */}
      {/* EXTERNAL FLOATING GLASS UI PANELS (PHYSICAL 3D STYLED)      */}
      {/* ============================================================ */}

      {/* 1. UPPER-LEFT PANEL: PYTHON (Data Processing) */}
      <div
        className="absolute top-0 left-0 sm:-left-4 z-20 glass-panel px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-2xl border border-purple-500/40 shadow-xl shadow-purple-950/40 backdrop-blur-xl flex items-center gap-2 sm:gap-3 animate-float"
        style={{ animationDelay: '0s' }}
      >
        <div className="p-1.5 sm:p-2 rounded-xl bg-purple-950/80 border border-purple-700/50 text-purple-300">
          <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1">
            <span className="text-[11px] sm:text-xs font-bold text-white tracking-wider font-mono">PYTHON</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
          </div>
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono">Data Processing</span>
        </div>
      </div>

      {/* 2. LOWER-RIGHT PANEL: MYSQL (SQL Analytics) */}
      <div
        className="absolute bottom-2 left-0 sm:bottom-4 sm:left-auto sm:-right-4 z-20 glass-panel px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-2xl border border-cyan-500/40 shadow-xl shadow-cyan-950/40 backdrop-blur-xl flex items-center gap-2 sm:gap-3 animate-float"
        style={{ animationDelay: '1.2s' }}
      >
        <div className="p-1.5 sm:p-2 rounded-xl bg-cyan-950/80 border border-cyan-700/50 text-cyan-300">
          <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1">
            <span className="text-[11px] sm:text-xs font-bold text-white tracking-wider font-mono">MYSQL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          </div>
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono">SQL Analytics</span>
        </div>
      </div>

      {/* 3. UPPER-RIGHT PANEL: POWER BI (Visualization) */}
      <div
        className="absolute top-10 right-0 sm:top-16 sm:-right-6 z-20 glass-panel px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-2xl border border-amber-500/40 shadow-xl shadow-amber-950/40 backdrop-blur-xl flex items-center gap-2 sm:gap-3 animate-float"
        style={{ animationDelay: '2.4s' }}
      >
        <div className="p-1.5 sm:p-2 rounded-xl bg-amber-950/80 border border-amber-700/50 text-amber-400">
          <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1">
            <span className="text-[11px] sm:text-xs font-bold text-white tracking-wider font-mono">POWER BI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          </div>
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono">Dashboards & Viz</span>
        </div>
      </div>
    </div>
  );
}

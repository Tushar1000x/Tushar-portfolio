import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { TextureLoader } from "three";
import CanvasLoader from "../Loader";

// Utility to resize image in-memory before loading it as texture
const resizeImageToBase64 = (src, size = 128) =>
  new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, size, size);
      resolve(canvas.toDataURL("image/png"));
    };
    img.src = src;
  });

// Ball component (rendering the floating 3D ball)
const Ball = ({ imgUrl }) => {
  const [resizedImg, setResizedImg] = useState(null);

  useEffect(() => {
    resizeImageToBase64(imgUrl, 128).then(setResizedImg);
  }, [imgUrl]);

  const texture = useLoader(TextureLoader, resizedImg || imgUrl);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={texture}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// Main canvas wrapper for rendering the ball
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

import React, {useRef} from 'react';
import './App.scss';

import {Canvas} from '@react-three/fiber';
import { OrbitControls, softShadows } from '@react-three/drei';

import Box from './Components/Box/Box';

import Header from './Components/Header/Header'
softShadows(); 

function App() {


  return (
    <>
<Header />
    <Canvas 
    camera={{position: [-5, 2, 10], fov: 60}}
    shadows
  
    >
      <ambientLight intensity={.3}  />

      <spotLight
      castShadow
      position={[0, 10, 0]} 
      intensity={1} 
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
      />

      <pointLight position={[-10, 0, -20]} intensity={.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />

<group>
  <mesh 
  receiveShadow
  rotation={[-Math.PI /2 , 0, 0]} position={[0, -3, 0]} >
    <planeBufferGeometry attach='geometry' args={[100, 100]}/>
    <shadowMaterial attach='material' color='black' opacity={.3} />
  </mesh>
   <Box  position={[0, 1, 0]} args={[3, 2, 1]} color='hotpink' speed={2} />
    <Box  position={[-2, 1, -5]} color='yellowgreen' speed={6} />
    <Box  position={[5, 1, -2]} color='lightblue' speed={6}  />
</group>

   
     <OrbitControls />
    </Canvas>
   
    </>
  );
}

export default App;

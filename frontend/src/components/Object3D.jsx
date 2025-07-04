import { useEffect,useRef,useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three';

function Model({canvasRef,hasCursor}) {
  const modelRef = useRef()
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const { scene } = useGLTF('/models3D/meta-quest-3/source/Quest3.glb')
  const { camera } = useThree();

  useEffect(() => {
    if(!hasCursor) return
    const handleMouseMove = (e) => {
      if (!canvasRef.current) return

      const rect = canvasRef.current.getBoundingClientRect()
      const x = -(((e.clientX - rect.left) / rect.width) * 2 - 1)
      const y = -(-((e.clientY - rect.top) / rect.height) * 2 +1.7)
      setMousePos({ x, y })
    };

    window.addEventListener('mousemove', handleMouseMove);

    const cleanEffect=()=>{
      window.removeEventListener('mousemove', handleMouseMove);
    }
    return cleanEffect
  }, []);


  useFrame(() => {
    if(!hasCursor) return
    if (!modelRef.current) return;

    const vector = new THREE.Vector2(mousePos.x, mousePos.y);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(vector, camera);

    const target = new THREE.Vector3();
    raycaster.ray.at(-1, target); // punto donde el cursor "apunta" en el espacio 3D


    modelRef.current.lookAt(target);
    });

    return (
      <primitive ref={modelRef} object={scene} scale={1} position={[0, 0, 0]} />
    )
}


function Object3D() {
  const canvasRef = useRef()
  const [cursorDevice,setCursorDevice]=useState(false)

  useEffect(() => {
    const hasCursor = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    setCursorDevice(hasCursor)
  }, [])

  return (
    <div ref={canvasRef} className='object3d_container'>
      <Canvas camera={{ position: [0, -0.06, 0.3], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <Model canvasRef={canvasRef} hasCursor={cursorDevice}/>
        {!cursorDevice && <OrbitControls enableZoom={false} />}
      </Canvas>
    </div>
  )
}

export default Object3D;
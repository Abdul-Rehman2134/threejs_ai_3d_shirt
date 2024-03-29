import React from 'react'
import { Center, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Shirt from './Shirt'
import BackDrop from './BackDrop'
import CameraRig from './CameraRig'
import state from '../store'
import { useSnapshot } from 'valtio'

function CanvasModal() {

    const snap = useSnapshot(state)

    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 0], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
            className='w-full max-w-full h-full transition-all ease-in'
        >
            <ambientLight intensity={0.5} />
            <Environment preset='city' />

            <CameraRig>
                {
                    !snap.intro &&
                    <BackDrop />
                }

                <Center>
                    <Shirt />
                </Center>

            </CameraRig>

        </Canvas>
    )
}

export default CanvasModal
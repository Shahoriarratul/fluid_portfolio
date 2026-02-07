import React, { JSX, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Mesh, Material, Group } from 'three'

type GroupProps = JSX.IntrinsicElements['group']

export function Planet(props: GroupProps) {
  const { nodes, materials } = useGLTF('/models/Planet.glb') as unknown as {
    nodes: { Sphere: Mesh; Ring: Mesh; Sphere2: Mesh }
    materials: { [key: string]: Material }
  }
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.002']}
        rotation={[0, 0, 0.741]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ring.geometry}
        material={materials['Material.001']}
        rotation={[-0.124, 0.123, -0.778]}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere2.geometry}
        material={materials['Material.001']}
        position={[0.647, 1.03, -0.724]}
        rotation={[0, 0, 0.741]}
        scale={0.223}
      />
    </group>
  )
}

useGLTF.preload('/models/Planet.glb')

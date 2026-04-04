import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type PointerState = {
  x: number
  y: number
}

function BackgroundNetwork({ pointer, lowPower }: { pointer: PointerState; lowPower: boolean }) {
  const groupRef = useRef<THREE.Group>(null)

  const network = useMemo(() => {
    const nodes: [number, number, number][] = []
    const nodePositions: number[] = []
    const nodeColors: number[] = []
    const linePositions: number[] = []
    const lineColors: number[] = []
    const nodeCount = lowPower ? 14 : 28
    const maxDistance = lowPower ? 3.2 : 3.7

    for (let index = 0; index < nodeCount; index += 1) {
      const x = (Math.random() - 0.5) * 16
      const y = (Math.random() - 0.5) * 8.6
      const z = (Math.random() - 0.5) * 6
      nodes.push([x, y, z])
      nodePositions.push(x, y, z)

      const tone = index % 5 === 0
        ? new THREE.Color('#f6c36a')
        : index % 3 === 0
          ? new THREE.Color('#8ed8ff')
          : new THREE.Color('#d9ecff')

      nodeColors.push(tone.r, tone.g, tone.b)
    }

    for (let source = 0; source < nodes.length; source += 1) {
      for (let target = source + 1; target < nodes.length; target += 1) {
        const a = nodes[source]
        const b = nodes[target]
        const distance = Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2])

        if (distance > maxDistance) continue

        linePositions.push(a[0], a[1], a[2], b[0], b[1], b[2])

        const strength = THREE.MathUtils.clamp(1 - distance / maxDistance, 0.2, 1)
        const colorA = source % 4 === 0 ? new THREE.Color('#f6c36a') : new THREE.Color('#88d8ff')
        const colorB = target % 5 === 0 ? new THREE.Color('#ffd18b') : new THREE.Color('#dbeafe')

        lineColors.push(
          colorA.r * strength,
          colorA.g * strength,
          colorA.b * strength,
          colorB.r * strength,
          colorB.g * strength,
          colorB.b * strength,
        )
      }
    }

    return {
      nodePositions: new Float32Array(nodePositions),
      nodeColors: new Float32Array(nodeColors),
      linePositions: new Float32Array(linePositions),
      lineColors: new Float32Array(lineColors),
      glowNodes: nodes.filter((_, index) => index % (lowPower ? 7 : 6) === 0),
    }
  }, [lowPower])

  useFrame((state) => {
    if (!groupRef.current) return

    const targetX = THREE.MathUtils.lerp(-0.12, 0.12, pointer.y / 100)
    const targetY = THREE.MathUtils.lerp(-0.2, 0.2, pointer.x / 100)
    const rotationEase = lowPower ? 0.03 : 0.04

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, rotationEase)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY + state.clock.elapsedTime * (lowPower ? 0.012 : 0.02), rotationEase)
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * (lowPower ? 0.22 : 0.3)) * 0.08
  })

  const layers = lowPower
    ? [{ position: [0, 0, 0] as [number, number, number], scale: 0.82, opacity: 0.2 }]
    : [
        { position: [-5.8, 0.2, -0.8] as [number, number, number], scale: 0.8, opacity: 0.24 },
        { position: [4.9, -0.15, 0.3] as [number, number, number], scale: 0.9, opacity: 0.34 },
      ]

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {layers.map((layer, layerIndex) => (
        <group key={layerIndex} position={layer.position} scale={layer.scale}>
          <lineSegments>
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" args={[network.linePositions, 3]} count={network.linePositions.length / 3} itemSize={3} />
              <bufferAttribute attach="attributes-color" args={[network.lineColors, 3]} count={network.lineColors.length / 3} itemSize={3} />
            </bufferGeometry>
            <lineBasicMaterial vertexColors transparent opacity={layer.opacity} blending={THREE.AdditiveBlending} />
          </lineSegments>

          <points>
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" args={[network.nodePositions, 3]} count={network.nodePositions.length / 3} itemSize={3} />
              <bufferAttribute attach="attributes-color" args={[network.nodeColors, 3]} count={network.nodeColors.length / 3} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial
              size={lowPower ? 0.1 : 0.12}
              sizeAttenuation
              transparent
              opacity={layer.opacity + (lowPower ? 0.12 : 0.2)}
              depthWrite={false}
              vertexColors
              blending={THREE.AdditiveBlending}
            />
          </points>
        </group>
      ))}

      {network.glowNodes.map((node, index) => (
        <mesh key={`${node.join('-')}-${index}`} position={[node[0] * 1.2, node[1], node[2]]} scale={index % 2 === 0 ? 0.24 : 0.16}>
          <sphereGeometry args={[1, 14, 14]} />
          <meshBasicMaterial color={index % 2 === 0 ? '#ffd089' : '#8fdcff'} transparent opacity={lowPower ? 0.07 : 0.1} blending={THREE.AdditiveBlending} />
        </mesh>
      ))}
    </group>
  )
}

export default function BackgroundScene({ pointer, lowPower }: { pointer: PointerState; lowPower: boolean }) {
  return (
    <div className="hero-canvas">
      <Canvas camera={{ position: [0, 0, 8], fov: 48 }} dpr={lowPower ? [1, 1] : [1, 1.25]} gl={{ alpha: true, antialias: !lowPower, powerPreference: lowPower ? 'default' : 'high-performance' }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[4, 2, 4]} intensity={lowPower ? 1.8 : 2.2} color="#8bd4ff" />
        <pointLight position={[-3, -2, 3]} intensity={lowPower ? 1.05 : 1.3} color="#ffc56a" />
        <BackgroundNetwork pointer={pointer} lowPower={lowPower} />
      </Canvas>
    </div>
  )
}

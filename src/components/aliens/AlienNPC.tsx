import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three/webgpu';
import { useGameStore } from '../../core/store/gameStore';

type AlienType = 'about' | 'projects' | 'resume';

interface AlienNPCProps {
    position: [number, number, number];
    alienType: AlienType;
    label: string;
    color: string;
    phase?: number;
}

const OPEN_DIST = 5;
const CLOSE_DIST = 8;
const LABEL_DIST = 14;

export function AlienNPC({ position, alienType, label, color, phase = 0 }: AlienNPCProps) {
    const characterRef = useGameStore((s) => s.characterRef);
    const setActiveAlien = useGameStore((s) => s.setActiveAlien);

    const bobRef = useRef<THREE.Group>(null);
    const charPosCache = useMemo(() => new THREE.Vector3(), []);
    const alienPosVec = useMemo(() => new THREE.Vector3(...position), [position]);

    const isOpenRef = useRef(false);
    const isDismissedRef = useRef(false);

    const [isNearby, setIsNearby] = useState(false);
    const wasNearbyRef = useRef(false);

    useFrame(({ clock }) => {
        // Bob + slow spin on inner group
        if (bobRef.current) {
            bobRef.current.position.y = Math.sin(clock.elapsedTime * 1.2 + phase) * 0.14;
            bobRef.current.rotation.y = clock.elapsedTime * 0.35 + phase;
        }

        if (!characterRef?.current) return;

        characterRef.current.getWorldPosition(charPosCache);
        const dist = charPosCache.distanceTo(alienPosVec);

        // Nearby label state (only triggers re-render on change)
        const nearby = dist < LABEL_DIST;
        if (nearby !== wasNearbyRef.current) {
            wasNearbyRef.current = nearby;
            setIsNearby(nearby);
        }

        const currentActive = useGameStore.getState().activeAlien;

        // Detect external dismissal (user clicked ×)
        if (isOpenRef.current && currentActive !== alienType) {
            isOpenRef.current = false;
            isDismissedRef.current = true;
        }

        // Reset dismissed when player walks far away
        if (dist > CLOSE_DIST) {
            if (isOpenRef.current) {
                isOpenRef.current = false;
                if (useGameStore.getState().activeAlien === alienType) {
                    setActiveAlien(null);
                }
            }
            isDismissedRef.current = false;
            return;
        }

        // Open panel on approach
        if (!isOpenRef.current && !isDismissedRef.current && dist < OPEN_DIST && currentActive === null) {
            isOpenRef.current = true;
            setActiveAlien(alienType);
        }
    });

    return (
        <group position={position}>
            {/* Inner group: bobs + rotates */}
            <group ref={bobRef}>
                {/* Base glow ring */}
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[0.55, 0.045, 8, 32]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.5} transparent opacity={0.7} />
                </mesh>

                {/* Body */}
                <mesh position={[0, 0.88, 0]}>
                    <cylinderGeometry args={[0.18, 0.28, 0.72, 8]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} />
                </mesh>

                {/* Head */}
                <mesh position={[0, 1.58, 0]}>
                    <sphereGeometry args={[0.38, 12, 12]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} />
                </mesh>

                {/* Left eye */}
                <mesh position={[-0.14, 1.63, 0.31]}>
                    <sphereGeometry args={[0.09, 8, 8]} />
                    <meshStandardMaterial color="#000" emissive={color} emissiveIntensity={5} />
                </mesh>

                {/* Right eye */}
                <mesh position={[0.14, 1.63, 0.31]}>
                    <sphereGeometry args={[0.09, 8, 8]} />
                    <meshStandardMaterial color="#000" emissive={color} emissiveIntensity={5} />
                </mesh>

                {/* Left antenna stem */}
                <mesh position={[-0.18, 2.08, 0]} rotation={[0, 0, -0.35]}>
                    <cylinderGeometry args={[0.02, 0.02, 0.48, 6]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
                </mesh>
                {/* Left antenna tip */}
                <mesh position={[-0.28, 2.35, 0]}>
                    <sphereGeometry args={[0.065, 8, 8]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={6} />
                </mesh>

                {/* Right antenna stem */}
                <mesh position={[0.18, 2.08, 0]} rotation={[0, 0, 0.35]}>
                    <cylinderGeometry args={[0.02, 0.02, 0.48, 6]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
                </mesh>
                {/* Right antenna tip */}
                <mesh position={[0.28, 2.35, 0]}>
                    <sphereGeometry args={[0.065, 8, 8]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={6} />
                </mesh>

                {/* Ambient glow */}
                <pointLight color={color} intensity={2} distance={5} decay={2} />
            </group>

            {/* Floating label (stays world-aligned, not bobbing) */}
            {isNearby && (
                <Html position={[0, 3.2, 0]} center>
                    <div style={{
                        fontFamily: 'Cousine, monospace',
                        fontSize: '9px',
                        letterSpacing: '3px',
                        color,
                        whiteSpace: 'nowrap',
                        textShadow: `0 0 12px ${color}, 0 0 24px ${color}`,
                        userSelect: 'none',
                        pointerEvents: 'none',
                    }}>
                        {label}
                    </div>
                </Html>
            )}
        </group>
    );
}

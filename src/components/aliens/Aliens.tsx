import { AlienNPC } from './AlienNPC';

export function Aliens() {
    return (
        <>
            {/* Alien 1 — About Me: nearby, right of spawn */}
            <AlienNPC
                position={[12, 0, 9]}
                alienType="about"
                label="ABOUT ME"
                color="#00ffaa"
                phase={0}
            />

            {/* Alien 2 — Projects: mid-range, to the left */}
            <AlienNPC
                position={[-14, 0, -7]}
                alienType="projects"
                label="PROJECTS"
                color="#ffcc00"
                phase={2.1}
            />

            {/* Alien 3 — Resume: far, behind spawn — requires exploration */}
            <AlienNPC
                position={[4, 0, -24]}
                alienType="resume"
                label="RESUME"
                color="#cc44ff"
                phase={4.2}
            />
        </>
    );
}

import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Video from "../components/Video";

const Hero1 = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section id="Hero1" className="flex items-start justify-center min-h-210 overflow-hidden md:items-start md:justify-start c-space relative">
      <HeroText />
      <ParallaxBackground/>
      <div className="absolute inset-0 z-1 pointer-events-none">
        <Video />
      </div>
      <figure
        className="absolute inset-0 z-20"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1.1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.20}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero1;
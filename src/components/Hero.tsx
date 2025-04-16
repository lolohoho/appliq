"use client";
// import Image from "next/image";
// import { Button } from "./ui/button";
// import { buttonVariants } from "./ui/button";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles"; // Composant React pour tsParticles
// import { loadFirePreset } from "tsparticles-preset-fire"; // Importe le preset "Fire"
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import type { Engine, Container} from "tsparticles-engine";
import styles from '@/app/styles/Particles.module.css';


export const Hero=() =>{
//   const { setTheme, theme } = useTheme();
  const particlesRef = useRef<Container | null>(null);
  const particlesInit = useCallback(async (engine: Engine) => {
      await loadFireworksPreset(engine); // Charge le preset "Fireworks"
    }, []);
  const particlesLoaded = useCallback(async (container?: Container) => {
    if (!container) return;
    particlesRef.current = container;

    // Pause après 5 secondes pour "figer"
    setTimeout(() => {
      container.pause();
    }, 3000);
  }, []);
  const options = {
    preset: "fireworks", // Utilise le preset "Fireworks"
    fullScreen: { enable: false },
  
    style: {
      height: "100%",
      width: "100%",
    },
    background: {
      color: {
        value: "#000000", // Fond noir uni pour mieux voir les feux d'artifice
      },
    },
  sounds:false
  
  };
    
  const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    if (!isClient) return null; // Ne pas rendre la partie contenant Framer Motion côté serveur.
  
    return (
      
    <div className="relative w-full h-screen"> {/* Exemple de conteneur Hero */}
        {/* Particules en arrière-plan */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={options}
      className={`absolute inset-0 ${styles.particlesContainer}`}
        />
        {/* Contenu de ton Hero par-dessus les particules */}
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          
    
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
            Web apps nouvelle génération
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
            Vous méritez mieux qu’un site vitrine.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Des fonctionnalités avancées, une interface d’exception, des performances optimisées.
          </p>
          <div className="flex justify-center gap-4">                                                                               
            <Button size="lg" className="text-base md:text-lg">  <a href="#template" target="_self">Choisissez votre template</a></Button>
            <Button variant="outline" size="lg" className="text-base md:text-lg"> <a href="#tarifs" target="_self">Voir les tarifs</a></Button>
          </div>
        </motion.div>
      </section>
    </div> 
      </div>
    );
}


"use client";

import { MINIMUN_PADDING_SECTIONS } from "@/src/shared/constants/styled";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Hero() {
  return (
    // <section className="relative min-h-[600px] flex items-center">
    //   <div
    //     className="absolute inset-0 z-0"
    //     style={{
    //       backgroundImage: "url(/images/image.jpeg)",
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //     }}
    //   >
    //     <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
    //   </div>

    //   <div className="container relative z-10 max-w-7xl mx-auto px-4">
    //     <motion.div
    //       className="max-w-2xl space-y-6 text-white"
    //       initial={{ opacity: 0, y: 30 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.8, ease: "easeOut" }}
    //     >
    //       <motion.div
    //         className="inline-block rounded-full bg-purple-600 px-4 py-1.5 text-sm font-medium"
    //         initial={{ opacity: 0, scale: 0.8 }}
    //         animate={{ opacity: 1, scale: 1 }}
    //         transition={{ duration: 0.5, delay: 0.2 }}
    //       >
    //         MOVIMIENTO JUVENIL
    //       </motion.div>
    //       <motion.h1
    //         className="text-5xl md:text-6xl font-bold leading-tight text-balance"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, delay: 0.3 }}
    //       >
    //         Jóvenes liderando el cambio por la igualdad en Ecuador.
    //       </motion.h1>
    //       <motion.p
    //         className="text-lg md:text-xl text-white/90 leading-relaxed"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, delay: 0.4 }}
    //       >
    //         Somos un movimiento liderado por jóvenes que empodera a las niñas y la juventud para lograr la igualdad y
    //         justicia en cada rincón del país.
    //       </motion.p>
    //       <motion.div
    //         className="flex flex-wrap gap-4 pt-4"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, delay: 0.5 }}
    //       >
    //         <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
    //           Únete a Girl Up
    //         </Button>
    //         <Button
    //           size="lg"
    //           variant="outline"
    //           className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
    //         >
    //           Conoce proyectos
    //         </Button>
    //       </motion.div>
    //     </motion.div>
    //   </div>
    // </section>
    <section className={cn("w-full py-5", MINIMUN_PADDING_SECTIONS)}>
      <div className="@container">
        <div
          className="flex flex-col md:flex-row min-h-140 gap-6 bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden relative"
          data-alt="Diverse group of young Ecuadorian women and men laughing and holding a banner outdoors"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("/images/hero-image.png")',
          }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-primary/90 to-transparent opacity-60 md:hidden"></div>
          <div className="relative z-10 flex flex-col justify-end items-start px-6 pb-12 pt-20 md:px-16 md:pb-16 w-full md:w-2/3 lg:w-1/2">
            <div className="flex flex-col gap-4 text-left">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold w-fit uppercase tracking-wider border border-white/30">
                Movimiento Juvenil
              </span>
              <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight drop-shadow-lg">
                Jóvenes liderando el cambio por la igualdad en Ecuador.
              </h1>
              <p className="text-white/90 text-lg font-normal leading-relaxed max-w-125 drop-shadow-md">
                Somos un movimiento liderado por jóvenes que empodera a las
                niñas y a la juventud para lograr la igualdad y justicia en cada
                rincón del país.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="flex items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-primary-dark transition-all text-white text-base font-bold shadow-lg hover:shadow-primary/40 transform hover:-translate-y-0.5">
                <span className="truncate">Únete a Girl Up</span>
              </button>
              <button className="flex items-center justify-center rounded-full h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white text-base font-bold transition-all">
                <span className="truncate">Conoce proyectos</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

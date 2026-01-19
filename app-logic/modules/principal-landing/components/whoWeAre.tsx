import { MINIMUN_PADDING_SECTIONS } from "@/app-logic/shared/constants/styled";
import { cn } from "@/lib/utils";

export const WhoWeAre = () => {
  return (
    <section
      className={cn(
        "w-full py-16 flex flex-col gap-6 text-center",
        MINIMUN_PADDING_SECTIONS,
      )}
      id="nosotros"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="text-primary font-bold text-sm tracking-widest uppercase">
          Nuestra Misión
        </span>
        <h2 className="text-[#141118] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.015em]">
          Quiénes Somos
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </div>
      <p className="text-[#141118]/80 dark:text-gray-300 text-lg leading-relaxed max-w-180 mx-auto">
        Girl Up Ecuador es parte de una iniciativa global de la Fundación de las
        Naciones Unidas. Trabajamos para inspirar a una generación de niñas y
        jóvenes a ser una fuerza para la igualdad de género y el cambio social.
        A través de la formación en liderazgo, incidencia política y acción
        comunitaria, nuestras miembras están transformando sus comunidades.
      </p>
    </section>
  );
};

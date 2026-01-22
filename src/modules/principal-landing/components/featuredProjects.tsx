import { MINIMUN_PADDING_SECTIONS } from "@/src/shared/constants/styled";
import { cn } from "@/lib/utils";

export const FeaturedProjects = () => {
  return (
    <section
      className={cn("w-full py-16", MINIMUN_PADDING_SECTIONS)}
      id="proyectos"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-[#e0dbe6] pb-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#141118] dark:text-white text-3xl font-bold leading-tight">
              Proyectos Destacados
            </h2>
            <p className="text-[#141118]/60 dark:text-gray-400">
              Iniciativas que están cambiando realidades.
            </p>
          </div>
          {/* <a
            className="text-primary font-bold hover:underline flex items-center gap-1"
            href="#"
          >
            Ver todos{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <article className="flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[#1f1629] shadow-sm border border-[#e0dbe6] dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="h-48 w-full bg-gray-200 relative">
              <img
                alt="Woman speaking into a microphone during a podcast recording"
                className="w-full h-full object-cover"
                data-alt="Woman speaking into a microphone representing the Hablemos Claro podcast"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFU1FQ40Q4H39jfE1YLmPqlnyVd4B_bL_bG3xjSYGE9ugxF6l81BHXGAUCiFgncCaAiOBU9bwbEDeTCthD3P1O-8MrdjGJJTcxz4Esy6OnPyUotrMgANaUcbKl-IpqdEUICMgyt2XInTqjbTAFTi8eRqyClAUONs6uagInoysnbr78OPbuIQDK3A_TRJI6PSuNt3luuU1sHnA8PrJVP0ZcXStADx9lCa06AJlxWJalP05GzOtHl2USkozCI3cIXVkOl0_CfLzbMAA"
              />
              <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                Podcast
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1 gap-3">
              <h3 className="text-xl font-bold text-[#141118] dark:text-white">
                Hablemos Claro
              </h3>
              <p className="text-sm text-[#141118]/70 dark:text-gray-300 line-clamp-3">
                Un espacio seguro para discutir temas tabú, salud mental y
                derechos sexuales y reproductivos.
              </p>
              <div className="mt-auto pt-2">
                <button className="text-primary font-bold text-sm hover:bg-primary/5 px-3 py-2 rounded -ml-3 transition-colors">
                  Escuchar ahora
                </button>
              </div>
            </div>
          </article>
          <article className="flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[#1f1629] shadow-sm border border-[#e0dbe6] dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="h-48 w-full bg-gray-200 relative">
              <img
                alt="Group of young people working together around a table with laptops"
                className="w-full h-full object-cover"
                data-alt="Youth working on national consultation documents"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmSls8YVPVhABurPzAE_Emzo8sZpCurOSeIi54u-_KAORtXSIS8HU6Rmq6bpIfMRH4ZaWqdn64DsU3l5eXg9spZJKf2ma1GDg7N7sYivBesw465HslQ3b6Y0Zq3_FkvBtBfStjOMIYlv9n0bkFXiSbBcqOJWOJRW4CcznLhpZBagO3EFQ_PT_uxOkAyVvLVZNw40fLvmbs57c_d7mahCi7vUIatSAycLRpFVCVodhAwBTaB1bG8SOTIjgVfwJEUMv0xmMLvGhdQwo"
              />
              <div className="absolute top-3 left-3 bg-[#10b981] text-white text-xs font-bold px-2 py-1 rounded">
                Incidencia
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1 gap-3">
              <h3 className="text-xl font-bold text-[#141118] dark:text-white">
                Consultas Nacionales
              </h3>
              <p className="text-sm text-[#141118]/70 dark:text-gray-300 line-clamp-3">
                Recopilando las voces de niñas de todo Ecuador para influir en
                políticas públicas.
              </p>
              <div className="mt-auto pt-2">
                <button className="text-primary font-bold text-sm hover:bg-primary/5 px-3 py-2 rounded -ml-3 transition-colors">
                  Leer informe
                </button>
              </div>
            </div>
          </article>
          <article className="flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[#1f1629] shadow-sm border border-[#e0dbe6] dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="h-48 w-full bg-gray-200 relative">
              <img
                alt="Young person presenting on a whiteboard during a workshop"
                className="w-full h-full object-cover"
                data-alt="Educational workshop on leadership"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGS8MD1dBiSLwfZUaPak8VWC_KO6GRQOarYsdstqyoC_Lf0a-lEI3x2myVIa0lxWbOdbTuReMrCrJ8iIYmG9cnNW4fsNwKT0EGGSoZwhbDP3gHmmKhSt1v0Af8Z2qxQspco6q7OQcDge9C5bJpOiHVukyaa8BuXHddjBO9s_U1N6ULk6YMGrlIFPyYXHxyaSBFdCLu4ZDWa7NS7ecYjbObrn9S-huotVeBNTdG3LSmK_tsC_JpJXuCtGjk6kTZbelciZiMU-OVm10"
              />
              <div className="absolute top-3 left-3 bg-[#f59e0b] text-white text-xs font-bold px-2 py-1 rounded">
                Educación
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1 gap-3">
              <h3 className="text-xl font-bold text-[#141118] dark:text-white">
                Talleres de Liderazgo
              </h3>
              <p className="text-sm text-[#141118]/70 dark:text-gray-300 line-clamp-3">
                Capacitaciones presenciales y virtuales para desarrollar
                habilidades de organización comunitaria.
              </p>
              <div className="mt-auto pt-2">
                <button className="text-primary font-bold text-sm hover:bg-primary/5 px-3 py-2 rounded -ml-3 transition-colors">
                  Inscribirse
                </button>
              </div>
            </div>
          </article>
          <article className="flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[#1f1629] shadow-sm border border-[#e0dbe6] dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="h-48 w-full bg-gray-200 relative">
              <img
                alt="Hands holding colorful protest signs outdoors"
                className="w-full h-full object-cover"
                data-alt="Activism campaign for gender rights"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMcKKld0zPhB2Vq_zdkuOm0mpizRKVdX7JT5CKRBttRePaeIe2zN5t1Zbt7EaXnaK5-x-FZ59wvaNb40ygJwNR8CixI3e9Eg_46uaM4uv664vHe21wpJqThWkKEXEqC-GxurxwAwRyc3MqwfA4P4eaJimP-c9X0lGTY0kf-6-6ikaLa7c_NOlhmqxvydUv63FCC6Ta711cRpH9_61HBiss0G1tU4IcM0aaSti8YmVEc4J-oEyZMtCrx7p1gHuR8l7bmiKnDnlEa0M"
              />
              <div className="absolute top-3 left-3 bg-[#ef4444] text-white text-xs font-bold px-2 py-1 rounded">
                Acción
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1 gap-3">
              <h3 className="text-xl font-bold text-[#141118] dark:text-white">
                Campañas Digitales
              </h3>
              <p className="text-sm text-[#141118]/70 dark:text-gray-300 line-clamp-3">
                Movilizaciones en redes sociales para visibilizar la violencia
                de género y exigir justicia.
              </p>
              <div className="mt-auto pt-2">
                <button className="text-primary font-bold text-sm hover:bg-primary/5 px-3 py-2 rounded -ml-3 transition-colors">
                  Sumarse
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

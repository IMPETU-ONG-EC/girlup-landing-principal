import { Heart, Scale, Sparkles, Target, Users } from "lucide-react";

export const FocusAreas = () => {
  return (
    <section className="w-full bg-white dark:bg-[#1f1629] py-16">
      <div className="flex justify-center">
        <div className="w-full px-4 md:px-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2 md:text-left text-center">
              <h2 className="text-[#141118] dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                Nuestro Enfoque
              </h2>
              <p className="text-[#141118]/60 dark:text-gray-400 text-lg font-normal">
                Cinco pilares fundamentales para promover la igualdad y el
                liderazgo.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="flex flex-col gap-4 rounded-xl border border-[#e0dbe6] dark:border-gray-700 bg-background-light dark:bg-background-dark p-6 hover:shadow-lg hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    <Scale className="w-6 h-6" />
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#141118] dark:text-white text-lg font-bold leading-tight">
                    Igualdad de Género
                  </h3>
                  <p className="text-[#75608a] dark:text-gray-400 text-sm font-normal leading-relaxed">
                    Promoviendo derechos y oportunidades iguales para todas.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-[#e0dbe6] dark:border-gray-700 bg-background-light dark:bg-background-dark p-6 hover:shadow-lg hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    <Users className="w-6 h-6" />
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#141118] dark:text-white text-lg font-bold leading-tight">
                    Masculinidades
                  </h3>
                  <p className="text-[#75608a] dark:text-gray-400 text-sm font-normal leading-relaxed">
                    Involucrando a todos en la redefinición de roles positivos.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-[#e0dbe6] dark:border-gray-700 bg-background-light dark:bg-background-dark p-6 hover:shadow-lg hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    <Heart className="w-6 h-6" />
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#141118] dark:text-white text-lg font-bold leading-tight">
                    Salud Menstrual
                  </h3>
                  <p className="text-[#75608a] dark:text-gray-400 text-sm font-normal leading-relaxed">
                    Educación y dignidad sin tabúes para niñas y mujeres.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-[#e0dbe6] dark:border-gray-700 bg-background-light dark:bg-background-dark p-6 hover:shadow-lg hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    <Sparkles className="w-6 h-6" />
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#141118] dark:text-white text-lg font-bold leading-tight">
                    Liderazgo Juvenil
                  </h3>
                  <p className="text-[#75608a] dark:text-gray-400 text-sm font-normal leading-relaxed">
                    Empoderando voces para la incidencia política.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-[#e0dbe6] dark:border-gray-700 bg-background-light dark:bg-background-dark p-6 hover:shadow-lg hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    <Target className="w-6 h-6" />
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#141118] dark:text-white text-lg font-bold leading-tight">
                    Justicia Social
                  </h3>
                  <p className="text-[#75608a] dark:text-gray-400 text-sm font-normal leading-relaxed">
                    Construyendo un futuro más equitativo para todos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

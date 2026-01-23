import { Heart, Scale, Sparkles, Target, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export const FocusAreas = () => {
  const t = useTranslations("Home");
  const approachItems = [
    {
      key: "genderEquality",
      Icon: Scale,
      title: t("pillars.items.genderEquality.title"),
      description: t("pillars.items.genderEquality.description"),
    },
    {
      key: "masculinities",
      Icon: Users,
      title: t("pillars.items.masculinities.title"),
      description: t("pillars.items.masculinities.description"),
    },
    {
      key: "menstrualHealth",
      Icon: Heart,
      title: t("pillars.items.menstrualHealth.title"),
      description: t("pillars.items.menstrualHealth.description"),
    },
    {
      key: "youthLeadership",
      Icon: Sparkles,
      title: t("pillars.items.youthLeadership.title"),
      description: t("pillars.items.youthLeadership.description"),
    },
    {
      key: "socialJustice",
      Icon: Target,
      title: t("pillars.items.socialJustice.title"),
      description: t("pillars.items.socialJustice.description"),
    },
  ];
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
              {approachItems.map(({ key, Icon, title, description }) => (
                <div
                  key={key}
                  className="flex flex-col gap-4 rounded-xl border border-[#e0dbe6] dark:border-gray-700 bg-background-light dark:bg-background-dark p-6 hover:shadow-lg hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-3xl">
                      <Icon className="w-6 h-6" />
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#141118] dark:text-white text-lg font-bold leading-tight">
                      {title}
                    </h3>
                    <p className="text-[#75608a] dark:text-gray-400 text-sm font-normal leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

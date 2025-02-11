import { useTranslations } from 'next-intl';
import { TECHNOLOGIES } from '../../constants/technologies';
import HeadingDivider from '../HeadingDivider';

const TechnologiesSection = () => {
  const t = useTranslations('HomePage');
  return (
    <section id="tech" className="section my-8">
      <HeadingDivider title={t('SkillsSection.title')} />
      <p className="my-8 text-2xl">{t('SkillsSection.text')}</p>

      {!!TECHNOLOGIES.length && (
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
          {TECHNOLOGIES.map((tech) => {
            return (
              <div
                key={tech.category}
                className="flex flex-1 flex-col gap-4 md:flex-auto"
              >
                <h3 className="text-2xl font-bold">{t(tech.category)}</h3>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-8">
                  {tech.items.map((item) => (
                    <div key={item.name} className="group relative flex">
                      <span role="img">
                        <item.icon size={32} />
                      </span>
                      <span className="absolute left-1/2 mx-auto mt-3 w-max -translate-x-1/2 translate-y-full rounded-md bg-gray-800 px-2 text-sm text-light-text-primary opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 dark:text-dark-text-primary">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default TechnologiesSection;

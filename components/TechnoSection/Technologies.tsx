import HeadingDivider from '../HeadingDivider';
import { TECHNOLOGIES } from '../../constants/technologies';

const TechnologiesSection = () => {
  return (
    <section id="tech" className="section my-8">
      <HeadingDivider title="Technologies" />
      <p className="my-8 text-2xl">
        Je travaille avec les technologies et les outils suivants :
      </p>

      {!!TECHNOLOGIES.length && (
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
          {TECHNOLOGIES.map((tech, index) => {
            return (
              <div
                key={tech.category}
                className="flex flex-1 flex-col gap-4 md:flex-auto"
                style={{
                  transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                    index === 0 ? 0 : 0.5 * index
                  }s`,
                }}
              >
                <h3 className="text-2xl font-bold">{tech.category}</h3>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-8">
                  {tech.items.map((item) => (
                    <div key={item.name} className="group relative flex">
                      <span role="img">
                        <item.icon size={32} />
                      </span>
                      <span className="absolute left-1/2 mx-auto mt-3 w-max -translate-x-1/2 translate-y-full rounded-md bg-gray-800 px-2 text-sm text-gray-100 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100">
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

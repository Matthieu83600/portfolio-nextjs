import { useTranslations } from 'next-intl';
import { SOCIAL_MEDIA } from '../../constants/social_media';

const SocialMedia = () => {
  const t = useTranslations('SocialMedia');
  return (
    <nav>
      <ul className="flex items-center gap-5">
        {SOCIAL_MEDIA.map((item) => (
          <li key={item.id}>
            <a
              href={item.url}
              target="_blank"
              aria-label={item.title}
              title={t(item.title)}
              className="text-2xl"
            >
              {/* Rendu de l'icône avec les props 'size' et 'className' */}
              <item.icon
                size={24}
                className="text-light-text-primary dark:text-dark-text-primary"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialMedia;

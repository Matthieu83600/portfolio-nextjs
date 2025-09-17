import { useTranslations } from 'next-intl';
import HeadingDivider from '../HeadingDivider';
import ContactForm from './ContactForm';

const Contact = () => {
  const t = useTranslations('HomePage.ContactSection');
  return (
    <section id="contact" className="section my-8">
      <HeadingDivider title={t('title')} />
      <p>{t('description')}</p>
      <ContactForm />
    </section>
  );
};

export default Contact;

'use client';

import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';
import { isValidEmail, isValidName, isValidMessage } from '@/utils/check_email';
import { useTranslations } from 'next-intl';

const ContactForm = () => {
  const t = useTranslations('HomePage.ContactSection');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  function resetForm() {
    setName('');
    setEmail('');
    setMessage('');
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setAlert(null);

    // Validation nom
    if (!isValidName(name)) {
      setAlert({
        type: 'error',
        message: t('contactForm.validation.nameRequired'),
      });
      setLoading(false);
      return;
    }

    // Validation email
    if (!isValidEmail(email)) {
      setAlert({
        type: 'error',
        message: t('contactForm.validation.emailInvalid'),
      });
      setLoading(false);
      return;
    }

    // Validation message
    if (!isValidMessage(message)) {
      setAlert({
        type: 'error',
        message: t('contactForm.validation.messageRequired'),
      });
      setLoading(false);
      return;
    }

    try {
      await axios.post('/api/send', { name, email, message });
      setAlert({ type: 'success', message: t('contactForm.success') });
      resetForm();
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error('Axios error:', error.response?.data || error.message);
        setAlert({
          type: 'error',
          message: t('contactForm.error'),
        });
      } else {
        console.error('Unknown error:', error);
        setAlert({ type: 'error', message: t('contactForm.unknownError') });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-xl p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="name">{t('contactForm.name')}</Label>
          <Input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="email">{t('contactForm.email')}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="message">{t('contactForm.message')}</Label>
          <Textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[100px]"
          />
        </div>
        <Button variant="third" type="submit" disabled={loading}>
          {loading ? t('contactForm.sending') : t('contactForm.send')}
        </Button>
      </form>
      {alert && (
        <Alert
          variant={alert.type === 'success' ? 'success' : 'destructive'}
          className="mt-4"
        >
          <AlertTitle>
            {alert.type === 'success'
              ? t('contactForm.alert.successTitle')
              : t('contactForm.alert.errorTitle')}
          </AlertTitle>
          <AlertDescription>{alert.message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default ContactForm;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Linkedin, Globe, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactSection = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const location = useLocation();
  const contactRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === 'contact') {
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendEmail(formData);
  };
  
  const sendEmail = async (formData: any) => {
    setIsLoading(true)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
        }),
      });
      console.log(response);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al enviar el formulario');
      } else {
        toast.success('Email sent successfully!', {
          position: 'top-center',
          autoClose: 3000
        });
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'An error occur', {
        position: 'top-center',
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false)
      setFormData({
        name: '',
        company: '',
        email: '',
        message: '',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={contactRef} className="bg-gray-50 py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondaryHover rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ height: "40px", borderWidth: "1px"}}
                  className="pl-2 mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.company')}
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{ height: "40px", borderWidth: "1px"}}
                  className="pl-2 mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ height: "40px", borderWidth: "1px"}}
                  className="pl-2 mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  style={{ resize: 'none', borderWidth: "1px" }}
                  className="pl-2 mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md text-base font-medium text-white bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin h-5 w-5" />
                ) : (
                  <>
                    {t('contact.form.send')}
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(330deg, #0470b8 36.44%, #88abfe 100%)'
            }}
            className="rounded-lg shadow-lg p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-8">{t('footer.contact')}</h3>
            
            <div className="space-y-10">
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-4" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p>sales@rebaseit.tech</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-4" />
                <div>
                  <h4 className="font-medium">{t('contact.phone')}</h4>
                  <p>+1 (302) 244-7907</p>
                </div>
              </div>

              <div className="flex items-center">
                <Linkedin className="h-6 w-6 mr-4" />
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a href="https://www.linkedin.com/company/rebase-it/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Rebase IT
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Globe className="h-6 w-6 mr-4" />
                <div>
                  <h4 className="font-medium">Official Web</h4>
                  <a href="https://rebaseit.tech/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Rebase IT
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_zjxz5yp';
const EMAILJS_TEMPLATE_ID = 'template_hnuvmyu';
const EMAILJS_PUBLIC_KEY = 'ifRg_b89XSwf99zBR';

emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendEmailJS = async (templateParams: Record<string, string>) => {
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
};

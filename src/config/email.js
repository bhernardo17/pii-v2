import emailjs from '@emailjs/browser';

// Configuração do EmailJS
const PUBLIC_KEY = 'wUoEcPrO0T7mwJgDw';
const SERVICE_ID = 'service_esp71zd';
const TEMPLATE_ID = 'template_bfg4352';

// Inicializa o EmailJS
emailjs.init(PUBLIC_KEY);

export const sendEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    return { success: true, data: response };
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return { success: false, error };
  }
}; 
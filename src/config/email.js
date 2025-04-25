import emailjs from '@emailjs/browser';

emailjs.init('u1Z_NDidNdO1TjhAI');

export const sendEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      'service_b7gh90j', // Service ID do Gmail
      'template_1mybwc8', // Template ID
      templateParams,
      'u1Z_NDidNdO1TjhAI' // Public Key
    );
    return { success: true, data: response };
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return { success: false, error };
  }
}; 
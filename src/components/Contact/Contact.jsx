<<<<<<< HEAD
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaInstagram, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../../config/email';

const ContactSection = styled.section`
  padding: 100px 0;
  background-color: var(--bg-primary);
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  svg {
    color: var(--primary);
    font-size: 1.5rem;
    margin-top: 0.25rem;
  }
`;

const InfoText = styled.div`
  h3 {
    color: var(--primary);
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
  }

  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary);
    }
  }
`;

const MapLink = styled.a`
  color: var(--primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ContactForm = styled(motion.form)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: var(--text-primary);
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  color: var(--text-primary);
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;

const SubmitButton = styled(motion.button)`
  background-color: var(--primary);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  
  &:hover {
    background-color: #0052a3;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Alert = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  ${({ type }) => type === 'success' ? `
    background-color: #4CAF50;
    color: white;
  ` : `
    background-color: #f44336;
    color: white;
  `}
`;

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 5000);
  };

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      };

      const result = await sendEmail(templateParams);
      
      if (result.success) {
        showAlert('success', 'Mensagem enviada com sucesso!');
        reset();
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      showAlert('error', 'Erro ao enviar mensagem. Tente novamente.');
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <ContactSection id="contato">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Title variants={itemVariants}>
            Entre em Contato
          </Title>

          <ContactGrid>
            <ContactInfo variants={itemVariants}>
              <motion.img
                src="/assets/faleConosco.png"
                alt="Ilustração de contato"
                style={{ 
                  width: '280px',
                  marginBottom: '2rem'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              />
              
              <InfoContainer>
                <InfoItem>
                  <FaMapMarkerAlt />
                  <InfoText>
                    <h3>Endereço</h3>
                    <p>Avenida Rio Branco, 611</p>
                    <p>Centro - Florianópolis/SC</p>
                    <p>CEP: 88010-030</p>
                    <MapLink 
                      href="https://www.google.com/maps/place/Secretaria+Municipal+de+Turismo,+Tecnologia+e+Desenvolvimento+Econômico/@-27.5915113,-48.5522338,17z/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaMapMarkerAlt />
                    </MapLink>
                  </InfoText>
                </InfoItem>

                <InfoItem>
                  <FaEnvelope />
                  <InfoText>
                    <h3>E-mail</h3>
                    <p>
                      <a href="mailto:pii.supcti.pmf@gmail.com">
                        pii.supcti.pmf@gmail.com
                      </a>
                    </p>
                  </InfoText>
                </InfoItem>

                <InfoItem>
                  <FaInstagram />
                  <InfoText>
                    <h3>Rede Inovação Florianópolis</h3>
                    <p>
                      <a 
                        href="https://www.instagram.com/rededeinovacaofloripa/?igsh=ZzNlaWEza3VqNHpr#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        @rededeinovacaofloripa
                      </a>
                    </p>
                  </InfoText>
                </InfoItem>
              </InfoContainer>
            </ContactInfo>

            <ContactForm
              variants={itemVariants}
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormGroup>
                <Label>Nome</Label>
                <Input
                  type="text"
                  {...register("name", { required: "Nome é obrigatório" })}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label>E-mail</Label>
                <Input
                  type="email"
                  {...register("email", {
                    required: "E-mail é obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "E-mail inválido"
                    }
                  })}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Assunto</Label>
                <Input
                  type="text"
                  {...register("subject", { required: "Assunto é obrigatório" })}
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <ErrorMessage>{errors.subject.message}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Mensagem</Label>
                <TextArea
                  {...register("message", { required: "Mensagem é obrigatória" })}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <ErrorMessage>{errors.message.message}</ErrorMessage>
                )}
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </SubmitButton>
            </ContactForm>
          </ContactGrid>
        </motion.div>
      </Container>

      <AnimatePresence>
        {alert && (
          <Alert
            type={alert.type}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            {alert.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
            {alert.message}
          </Alert>
        )}
      </AnimatePresence>
    </ContactSection>
  );
};

=======
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaInstagram, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../../config/email';

const ContactSection = styled.section`
  padding: 100px 0;
  background-color: var(--bg-primary);
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  svg {
    color: var(--primary);
    font-size: 1.5rem;
    margin-top: 0.25rem;
  }
`;

const InfoText = styled.div`
  h3 {
    color: var(--primary);
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
  }

  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary);
    }
  }
`;

const MapLink = styled.a`
  color: var(--primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ContactForm = styled(motion.form)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: var(--text-primary);
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  color: var(--text-primary);
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;

const SubmitButton = styled(motion.button)`
  background-color: var(--primary);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  
  &:hover {
    background-color: #0052a3;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Alert = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  ${({ type }) => type === 'success' ? `
    background-color: #4CAF50;
    color: white;
  ` : `
    background-color: #f44336;
    color: white;
  `}
`;

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 5000);
  };

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      };

      const result = await sendEmail(templateParams);
      
      if (result.success) {
        showAlert('success', 'Mensagem enviada com sucesso!');
        reset();
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      showAlert('error', 'Erro ao enviar mensagem. Tente novamente.');
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <ContactSection id="contato">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Title variants={itemVariants}>
            Entre em Contato
          </Title>

          <ContactGrid>
            <ContactInfo variants={itemVariants}>
              <motion.img
                src="/assets/faleConosco.png"
                alt="Ilustração de contato"
                style={{ 
                  width: '280px',
                  marginBottom: '2rem'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              />
              
              <InfoContainer>
                <InfoItem>
                  <FaMapMarkerAlt />
                  <InfoText>
                    <h3>Endereço</h3>
                    <p>Avenida Rio Branco, 611</p>
                    <p>Centro - Florianópolis/SC</p>
                    <p>CEP: 88010-030</p>
                    <MapLink 
                      href="https://www.google.com/maps/place/Secretaria+Municipal+de+Turismo,+Tecnologia+e+Desenvolvimento+Econômico/@-27.5915113,-48.5522338,17z/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaMapMarkerAlt />
                    </MapLink>
                  </InfoText>
                </InfoItem>

                <InfoItem>
                  <FaEnvelope />
                  <InfoText>
                    <h3>E-mail</h3>
                    <p>
                      <a href="mailto:pii.supcti.pmf@gmail.com">
                        pii.supcti.pmf@gmail.com
                      </a>
                    </p>
                  </InfoText>
                </InfoItem>

                <InfoItem>
                  <FaInstagram />
                  <InfoText>
                    <h3>Rede Inovação Florianópolis</h3>
                    <p>
                      <a 
                        href="https://www.instagram.com/rededeinovacaofloripa/?igsh=ZzNlaWEza3VqNHpr#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        @rededeinovacaofloripa
                      </a>
                    </p>
                  </InfoText>
                </InfoItem>
              </InfoContainer>
            </ContactInfo>

            <ContactForm
              variants={itemVariants}
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormGroup>
                <Label>Nome</Label>
                <Input
                  type="text"
                  {...register("name", { required: "Nome é obrigatório" })}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label>E-mail</Label>
                <Input
                  type="email"
                  {...register("email", {
                    required: "E-mail é obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "E-mail inválido"
                    }
                  })}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Assunto</Label>
                <Input
                  type="text"
                  {...register("subject", { required: "Assunto é obrigatório" })}
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <ErrorMessage>{errors.subject.message}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Mensagem</Label>
                <TextArea
                  {...register("message", { required: "Mensagem é obrigatória" })}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <ErrorMessage>{errors.message.message}</ErrorMessage>
                )}
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </SubmitButton>
            </ContactForm>
          </ContactGrid>
        </motion.div>
      </Container>

      <AnimatePresence>
        {alert && (
          <Alert
            type={alert.type}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            {alert.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
            {alert.message}
          </Alert>
        )}
      </AnimatePresence>
    </ContactSection>
  );
};

>>>>>>> Nicodev
export default Contact;
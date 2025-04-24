// src/components/Contact/Contact.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

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


const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  svg {
    color: var(--primary);
    font-size: 1.5rem;
    margin-top: 0.25rem;
  }
`;

const InfoText = styled.div`
  h3 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }
  
  p, a {
    color: var(--text-secondary);
    text-decoration: none;
    line-height: 1.6;
    
    &:hover {
      color: var(--primary);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
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
  color: var(--text-primary); // Adicionando cor do texto
  background-color: white; // Garantindo fundo branco
  
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
  color: var(--text-primary); // Adicionando cor do texto
  background-color: white; // Garantindo fundo branco
  
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

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Aqui você implementaria a lógica de envio do formulário
      console.log(data);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulação de envio
      alert('Mensagem enviada com sucesso!');
    } catch (error) {
      alert('Erro ao enviar mensagem. Tente novamente.');
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
                  marginTop: '2rem'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              />
              <InfoItem>
                <FaMapMarkerAlt />
                <InfoText>
                  <h3>Endereço</h3>
                  <p>Avenida Rio Branco, 611</p>
                </InfoText>
              </InfoItem>

              <InfoItem>
                <FaEnvelope />
                <InfoText>
                  <h3>E-mail</h3>
                  <a href="mailto:pii.supcti.pmf@gmail.com">pii.supcti.pmf@gmail.com</a>
                </InfoText>
              </InfoItem>

              <SocialLinks>
                <SocialLink href="https://www.instagram.com/rededeinovacaofloripa/?igsh=ZzNlaWEza3VqNHpr#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </SocialLink>
              </SocialLinks>

            
              
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
                />
                {errors.subject && (
                  <ErrorMessage>{errors.subject.message}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Mensagem</Label>
                <TextArea
                  {...register("message", { required: "Mensagem é obrigatória" })}
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
    </ContactSection>
  );
};

export default Contact;
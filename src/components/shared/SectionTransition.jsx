<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TransitionDiv = styled(motion.div)`
  width: 100%;
  overflow: hidden;
`;

const SectionTransition = ({ children }) => {
  return (
    <TransitionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      {children}
    </TransitionDiv>
  );
};

=======
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TransitionDiv = styled(motion.div)`
  width: 100%;
  overflow: hidden;
`;

const SectionTransition = ({ children }) => {
  return (
    <TransitionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      {children}
    </TransitionDiv>
  );
};

>>>>>>> Nicodev
export default SectionTransition;
<<<<<<< HEAD
// src/components/common/Loading.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${props => props.fullScreen ? '100vh' : '200px'};
`;

const LoadingSpinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 3px solid var(--background-light);
  border-top: 3px solid var(--primary);
  border-radius: 50%;
`;

const Loading = ({ fullScreen = false }) => {
  return (
    <LoadingContainer fullScreen={fullScreen}>
      <LoadingSpinner
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </LoadingContainer>
  );
};

=======
// src/components/common/Loading.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${props => props.fullScreen ? '100vh' : '200px'};
`;

const LoadingSpinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 3px solid var(--background-light);
  border-top: 3px solid var(--primary);
  border-radius: 50%;
`;

const Loading = ({ fullScreen = false }) => {
  return (
    <LoadingContainer fullScreen={fullScreen}>
      <LoadingSpinner
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </LoadingContainer>
  );
};

>>>>>>> Nicodev
export default Loading;
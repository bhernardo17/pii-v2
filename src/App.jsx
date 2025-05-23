import React, { Suspense } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Loading from './components/common/Loading';
import ScrollToTop from './components/common/ScrollToTop';
import Proponents from './components/Proponents/Proponents';
import HowToSubmit from './components/Process/HowToSubmit';


// Lazy loading para componentes menos críticos
const About = React.lazy(() => import('./components/About/About'));
const Benefits = React.lazy(() => import('./components/Benefits/Benefits'));
const Participation = React.lazy(() => import('./components/Participation/Participation'));
const Process = React.lazy(() => import('./components/Process/Process'));
const Statistics = React.lazy(() => import('./components/Statistics/Statistics'));
const FAQ = React.lazy(() => import('./components/FAQ/FAQ')); // Adicionando import do FAQ
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));
const Legislation = React.lazy(() => import('./components/Legislation/Legislation'));
const Credentials = React.lazy(() => import('./components/Credentials/Credentials'));

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<Loading />}>
          <About />
          <Benefits />
          <Participation />
          <HowToSubmit /> 
          <Process />
          <Statistics />
          <Credentials />
          <Legislation />
          <Proponents />
          <Contact />
          <FAQ />
        </Suspense>
      </main>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </>
  );
}

export default App;
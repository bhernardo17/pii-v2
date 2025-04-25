import{d as e,m as r,j as i,h as d,c as f,i as u,g as n,k as l,l as v,n as j,b as x}from"./index-50c03249.js";const b=e.section`
  padding: 100px 0;
  background-color: var(--bg-primary);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`,w=e.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`,z=e(r.h2)`
  font-size: 2.5rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`,C=e.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: var(--primary);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`,y=e(r.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${a=>a.position==="left"?"0":"50%"};
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 50px;
    padding-right: 15px;
    left: 0;
    margin-bottom: 30px;
  }
`,A=e(r.div)`
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    padding-left: 3rem;
    margin-left: 15px;
  }
`,P=e.div`
  position: absolute;
  width: 50px;
  height: 50px;
  right: ${a=>a.position==="left"?"-25px":"auto"};
  left: ${a=>a.position==="right"?"-25px":"auto"};
  background: var(--primary);
  border-radius: 50%;
  top: 15px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    left: -15px;
    width: 35px;
    height: 35px;
    font-size: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`,I=e.h3`
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 0;
    padding-top: 0;
  }
`,S=e.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,k=e(r.div)`
  margin-top: 4rem;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    margin: 3rem 1rem 0 1rem;
    padding: 1.5rem;
  }
`,F=e.h3`
  font-size: 1.8rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`,T=e.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,m=e(r.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,p=e.h4`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 1rem;

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    
    svg {
      font-size: 1.3rem;
    }
  }
`,c=e.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,V=e(r.h3)`
  font-size: 1.8rem;
  color: var(--primary);
  text-align: center;
  margin: 2rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1.5rem 0;
  }
`,R=e.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,D=()=>{const a={hidden:{},visible:{transition:{staggerChildren:.2}}},t={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}},h=[{icon:i.jsx(u,{}),title:"1. Vinculação a um API",description:"Vincule-se a um Arranjo Promotor de Inovação (API) credenciado pelo município.",position:"left"},{icon:i.jsx(n,{}),title:"2. Pré-submissão",description:"O API realizará uma análise preliminar e fornecerá suporte para qualificar o projeto.",position:"right"},{icon:i.jsx(n,{}),title:"3. Submissão da Proposta",description:"O API submete a proposta de forma eletrônica, garantindo rastreabilidade do processo.",position:"left"},{icon:i.jsx(d,{}),title:"4. Análise e Aprovação",description:"Avaliação em duas fases: Comissão de Seleção e Comitê Gestor.",position:"right"},{icon:i.jsx(l,{}),title:"5. Autorização",description:"Recebimento da Carta de Autorização e assinatura do Contrato de Parceria.",position:"left"},{icon:i.jsx(v,{}),title:"6. Captação de Recursos",description:"Início da captação junto aos contribuintes incentivadores.",position:"right"}],g=[{icon:i.jsx(j,{}),title:"Nível de Inovação",description:"Avaliação do grau de inovação e originalidade"},{icon:i.jsx(n,{}),title:"Clareza do Projeto",description:"Definição clara do objeto e finalidade"},{icon:i.jsx(x,{}),title:"Viabilidade",description:"Validação mercadológica e sustentação financeira"},{icon:i.jsx(n,{}),title:"Cronograma",description:"Adequação do cronograma físico/financeiro"},{icon:i.jsx(d,{}),title:"Equipe Técnica",description:"Qualificação da equipe para o projeto"},{icon:i.jsx(x,{}),title:"Impacto Municipal",description:"Relevância para o desenvolvimento econômico"},{icon:i.jsx(l,{}),title:"Retorno Social",description:"Benefícios para a municipalidade"}];return i.jsx(b,{id:"processo",children:i.jsx(w,{children:i.jsxs(r.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:a,children:[i.jsx(z,{variants:t,children:"Como funciona o processo?"}),i.jsx(C,{children:h.map((o,s)=>i.jsx(y,{position:o.position,variants:t,children:i.jsxs(A,{position:o.position,children:[i.jsx(P,{position:o.position,children:o.icon}),i.jsx(I,{children:o.title}),i.jsx(S,{children:o.description})]})},s))}),i.jsxs(k,{variants:t,children:[i.jsx(F,{children:"Processo de Avaliação"}),i.jsxs(T,{children:[i.jsxs(m,{variants:t,children:[i.jsxs(p,{children:[i.jsx(d,{}),"Comissão de Seleção"]}),i.jsx(c,{children:"Primeira fase de avaliação, realizada por 16 membros nomeados por Portaria. Avaliam os projetos conforme critérios estabelecidos."})]}),i.jsxs(m,{variants:t,children:[i.jsxs(p,{children:[i.jsx(f,{}),"Comitê Gestor"]}),i.jsx(c,{children:"Segunda fase de avaliação, realizada por 6 membros: 3 Secretários Municipais e 3 representantes externos, eleitos pelo Conselho Municipal de Inovação."})]})]}),i.jsx(V,{variants:t,children:"Critérios de Avaliação (0 a 5 pontos)"}),i.jsx(R,{children:g.map((o,s)=>i.jsxs(m,{variants:t,children:[i.jsxs(p,{children:[o.icon,o.title]}),i.jsx(c,{children:o.description})]},s))})]})]})})})};export{D as default};

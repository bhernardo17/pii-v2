import{d as o,m as t,R as d,j as e,p}from"./index-50c03249.js";const c=o.section`
  padding: 100px 0;
  background-color: var(--bg-secondary);
`,m=o.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,u=o(t.h2)`
  font-size: 2.5rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,l=o.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,v=o.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`,x=o.button`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: var(--text-primary);
  font-weight: 500;
  text-align: left;

  svg {
    transition: transform 0.3s ease;
    transform: ${({$isOpen:r})=>r?"rotate(180deg)":"rotate(0)"};
    color: var(--primary);
  }
`,h=o(t.div)`
  padding: 0 1.5rem 1.5rem;
  color: var(--text-secondary);
  line-height: 1.6;
`,f=()=>{const[r,s]=d.useState(null),n=[{question:"Quem pode participar do PII?",answer:"O PII é aberto a pessoas físicas, MEIs e empresas que desenvolvam projetos inovadores. Os proponentes precisam estar vinculados a um API credenciado e ter um projeto que atenda aos critérios do programa."},{question:"Qual o valor máximo de incentivo fiscal?",answer:"O programa permite a destinação de até 20% do ISSQN ou IPTU devido ao município. No caso do ISSQN, é válido apenas para tributos do próprio prestador, não se aplicando a casos de substituição tributária ou Simples Nacional."},{question:"Como funciona o processo de avaliação?",answer:"O processo de avaliação ocorre em duas etapas: primeiro pela Comissão de Seleção, composta por 16 membros, e depois pelo Comitê Gestor, formado por 3 Secretários Municipais e 3 representantes externos."},{question:"Quanto tempo leva o processo de aprovação?",answer:"O tempo de aprovação pode variar dependendo do volume de projetos e da complexidade da proposta. Em média, o processo completo, desde a submissão até a aprovação final, leva entre 60 e 90 dias."},{question:"Como escolher um API para se vincular?",answer:"A escolha do API deve considerar a área de atuação do seu projeto. Cada API tem expertise em setores específicos: saúde (API Inova+Saúde), tecnologia (API ACATE), economia criativa (API CDL) e comércio/indústria (API ACIF)."},{question:"O que acontece após a aprovação do projeto?",answer:"Após a aprovação, o proponente recebe uma Carta de Autorização e assina um Contrato de Parceria. Em seguida, pode iniciar a captação de recursos junto aos contribuintes incentivadores."}];return e.jsx(c,{id:"faq",children:e.jsxs(m,{children:[e.jsx(u,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:"Perguntas Frequentes"}),e.jsx(l,{children:n.map((i,a)=>e.jsx(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:a*.1},children:e.jsxs(v,{children:[e.jsxs(x,{onClick:()=>s(r===a?null:a),$isOpen:r===a,children:[i.question,e.jsx(p,{})]}),r===a&&e.jsx(h,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},children:i.answer})]})},a))})]})})};export{f as default};

import{d as e,m as o,j as i}from"./index-50c03249.js";const s=e.section`
  padding: 100px 0;
  background-color: var(--bg-secondary);
  overflow: hidden;
`,d=e.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,c=e(o.h2)`
  font-size: 2.5rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,m=e.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,p=e.div`
  order: 1;
  
  @media (max-width: 768px) {
    order: 2;
  }
`,l=e.div`
  order: 2;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,v=e(o.img)`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,a=e(o.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
`,r=e.span`
  color: var(--primary);
  font-weight: 600;
`,x=()=>{const t={hidden:{},visible:{transition:{staggerChildren:.2}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}};return i.jsx(s,{id:"sobre",children:i.jsx(d,{children:i.jsxs(o.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:t,children:[i.jsx(c,{variants:n,children:"O que é o PII?"}),i.jsxs(m,{children:[i.jsxs(p,{children:[i.jsx(o.div,{variants:n,children:i.jsxs(a,{children:["O ",i.jsx(r,{children:"Programa de Incentivo à Inovação (PII)"}),' de Florianópolis, carinhosamente conhecido como "Lei Rouanet Manezinha", é uma iniciativa voltada ao desenvolvimento de soluções inovadoras, viabilizada por meio de benefícios tributários.']})}),i.jsx(o.div,{variants:n,children:i.jsx(a,{children:"Este mecanismo estratégico visa fomentar o empreendedorismo inovador de interesse para o município por meio da concessão de incentivos fiscais, viabilizados por um contribuinte incentivador e destinados a proponentes previamente aprovados no programa."})}),i.jsx(o.div,{variants:n,children:i.jsxs(a,{children:["Instituído em 2018, o programa tem gerado impactos significativos tanto para os projetos beneficiados quanto para o desenvolvimento socioeconômico do município, permitindo que empresas e empreendedores inovadores recebam até ",i.jsx(r,{children:"20% do ISSQN e do IPTU"})," de contribuintes incentivadores."]})})]}),i.jsx(l,{children:i.jsx(o.div,{variants:n,children:i.jsx(v,{src:"/assets/inovacao.png",alt:"Inovação em Florianópolis"})})})]})]})})})};export{x as default};

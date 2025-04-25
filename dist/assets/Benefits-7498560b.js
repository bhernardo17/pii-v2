import{d as e,m as n,j as i,F as c,a as d,b as m}from"./index-50c03249.js";const l=e.section`
  padding: 100px 0;
  background-color: var(--bg-primary);
  overflow: hidden;
`,p=e.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,x=e(n.h2)`
  font-size: 2.5rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,v=e.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,h=e(n.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`,g=e.div`
  font-size: 3rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
`,f=e.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
`,u=e.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`,j=()=>{const r=[{icon:i.jsx(c,{}),title:"Incentivo Fiscal",description:"Concessão de incentivo fiscal sem exigência de restituição aos cofres públicos, permitindo destinar até 20% do ISSQN e IPTU."},{icon:i.jsx(d,{}),title:"Desenvolvimento de Inovações",description:"Alocação de recursos para viabilizar o desenvolvimento de iniciativas inovadoras e soluções tecnológicas."},{icon:i.jsx(m,{}),title:"Crescimento Econômico",description:"Estímulo ao crescimento econômico e à criação de novas oportunidades de emprego no município."}],a={hidden:{},visible:{transition:{staggerChildren:.2}}},t={hidden:{opacity:0,y:50,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.8,ease:"easeOut"}}};return i.jsx(l,{id:"beneficios",children:i.jsx(p,{children:i.jsxs(n.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:a,children:[i.jsx(x,{variants:t,children:"Benefícios do Programa"}),i.jsx(v,{children:r.map((o,s)=>i.jsxs(h,{variants:t,children:[i.jsx(g,{children:o.icon}),i.jsx(f,{children:o.title}),i.jsx(u,{children:o.description})]},s))})]})})})};export{j as default};

import{d as a,m as r,R as x,j as i,c,e as u,f as g,g as h}from"./index-50c03249.js";const b=a.section`
  padding: 100px 0;
  background-color: var(--bg-secondary);
  overflow: hidden;
`,j=a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,f=a(r.h2)`
  font-size: 2.5rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,y=a.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 1px;
`,d=a(r.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: ${e=>e.active?"var(--primary)":"transparent"};
  color: ${e=>e.active?"white":"var(--text-primary)"};
  border: 2px solid var(--primary);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  
  &:last-child {
    border-radius: 0 5px 5px 0;
  }
  
  &:hover {
    background: ${e=>e.active?"var(--primary)":"rgba(0, 102, 204, 0.1)"};
  }
`,I=a(r.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,C=a(r.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: 100%;
`,S=a.h3`
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 1.8rem;
  }
`,w=a.ul`
  list-style: none;
  padding: 0;
`,P=a(r.li)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--text-primary);
  line-height: 1.5;
  
  svg {
    color: var(--primary);
    margin-top: 0.3rem;
    flex-shrink: 0;
  }
`,T=()=>{const[e,o]=x.useState("proponentes"),n={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.5,staggerChildren:.2}}},s={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},p={proponentes:[{icon:i.jsx(u,{}),title:"Pessoas Físicas e MEIs",items:["Microempreendedores Individuais (MEIs)","Pessoas físicas com projetos inovadores","Vinculação a um Arranjo Promotor de Inovação"]},{icon:i.jsx(g,{}),title:"Empresas",items:["Micro e pequenas empresas","Estabelecidas em Florianópolis ou com intenção de se instalar","Projetos com soluções inovadoras de interesse público"]}],incentivadores:[{icon:i.jsx(h,{}),title:"Requisitos Fiscais",items:["Pessoas físicas ou jurídicas com IPTU ou ISSQN em Florianópolis","No caso do ISSQN, alíquota deve ser superior a 2%","Estar em dia com as obrigações fiscais municipais"]},{icon:i.jsx(c,{}),title:"Limites e Condições",items:["Destinação de até 20% do ISSQN ou IPTU","ISSQN: apenas para tributos do próprio prestador","Vedado para substituição tributária ou Simples Nacional"]}]};return i.jsx(b,{id:"participacao",children:i.jsx(j,{children:i.jsxs(r.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:n,children:[i.jsx(f,{variants:s,children:"Quem pode participar?"}),i.jsxs(y,{children:[i.jsx(d,{active:e==="proponentes",onClick:()=>o("proponentes"),variants:s,children:"Proponentes"}),i.jsx(d,{active:e==="incentivadores",onClick:()=>o("incentivadores"),variants:s,children:"Incentivadores"})]}),i.jsx(I,{initial:"hidden",animate:"visible",variants:n,children:p[e].map((t,l)=>i.jsxs(C,{variants:s,children:[i.jsxs(S,{children:[t.icon,t.title]}),i.jsx(w,{children:t.items.map((m,v)=>i.jsxs(P,{variants:s,children:[i.jsx(c,{}),m]},v))})]},l))},e)]})})})};export{T as default};

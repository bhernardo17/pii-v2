import{r as p,d as f,m as j,j as a,o as z,l as E}from"./index-50c03249.js";var R=new Map,b=new WeakMap,V=0,C=void 0;function F(e){return e?(b.has(e)||(V+=1,b.set(e,V.toString())),b.get(e)):"0"}function O(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?F(e.root):e[t]}`).toString()}function T(e){const t=O(e);let n=R.get(t);if(!n){const r=new Map;let d;const c=new IntersectionObserver(o=>{o.forEach(i=>{var s;const u=i.isIntersecting&&d.some(l=>i.intersectionRatio>=l);e.trackVisibility&&typeof i.isVisible>"u"&&(i.isVisible=u),(s=r.get(i.target))==null||s.forEach(l=>{l(u,i)})})},e);d=c.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:c,elements:r},R.set(t,n)}return n}function B(e,t,n={},r=C){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:d,observer:c,elements:o}=T(n),i=o.get(e)||[];return o.has(e)||o.set(e,i),i.push(t),c.observe(e),function(){i.splice(i.indexOf(t),1),i.length===0&&(o.delete(e),c.unobserve(e)),o.size===0&&(c.disconnect(),R.delete(d))}}function P({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:d,triggerOnce:c,skip:o,initialInView:i,fallbackInView:s,onChange:u}={}){var l;const[m,w]=p.useState(null),g=p.useRef(u),[x,I]=p.useState({inView:!!i,entry:void 0});g.current=u,p.useEffect(()=>{if(o||!m)return;let h;return h=B(m,(A,S)=>{I({inView:A,entry:S}),g.current&&g.current(A,S),S.isIntersecting&&c&&h&&(h(),h=void 0)},{root:d,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{h&&h()}},[Array.isArray(e)?e.toString():e,m,d,r,c,o,n,s,t]);const y=(l=x.entry)==null?void 0:l.target,M=p.useRef(void 0);!m&&y&&!c&&!o&&M.current!==y&&(M.current=y,I({inView:!!i,entry:void 0}));const v=[w,x.inView,x.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}const $=f.section`
  padding: 100px 0;
  background-color: var(--bg-secondary);
  overflow: hidden;
`,D=f.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,W=f(j.h2)`
  font-size: 2.5rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,_=f.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,q=f(j.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`,L=f.div`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
`,G=f(j.div)`
  font-size: 3.5rem;
  font-weight: bold;
  color: var(--primary);
  line-height: 1;
`,N=f.h3`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin: 0;
`,Q=f.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
`,U=({end:e,duration:t=2,prefix:n="",suffix:r=""})=>{const[d,c]=p.useState(0),[o,i]=P({triggerOnce:!0,threshold:.5});return p.useEffect(()=>{if(i){let s,u;const l=m=>{s||(s=m);const w=m-s,g=Math.min(w/(t*1e3),1),x=1-Math.pow(1-g,4);c(Math.floor(x*e*100)/100),g<1&&(u=requestAnimationFrame(l))};return u=requestAnimationFrame(l),()=>{u&&cancelAnimationFrame(u)}}},[i,e,t]),a.jsxs(G,{ref:o,children:[n,d.toLocaleString("pt-BR"),r]})},J=()=>{const e={hidden:{},visible:{transition:{staggerChildren:.2}}},t={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}},n=[{icon:a.jsx(z,{}),number:25,suffix:"+",label:"Projetos",description:"Desde 2018, o PII aprovou mais de 25 projetos inovadores"},{icon:a.jsx(E,{}),number:4.5,prefix:"R$ ",suffix:"M",label:"Investimento",description:"Mais de R$ 4,5 milhões investidos em projetos inovadores"}];return a.jsx($,{id:"estatisticas",children:a.jsx(D,{children:a.jsxs(j.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:e,children:[a.jsx(W,{variants:t,children:"Impacto do Programa"}),a.jsx(_,{children:n.map((r,d)=>a.jsxs(q,{variants:t,children:[a.jsx(L,{children:r.icon}),a.jsx(U,{end:r.number,prefix:r.prefix||"",suffix:r.suffix||""}),a.jsx(N,{children:r.label}),a.jsx(Q,{children:r.description})]},d))})]})})})};export{J as default};

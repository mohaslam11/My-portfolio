import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';

const data: Record<string, {type:string; title:string; intro:string; role:string; stack:string[]; problem:string; solution:string; features:string[]; architecture:string[]; result:string; learnings:string[]}> = {
  'cherish-vogue': {
    type:'E-COMMERCE / WEB', title:'Cherish Vogue',
    intro:'Luxury e-commerce platform with custom admin panel, WhatsApp checkout and security-first architecture.',
    role:'Sole Developer · Freelance', stack:['Next.js 15','React 19','TypeScript','Tailwind CSS','Firebase','Cloudinary','Vercel'],
    problem:'The client needed a complete e-commerce experience with product management, content control and a simple ordering flow without forcing customers through a conventional payment-heavy checkout.',
    solution:'I built the storefront and administration experience end-to-end, connecting the customer journey to a WhatsApp-native order flow while keeping privileged operations and media uploads behind server-side controls.',
    features:['Full storefront with category tiers','Sorting and dynamic filtering','Custom admin dashboard','CRUD product management','Image upload management','Site-content controls','WhatsApp-native checkout','Role-based access control'],
    architecture:['Customer → Next.js storefront','Cart → formatted WhatsApp order','Admin → Firebase Admin SDK','Media → signed Cloudinary URLs','Data → Firestore security rules','Access → role-based permissions'],
    result:'A production e-commerce platform with a customer storefront, custom admin tooling and a lightweight WhatsApp-based ordering workflow.',
    learnings:['Owning a product end-to-end means designing for the client’s operating workflow, not just the public UI.','Security decisions belong in the architecture from the beginning.','Admin tooling can be as important to the product as the customer-facing experience.']
  },
  'varnika-store': {
    type:'MARKETPLACE / WEB', title:'Varnika Store',
    intro:'Live web marketplace for a Dubai client with product catalog, technical SEO and ongoing maintenance.',
    role:'Sole Developer', stack:['Next.js','TypeScript','Firebase','Tailwind CSS','Vercel','Technical SEO'],
    problem:'The platform needed a maintainable product/catalog structure and a production-ready web presence that could continue evolving after launch.',
    solution:'I built and continue to maintain the marketplace, handling catalog structure, technical SEO, security and ongoing content changes.',
    features:['Product/catalog structure','Responsive marketplace UI','Technical SEO','Content updates','Production maintenance','Security updates'],
    architecture:['Next.js → UI and routing','Firebase → data and platform services','Tailwind → responsive system','Vercel → deployment and delivery','SEO → technical metadata and performance'],
    result:'A live Dubai client platform that continues to receive product, content, SEO and security maintenance.',
    learnings:['Production work is iterative rather than a one-time launch.','SEO and performance are product concerns, not post-build decoration.','Simple content workflows reduce friction for ongoing maintenance.']
  },
  'sahachari': {
    type:'MOBILE / PRODUCTION', title:'Sahachari',
    intro:'Production mobile application shipped to Google Play Store, contributing to UI, REST API integration and database work.',
    role:'Core Engineering Team', stack:['Flutter','REST APIs','Firebase','SQL','CI/CD'],
    problem:'The product required a reliable cross-platform mobile experience connected to production APIs and data services.',
    solution:'As part of the core engineering team, I contributed to mobile UI development, REST API integration, Firebase/SQL database work and the release pipeline.',
    features:['Flutter UI development','REST API integration','Firebase/SQL database work','Production bug fixes','Release preparation','CI/CD support'],
    architecture:['Flutter → mobile application','REST APIs → application services','Firebase / SQL → data layer','CI/CD → release pipeline','Google Play → production distribution'],
    result:'A live consumer application shipped to Google Play Store with contributions across UI, APIs, database work and release support.',
    learnings:['Team ownership requires clear boundaries and reliable integration points.','Production mobile work is as much about stability and release discipline as UI.','API and database understanding makes frontend work substantially more effective.']
  }
};

export function generateStaticParams(){ return Object.keys(data).map(slug=>({slug})); }

export default async function CaseStudy({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const p=data[slug]; if(!p) notFound();
  return <main className="case-page"><nav className="case-nav container"><Link href="/#work" className="case-back"><ArrowLeft size={15}/> Back to work</Link><span className="brand">ASLAM</span><Link href="/#contact" className="case-contact">LET'S TALK <ArrowUpRight size={14}/></Link></nav>
    <section className="container case-hero"><div className="eyebrow">{p.type}</div><h1 className="display">{p.title}</h1><p>{p.intro}</p><div className="case-meta"><div><small>ROLE</small><strong>{p.role}</strong></div><div><small>STACK</small><strong>{p.stack.join(' · ')}</strong></div></div><div className="case-visual"><div className="case-window"><div className="case-top"><i/><i/><i/></div><div className="case-screen"><div className="case-title">{p.title}<br/><span>Built for real use.</span></div><div className="case-shapes"><b/><b/><b/></div></div></div></div></section>
    <section className="section"><div className="container case-grid"><article><div className="eyebrow">01 / The Problem</div><h2>The problem</h2><p>{p.problem}</p></article><article><div className="eyebrow">02 / The Approach</div><h2>My solution</h2><p>{p.solution}</p></article></div></section>
    <section className="section"><div className="container"><div className="eyebrow">03 / Product</div><h2 className="case-section-title">Key features</h2><div className="feature-grid">{p.features.map((f,i)=><div className="feature-item" key={f}><span>0{i+1}</span><strong>{f}</strong></div>)}</div></div></section>
    <section className="section"><div className="container"><div className="eyebrow">04 / Architecture</div><h2 className="case-section-title">How the system fits together</h2><div className="architecture">{p.architecture.map((x,i)=><div key={x} className="arch-row"><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong>{i<p.architecture.length-1&&<b>↓</b>}</div>)}</div></div></section>
    <section className="section"><div className="container case-grid"><article><div className="eyebrow">05 / Result</div><h2>What shipped</h2><p>{p.result}</p></article><article><div className="eyebrow">06 / Lessons</div><h2>What I learned</h2><ul className="learning-list">{p.learnings.map(x=><li key={x}>{x}</li>)}</ul></article></div></section>
    <section className="section"><div className="container next-case"><div><div className="eyebrow">Continue exploring</div><h2>More work →</h2></div><Link className="btn primary" href="/#work">VIEW ALL PROJECTS <ArrowUpRight size={15}/></Link></div></section>
  </main>;
}

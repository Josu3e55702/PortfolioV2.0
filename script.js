(function(){
  /* ---------- i18n ---------- */
  var DICT={
    es:{
      navFocus:'Enfoque',navWorks:'Proyectos',navServices:'Servicios',navContact:'Contacto',ckYou:'TÚ',
      heroEyebrow:'Disponible para nuevos proyectos',heroT1:'Webs que',heroT2:'enamoran',heroT3:'y <em>venden.</em>',
      heroLead:'Diseño y desarrollo web para marcas y negocios. Rápidos, elegantes y pensados para convertir visitantes en clientes.',
      heroGeo:'Costa Rica → LatAm → Global.',heroCta:'Empezá aquí',heroStatus:'Disponible · CR',scrollW:'Scroll',
      aboutIdx:'(01) — Enfoque',aboutTitle:'Diseño con cabeza<br><em>de sistemas.</em>',
      aboutP1:'Soy Josue Hernandez, fundador de JH Studio. Construyo sitios web modernos que se ven profesionales y son fáciles de usar para tus clientes, pensados para ser memorables y dar resultados.',
      aboutP2:'Enfocado en velocidad, estabilidad y una experiencia limpia, para que los visitantes se queden, confíen y te escriban.',
      skillsLab:'Experiencia técnica',sk1:'Desarrollo web (HTML / CSS / JS)',sk2:'Diseño UI & 3D',sk3:'Seguridad y rendimiento web',
      worksIdx:'(02) — Proyectos seleccionados',viewW:'Ver proyecto',soonB:'En desarrollo',animTag:'Animaciones',
      w1d:'Sitio para una barbería: galería, servicios y reserva directa por WhatsApp.',
      w2n:'Cultura Japonesa',w2d:'Proyecto personal — muestra de diseño limpio y animación.',
      w3d:'Sitio de turismo de aventura. En desarrollo.',w4n:'Landing Page',w4d:'Landing page de alto impacto. En desarrollo.',
      servIdx:'(03) — Servicios y precios',
      servIntro:'Desarrollo web para sitios informativos, landing pages y tiendas en línea. Cada proyecto se diseña con foco en usabilidad, velocidad y estética limpia para reflejar tu marca y tus objetivos.',
      s1:'Landing Page / Portafolio',s2:'Sitio completo (varias secciones)',s3:'Páginas con 3D, interacciones y animación',s4:'E-commerce / tienda online',s5:'Mantenimiento mensual',
      servNote:'<b>El precio final depende del alcance:</b> número de secciones, funciones y plazo, calculado sobre una tarifa de $30/hora. Se pide un 50% de adelanto para arrancar. Escribime y te paso una cotización gratis y sin compromiso.',
      faqIdx:'(04) — Preguntas frecuentes',
      q1:'¿Cuánto tarda un sitio web?',a1:'La mayoría de los proyectos toma entre 1 y 2 semanas una vez que tengo tu contenido y materiales. Te doy un plazo claro antes de arrancar.',
      q2:'¿Cómo funcionan los pagos?',a2:'Un 50% de adelanto para empezar y el 50% restante al entregar. Queda claro y con compromiso de ambas partes.',
      q3:'¿Tengo que dar yo los textos e imágenes?',a3:'Si ya los tenés, perfecto, los compartís por Google Drive. Si no, puedo conseguirlos o crearlos con un pequeño costo adicional.',
      q4:'¿El sitio funciona bien en celular y en Google?',a4:'Siempre. Todos los sitios son responsivos, rápidos y pensados para visibilidad en buscadores: perfectos en el celular y más fáciles de encontrar.',
      q5:'¿Ofrecés mantenimiento después?',a5:'Sí, un plan mensual con actualizaciones de contenido, ajustes de seguridad, soporte y reparaciones rápidas.',
      contactIdx:'(05) — Contacto',contactTitle:'Trabajemos<br><em>juntos.</em>',
      contactSub:'¿Tenés un proyecto en mente? Me encantaría escucharte y construir algo que se vea increíble y te traiga clientes.',
      contactCta:'Escribime por WhatsApp',footGeo:'Costa Rica — Disponible global',
      mq:['Diseño web','Landing pages','Tiendas online','Sitios a medida','Optimización','Mantenimiento']
    },
    en:{
      navFocus:'Focus',navWorks:'Work',navServices:'Services',navContact:'Contact',ckYou:'YOU',
      heroEyebrow:'Available for new projects',heroT1:'Sites that',heroT2:'charm',heroT3:'and <em>sell.</em>',
      heroLead:'Web design & development for brands and businesses. Fast, elegant, and built to turn visitors into customers.',
      heroGeo:'Costa Rica → LatAm → Global.',heroCta:'Start here',heroStatus:'Available · CR',scrollW:'Scroll',
      aboutIdx:'(01) — Focus',aboutTitle:'Design with a<br><em>systems brain.</em>',
      aboutP1:'I am Josue Hernandez, founder of JH Studio. I build modern websites that look professional and are easy for your customers to use — designed to be memorable and to get results.',
      aboutP2:'Focused on speed, stability and a clean experience — so visitors stay, trust you, and reach out.',
      skillsLab:'Technical expertise',sk1:'Web development (HTML / CSS / JS)',sk2:'UI & 3D design',sk3:'Web security & performance',
      worksIdx:'(02) — Selected work',viewW:'View project',soonB:'In development',animTag:'Animation',
      w1d:'Website for a barber shop: gallery, services and direct booking by WhatsApp.',
      w2n:'Japanese Culture',w2d:'Personal project — a showcase of clean design and animation.',
      w3d:'Adventure tourism site. In development.',w4n:'Landing Page',w4d:'High-impact landing page. In development.',
      servIdx:'(03) — Services & pricing',
      servIntro:'Web development for informational sites, landing pages and online stores. Every project is built with usability, speed and clean aesthetics to reflect your brand and goals.',
      s1:'Landing Page / Portfolio',s2:'Full website (multiple sections)',s3:'Pages with 3D, interactions and animation',s4:'E-commerce / online store',s5:'Monthly maintenance',
      servNote:'<b>Final price depends on scope:</b> number of sections, features and timeline, calculated at a $30/hour rate. A 50% deposit gets us started. Message me for a free, no-commitment quote.',
      faqIdx:'(04) — FAQ',
      q1:'How long does a website take?',a1:'Most projects take 1–2 weeks once I have your content and materials. I give you a clear timeline before we start.',
      q2:'How do payments work?',a2:'A 50% deposit to start, and the remaining 50% on delivery. Clear and committed on both sides.',
      q3:'Do I need to provide the texts and images?',a3:'If you already have them, great — just share them via Google Drive. If not, I can source or create them for a small additional fee.',
      q4:'Is the site mobile-friendly and good for Google?',a4:'Always. Every site is responsive, fast, and built with search visibility in mind — perfect on phones and easier to find.',
      q5:'Do you offer maintenance afterward?',a5:'Yes — a monthly plan with content updates, security adjustments, support, and quick fixes.',
      contactIdx:'(05) — Contact',contactTitle:'Let\u2019s work<br><em>together.</em>',
      contactSub:'Got a project in mind? I\u2019d love to hear about it and build something that looks incredible and brings you customers.',
      contactCta:'Message me on WhatsApp',footGeo:'Costa Rica — Available global',
      mq:['Web design','Landing pages','Online stores','Custom sites','Optimization','Maintenance']
    }
  };
  var lang='es';
  function apply(l){
    lang=l;var d=DICT[l];document.documentElement.lang=l;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var v=d[el.getAttribute('data-i18n')];if(v!=null)el.textContent=v;});
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      var v=d[el.getAttribute('data-i18n-html')];if(v!=null)el.innerHTML=v;});
    // hero title spans use html (for the <em>)
    setHTML('heroT3',d.heroT3);
    document.getElementById('lang').textContent=(l==='es'?'EN':'ES');
    buildMarquee(d.mq);
  }
  function setHTML(key,val){
    var el=document.querySelector('[data-i18n="'+key+'"]');if(el)el.innerHTML=val;}
  function buildMarquee(items){
    var seq=items.concat(items);var html='';
    seq.forEach(function(t){html+='<span>'+t+'</span><span class="sep">/</span>';});
    document.getElementById('mq').innerHTML=html+html;
  }
  document.getElementById('lang').addEventListener('click',function(){apply(lang==='es'?'en':'es');});
  apply('es');

  /* ---------- year + clocks ---------- */
  document.getElementById('yr').textContent=new Date().getFullYear();
  function fmt(tz){
    try{return new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false,timeZone:tz}).format(new Date());}
    catch(e){return new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(new Date());}
  }
  function tick(){
    document.getElementById('ckCR').textContent=fmt('America/Costa_Rica');
    document.getElementById('ckYou').textContent=fmt(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }
  tick();setInterval(tick,1000);

  /* ---------- load reveal ---------- */
  window.addEventListener('load',function(){setTimeout(function(){document.body.classList.add('go');},120);});
  setTimeout(function(){document.body.classList.add('go');},700);

  /* ---------- intersection reveals ---------- */
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('in');
        e.target.querySelectorAll('.bar i').forEach(function(b){b.style.width=(b.getAttribute('data-w')||0)+'%';});
        io.unobserve(e.target);
      }
    });
  },{threshold:0.18,rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});

  /* ---------- scroll: progress + parallax ---------- */
  var prog=document.getElementById('prog'),glow=document.querySelector('.hero-glow'),
      vid=document.querySelector('.hero-video'),medias=[].slice.call(document.querySelectorAll('.work-media img'));
  var ticking=false;
  function onScroll(){
    if(ticking)return;ticking=true;
    requestAnimationFrame(function(){
      var y=window.scrollY,h=document.documentElement.scrollHeight-window.innerHeight;
      prog.style.width=(h>0?(y/h*100):0)+'%';
      var p=y*0.25;if(glow)glow.style.transform='translateY('+p+'px)';if(vid)vid.style.transform='translateY('+(y*0.12)+'px)';
      medias.forEach(function(img){
        var r=img.getBoundingClientRect();var off=(r.top+r.height/2-window.innerHeight/2)/window.innerHeight;
        img.style.transform='translateY('+(-6+off*-5)+'%)';
      });
      ticking=false;
    });
  }
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  /* ---------- custom cursor ---------- */
  if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
    var cur=document.getElementById('cur'),ring=document.getElementById('ring'),rx=0,ry=0,mx=0,my=0;
    document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;cur.style.opacity='1';ring.style.opacity='1';cur.style.transform='translate('+mx+'px,'+my+'px) translate(-50%,-50%)';});
    (function loop(){rx+=(mx-rx)*0.16;ry+=(my-ry)*0.16;ring.style.transform='translate('+rx+'px,'+ry+'px) translate(-50%,-50%)';requestAnimationFrame(loop);})();
    document.querySelectorAll('a,button,.work,summary,.srow').forEach(function(el){
      el.addEventListener('mouseenter',function(){ring.style.width='60px';ring.style.height='60px';ring.style.borderColor='var(--accent)';});
      el.addEventListener('mouseleave',function(){ring.style.width='34px';ring.style.height='34px';ring.style.borderColor='rgba(236,231,223,.5)';});
    });
  }

  /* ---------- mobile menu ---------- */
  var nav=document.getElementById('nav'),burger=document.getElementById('burger');
  burger.addEventListener('click',function(){nav.classList.toggle('open');});
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');});});
})();
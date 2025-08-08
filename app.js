// Simple state machine for the flow
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

const screens = [...$$('.screen')];

function show(name){
  screens.forEach(s => {
    s.classList.toggle('active', s.dataset.screen === name);
  });
}

function nextFrom(btn){
  const name = btn.dataset.next;
  if(name) show(name);
}

// Intro -> Name
$$('[data-next]').forEach(btn => {
  btn.addEventListener('click', () => nextFrom(btn));
});

// Name input interactions
const fullName = $('#fullName');
const calcBtn = $('#calcBtn');

calcBtn?.addEventListener('click', () => {
  if(!fullName.value.trim()){
    fullName.style.transform = 'scale(1.02)';
    fullName.style.boxShadow = '0 0 0 8px rgba(255,93,93,.12)';
    setTimeout(()=> {
      fullName.style.transform = '';
      fullName.style.boxShadow = '';
    }, 220);
    return;
  }
  // go to calc
  show('calc');

  // animate progress to ~85% then continue
  const bar = document.querySelector('.progress .bar');
  bar.style.width = '85%';
  setTimeout(()=>{
    bar.style.transition = 'width .35s ease';
    bar.style.width = '100%';
    setTimeout(()=> show('diag'), 380);
  }, 1800);
});

// Alignment charts animation
let animatedCharts = false;
function animateCharts(){
  if(animatedCharts) return;
  animatedCharts = true;

  // percentages
  const aligned = 72;
  const misaligned = 28;

  // radial circumference: 2πr with r=50
  const C = 2 * Math.PI * 50;

  const green = document.querySelector('.radial .value.green');
  const red   = document.querySelector('.radial .value.red');
  const alignedPct = $('#alignedPct');
  const misalignedPct = $('#misalignedPct');

  // animate values 0 -> target
  const T = 1400;
  const t0 = performance.now();

  function step(now){
    const p = Math.min(1, (now - t0)/T);
    const ease = 1 - Math.pow(1-p, 3);

    const a = Math.round(aligned * ease);
    const m = Math.round(misaligned * ease);

    alignedPct.textContent = a + '%';
    misalignedPct.textContent = m + '%';

    green.setAttribute('stroke-dasharray', `${C * (a/100)} ${999}`);
    red.setAttribute('stroke-dasharray', `${C * (m/100)} ${999}`);

    if(p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// when “align” screen is shown, animate
const observer = new MutationObserver(()=>{
  const active = document.querySelector('.screen.active');
  if(active?.dataset.screen === 'align') animateCharts();
});
observer.observe($('#app'), {subtree:true, attributes:true, attributeFilter:['class']});

// Offer CTA (simulate checkout anchor)
$('#cta')?.addEventListener('click', e => {
  // put your real checkout URL here
  // e.preventDefault(); location.href = 'https://tu-checkout.com/';
});

// ————————————————————————————————
// Golden sparkles background
const canvas = $('#fx');
const ctx = canvas.getContext('2d');
let w, h, particles;

function reset(){
  w = canvas.width  = innerWidth * devicePixelRatio;
  h = canvas.height = innerHeight * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);

  particles = Array.from({length: 70}, () => ({
    x: Math.random()*innerWidth,
    y: Math.random()*innerHeight,
    r: Math.random()*1.8 + .6,
    a: Math.random()*Math.PI*2,
    s: Math.random()*0.6 + 0.15,
    hue: Math.random()*20 + 45
  }));
}

function tick(){
  ctx.clearRect(0,0,innerWidth,innerHeight);
  for(const p of particles){
    p.x += Math.cos(p.a)*p.s;
    p.y += Math.sin(p.a)*p.s;
    p.a += (Math.random()-.5)*0.08;

    if(p.x < -20) p.x = innerWidth+20;
    if(p.x > innerWidth+20) p.x = -20;
    if(p.y < -20) p.y = innerHeight+20;
    if(p.y > innerHeight+20) p.y = -20;

    const grad = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*6);
    grad.addColorStop(0, `hsla(${p.hue}, 75%, 70%, .9)`);
    grad.addColorStop(1, 'hsla(46, 85%, 65%, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(p.x,p.y,p.r*6,0,Math.PI*2); ctx.fill();
  }
  requestAnimationFrame(tick);
}
addEventListener('resize', reset, {passive:true});
reset(); tick();

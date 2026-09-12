/**
 * NEURAL HORIZON - AARATHISREE BALLA PORTFOLIO ENGINE
 * Three.js Neural Mesh, Interactive CLI Terminal, Project Filtering, & Micro-Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeManager();
  initNeuralCanvas();
  initInteractiveTerminal();
  initTimelineTabs();
  initProjectFilters();
  initScrollEffects();
  initCardTilts();
  initClipboardHelpers();
});

/* ==========================================================================
   1. THEME MANAGER
   ========================================================================== */
function initThemeManager() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('nh-theme') || 'dark';

  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (themeIcon) themeIcon.className = 'uil uil-moon';
  } else {
    document.body.classList.remove('light-theme');
    if (themeIcon) themeIcon.className = 'uil uil-sun';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-theme');
      localStorage.setItem('nh-theme', isLight ? 'light' : 'dark');
      if (themeIcon) {
        themeIcon.className = isLight ? 'uil uil-moon' : 'uil uil-sun';
      }
      if (window.updateNeuralColors) {
        window.updateNeuralColors(isLight);
      }
    });
  }

  // Mobile menu toggle & interactions
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    const closeMenu = () => {
      navMenu.classList.remove('open');
      mobileToggle.innerHTML = '<i class="uil uil-apps"></i>';
    };

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.innerHTML = isOpen 
        ? '<i class="uil uil-times"></i>' 
        : '<i class="uil uil-apps"></i>';
    });

    // Close when clicking any nav link or CTA button inside menu
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMenu();
      }
    });

    // Reset when resizing to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1080 && navMenu.classList.contains('open')) {
        closeMenu();
      }
    });
  }
}

/* ==========================================================================
   2. THREE.JS NEURAL CONSTELLATION CANVAS
   ========================================================================== */
function initNeuralCanvas() {
  const container = document.getElementById('neural-canvas');
  if (!container || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 250;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const isLight = document.body.classList.contains('light-theme');
  let nodeColor = isLight ? 0x0284c7 : 0x00f2fe;
  let lineColor = isLight ? 0x6366f1 : 0x4facfe;

  const particleCount = window.innerWidth < 768 ? 55 : 95;
  const maxDistance = window.innerWidth < 768 ? 85 : 115;
  const particles = [];

  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];

  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 450;
    const y = (Math.random() - 0.5) * 350;
    const z = (Math.random() - 0.5) * 200;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    velocities.push({
      x: (Math.random() - 0.5) * 0.35,
      y: (Math.random() - 0.5) * 0.35,
      z: (Math.random() - 0.5) * 0.2
    });

    particles.push(new THREE.Vector3(x, y, z));
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const pMaterial = new THREE.PointsMaterial({
    color: nodeColor,
    size: 3.2,
    transparent: true,
    opacity: isLight ? 0.6 : 0.85,
    blending: THREE.AdditiveBlending
  });

  const pointCloud = new THREE.Points(geometry, pMaterial);
  scene.add(pointCloud);

  // Line Mesh for connections
  const lineMaterial = new THREE.LineBasicMaterial({
    color: lineColor,
    transparent: true,
    opacity: isLight ? 0.15 : 0.28,
    blending: THREE.AdditiveBlending
  });

  const linesGeometry = new THREE.BufferGeometry();
  const lineMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
  scene.add(lineMesh);

  // Mouse interactivity
  let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  window.updateNeuralColors = (isLightMode) => {
    pMaterial.color.setHex(isLightMode ? 0x0284c7 : 0x00f2fe);
    lineMaterial.color.setHex(isLightMode ? 0x6366f1 : 0x4facfe);
    pMaterial.opacity = isLightMode ? 0.6 : 0.85;
    lineMaterial.opacity = isLightMode ? 0.15 : 0.28;
  };

  function animate() {
    requestAnimationFrame(animate);

    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    const posArray = geometry.attributes.position.array;
    const linePositions = [];

    for (let i = 0; i < particleCount; i++) {
      let idx = i * 3;
      posArray[idx] += velocities[i].x;
      posArray[idx + 1] += velocities[i].y;
      posArray[idx + 2] += velocities[i].z;

      // Bounce boundaries
      if (posArray[idx] > 240 || posArray[idx] < -240) velocities[i].x = -velocities[i].x;
      if (posArray[idx + 1] > 190 || posArray[idx + 1] < -190) velocities[i].y = -velocities[i].y;
      if (posArray[idx + 2] > 110 || posArray[idx + 2] < -110) velocities[i].z = -velocities[i].z;

      particles[i].set(posArray[idx], posArray[idx + 1], posArray[idx + 2]);

      // Connect nearby nodes
      for (let j = i + 1; j < particleCount; j++) {
        const dist = particles[i].distanceTo(particles[j]);
        if (dist < maxDistance) {
          linePositions.push(
            particles[i].x, particles[i].y, particles[i].z,
            particles[j].x, particles[j].y, particles[j].z
          );
        }
      }
    }

    geometry.attributes.position.needsUpdate = true;
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

    camera.position.x += (mouse.x * 25 - camera.position.x) * 0.03;
    camera.position.y += (mouse.y * 25 - camera.position.y) * 0.03;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();
}

/* ==========================================================================
   3. INTERACTIVE HERO CLI TERMINAL
   ========================================================================== */
function initInteractiveTerminal() {
  const tabs = document.querySelectorAll('.terminal__tab');
  const panes = document.querySelectorAll('.terminal__pane');
  const cmdInput = document.getElementById('terminal-cli-input');
  const terminalHistory = document.getElementById('terminal-history');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const pane = document.getElementById(target);
      if (pane) pane.classList.add('active');
    });
  });

  if (cmdInput && terminalHistory) {
    const commands = {
      'help': 'Available commands: <span class="t-keyword">skills</span>, <span class="t-keyword">research</span>, <span class="t-keyword">ventures</span>, <span class="t-keyword">projects</span>, <span class="t-keyword">publications</span>, <span class="t-keyword">experience</span>, <span class="t-keyword">contact</span>, <span class="t-keyword">clear</span>, <span class="t-keyword">hire</span>',
      'skills': '<span class="t-str">["Python", "Machine Learning", "LLMs", "Computer Vision", "SQL", "MongoDB", "Flask/Django", "QUIC/HTTP-3", "SHAP/LIME"]</span>',
      'research': '<span class="t-var">Current Fellowship:</span> Exam Evaluation Platform @ CVIT, IIIT Hyderabad (Prof. C. V. Jawahar) — role-based digital exam evaluation with interactive grading canvas, audit trails & immutable storage.<br><span class="t-var">Published:</span> QUIC DDoS Flood Detection in HTTP/3 with XAI (95.8% Acc)',
      'ventures': '<span class="t-keyword">Aarshiv:</span> Independent tech venture. Live site: <a href="https://aarshivai.netlify.app/" target="_blank" class="t-prompt">https://aarshivai.netlify.app/</a> (1000+ Users, 98% MBBS AI Evaluator, 100+ Leads in 5 Mins)',
      'projects': '<span class="t-keyword">1. QUIC DDoS Flood Detector:</span> Random Forest + XAI (95.8% Acc)<br><span class="t-keyword">2. EduEvaluator:</span> LLM Subjective Grader (IEEE PuneCon)<br><span class="t-keyword">3. TrustRank Algorithm:</span> NLP Review Ranking (0.93 Spearman)',
      'publications': '<span class="t-keyword">1. IJSRET 2026:</span> <a href="https://ijsret.com/2026/04/15/an-intelligent-machine-learning-framework-for-detecting-quic-based-traffic-flood-attacks-in-encrypted-http-3-networks/" target="_blank" class="t-prompt">QUIC Traffic Flood Attack Detection in HTTP/3 Networks</a><br><span class="t-keyword">2. IEEE PuneCon 2024:</span> <a href="https://ieeexplore.ieee.org/document/10895748" target="_blank" class="t-prompt">Automated Subjective Answer Sheet Evaluation using LLMs & ML</a>',
      'experience': '<span class="t-str">Research Fellow @ CVIT IIIT-H | Founder @ Aarshiv (aarshivai.netlify.app) | Data Analyst @ Unstop | Tech Lead @ SnapGro</span>',
      'hire': '<span class="t-keyword">Status:</span> Open for AI & Backend Engineer roles. Email: <a href="mailto:aarathisree.1535@gmail.com" class="t-prompt">aarathisree.1535@gmail.com</a>',
      'contact': '<span class="t-var">Email:</span> aarathisree.1535@gmail.com | <span class="t-var">Phone:</span> +91-9381481266 | <span class="t-var">LinkedIn:</span> /in/aarathisree-balla-349b66284'
    };

    cmdInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const rawCmd = cmdInput.value.trim().toLowerCase();
        cmdInput.value = '';

        if (!rawCmd) return;

        if (rawCmd === 'clear') {
          terminalHistory.innerHTML = '';
          return;
        }

        const cmdLine = document.createElement('div');
        cmdLine.innerHTML = `<span class="t-prompt">guest@aarathi:~$</span> ${escapeHTML(rawCmd)}`;
        terminalHistory.appendChild(cmdLine);

        const responseLine = document.createElement('div');
        responseLine.style.marginBottom = '0.6rem';

        if (commands[rawCmd]) {
          responseLine.innerHTML = commands[rawCmd];
        } else {
          responseLine.innerHTML = `<span style="color:#ef4444;">Command not recognized: '${escapeHTML(rawCmd)}'. Type <span class="t-keyword">'help'</span> for a list of commands.</span>`;
        }

        terminalHistory.appendChild(responseLine);

        // Auto scroll terminal to bottom
        const terminalBody = terminalHistory.closest('.terminal__body');
        if (terminalBody) {
          terminalBody.scrollTop = terminalBody.scrollHeight;
        }
      }
    });
  }
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

/* ==========================================================================
   4. TIMELINE TABS
   ========================================================================== */
function initTimelineTabs() {
  const tabBtns = document.querySelectorAll('.timeline-tab-btn');
  const panes = document.querySelectorAll('.timeline-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      tabBtns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const activePane = document.getElementById(target);
      if (activePane) activePane.classList.add('active');
    });
  });
}

/* ==========================================================================
   5. PROJECT FILTER SWITCHER
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        const categories = card.dataset.category ? card.dataset.category.split(' ') : [];
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   6. SCROLL & ACTIVE LINK EFFECTS
   ========================================================================== */
function initScrollEffects() {
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    if (scrollTopBtn) {
      if (scrollY > 500) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');
      const activeLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(l => l.classList.remove('active'));
        if (activeLink) activeLink.classList.add('active');
      }
    });
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   7. 3D CARD TILT EFFECT
   ========================================================================== */
function initCardTilts() {
  const cards = document.querySelectorAll('.glass-card, .pub-card, .bento-item, .project-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ==========================================================================
   8. CLIPBOARD & TOAST HELPERS
   ========================================================================== */
function initClipboardHelpers() {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.dataset.copy;
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied to clipboard: ${textToCopy}`);
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="uil uil-check"></i> Copied!';
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      });
    });
  });
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="uil uil-check-circle" style="color:#00f2fe;font-size:1.2rem;"></i> ${message}`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

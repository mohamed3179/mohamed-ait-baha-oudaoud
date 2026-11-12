/**
 * Portfolio JavaScript - Mohamed Ait Baha Oudaoud
 * Pure Vanilla JavaScript (No Frameworks)
 * Features:
 * - Bilingual support (French & English) with seamless in-place text updates
 * - Dark / Light theme toggle with persistence in localStorage
 * - Mobile responsive navigation menu drawer
 * - Interactive project filtering and deep-dive detail modal
 * - IntersectionObserver scroll-triggered skill bars & section reveal animations
 * - Client-side contact form validation with inline feedback & success states
 * - Clipboard copy helper for email contact
 * - Back to top floating button
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. Translation System (FR / EN Parity)
  // =========================================================================
  const translations = {
    en: {
      // Top Navigation
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_projects: 'Projects',
      nav_education: 'Education',
      nav_contact: 'Contact',
      nav_cv_btn: 'Resume',

      // Hero Section
      hero_status: 'Available for AI & Engineering Opportunities',
      hero_role: "Master's Degree in Artificial Intelligence & Applications",
      hero_bio: 'Motivated Computer Science and AI engineering student with a strong foundation in Machine Learning, Deep Learning, and Large Language Models (LLMs). Proficient in Python and PyTorch, with hands-on experience developing Transformers, Nanochat LLMs, and RAG architectures.',
      hero_meta_loc: 'Morocco',
      hero_btn_projects: 'Explore Projects',
      hero_btn_cv: 'Download CV',
      hero_btn_contact: 'Get in Touch',
      hero_card_sub: 'University Ibn Zohr',

      // Proof / Metrics Strip
      metric_1_val: '3+',
      metric_1_label: 'Core Deep Learning Projects',
      metric_2_val: '3',
      metric_2_label: 'Professional AI Certifications',
      metric_3_val: '100%',
      metric_3_label: 'PyTorch & Python Native',
      metric_4_val: '3',
      metric_4_label: 'Working Languages (AR, FR, EN)',

      // About Section
      about_kicker: 'Background & Focus',
      about_title: 'Blending Mathematical Rigor with Scalable AI Systems',
      about_p1: 'I am currently pursuing a Master’s Degree in Artificial Intelligence and Applications at University Ibn Zohr in Morocco, following my Bachelor’s Degree in Mathematics and Computer Science.',
      about_p2: 'My passion lies in understanding neural models from the ground up: rather than relying solely on high-level wrappers, I have implemented Transformer encoder-decoders and LLM components from mathematical formulas in PyTorch.',
      about_p3: 'With experience in both algorithmic optimization (such as Particle Swarm Optimization) and modern Generative AI (LLMs and Retrieval-Augmented Generation), I am driven to build practical, impactful AI solutions.',
      
      about_feat1_title: 'Mathematics & Computer Science Roots',
      about_feat1_desc: 'Deep theoretical grounding in linear algebra, probability, vector calculus, and algorithm analysis.',
      about_feat2_title: 'From-Scratch Deep Learning',
      about_feat2_desc: 'Custom attention mechanisms, positional encodings, and GPU model training experience.',
      about_feat3_title: 'RAG & Document Intelligence',
      about_feat3_desc: 'Building hallucination-free retrieval systems with vector databases and embedding pipelines.',

      // Certifications Card
      cert_title: 'Specialized Certifications',
      cert_issuer: 'DeepLearning.AI / Coursera',
      cert_1_title: 'Deep Learning & Neural Networks',
      cert_1_meta: 'Coursera / DeepLearning.AI · 2025',
      cert_2_title: 'Generative AI and Large Language Models (LLMs)',
      cert_2_meta: 'Coursera / DeepLearning.AI · 2025',
      cert_3_title: 'Retrieval-Augmented Generation (RAG)',
      cert_3_meta: 'Coursera / DeepLearning.AI · 2026',

      // Skills Section
      skills_kicker: 'Technical Arsenal',
      skills_title: 'Tools & Technologies I Work With',
      skills_subtitle: 'A balanced stack of core AI/ML frameworks, systems programming, and modern development tools.',
      skills_cat1_title: 'AI & Machine Learning',
      skills_cat2_title: 'Programming & Data',
      skills_cat3_title: 'Frameworks & Tools',
      skills_cat4_title: 'Languages & Communication',
      lang_ar: 'Arabic',
      lang_ar_lvl: 'Native',
      lang_fr: 'French',
      lang_fr_lvl: 'Intermediate',
      lang_en: 'English',
      lang_en_lvl: 'Intermediate',

      // Projects Section
      projects_kicker: 'Featured Works',
      projects_title: 'Engineered for Performance & Scalability',
      projects_subtitle: 'A selection of open-source models, neural architectures from scratch, and optimization experiments.',
      filter_all: 'All Projects',
      filter_transformers: 'Transformers & LLMs',
      filter_ml: 'ML & Optimization',
      filter_rag: 'RAG & Retrieval',
      btn_view_details: 'View Architecture Details',
      btn_github: 'Source Code',

      // Project 1
      p1_kicker: 'Architecture from Scratch',
      p1_title: 'Transformer Architecture from Scratch',
      p1_desc: 'A complete, native PyTorch implementation of the seminal Transformer model without high-level library shortcuts.',
      p1_h1: 'Scaled dot-product multi-head self-attention mechanism',
      p1_h2: 'Sinusoidal positional encodings & residual layer normalization',
      p1_h3: 'Full encoder-decoder architecture with autoregressive masking',

      // Project 2
      p2_kicker: 'Generative AI & LLMs',
      p2_title: 'Large Language Models with Nanochat',
      p2_desc: 'Exploration of modern autoregressive GPT architectures inspired by NanoGPT, implementing state-of-the-art LLM building blocks.',
      p2_h1: 'Custom tokenization, RoPE (Rotary Position Embedding) & RMSNorm',
      p2_h2: 'GPU-accelerated training pipeline & KV-cache generation',
      p2_h3: 'Study of attention mechanisms, SwiGLU activations, and scaling laws',

      // Project 3
      p3_kicker: 'Swarm Optimization',
      p3_title: 'Student Performance Classification Using PSO',
      p3_desc: 'Multilayer Perceptron (MLP) classification optimized using Particle Swarm Optimization (PSO) for parameter search and convergence.',
      p3_h1: 'Comparative benchmark of PSO against Adam, SGD, GA & Simulated Annealing',
      p3_h2: 'Custom feature selection pipeline and hyperparameter tuning',
      p3_h3: 'Rigorous validation on structured educational datasets',

      // Project 4
      p4_kicker: 'Document Intelligence',
      p4_title: 'Enterprise RAG System with Vector Search',
      p4_desc: 'End-to-end Retrieval-Augmented Generation pipeline designed to ground foundation models in private documents with zero hallucination.',
      p4_h1: 'Hybrid retrieval: dense semantic embeddings combined with BM25 lexical scoring',
      p4_h2: 'Dynamic document chunking and cross-encoder reranking',
      p4_h3: 'Faithfulness verification and citation tracking for verifiable answers',

      // Education Section
      edu_kicker: 'Academic Path',
      edu_title: 'Degrees & Academic Training',
      edu_subtitle: 'Solid foundations in mathematics, algorithmic problem solving, and modern artificial intelligence.',
      edu1_period: '2025 – Present',
      edu1_title: "Master's Degree in Artificial Intelligence & Applications",
      edu1_school: 'University Ibn Zohr – Morocco',
      edu1_desc: 'Specialization: Artificial Intelligence. Core coursework: Machine Learning, Deep Learning, Large Language Models, Retrieval-Augmented Generation (RAG), and Neural Network Architectures.',
      edu2_period: '2020 – 2023',
      edu2_title: "Bachelor's Degree in Mathematics & Computer Science",
      edu2_school: 'University Ibn Zohr – Morocco',
      edu2_desc: 'Comprehensive training in abstract algebra, real analysis, probability & statistics, data structures, algorithms, and computational complexity.',

      // Contact Section
      contact_kicker: 'Get in Touch',
      contact_title: 'Let’s Collaborate on AI Projects',
      contact_subtitle: 'Open to internships, research collaborations, engineering roles, and innovative technical projects.',
      contact_email_label: 'Email',
      contact_phone_label: 'Phone',
      contact_loc_label: 'Location',
      copy_email_btn: 'Copy Email Address',
      email_copied: 'Copied to clipboard!',

      form_name_label: 'Your Name',
      form_name_placeholder: 'Mohamed Smith',
      form_email_label: 'Email Address',
      form_email_placeholder: 'name@example.com',
      form_subject_label: 'Subject',
      form_subject_placeholder: 'AI Project Inquiry / Collaboration',
      form_msg_label: 'Your Message',
      form_msg_placeholder: 'Hello Mohamed, I would like to discuss an opportunity...',
      form_submit_btn: 'Send Message',
      form_err_name: 'Please enter a valid name (at least 2 characters).',
      form_err_email: 'Please enter a valid email address.',
      form_err_msg: 'Please write a message with at least 10 characters.',
      form_success_msg: 'Thank you! Your message has been received. I will respond promptly.',
      form_reset_btn: 'Send another message',

      // Footer
      footer_desc: 'AI and Machine Learning Engineer. Building innovative solutions with Transformers, LLMs, and PyTorch.',
      footer_nav_title: 'Navigation',
      footer_connect_title: 'Connect',
      footer_copy: 'Mohamed Ait Baha Oudaoud. All rights reserved.',
      back_to_top: 'Back to top'
    },
    fr: {
      // Top Navigation
      nav_about: 'À propos',
      nav_skills: 'Compétences',
      nav_projects: 'Projets',
      nav_education: 'Formation',
      nav_contact: 'Contact',
      nav_cv_btn: 'Mon CV',

      // Hero Section
      hero_status: "À l'écoute d'opportunités en IA & Ingénierie",
      hero_role: 'Master en Intelligence Artificielle & Applications',
      hero_bio: "Étudiant ingénieur passionné en informatique et intelligence artificielle avec de solides bases en Machine Learning, Deep Learning et Grands Modèles de Langage (LLMs). Compétent en Python et PyTorch, avec une expérience pratique dans le développement de Transformers, Nanochat LLMs et architectures RAG.",
      hero_meta_loc: 'Maroc',
      hero_btn_projects: 'Découvrir mes projets',
      hero_btn_cv: 'Télécharger mon CV',
      hero_btn_contact: 'Me contacter',
      hero_card_sub: 'Université Ibn Zohr',

      // Proof / Metrics Strip
      metric_1_val: '3+',
      metric_1_label: 'Projets Deep Learning Majeurs',
      metric_2_val: '3',
      metric_2_label: 'Certifications Professionnelles en IA',
      metric_3_val: '100%',
      metric_3_label: 'Natif Python & PyTorch',
      metric_4_val: '3',
      metric_4_label: 'Langues de travail (AR, FR, EN)',

      // About Section
      about_kicker: 'Parcours & Vision',
      about_title: 'Allier Rigueur Mathématique et Systèmes d’IA Évolutifs',
      about_p1: "Je poursuis actuellement un Master en Intelligence Artificielle et Applications à l'Université Ibn Zohr au Maroc, après avoir obtenu une Licence en Mathématiques et Informatique.",
      about_p2: "Ma passion consiste à appréhender les modèles neuronaux dès leurs fondements mathématiques : plutôt que d'utiliser uniquement des bibliothèques de haut niveau, j'ai implémenté des architectures Transformer complètes et des blocs LLM directement à partir de leurs formules en PyTorch.",
      about_p3: "Doté d'une expérience concrète à la fois en optimisation algorithmique (algorithme par essaim particulaire - PSO) et en IA générative moderne (LLMs et systèmes RAG), je suis motivé par la conception de solutions d'IA concrètes et percutantes.",
      
      about_feat1_title: 'Bases Solides en Mathématiques & Informatique',
      about_feat1_desc: 'Maîtrise approfondie de l’algèbre linéaire, des probabilités, du calcul différentiel et des algorithmes.',
      about_feat2_title: 'Deep Learning “From Scratch”',
      about_feat2_desc: 'Conception de mécanismes d’attention personnalisés, encodages positionnels et entraînement GPU.',
      about_feat3_title: 'RAG & Analyse Documentaire Intelligente',
      about_feat3_desc: 'Création de pipelines de recherche sémantique sans hallucination via bases de données vectorielles.',

      // Certifications Card
      cert_title: 'Certifications Spécialisées',
      cert_issuer: 'DeepLearning.AI / Coursera',
      cert_1_title: 'Deep Learning & Neural Networks',
      cert_1_meta: 'Coursera / DeepLearning.AI · 2025',
      cert_2_title: 'Generative AI and Large Language Models (LLMs)',
      cert_2_meta: 'Coursera / DeepLearning.AI · 2025',
      cert_3_title: 'Retrieval-Augmented Generation (RAG)',
      cert_3_meta: 'Coursera / DeepLearning.AI · 2026',

      // Skills Section
      skills_kicker: 'Arsenal Technique',
      skills_title: 'Technologies & Outils Maîtrisés',
      skills_subtitle: 'Un écosystème équilibré combinant frameworks d’IA, langages systèmes et outils d’ingénierie logicielle.',
      skills_cat1_title: 'IA & Machine Learning',
      skills_cat2_title: 'Programmation & Données',
      skills_cat3_title: 'Frameworks & Outils',
      skills_cat4_title: 'Langues & Communication',
      lang_ar: 'Arabe',
      lang_ar_lvl: 'Langue maternelle',
      lang_fr: 'Français',
      lang_fr_lvl: 'Intermédiaire',
      lang_en: 'Anglais',
      lang_en_lvl: 'Intermédiaire',

      // Projects Section
      projects_kicker: 'Travaux & Réalisations',
      projects_title: 'Conçus pour la Performance & la Rigueur',
      projects_subtitle: 'Une sélection de modèles open-source, d’architectures neuronales implémentées de zéro et d’expérimentations d’optimisation.',
      filter_all: 'Tous les projets',
      filter_transformers: 'Transformers & LLMs',
      filter_ml: 'ML & Optimisation',
      filter_rag: 'RAG & Recherche',
      btn_view_details: 'Voir les détails techniques',
      btn_github: 'Code Source',

      // Project 1
      p1_kicker: 'Architecture from Scratch',
      p1_title: 'Architecture Transformer from Scratch',
      p1_desc: 'Implémentation native et complète du modèle Transformer en PyTorch, sans raccourcis de bibliothèques haut niveau.',
      p1_h1: 'Mécanisme d’auto-attention multi-têtes (scaled dot-product attention)',
      p1_h2: 'Encodage positionnel sinusoïdal & normalisation de couche résiduelle',
      p1_h3: 'Architecture complète encodeur-décodeur avec masque autorégressif',

      // Project 2
      p2_kicker: 'IA Générative & LLMs',
      p2_title: 'Grands Modèles de Langage avec Nanochat',
      p2_desc: 'Exploration approfondie des architectures GPT autorégressives inspirées de NanoGPT, intégrant les avancées de pointe.',
      p2_h1: 'Tokenisation personnalisée, RoPE (Rotary Position Embedding) & RMSNorm',
      p2_h2: 'Pipeline d’entraînement accéléré sur GPU & gestion du KV-cache',
      p2_h3: 'Étude des mécanismes d’attention, activation SwiGLU et lois d’échelle',

      // Project 3
      p3_kicker: 'Optimisation par Essaim',
      p3_title: 'Classification des Performances Étudiantes via PSO',
      p3_desc: 'Modèle de classification Perceptron Multicouche (MLP) optimisé par Algorithme d’Essaim Particulaire (PSO).',
      p3_h1: 'Benchmark comparatif de PSO face à Adam, SGD, Algorithmes Génétiques et Recuit Simulé',
      p3_h2: 'Sélection de caractéristiques personnalisée et réglage d’hyperparamètres',
      p3_h3: 'Validation rigoureuse sur des jeux de données éducatifs structurés',

      // Project 4
      p4_kicker: 'Intelligence Documentaire',
      p4_title: 'Système RAG d’Entreprise avec Recherche Vectorielle',
      p4_desc: 'Pipeline complet de Génération Augmentée par Récupération conçu pour ancrer les modèles de fondation sans hallucination.',
      p4_h1: 'Recherche hybride combinant embeddings denses et scoring lexical BM25',
      p4_h2: 'Découpage sémantique dynamique des documents et réordonnancement par cross-encoder',
      p4_h3: 'Vérification de fidélité et traçabilité des citations pour des réponses vérifiables',

      // Education Section
      edu_kicker: 'Parcours Académique',
      edu_title: 'Diplômes & Formation Universitaire',
      edu_subtitle: 'Des fondations solides en mathématiques, en algorithmique et en intelligence artificielle de pointe.',
      edu1_period: '2025 – Présent',
      edu1_title: 'Master en Intelligence Artificielle & Applications',
      edu1_school: 'Université Ibn Zohr – Maroc',
      edu1_desc: 'Spécialisation : Intelligence Artificielle. Cours clés : Machine Learning, Deep Learning, Grands Modèles de Langage (LLM), RAG, et Réseaux de Neurones.',
      edu2_period: '2020 – 2023',
      edu2_title: 'Licence en Mathématiques et Informatique',
      edu2_school: 'Université Ibn Zohr – Maroc',
      edu2_desc: 'Formation approfondie en algèbre, analyse réelle, calcul des probabilités, structures de données, algorithmique et complexité.',

      // Contact Section
      contact_kicker: 'Contact & Collaboration',
      contact_title: 'Collaborons sur vos Projets d’IA',
      contact_subtitle: 'Disponible pour stages, postes d’ingénieur, projets de recherche ou missions innovantes.',
      contact_email_label: 'Email',
      contact_phone_label: 'Téléphone',
      contact_loc_label: 'Localisation',
      copy_email_btn: 'Copier l’adresse email',
      email_copied: 'Adresse copiée dans le presse-papier !',

      form_name_label: 'Votre Nom',
      form_name_placeholder: 'Mohamed Dupont',
      form_email_label: 'Adresse Email',
      form_email_placeholder: 'nom@exemple.com',
      form_subject_label: 'Objet',
      form_subject_placeholder: 'Opportunité / Collaboration Projet IA',
      form_msg_label: 'Votre Message',
      form_msg_placeholder: 'Bonjour Mohamed, je souhaiterais échanger concernant...',
      form_submit_btn: 'Envoyer le message',
      form_err_name: 'Veuillez saisir un nom valide (au moins 2 caractères).',
      form_err_email: 'Veuillez saisir une adresse email valide.',
      form_err_msg: 'Veuillez rédiger un message contenant au moins 10 caractères.',
      form_success_msg: 'Merci ! Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.',
      form_reset_btn: 'Envoyer un autre message',

      // Footer
      footer_desc: 'Ingénieur en Intelligence Artificielle & Machine Learning. Solutions innovantes avec Transformers, LLMs et PyTorch.',
      footer_nav_title: 'Navigation',
      footer_connect_title: 'Réseaux & Contact',
      footer_copy: 'Mohamed Ait Baha Oudaoud. Tous droits réservés.',
      back_to_top: 'Haut de page'
    }
  };

  // State
  let currentLang = localStorage.getItem('portfolio_lang') || 'en';

  /**
   * Updates all translatable elements on the page
   * @param {string} lang - 'en' or 'fr'
   */
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    // Update text content elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update toggle button active states
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Update page title
    document.title = lang === 'fr' 
      ? "Mohamed Ait Baha Oudaoud | Ingénieur IA & Machine Learning"
      : "Mohamed Ait Baha Oudaoud | AI & Machine Learning Engineer";
  }

  // Bind language switch buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });

  // =========================================================================
  // 2. Dark / Light Theme System
  // =========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle');

  // Detect preferred theme from storage or system
  function getInitialTheme() {
    const savedTheme = localStorage.getItem('portfolio_theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggleBtn?.setAttribute('aria-label', currentLang === 'fr' ? 'Activer le mode clair' : 'Switch to light mode');
    } else {
      document.documentElement.removeAttribute('data-theme');
      themeToggleBtn?.setAttribute('aria-label', currentLang === 'fr' ? 'Activer le mode sombre' : 'Switch to dark mode');
    }
    localStorage.setItem('portfolio_theme', theme);
  }

  // Initialize theme
  applyTheme(getInitialTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      applyTheme(isDark ? 'light' : 'dark');
    });
  }

  // =========================================================================
  // 3. Mobile Navigation Menu Toggle
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking nav links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // =========================================================================
  // 4. Scroll Reveal & Skill Bars Animation (IntersectionObserver)
  // =========================================================================
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Skill bars fill animation
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const progress = bar.getAttribute('data-progress') || '0';
        bar.style.width = progress + '%';
        observer.unobserve(bar);
      }
    });
  }, {
    threshold: 0.2
  });

  skillBars.forEach(bar => skillObserver.observe(bar));

  // =========================================================================
  // 5. Active Navigation Link on Scroll
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // =========================================================================
  // 6. Project Filter Controls
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // =========================================================================
  // 7. Project Details Modal Dialog
  // =========================================================================
  const modalData = {
    1: {
      en: {
        title: 'Transformer Architecture from Scratch (PyTorch)',
        subtitle: 'Core Tensor Implementation of Attention Is All You Need',
        overview: 'Developed a complete encoder-decoder Transformer from mathematical first principles without using `torch.nn.Transformer`. Explored how matrix projections transform embeddings into queries, keys, and values.',
        architecture: [
          'Scaled Dot-Product Self-Attention: Implemented QK^T / sqrt(d_k) with softmax and dropout.',
          'Multi-Head Mechanism: Linear splits into h heads, parallel attention calculation, and final linear concatenation projection.',
          'Positional Encoding: Sinusoidal encodings using alternating sine/cosine frequencies to preserve positional information.',
          'Residual Connections & LayerNorm: Pre-LN architecture implementation with epsilon stabilization.',
          'Causal Masking: Triangular look-ahead masks in the decoder to enforce autoregressive property.'
        ],
        codeSnippet: `# Scaled Dot-Product Attention in PyTorch
def scaled_dot_product_attention(Q, K, V, mask=None):
    d_k = Q.size(-1)
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, -1e9)
    attn_weights = F.softmax(scores, dim=-1)
    return torch.matmul(attn_weights, V), attn_weights`,
        tools: ['Python 3.11', 'PyTorch', 'NumPy', 'Math / Linear Algebra']
      },
      fr: {
        title: 'Architecture Transformer from Scratch (PyTorch)',
        subtitle: 'Implémentation matricielle pure de “Attention Is All You Need”',
        overview: 'Développement d’un Transformer encodeur-décodeur complet à partir des principes mathématiques fondamentaux, sans utiliser `torch.nn.Transformer`. Découverte approfondie des projections de tenseurs Requêtes, Clés et Valeurs.',
        architecture: [
          'Attention Scalée par Produit Scalaire : Calcul de QK^T / sqrt(d_k) avec softmax et masque.',
          'Mécanisme Multi-Têtes : Division en têtes parallèles, concaténation et projection linéaire de sortie.',
          'Encodage Positionnel : Encodage sinusoïdal alternant fréquences sinus et cosinus.',
          'Connexions Résiduelles & LayerNorm : Normalisation Pre-LN avec terme de stabilisation epsilon.',
          'Masquage Causal : Masque triangulaire inférieur dans le décodeur pour garantir la propriété autorégressive.'
        ],
        codeSnippet: `# Attention Scalée en PyTorch
def scaled_dot_product_attention(Q, K, V, mask=None):
    d_k = Q.size(-1)
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, -1e9)
    attn_weights = F.softmax(scores, dim=-1)
    return torch.matmul(attn_weights, V), attn_weights`,
        tools: ['Python 3.11', 'PyTorch', 'NumPy', 'Algèbre Linéaire']
      }
    },
    2: {
      en: {
        title: 'Large Language Models with Nanochat',
        subtitle: 'GPT Architecture, Modern RoPE, RMSNorm & GPU Training',
        overview: 'Implemented and trained an autoregressive decoder-only language model inspired by Karpathy’s nanoGPT, incorporating modern architectural choices from LLaMA and Mistral.',
        architecture: [
          'Tokenization: Byte-Pair Encoding (BPE) tokenizer training and vocab dictionary lookup.',
          'RoPE (Rotary Position Embeddings): Complex rotational frequency embeddings applied directly to Query and Key projections.',
          'RMSNorm: Replaced standard LayerNorm with Root Mean Square Layer Normalization for faster GPU throughput.',
          'KV Cache Generation: Implemented past key-value caching to achieve O(1) inference step latency.',
          'SwiGLU Activations: Modern gated activation functions yielding superior convergence.'
        ],
        codeSnippet: `# RMSNorm Layer in PyTorch
class RMSNorm(torch.nn.Module):
    def __init__(self, dim: int, eps: float = 1e-6):
        super().__init__()
        self.eps = eps
        self.weight = torch.nn.Parameter(torch.ones(dim))

    def forward(self, x):
        norm = torch.rsqrt(x.pow(2).mean(-1, keepdim=True) + self.eps)
        return x * norm * self.weight`,
        tools: ['Python', 'PyTorch', 'CUDA', 'RoPE', 'RMSNorm', 'GPU Training']
      },
      fr: {
        title: 'Grands Modèles de Langage avec Nanochat',
        subtitle: 'Architecture GPT, RoPE moderne, RMSNorm & Entraînement GPU',
        overview: 'Implémentation et entraînement d’un modèle de langage décodeur seul inspiré de nanoGPT, en intégrant les avancées architecturales modernes de LLaMA et Mistral.',
        architecture: [
          'Tokenisation : Entraînement d’un tokenizer Byte-Pair Encoding (BPE).',
          'RoPE (Rotary Position Embeddings) : Encodages rotatifs appliqués directement aux tenseurs Query et Key.',
          'RMSNorm : Remplacement de LayerNorm standard par RMSNorm pour une vitesse d’exécution GPU optimale.',
          'Génération avec KV Cache : Mise en cache des clés-valeurs passées pour une inférence à latence unitaire O(1).',
          'Activations SwiGLU : Fonctions d’activation à portes améliorant la convergence.'
        ],
        codeSnippet: `# Module RMSNorm en PyTorch
class RMSNorm(torch.nn.Module):
    def __init__(self, dim: int, eps: float = 1e-6):
        super().__init__()
        self.eps = eps
        self.weight = torch.nn.Parameter(torch.ones(dim))

    def forward(self, x):
        norm = torch.rsqrt(x.pow(2).mean(-1, keepdim=True) + self.eps)
        return x * norm * self.weight`,
        tools: ['Python', 'PyTorch', 'CUDA', 'RoPE', 'RMSNorm', 'Entraînement GPU']
      }
    },
    3: {
      en: {
        title: 'Student Performance Classification Using PSO',
        subtitle: 'Evolutionary Swarm Intelligence for Neural Optimization',
        overview: 'Engineered a Multilayer Perceptron classification pipeline where the neural weights and hyperparameter configurations were searched via Particle Swarm Optimization (PSO).',
        architecture: [
          'Swarm Dynamics: Particles explore multi-dimensional parameter space guided by local best (pBest) and global best (gBest) vectors.',
          'Benchmarking Suite: Compared PSO against classical first-order optimizers (Adam, SGD) and metaheuristics (Genetic Algorithms, Simulated Annealing).',
          'Dimensionality Reduction & Feature Selection: Used particle positions to select optimal feature subsets.',
          'Evaluation: Outperformed vanilla stochastic gradient descent in avoiding non-convex local minima on noisy tabular data.'
        ],
        codeSnippet: `# PSO Velocity & Position Update
v = w * v + c1 * r1 * (p_best - x) + c2 * r2 * (g_best - x)
x = x + v`,
        tools: ['Python', 'Scikit-learn', 'Particle Swarm Optimization', 'Genetic Algorithms']
      },
      fr: {
        title: 'Classification des Performances Étudiantes via PSO',
        subtitle: 'Intelligence en Essaim pour l’Optimisation Neuronale',
        overview: 'Conception d’un pipeline de classification par Perceptron Multicouche (MLP) où les poids neuronaux et hyperparamètres sont optimisés par Essaim Particulaire (PSO).',
        architecture: [
          'Dynamique d’Essaim : Les particules explorent l’espace guidées par leurs meilleurs états personnels (pBest) et le meilleur état global (gBest).',
          'Benchmark Comparatif : Confrontation rigoureuse de PSO à Adam, SGD, Algorithmes Génétiques et Recuit Simulé.',
          'Sélection de Variables : Utilisation des coordonnées des particules pour identifier les sous-ensembles de features optimaux.',
          'Résultats : Capacité supérieure à échapper aux minima locaux non convexes sur données tabulaires bruitées.'
        ],
        codeSnippet: `# Mise à jour de vitesse et position PSO
v = w * v + c1 * r1 * (p_best - x) + c2 * r2 * (g_best - x)
x = x + v`,
        tools: ['Python', 'Scikit-learn', 'PSO', 'Algorithmes Génétiques']
      }
    },
    4: {
      en: {
        title: 'Enterprise RAG System with Vector Search',
        subtitle: 'Grounding LLMs with Multi-Stage Dense Retrieval & Verification',
        overview: 'Architected a production-ready Retrieval-Augmented Generation pipeline to ground LLM responses in proprietary enterprise knowledge with verified citations.',
        architecture: [
          'Semantic Document Chunking: Hierarchical recursive chunking preserving structural headings and table context.',
          'Hybrid Dense & Sparse Search: Dense embedding cosine similarity combined with BM25 keyword matching.',
          'Cross-Encoder Reranking: Second-stage reranker scoring query-document relevance prior to prompt assembly.',
          'Hallucination Guardrails: Strict prompt constraints with source attribution and confidence scoring.'
        ],
        codeSnippet: `# Hybrid Search Scoring
final_score = alpha * dense_score + (1 - alpha) * bm25_score`,
        tools: ['Python', 'Hugging Face', 'Vector Database', 'PyTorch', 'RAG']
      },
      fr: {
        title: 'Système RAG d’Entreprise avec Recherche Vectorielle',
        subtitle: 'Ancrage de LLM avec Récupération Dense et Vérification de Citations',
        overview: 'Architecture d’un pipeline de Génération Augmentée par Récupération pour éliminer les hallucinations et sourcer chaque réponse avec précision.',
        architecture: [
          'Découpage Sémantique : Chunking récursif préservant la hiérarchie des titres et des tableaux.',
          'Recherche Hybride : Combinaison de similarité cosinus (embeddings denses) et de BM25 lexical.',
          'Réordonnancement par Cross-Encoder : Seconde passe de scoring de pertinence avant injection dans le prompt.',
          'Garde-fous Anti-Hallucination : Contraintes strictes de citation des sources et score de confiance.'
        ],
        codeSnippet: `# Score de recherche hybride
final_score = alpha * dense_score + (1 - alpha) * bm25_score`,
        tools: ['Python', 'Hugging Face', 'Bases Vectorielles', 'PyTorch', 'RAG']
      }
    }
  };

  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBody = document.getElementById('modal-body');

  function openProjectModal(projectId) {
    const data = modalData[projectId]?.[currentLang];
    if (!data || !modalBody || !modalOverlay) return;

    modalBody.innerHTML = `
      <h3 class="modal-title">${data.title}</h3>
      <p style="color: var(--accent-primary); font-size: 0.875rem; font-weight: 600; margin-top: 0.25rem; font-family: var(--font-heading);">${data.subtitle}</p>
      
      <h4 class="modal-section-title">${currentLang === 'fr' ? 'Vue d’ensemble' : 'Overview'}</h4>
      <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6;">${data.overview}</p>
      
      <h4 class="modal-section-title">${currentLang === 'fr' ? 'Architecture & Innovations Clés' : 'Key Architecture Highlights'}</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">
        ${data.architecture.map(item => `<li style="font-size: 0.875rem; color: var(--text-secondary); display: flex; gap: 0.5rem;"><span style="color: var(--accent-primary);">▸</span> ${item}</li>`).join('')}
      </ul>

      <h4 class="modal-section-title">${currentLang === 'fr' ? 'Extrait de Code & Logique' : 'Code Snippet & Logic'}</h4>
      <pre class="modal-code-snippet"><code>${data.codeSnippet}</code></pre>

      <h4 class="modal-section-title">${currentLang === 'fr' ? 'Technologies Utilisées' : 'Technologies & Stack'}</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;">
        ${data.tools.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-project-id');
      openProjectModal(id);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // =========================================================================
  // 8. Contact Form Validation & Submission
  // =========================================================================
  const contactForm = document.getElementById('contact-form');
  const formAlert = document.getElementById('form-alert');
  const alertText = document.getElementById('alert-text');
  const resetFormBtn = document.getElementById('reset-form-btn');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('user-name');
      const emailInput = document.getElementById('user-email');
      const messageInput = document.getElementById('user-message');

      let isValid = true;

      // Validate Name
      const nameGroup = nameInput.closest('.form-group');
      if (nameInput.value.trim().length < 2) {
        nameGroup.classList.add('has-error');
        isValid = false;
      } else {
        nameGroup.classList.remove('has-error');
      }

      // Validate Email
      const emailGroup = emailInput.closest('.form-group');
      if (!validateEmail(emailInput.value)) {
        emailGroup.classList.add('has-error');
        isValid = false;
      } else {
        emailGroup.classList.remove('has-error');
      }

      // Validate Message
      const messageGroup = messageInput.closest('.form-group');
      if (messageInput.value.trim().length < 10) {
        messageGroup.classList.add('has-error');
        isValid = false;
      } else {
        messageGroup.classList.remove('has-error');
      }

      if (isValid) {
        // Success state
        contactForm.style.display = 'none';
        if (formAlert && alertText) {
          alertText.textContent = translations[currentLang].form_success_msg;
          formAlert.classList.add('success');
          formAlert.style.display = 'block';
        }
        if (resetFormBtn) {
          resetFormBtn.style.display = 'inline-flex';
        }
      }
    });

    // Reset button to allow another submission
    if (resetFormBtn) {
      resetFormBtn.addEventListener('click', () => {
        contactForm.reset();
        contactForm.style.display = 'block';
        if (formAlert) {
          formAlert.style.display = 'none';
          formAlert.classList.remove('success');
        }
        resetFormBtn.style.display = 'none';
      });
    }

    // Clear inline error on input change
    ['user-name', 'user-email', 'user-message'].forEach(id => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener('input', () => {
          input.closest('.form-group')?.classList.remove('has-error');
        });
      }
    });
  }

  // =========================================================================
  // 9. Copy Email Helper
  // =========================================================================
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'mohamedaitbahaoudaoud86@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `<span>✓</span> <span>${translations[currentLang].email_copied}</span>`;
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
        }, 2500);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  }

  // =========================================================================
  // 10. Back to Top Floating Button
  // =========================================================================
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Initialize initial language
  setLanguage(currentLang);
});

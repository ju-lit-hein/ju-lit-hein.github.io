import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

type CmsTranslation = {
  hero?: Record<string, string>;
  about?: Record<string, unknown> & { education?: Record<string, string>; interests?: string[] };
  capabilities?: Record<string, unknown> & { rows?: Array<Record<string, unknown>> };
  projects?: Array<Record<string, unknown>>;
};

const resources = {
  fr: {
    translation: {
      nav: { home: 'Accueil', about: 'À propos', skills: 'Compétences', projects: 'Projets', contact: 'Contact', letsTalk: 'Parlons-en' },
      actions: { openTerminal: 'Ouvrir le terminal', closeTerminal: 'Fermer le terminal', closeResume: 'Fermer le CV', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', switchToDark: 'Passer au mode sombre', switchToLight: 'Passer au mode clair', openNewTab: 'Ouvrir {{name}} dans un nouvel onglet', selectedWork: 'Voir les projets sélectionnés', conversation: 'Démarrer une conversation', downloadResume: 'Télécharger le CV', viewMoreGithub: 'Voir plus de projets sur GitHub' },
      language: { switch: 'Passer en anglais', current: 'FR', next: 'EN' },
      hero: {
        availability: 'Disponible pour des opportunités en ingénierie logicielle',
        tagline: 'Je conçois des logiciels et des applications web complets.',
        description: "Ingénieur logiciel, je travaille à l'intersection de la performance et de l'expérience : systèmes bas niveau, graphisme temps réel et produits web pensés dans leurs moindres détails.",
        currentChapter: 'Chapitre actuel',
        chapterDate: '2026 / 01',
        chapterTitle: 'Construire les outils derrière les outils.',
        chapterDescription: "Je termine mon cursus d'ingénierie logicielle tout en développant un moteur 3D basé sur Vulkan et des bibliothèques d'interface open source.",
        location: 'La Réunion / Corée du Sud',
        yearsCoding: 'années de code',
        coreLanguage: 'langage principal',
        findMe: 'Me retrouver ailleurs',
        links: { github: 'GitHub', linkedin: 'LinkedIn', instagram: 'Instagram', resume: 'Mon CV' },
      },
      about: {
        label: '01 / À propos',
        title: 'Curieux par nature.\nPrécis par pratique.',
        disciplines: 'Systèmes / Graphisme / Web',
        paragraphs: [
          "Je suis Julien, ingénieur logiciel en formation à Epitech. Je partage actuellement mon temps entre la programmation système, le graphisme temps réel et le développement web full-stack.",
          "Le C m'a appris à respecter la mémoire, les contraintes et la forme d'une interface bien conçue. Depuis, j'ai approfondi mes connaissances en C++, Python, Rust et TypeScript moderne.",
          "Mes projets préférés sont proches de la machine : moteurs de jeu, moteurs de rendu, outils pour développeurs et bibliothèques qui rendent les systèmes complexes plus simples à utiliser. J'aime aussi aller jusqu'à l'expérience web finale.",
          "En dehors de l'éditeur, j'explore La Réunion à moto et je cherche les idées qui se comprennent mieux en les construisant.",
        ],
        education: 'Formation',
        epitechDegree: "Master en ingénierie logicielle",
        exchange: "Année d'échange en informatique / Corée du Sud",
        bring: "Ce que j'apporte",
        interests: ['Pensée bas niveau', 'Programmation graphique', 'Curiosité produit', 'Goût de la performance', 'Open source'],
      },
      capabilities: {
        label: '02 / Compétences',
        title: 'Le bon outil\npour le bon problème.',
        intro: "Je travaille sur toute la chaîne, d'une disposition mémoire à une mise en page de composant. Le fil conducteur : une ingénierie réfléchie.",
        workingPrinciples: 'Principes de travail',
        principles: ['Rendre la complexité lisible', "Mesurer avant d'optimiser", 'Laisser les systèmes mieux documentés', "Construire pour la personne qui l'utilise"],
        approach: 'Approche',
        metrics: { years: 'années de pratique', disciplines: 'disciplines principales', curiosity: 'curiosité', detail: 'attention au détail' },
        rows: {
          systems: { title: 'Systèmes & logiciels', description: "Concevoir des logiciels fiables au plus près de la machine, avec une attention portée à la mémoire, à l'architecture et à la maintenabilité.", tools: ['C', 'C++', 'Rust', 'Python'] },
          graphics: { title: 'Graphisme temps réel', description: 'Construire des moteurs de rendu, des moteurs de jeu et des expériences interactives où performance et clarté visuelle se rencontrent.', tools: ['Vulkan', 'OpenGL', 'OpenGL ES', 'SDL', 'OpenXR'] },
          web: { title: 'Produits web', description: 'Transformer des idées complexes en interfaces rapides et accessibles, avec une vraie direction et une implémentation propre.', tools: ['React', 'Next.js', 'TypeScript', 'Vite', 'Tailwind'] },
          practice: { title: 'Pratiques d’ingénierie', description: "Créer un environnement de développement où les équipes avancent vite sans perdre confiance dans le résultat.", tools: ['Git', 'CMake', 'Tests', 'Débogage', 'Documentation'] },
        },
      },
      projects: {
        label: '03 / Projets sélectionnés',
        title: 'Conçus pour être\ncompris.',
        period: "2019 — AUJOURD'HUI",
        inspect: 'Cliquer sur un projet pour voir les détails',
        keyFeatures: 'Fonctionnalités clés',
        viewMore: 'Voir plus de projets sur GitHub',
        items: {
          gameengine1: { title: 'Moteur de jeu bas niveau', description: "Un moteur de jeu complet en C++ avec OpenGL et OpenAL, pensé pour être modulaire et simple à utiliser.", features: ['Chargement et rendu de modèles 3D', "Encapsulation complète des API OpenGL et OpenAL", 'Gestion et compilation des shaders', "Intégration d'une interface ImGui encapsulée"] },
          gameengine2: { title: 'Moteur de jeu', description: 'Un moteur de jeu complet en C++, centré sur des fonctionnalités intégrées.', features: ['Architecture Entity Component System (ECS)', 'Intégration de moteurs audio et mathématiques', 'Structures de données économes en mémoire', "Système d'événements basé sur le pattern Observer", 'Système de logs pour le débogage'] },
          raytracer: { title: 'Raytracer', description: "Un raytracer en C++ avec rendu en direct et export au format PNG.", features: ["Algorithmes d'intersection rayon-objet", 'Modèles de shading diffuse et spéculaire', 'Gestion de caméra et de scènes par fichiers de configuration', 'Rendu multithread pour les performances', 'Déplacement de caméra et manipulation de scène en direct', 'Export des images en PNG'] },
          guillaume: { title: 'guillaume', description: "Un framework UI en C++ pour les applications desktop et extended reality (XR). Le projet est en développement dans le cadre de mon projet de fin d'études.", features: ['Intégration 3D', 'Support multiplateforme', 'Thèmes personnalisables', 'Composants UI riches'] },
        },
      },
      contact: {
        label: '04 / Contact',
        title: 'Construisons\nquelque chose\ndutile.',
        description: "Je suis ouvert aux échanges autour de postes d'ingénieur logiciel, d'outils ambitieux et de collaborations où les détails comptent.",
        shortVersion: 'Envie de la version courte ?',
        shortDescription: 'Expérience, formation et projets sélectionnés.',
        noteLabel: 'Une note pour les futurs collaborateurs',
        note: 'Le bon travail est rigoureux, généreux et légèrement surprenant.',
      },
      footer: { built: 'Construit avec', terminal: 'Accès terminal :', intention: 'Construit avec intention.' },
      resume: { back: 'Retour au portfolio', label: 'Sélection du CV', preview: 'Aperçu du CV', title: 'Le bon CV\npour le bon contexte.', intro: 'Choisissez une version adaptée à votre lecture. La version visuelle est pensée pour les personnes, la version ATS pour les systèmes de recrutement.', formatTitle: 'Format', languageTitle: 'Langue', formats: { pretty: { title: 'Visuel', description: 'Une présentation soignée pour une lecture humaine et un premier contact.' }, ats: { title: 'Compatible ATS', description: 'Une structure claire et lisible par les logiciels de recrutement.' } }, languages: { fr: 'Français', en: 'Anglais' }, selected: '{{format}} · {{language}}', open: 'Ouvrir le CV', changeSelection: 'Modifier la sélection', openNewTab: 'Ouvrir dans un nouvel onglet' },
      admin: { back: 'Retour au portfolio', label: 'Administration', title: 'Accès privé.', intro: 'Connectez-vous pour gérer le contenu publié sur votre portfolio.', password: 'Mot de passe', checking: 'Vérification…', signIn: 'Se connecter', signOut: 'Se déconnecter', invalidPassword: 'Mot de passe invalide.', connectionError: 'Impossible de joindre le serveur d’authentification.', loadError: 'Impossible de charger le contenu.', saveError: 'Impossible d’enregistrer le contenu.', invalidJson: 'Le JSON est invalide.', saved: 'Contenu enregistré.', loading: 'Chargement du contenu…', save: 'Enregistrer', dashboard: 'CMS du portfolio', connectedTitle: 'Authentification réussie', connectedDescription: 'Votre session administrateur est active.', editorTitle: 'Éditeur de contenu', editorDescription: 'Modifiez chaque donnée du document JSON puis enregistrez. Les changements sont publiés sans redéploiement.', },
      terminal: {
        title: 'Terminal',
        welcome: "Bienvenue dans le terminal de Julien ! Tapez « help » pour voir les commandes disponibles.",
        help: '\nCommandes disponibles :\n  help                Afficher ce message d’aide\n  about               À propos de moi\n  goto [section]      Aller à une section\n  skills              Lister mes compétences\n  projects            Voir mes projets\n  clear               Effacer le terminal\n  exit                Fermer le terminal\n',
        about: '\nJULIEN FERDINAND\n-----------------\nÉtudiant en quatrième année à Epitech, actuellement à Inha University, en Corée du Sud\nPassionné par la programmation système et le développement logiciel\nÀ l’aise en C, C++, React/Next.js et dans les environnements Linux/macOS\n',
        skills: '\nCompétences techniques :\n-----------------\nLangages : C, C++, Bash/Shell, Python, Rust, JavaScript/TypeScript\nFrameworks : React, Next.js, Vite, Tailwind CSS\nSystèmes : Linux, macOS, gestion mémoire, concurrence\nOutils : Git & GitHub, scripts Bash, outils de débogage, VS Code, Make/CMake\nAutre : algorithmes, structures de données, architecture logicielle, tests unitaires\n',
        projects: '\nProjets :\n-----------------\n1. Shell personnalisé - Un shell Unix fonctionnel écrit en C\n2. Mini compilateur - Un compilateur pour un langage simplifié\n3. Composants de moteur de jeu - Des composants modulaires en Rust\n4. Moniteur système Linux - Un outil de supervision en terminal\n\nTapez « goto projects » pour voir les projets détaillés.\n',
        missingDestination: 'Erreur : veuillez préciser une destination. Essayez « goto projects »',
        navigating: 'Navigation vers la section {{section}}…',
        unknownDestination: 'Erreur : destination inconnue « {{destination}} »',
        notFound: 'Commande introuvable : {{command}}. Tapez « help » pour voir les commandes disponibles.',
        inputLabel: 'Saisir une commande',
      },
    },
  },
  en: {
    translation: {
      nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact', letsTalk: "Let's talk" },
      actions: { openTerminal: 'Open terminal', closeTerminal: 'Close terminal', closeResume: 'Close resume', openMenu: 'Open menu', closeMenu: 'Close menu', switchToDark: 'Switch to dark mode', switchToLight: 'Switch to light mode', openNewTab: 'Open {{name}} in a new tab', selectedWork: 'Explore selected work', conversation: 'Start a conversation', downloadResume: 'Download resume', viewMoreGithub: 'View more on GitHub' },
      language: { switch: 'Passer en français', current: 'EN', next: 'FR' },
      hero: { availability: 'Available for software engineering opportunities', tagline: 'I build complete software and web applications.', description: 'Software engineer focused on the space where performance meets experience: low-level systems, real-time graphics, and web products that feel considered from the first interaction.', currentChapter: 'Current chapter', chapterDate: '2026 / 01', chapterTitle: 'Building the tools behind the tools.', chapterDescription: 'Finishing my software engineering degree while developing a Vulkan-based 3D engine and open-source UI libraries.', location: 'Reunion / South Korea', yearsCoding: 'years coding', coreLanguage: 'core language', findMe: 'Find me elsewhere', links: { github: 'GitHub', linkedin: 'LinkedIn', instagram: 'Instagram', resume: 'My resume' } },
      about: { label: '01 / About', title: 'Curious by default.\nPrecise by practice.', disciplines: 'Systems / Graphics / Web', paragraphs: ["I'm Julien, a software engineer in training at Epitech, currently splitting my time between systems programming, real-time graphics, and full-stack web development.", 'Starting with C gave me a lasting respect for memory, constraints, and the shape of a well-designed interface. Since then, I have moved through C++, Python, Rust, and modern TypeScript tooling.', 'My favorite work sits close to the metal: game engines, renderers, developer tools, and libraries that make complex systems easier to use. I also care about the final surface, which is why I enjoy carrying a project all the way to a thoughtful web experience.', 'Outside the editor, I explore Reunion by motorcycle and keep an eye out for ideas that are better understood by building them.'], education: 'Education', epitechDegree: "Master's Degree in Software Engineering", exchange: 'Exchange year in Computer Science / South Korea', bring: 'What I bring', interests: ['Low-level thinking', 'Graphics programming', 'Product curiosity', 'Performance focus', 'Open source'] },
      capabilities: { label: '02 / Capabilities', title: 'The right tool\nfor the job.', intro: 'I work across the stack, moving comfortably from a memory layout to a component layout. The common thread is thoughtful engineering.', workingPrinciples: 'Working principles', principles: ['Make complexity legible', 'Measure before optimizing', 'Leave systems better documented', 'Build for the person using it'], approach: 'Approach', metrics: { years: 'years building', disciplines: 'core disciplines', curiosity: 'curiosity', detail: 'careful detail' }, rows: { systems: { title: 'Systems & software', description: 'Designing reliable software close to the machine, with attention to memory, architecture, and maintainability.', tools: ['C', 'C++', 'Rust', 'Python'] }, graphics: { title: 'Real-time graphics', description: 'Building renderers, engines, and interactive experiences where performance and visual clarity meet.', tools: ['Vulkan', 'OpenGL', 'OpenGL ES', 'SDL', 'OpenXR'] }, web: { title: 'Web products', description: 'Turning complex ideas into fast, accessible interfaces with a strong point of view and a clean implementation.', tools: ['React', 'Next.js', 'TypeScript', 'Vite', 'Tailwind'] }, practice: { title: 'Engineering practice', description: 'Creating a development environment where teams can move quickly without losing confidence in the work.', tools: ['Git', 'CMake', 'Testing', 'Debugging', 'Documentation'] } } },
      projects: { label: '03 / Selected work', title: 'Built to be\nunderstood.', period: '2019 — PRESENT', inspect: 'Click a project to inspect the details', keyFeatures: 'Key features', viewMore: 'View more on GitHub', items: { gameengine1: { title: 'Low-level Game Engine', description: 'A complete game engine built in C++ with OpenGL and OpenAL, focused on modularity and ease of use.', features: ['3D model loading and rendering', 'Full encapsulation of OpenGL and OpenAL APIs', 'Shader management and compilation', 'GUI engine integration with ImGui'] }, gameengine2: { title: 'Game Engine', description: 'A complete game engine built in C++, focused on integrated features.', features: ['Entity Component System (ECS) architecture', 'Integrated sound and math engines', 'Memory-efficient data structures', 'Event system using the Observer pattern', 'Logging system for debugging'] }, raytracer: { title: 'Raytracer', description: 'A C++ raytracer with live rendering and PNG export.', features: ['Ray-object intersection algorithms', 'Diffuse and specular shading models', 'Camera and scene management through config files', 'Multithreaded rendering for performance', 'Runtime camera and scene manipulation', 'PNG image output'] }, guillaume: { title: 'guillaume', description: 'A C++ UI framework for modern desktop and extended reality (XR) applications, currently developed as part of my final project.', features: ['3D integration', 'Cross-platform support', 'Customizable themes', 'Rich UI components'] } } },
      contact: { label: '04 / Contact', title: "Let's make\nsomething useful.", description: "I'm open to conversations about software engineering roles, ambitious tools, and collaborations where the details matter.", shortVersion: 'Want the short version?', shortDescription: 'Experience, education, and selected work.', noteLabel: 'A note for future collaborators', note: 'Good work is rigorous, generous, and a little bit surprising.' },
      footer: { built: 'Built with', terminal: 'Terminal access:', intention: 'Built with intention.' },
      resume: { back: 'Back to portfolio', label: 'Resume selection', preview: 'Resume preview', title: 'The right resume\nfor the right context.', intro: 'Choose the version that fits the reader. The visual version is made for people, the ATS version for recruiting systems.', formatTitle: 'Format', languageTitle: 'Language', formats: { pretty: { title: 'Visual', description: 'A considered presentation for human readers and a strong first impression.' }, ats: { title: 'ATS-ready', description: 'A clear structure designed to be read by recruitment software.' } }, languages: { fr: 'French', en: 'English' }, selected: '{{format}} · {{language}}', open: 'Open resume', changeSelection: 'Change selection', openNewTab: 'Open in a new tab' },
      admin: { back: 'Back to portfolio', label: 'Administration', title: 'Private access.', intro: 'Sign in to manage the content published on your portfolio.', password: 'Password', checking: 'Checking…', signIn: 'Sign in', signOut: 'Sign out', invalidPassword: 'Invalid password.', connectionError: 'Unable to reach the authentication server.', loadError: 'Unable to load content.', saveError: 'Unable to save content.', invalidJson: 'The JSON is invalid.', saved: 'Content saved.', loading: 'Loading content…', save: 'Save changes', dashboard: 'Portfolio CMS', connectedTitle: 'Authentication successful', connectedDescription: 'Your admin session is active.', editorTitle: 'Content editor', editorDescription: 'Edit every data field in the JSON document and save. Changes are published without a redeploy.', },
      terminal: { title: 'Terminal', welcome: "Welcome to Julien's terminal! Type \"help\" to see available commands.", help: '\nAvailable commands:\n  help                Show this help message\n  about               About me\n  goto [section]      Navigate to a section\n  skills              List my technical skills\n  projects            View my projects\n  clear               Clear the terminal\n  exit                Close the terminal\n', about: '\nJULIEN FERDINAND\n-----------------\nFourth-year IT student at Epitech, currently at Inha University, South Korea\nPassionate about systems programming and software development\nProficient in C, C++, React/Next.js, and comfortable in Linux/macOS environments\n', skills: '\nTechnical Skills:\n-----------------\nLanguages: C, C++, Bash/Shell, Python, Rust, JavaScript/TypeScript\nFrameworks: React, Next.js, Vite, Tailwind CSS\nSystems: Linux, macOS, Memory Management, Concurrency\nTools: Git & GitHub, Bash Scripting, Debugging Tools, VS Code, Make/CMake\nOther: Algorithms, Data Structures, Software Architecture, Unit Testing\n', projects: '\nProjects:\n-----------------\n1. Custom Shell Implementation - A fully functional Unix shell written in C\n2. Mini Compiler - A compiler for a simplified programming language\n3. Game Engine Components - Modular game engine components in Rust\n4. Linux System Monitor - Terminal-based system monitoring tool\n\nType "goto projects" to view detailed project information.\n', missingDestination: 'Error: Please specify a destination. Try "goto projects"', navigating: 'Navigating to {{section}} section...', unknownDestination: 'Error: Unknown destination "{{destination}}"', notFound: 'Command not found: {{command}}. Type "help" for available commands.', inputLabel: 'Enter a command' },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'fr',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (language) => localStorage.setItem('language', language));

const loadPortfolioContent = async (): Promise<boolean> => {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return false;

  try {
    const response = await fetch(`${url}/rest/v1/portfolio_content?id=eq.default&select=content`, { headers: { apikey: anonKey } });
    if (!response.ok) return false;
    const rows = await response.json() as Array<{ content?: Record<string, unknown> }>;
    const content = rows[0]?.content;
    if (!content) return false;

    const hasLanguageContent = (language: string): language is 'fr' | 'en' => {
      const value = content[language];
      return Boolean(value && typeof value === 'object');
    };

    (['fr', 'en'] as const).forEach((language) => {
      const translated = hasLanguageContent(language) ? content[language] as CmsTranslation : null;
      if (!translated) return;
      const projects = Array.isArray(translated.projects) ? translated.projects : [];
      i18n.addResourceBundle(language, 'translation', {
        hero: translated.hero,
        about: { ...translated.about, education: translated.about?.education?.primary, epitechDegree: translated.about?.education?.primaryDegree, exchange: translated.about?.education?.exchangeDescription, interests: translated.about?.interests },
        capabilities: { ...translated.capabilities, rows: Object.fromEntries((translated.capabilities?.rows ?? []).map((row: Record<string, unknown>) => [row.id, row])) },
        projects: { items: Object.fromEntries(projects.map((project: Record<string, unknown>) => [project.id, project])) },
      }, true, true);
    });
    return true;
  } catch {
    // The source translations remain available when the CMS is unreachable.
    return false;
  }
};

export const portfolioContentReady = loadPortfolioContent();

export default i18n;

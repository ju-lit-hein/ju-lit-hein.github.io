create table if not exists public.portfolio_content (
  id text primary key default 'default',
  content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default timezone('utc', now())
);

alter table public.portfolio_content enable row level security;

drop policy if exists "Public can read portfolio content" on public.portfolio_content;
create policy "Public can read portfolio content"
  on public.portfolio_content
  for select
  to anon, authenticated
  using (true);

grant select on public.portfolio_content to anon, authenticated;

create or replace function public.set_portfolio_content_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists portfolio_content_updated_at on public.portfolio_content;
create trigger portfolio_content_updated_at
  before update on public.portfolio_content
  for each row
  execute function public.set_portfolio_content_updated_at();

insert into public.portfolio_content (id, content)
values (
  'default',
  $$
  {
    "site": {
      "name": "Julien Ferdinand",
      "role": "Software Engineer",
      "email": "julien.ferdinand@epitech.eu",
      "location": "Reunion / South Korea",
      "social": {
        "github": "https://github.com/ju-lit-hein",
        "linkedin": "https://www.linkedin.com/in/julienferdinand",
        "instagram": "https://www.instagram.com/julithein"
      }
    },
    "resume": {
      "prettyFr": "/assets/cv_pretty_fr.pdf",
      "prettyEn": "/assets/cv_pretty_en.pdf",
      "atsFr": "/assets/cv_ats_fr.pdf",
      "atsEn": "/assets/cv_ats_en.pdf"
    },
    "fr": {
      "hero": {
        "availability": "Disponible pour des opportunités en ingénierie logicielle",
        "tagline": "Je conçois des logiciels et des applications web complets.",
        "description": "Ingénieur logiciel, je travaille à l'intersection de la performance et de l'expérience : systèmes bas niveau, graphisme temps réel et produits web pensés dans leurs moindres détails.",
        "chapterTitle": "Construire les outils derrière les outils.",
        "chapterDescription": "Je termine mon cursus d'ingénierie logicielle tout en développant un moteur 3D basé sur Vulkan et des bibliothèques d'interface open source."
      },
      "about": {
        "paragraphs": [
          "Je suis Julien, ingénieur logiciel en formation à Epitech. Je partage actuellement mon temps entre la programmation système, le graphisme temps réel et le développement web full-stack.",
          "Le C m'a appris à respecter la mémoire, les contraintes et la forme d'une interface bien conçue. Depuis, j'ai approfondi mes connaissances en C++, Python, Rust et TypeScript moderne.",
          "Mes projets préférés sont proches de la machine : moteurs de jeu, moteurs de rendu, outils pour développeurs et bibliothèques qui rendent les systèmes complexes plus simples à utiliser.",
          "En dehors de l'éditeur, j'explore La Réunion à moto et je cherche les idées qui se comprennent mieux en les construisant."
        ],
        "education": {
          "primary": "Epitech Reunion",
          "primaryDegree": "Master en ingénierie logicielle",
          "exchange": "Inha University",
          "exchangeDescription": "Année d'échange en informatique / Corée du Sud"
        },
        "interests": ["Pensée bas niveau", "Programmation graphique", "Curiosité produit", "Goût de la performance", "Open source"]
      },
      "capabilities": {
        "intro": "Je travaille sur toute la chaîne, d'une disposition mémoire à une mise en page de composant. Le fil conducteur : une ingénierie réfléchie.",
        "principles": ["Rendre la complexité lisible", "Mesurer avant d'optimiser", "Laisser les systèmes mieux documentés", "Construire pour la personne qui l'utilise"],
        "rows": [
          {"id": "systems", "title": "Systèmes & logiciels", "description": "Concevoir des logiciels fiables au plus près de la machine, avec une attention portée à la mémoire, à l'architecture et à la maintenabilité.", "tools": ["C", "C++", "Rust", "Python"]},
          {"id": "graphics", "title": "Graphisme temps réel", "description": "Construire des moteurs de rendu, des moteurs de jeu et des expériences interactives où performance et clarté visuelle se rencontrent.", "tools": ["Vulkan", "OpenGL", "OpenGL ES", "SDL", "OpenXR"]},
          {"id": "web", "title": "Produits web", "description": "Transformer des idées complexes en interfaces rapides et accessibles, avec une vraie direction et une implémentation propre.", "tools": ["React", "Next.js", "TypeScript", "Vite", "Tailwind"]},
          {"id": "practice", "title": "Pratiques d'ingénierie", "description": "Créer un environnement de développement où les équipes avancent vite sans perdre confiance dans le résultat.", "tools": ["Git", "CMake", "Tests", "Débogage", "Documentation"]}
        ]
      },
      "projects": [
        {"id": "gameengine1", "title": "Moteur de jeu bas niveau", "description": "Un moteur de jeu complet en C++ avec OpenGL et OpenAL, pensé pour être modulaire et simple à utiliser.", "tags": ["C++", "Game Development", "OpenGL", "OpenAL", "ImGui"], "github": "https://github.com/etib-corp/etib-game-engine", "features": ["Chargement et rendu de modèles 3D", "Encapsulation complète des API OpenGL et OpenAL", "Gestion et compilation des shaders", "Intégration d'une interface ImGui encapsulée"]},
        {"id": "gameengine2", "title": "Moteur de jeu", "description": "Un moteur de jeu complet en C++, centré sur des fonctionnalités intégrées.", "tags": ["C++", "Game Development", "ECS", "SFML", "Scripting"], "github": "https://github.com/etib-corp/lion-engine", "features": ["Architecture Entity Component System (ECS)", "Intégration de moteurs audio et mathématiques", "Structures de données économes en mémoire", "Système d'événements basé sur le pattern Observer", "Système de logs pour le débogage"]},
        {"id": "raytracer", "title": "Raytracer", "description": "Un raytracer en C++ avec rendu en direct et export au format PNG.", "tags": ["C++", "Raytracing", "SFML", "Math"], "github": "https://github.com/etib-corp/raytracer", "features": ["Algorithmes d'intersection rayon-objet", "Modèles de shading diffuse et spéculaire", "Gestion de caméra et de scènes par fichiers de configuration", "Rendu multithread pour les performances", "Déplacement de caméra et manipulation de scène en direct", "Export des images en PNG"]},
        {"id": "guillaume", "title": "guillaume", "description": "Un framework UI en C++ pour les applications desktop et extended reality (XR).", "tags": ["C++", "Software Development", "3D"], "github": "https://github.com/etib-corp/guillaume", "features": ["Intégration 3D", "Support multiplateforme", "Thèmes personnalisables", "Composants UI riches"]}
      ]
    },
    "en": {
      "hero": {
        "availability": "Available for software engineering opportunities",
        "tagline": "I build complete software and web applications.",
        "description": "Software engineer focused on the space where performance meets experience: low-level systems, real-time graphics, and web products that feel considered from the first interaction.",
        "chapterTitle": "Building the tools behind the tools.",
        "chapterDescription": "Finishing my software engineering degree while developing a Vulkan-based 3D engine and open-source UI libraries."
      },
      "about": {
        "paragraphs": [
          "I'm Julien, a software engineer in training at Epitech, currently splitting my time between systems programming, real-time graphics, and full-stack web development.",
          "Starting with C gave me a lasting respect for memory, constraints, and the shape of a well-designed interface. Since then, I have moved through C++, Python, Rust, and modern TypeScript tooling.",
          "My favorite work sits close to the metal: game engines, renderers, developer tools, and libraries that make complex systems easier to use.",
          "Outside the editor, I explore Reunion by motorcycle and keep an eye out for ideas that are better understood by building them."
        ],
        "education": {"primary": "Epitech Reunion", "primaryDegree": "Master's Degree in Software Engineering", "exchange": "Inha University", "exchangeDescription": "Exchange year in Computer Science / South Korea"},
        "interests": ["Low-level thinking", "Graphics programming", "Product curiosity", "Performance focus", "Open source"]
      },
      "capabilities": {
        "intro": "I work across the stack, moving comfortably from a memory layout to a component layout. The common thread is thoughtful engineering.",
        "principles": ["Make complexity legible", "Measure before optimizing", "Leave systems better documented", "Build for the person using it"],
        "rows": [
          {"id": "systems", "title": "Systems & software", "description": "Designing reliable software close to the machine, with attention to memory, architecture, and maintainability.", "tools": ["C", "C++", "Rust", "Python"]},
          {"id": "graphics", "title": "Real-time graphics", "description": "Building renderers, engines, and interactive experiences where performance and visual clarity meet.", "tools": ["Vulkan", "OpenGL", "OpenGL ES", "SDL", "OpenXR"]},
          {"id": "web", "title": "Web products", "description": "Turning complex ideas into fast, accessible interfaces with a strong point of view and a clean implementation.", "tools": ["React", "Next.js", "TypeScript", "Vite", "Tailwind"]},
          {"id": "practice", "title": "Engineering practice", "description": "Creating a development environment where teams can move quickly without losing confidence in the work.", "tools": ["Git", "CMake", "Testing", "Debugging", "Documentation"]}
        ]
      },
      "projects": [
        {"id": "gameengine1", "title": "Low-level Game Engine", "description": "A complete game engine built in C++ with OpenGL and OpenAL, focused on modularity and ease of use.", "tags": ["C++", "Game Development", "OpenGL", "OpenAL", "ImGui"], "github": "https://github.com/etib-corp/etib-game-engine", "features": ["3D model loading and rendering", "Full encapsulation of OpenGL and OpenAL APIs", "Shader management and compilation", "GUI engine integration with ImGui"]},
        {"id": "gameengine2", "title": "Game Engine", "description": "A complete game engine built in C++, focused on integrated features.", "tags": ["C++", "Game Development", "ECS", "SFML", "Scripting"], "github": "https://github.com/etib-corp/lion-engine", "features": ["Entity Component System (ECS) architecture", "Integrated sound and math engines", "Memory-efficient data structures", "Event system using the Observer pattern", "Logging system for debugging"]},
        {"id": "raytracer", "title": "Raytracer", "description": "A C++ raytracer with live rendering and PNG export.", "tags": ["C++", "Raytracing", "SFML", "Math"], "github": "https://github.com/etib-corp/raytracer", "features": ["Ray-object intersection algorithms", "Diffuse and specular shading models", "Camera and scene management through config files", "Multithreaded rendering for performance", "Runtime camera and scene manipulation", "PNG image output"]},
        {"id": "guillaume", "title": "guillaume", "description": "A C++ UI framework for modern desktop and extended reality (XR) applications.", "tags": ["C++", "Software Development", "3D"], "github": "https://github.com/etib-corp/guillaume", "features": ["3D integration", "Cross-platform support", "Customizable themes", "Rich UI components"]}
      ]
    }
  }
  $$::jsonb
)
on conflict (id) do update set content = excluded.content, updated_at = timezone('utc', now());

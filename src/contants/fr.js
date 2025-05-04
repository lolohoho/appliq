import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ocde,
  sg,
  carrefour,
  pw,
  go,
  lr,
  astro,
  gw,
  ap,
  sh,
  ga
} from "../assets";


const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Expérience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const textes = {
  title: "Développeur JavaScript Full-Stack",
  hi: " Salut, moi c'est",
  hero1: "Je crée des visuels 3D, des interfaces",
  hero2: "utilisateur et des applications web",
  work: `Les projets suivants mettent en avant mes compétences et mon expérience à travers des exemples concrets de mon travail.
   Chaque projet est brièvement décrit avec des liens vers les dépôts de code et des démonstrations en ligne.
    Ils illustrent ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies et à gérer des projets efficacement.`,
  about: `Je suis un développeur logiciel expérimenté en TypeScript et JavaScript, avec une expertise sur des frameworks comme React, Node.js et Next.js. 
    J’apprends vite et je créer des solutions efficaces, évolutives et intuitives qui répondent à de vrais besoins.
     Travaillons ensemble pour donner vie à vos idées !`
}


const services = [
  {
    title: "Développeur Web",
    icon: web,
  },
  {
    title: "Développeur React",
    icon: mobile,
  },
  {
    title: "Développeur Backend",
    icon: backend,
  },
  {
    title: "Créateur de contenu",
    icon: creator,
  },
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Développeur JavaScript",
    company_name: "Carrefour",
    icon: carrefour,
    iconBg: "#E6DEDD",
    date: "Août 2007 - Septembre 2008",
    points: [
      "Travail en équipe pour développer la première grande plateforme de e-commerce alimentaire en France.",
      "Utilisation de .NET, JavaScript, CSS et HTML pour construire et améliorer la plateforme, garantissant une expérience utilisateur fluide et de hautes performances.",
      "Mise en place d'un design responsive et assurance de la compatibilité multi-navigateurs.",
    ],
  },
  {
    title: "Développeur Web",
    company_name: "OCDE",
    icon: ocde,
    iconBg: "#E6DEDD",
    date: "Février 2009 - Février 2010",
    points: [
      "Développement complet d'un site web pour l'OCDE, incluant l'implémentation front-end et back-end pour assurer une expérience robuste et conviviale.",
      "Collaboration avec des équipes pluridisciplinaires pour créer un produit de haute qualité.",
    ],
  },
  {
    title: "Développeur Full-Stack",
    company_name: "Société Générale",
    icon: sg,
    iconBg: "#E6DEDD",
    date: "Mars 2010 - Octobre 2010",
    points: [
      "Refonte et développement d'une application de trading, améliorant les performances, l'évolutivité et l'expérience utilisateur sur toute la stack.",
      "Développement d'une interface de recherche avancée pour l'annuaire, optimisant l'utilisabilité et la performance grâce à un filtrage dynamique et une navigation intuitive.",
    ],
  },
  {
    title: "Développeur Backend",
    company_name: "Go Voyages",
    icon: go,
    iconBg: "#E6DEDD",
    date: "Octobre 2010 - Juillet 2011",
    points: [
      "Développement d'un service web en C# pour la réservation de billets d'avion, garantissant fiabilité, évolutivité et intégration transparente avec des systèmes externes.",
    ],
  },
  {
    title: "Architecte Logiciel & Chef de Projet",
    company_name: "Plug Wine",
    icon: pw,
    iconBg: "#E6DEDD",
    date: "Avril 2012 - Mai 2014",
    points: [
      "Direction du développement et gestion de projet d'une application web pour la génération automatique de sites.",
      "Conception de l'architecture, coordination de l'équipe et garantie d'un déploiement et d'une évolutivité sans faille.",
    ],
  },
  {
    title: "Directeur d'une Agence Web",
    company_name: "LR",
    icon: lr,
    iconBg: "#E6DEDD",
    date: "Septembre 2016 - Aujourd'hui",
    points: [
      "Gestion et développement de divers projets web, création de sites et d'applications complexes.",
      "Spécialisation en React, Next.js, Tailwind CSS et Three.js, offrant des designs UI/UX avancés et des expériences interactives en 3D.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "Je pensais qu'il était impossible de créer un site aussi beau que notre produit, mais Laurent m'a prouvé le contraire.",
    name: "Éléonore Poirier",
    designation: "Directrice financière (CFO)",
    company: "Six Web Agy",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Je n'ai jamais rencontré un développeur web aussi investi dans la réussite de ses clients que Laurent.",
    name: "Ellis McAllister",
    designation: "Directeur des opérations (COO)",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Après l'optimisation de notre site par Laurent, notre trafic a augmenté de 50 %. Nous ne le remercierons jamais assez !",
    name: "Mei Xiu",
    designation: "Directrice technique (CTO)",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const projects = [

  {
    name: "Web Agency",
    description:
      "Agence web experte en développement full stack, avec les technologies les plus modernes : Next.js, Tailwind CSS, et un stack à la pointe pour des apps performantes et scalables",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: ap,
    source_code_link: "https://www.appliq.fr",
  },
  {
    name: "Reseau Social",
    description:
      "Réseau social personnalisé développé avec Next.js, intégrant un système d'abonnement payant et la vente de produits dérivés",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: sh,
    source_code_link: "https://shareclub.appliq.fr",
  },
  {
    name: "Image Gallerie",
    description:
      "Galerie d'images entièrement responsive, développée avec Next.js et Tailwind CSS, pour une expérience fluide sur tous les appareils.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "chadcn",
        color: "pink-text-gradient",
      },
    ],
    image: ga,
    source_code_link: "https://gallery.appliq.fr",
  },
  {
    name: "Location de voitures",
    description:
      "Plateforme web permettant aux utilisateurs de rechercher, réserver et gérer la location de voitures auprès de divers fournisseurs, offrant ainsi une solution pratique et efficace pour les besoins de transport.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "AstroAlgos",
    description:
      "Une application web permettant aux utilisateurs d'explorer le système solaire à travers des visualisations 3D dynamiques. Alimentée par des algorithmes astronomiques, elle fournit des positions planétaires en temps réel, des orbites, des trajectoires écliptiques, ainsi que des étoiles, constellations, lunes et autres objets célestes.",
    tags: [
      {
        name: "Algorithmique",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: astro,
    source_code_link: "https://www.astroalgos.com/",
  },
  {
    name: "Réchauffement climatique",
    description:
      "Une application web présentant les données officielles sur le climat provenant de la NASA, NOAA et ECAD. Les utilisateurs peuvent explorer les tendances des températures mondiales et locales, suivre la fonte des glaciers et analyser les niveaux de CO₂ grâce à des visualisations interactives.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: gw,
    source_code_link: "https://www.globalwarming.site/fr",
  },
];
const contact = {
  title: "Entrer en contact",
  subtitle: "Contact",
  thankyou: "Merci. Je vous recontacterai dès que possible.",
  error: "Ahh, quelque chose s'est mal passé. Veuillez réessayer.",
  name: "Votre nom",
  email: "Votre e-mail",
  message: "Votre message",
  placeholder: {
    name: "Quel est votre nom ?",
    email: "Quelle est votre adresse web ?",
    message: "Que souhaitez-vous dire ?"
  }
};



export const fr = { services, technologies, experiences, testimonials, projects, navLinks, textes, contact };

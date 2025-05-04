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

 const  navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const textes ={
  title : "Full-Stack JavaScript Developer",
  hi:"Hi, I'm",
  hero1 :"I develop 3D visuals, user",
  hero2 :"interfaces and web applications",
  work : `Following projects showcases my skills and experience through 
          real-world examples of my work. Each project is briefly described with _
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.`,
  about:`I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js and Next.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!`

}

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "JavaScript Developer",
    company_name: "Carrefour",
    icon: carrefour,
    iconBg: "#E6DEDD",
    date: "August 2007 - September 2008",
    points: [
      "Worked as part of a team to develop France's first major retail e-commerce platform for food.",
      "Used .NET, JavaScript, CSS, and HTML to build and enhance the platform, ensuring a seamless user experience and high performance.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
 
    ],
  },
  {
    title: "Web Developer",
    company_name: "OCDE",
    icon: ocde,
    iconBg: "#E6DEDD",
    date: "Feb 2009 - Feb 2010",
    points: [
      "Full development of a website for the OECD, handling both front-end and back-end implementation to ensure a robust and user-friendly experience.",
      "Collaborating with cross-functional teams to create high-quality product.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Société Générale",
    icon: sg,
    iconBg: "#E6DEDD",
    date: "Mar 2010 - Oct 2010",
    points: [
      "Redesign and development of a trading application, improving performance, scalability, and user experience across the entire stack.",
     "Developed an advanced search interface for the directory, enhancing usability and performance with dynamic filtering and intuitive navigation."
    ],
  },
  ,
  {
    title: "Backend Developer",
    company_name: "Go Voyages",
    icon: go,
    iconBg: "#E6DEDD",
    date: "Oct 2010 - Jul 2011",
    points: [
      "Developed a C# web service for airline ticket reservations, ensuring reliability, scalability, and seamless integration with external systems.",
    ],
  },
  {
    title: "Software Architect & Project Manager",
    company_name: "Plug Wine",
    icon: pw,
    iconBg: "#E6DEDD",
    date: "Apr 2012 - Mai 2014",
    points: [
      "Led the full development and project management of a web application for automated site generation.",
      "Designed the architecture, coordinated the team, and ensured seamless deployment and scalability.",
    ],
  },
  {
    title: "Director of a Web Agency",
    company_name: "LR",
    icon: lr,
    iconBg: "#E6DEDD",
    date: "Sept 2016 - Now",
    points: [
      "Managed and developed various web projects, creating complex websites and applications.",
      "Specialized in React, Next.js, Tailwind CSS, and Three.js, delivering advanced UI/UX designs and 3D interactive experiences.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Laurent proved me wrong.",
    name: "Éléonore Poirier",
    designation: "CFO",
    company: "Six Web Agy",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Laurent does.",
    name: "Ellis McAllister",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Laurent optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Mei Xiu",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Web Agency",
    description:
      "Web agency specialized in full stack development, using the most modern technologies: Next.js, Tailwind CSS, and a cutting-edge stack for high-performance and scalable apps",
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
    name: "Social Network",
    description:
      "Custom-built social network developed with Next.js, featuring a paid subscription system and merchandise sales",
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
    name: "Image Gallery",
    description:
      "Fully responsive image gallery developed with Next.js and Tailwind CSS, offering a smooth experience on all devices.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      "A web application that allows users to explore the solar system through dynamic 3D visualizations. Powered by astronomical algorithms, it provides real-time planetary positions, orbits, ecliptic paths, stars, constellations, moons, and other celestial objects.",
    tags: [
      {
        name: "Algorithmics",
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
    name: "Global Warming",
    description:
      "A web application presenting official climate data from NASA, NOAA, and ECAD. Users can explore trends in global and local temperatures, track glacier melt, and analyze CO₂ levels through interactive visualizations.",
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
    source_code_link: "https://www.globalwarming.site/en",
  },
];
const contact={
  title :"Get in touch",
  suntitle :"Contact",
  thankyou : "Thank you. I will get back to you as soon as possible.",
  error : "Ahh, something went wrong. Please try again.",
  name :"Your Name",
  email :"Your email",
  message :"Your Message",
  placeholder :{
    name:"What's your good name?",
    email : "What's your web address?",
    message :"What you want to say?"
  }
}


export const en = { services, technologies, experiences, testimonials, projects , navLinks,textes, contact};

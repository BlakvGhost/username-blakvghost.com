/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "G-R28JTD62L2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Kabirou ALASSANE",
  logo_name: "Kabirou.a()",
  nickname: "BlakvGhost",
  full_name: "Kabirou ALASSANE",
  subTitle:
    "Développeur web & mobile, passionné de Machine Learning, créateur  de contenu YouTube. Toujours entrain d'apprendre.",
  resumeLink:
    "/kabirou-alassane-resume.pdf",
  mail: "mailto:kabirou2001@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/BlakvGhost",
  linkedin: "https://www.linkedin.com/in/kabirou-alassane-11293524a/",
  gmail: "kabirou2001@gmail.com",
  whatsapp: "https://wa.me/22995181019",
  youtube: "https://youtube.com/@HyperText23",
  twitter: "https://twitter.com/BlakvGhost",
};

const skills = {
  data: [
    {
      title: "Développement Web & Mobile",
      fileName: "FullStackImg",
      skills: [
        "⚡ Création d'un front-end d'application Web réactif à l'aide de (Vue.js, Angular ou Svelte)",
        "⚡ Développement backend avec Laravel, Nest.js, Adonis.js et Django",
        "⚡ Développer des applications mobiles avec Ionic et Kotlin",
      ],
      softwareSkills: [
        {
          skillName: "Svelte",
          fontAwesomeClassname: "simple-icons:svelte",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            backgroundColor: "transparent",
            color: "#092E20",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: {
            color: "#4FC08D",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: {
            color: "#0081CB",
          },
        },
        {
          skillName: "AdonisJS",
          fontAwesomeClassname: "simple-icons:adonisjs",
          style: {
            color: "#220052",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "Infra-architecture cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Expérience de travail sur plusieurs plateformes cloud",
        "⚡ Expérience de l'hébergement et de la gestion d'applications Web AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "UI/UX",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Conception de logo d'entreprise",
        "⚡ Conception de maquette d'application web et mobile intuitive",
        "⚡ Création d'affiche publicitaire",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#0ACF83",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#31A8FF",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Institut de Formation et de Recherche en Informatique(IFRI - UAC)",
      subtitle: "Licence 1 en Systèmes Embarqués & IoT",
      logo_path: "logoifri.png",
      alt_name: "IFRI-UAC",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ J'ai étudié des sujets de base tels que les structures de données, les SGBD, les réseaux, la sécurité, etc.",
        "⚡ J'ai également suivi divers cours en ligne pour le ML/DL, le développement Web, le développement d'applications mobiles, etc.",
        "⚡ J'ai mis en œuvre plusieurs projets basés sur ce que j'ai appris dans le cadre de mes cours en Systèmes Embarqués & IoT.",
      ],
      website_link: "https://ifri-uac.bj/",
    },
    {
      title: "Lycée Technique de Natitingou",
      subtitle: "Diplôme de Technicien en Installation et Maintenance en Informatique",
      logo_path: "logoltn.png",
      alt_name: "SETI",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ J'ai étudié des sujets de base tels que l'algorithmique, les SGBD, les réseaux, la sécurité, etc.",
        "⚡ J'ai également suivi divers cours en ligne sur le développement Web, le développement d'applications mobiles, etc.",
        "⚡ J'ai mis en œuvre plusieurs projets basés",
      ],
      website_link: "https://ltn.username-blakvghost.com",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "AWS Developer Associate",
    //   subtitle: "Amazon Web Services",
    //   logo_path: "aws.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/b12fbece-07f3-47f5-9dda-cd56f49e250d/public_url",
    //   alt_name: "AWS",
    //   color_code: "#ffc475",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Expérience",
  subtitle: "Travail, stage et bénévolat",
  description:
    "J'ai effectué deux stages. J'ai principalement réalisé des projets seul et je recherche activement des stages. J'adore organiser des ateliers pour partager mes connaissances avec les autres.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Travail",
      experiences: [
        {
          title: "Développeur web full stack",
          company: "Edoutech",
          company_url: "https://edoutech.com/",
          duration: "Mars 2024 - Présent",
          location: "Abomey-Calavi",
          description:
            "Une entreprise qui travaille avec des entreprises modernes pour les aider à innover et à évoluer grâce à des solutions de développement web et mobile personnalisées",
          color: "#ee3c26",
        },
        {
          title: "Développeur web",
          company: "JMA PLUS",
          company_url: "https://jmaplus.com/",
          logo_path: "jmaplus_logo.png",
          duration: "Mars 2023 - Mai 2023",
          location: "Abomey-Calavi/Télétravail",
          description:
            "Une entreprise qui accompagne la transformation digitale des clients, avec des services passionnants et des projets innovants.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Stages",
      experiences: [
        {
          title: "Stagiaire en développement mobile Android",
          company: "Lite System",
          company_url: "",
          duration: "Dec 2021 - 2022",
          location: "Cotonou/Bénin",
          description:
            "J'ai travaillé sur le projet FuturaVision, une application android de blog, j'ai également beaucoup appris en expérience utilisateur lors de ce stage",
          color: "#ee3c26",
        },
        {
          title: "Stagiaire en développement web",
          company: "Clic Almani SARL",
          company_url: "",
          duration: "Dec 2020 - Jan 2021",
          location: "Djougou/Bénin",
          description:
            "J'ai travaillé sur le projet LTN, le site web du Lycée Technique de Natitingou",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Bénévolat",
      experiences: [
        // {
        //   title: "Google Summer of Code Mentor",
        //   company: "Sugar Labs / GSoC",
        //   company_url: "https://sugarlabs.org/",
        //   logo_path: "google_logo.png",
        //   duration: "Summer of 2017 / 18 / 20",
        //   location: " ",
        //   description:
        //     "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
        //   color: "#4285F4",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Réalisations",
  description:
    "Mes projets utilisent une grande variété d’outils technologiques les plus récents. Ma meilleure expérience est de créer des projets Data Science. Ci-dessous vous trouverez quelques-uns de mes projets. Notez que tous les projets mentionnés ne sont pas forcément publique sur GitHub.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contactez-moi",
    profile_image_path: "kabirou-alassane.JPG",
    description:
      "Vous pouvez me contacter aux endroits mentionnés ci-dessous. J'essaierai de vous répondre le plus vite possible.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Je ne blogue pas fréquemment, mais lorsque je fais quelque chose de génial, je fais de mon mieux pour écrire un blog à ce sujet.",
    link: "https://blakvghost.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "PHPValidator",
      url: "https://github.com/BlakvGhost/PHPValidator#readme",
      description:
        "PHPValidator is a modern PHP library for data validation in your PHP applications. It provides a flexible and extensible way to validate data using predefined rules or by creating custom validation",
      languages: [
        {
          name: "PHP",
          iconifyClass: "devicon-php",
        },
        {
          name: "Composer",
          iconifyClass: "logos-composer",
        },
      ],
    },
    {
      name: "WebP2MS",
      url: "https://webp2ms.username-blakvghost.com",
      description: "Web Platform for Managing and Monitoring Schedules est une application web de gestion des emplois du temps pour établissement d'enseignement supérieur.",
      languages: [
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
        {
          name: "VueJS",
          iconifyClass: "logos-vue",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
      ],
    },
    {
      name: "Neptune",
      url: "https://neptune.username-blakvghost.com",
      description:
        "Neptune est une application web de gestion de stock avec système de facturation automatique et d'inventaire",
      languages: [
        {
          name: "CodeIgniter4",
          iconifyClass: "logos-codeigniter",
        },
        {
          name: "jQuery",
          iconifyClass: "logos-jquery",
        },
      ],
    },
    {
      name: "MoneyFly",
      url: "https://money-fly.username-blakvghost.com",
      description:
        "Une application web de gestion bancaire en temps réel développée avec Django et Vue.js",
      languages: [
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
        {
          name: "VueJS",
          iconifyClass: "logos-vue",
        },
      ],
    },
    {
      name: "FuturaVision Website",
      url: "https://futura-vision.vercel.app",
      description:
        "Site vitrine développé en vue.js fonctionnant avec une API Laravel avec Blog & Forum intégrés ainsi qu'un CMS",
      languages: [
        {
          name: "VueJS",
          iconifyClass: "logos-vue",
        },
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
      ]
    },
    {
      name: "Fiona",
      url: "https://fiona-tau.vercel.app",
      description:
        "Simple blog website created with the aim of learning the Svelte framework combined with firebase",
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
        {
          name: "Svelte",
          iconifyClass: "logos-svelte",
        },
      ]
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};

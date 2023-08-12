const projectsData = [
  {
    id: 1,
    name: "tuffSkin",
    title: "Tuff Skin Website",
    team: "WebFluent",
    description: "Tuff Skin Website and content management system",
    // image: "/tuffSkint.png",
    image: {
      url: "/tuffSkint.png",
      alt: "Tuff Skin Website",
      title: "Tuff Skin",
    },
    Website: "https://tuff-skin-website-wkt284e86-webfluent.vercel.app/",
    gitHub: "https://github.com/WebFluent/tuff-skin",
    link: "/projects/tuffSkin",
    about: "Tuff Skin Website",
    year: "2023",
    commits: "75",  
    techUsed: [
      "React",
      "Next.js",
      "esLint",
      "Formik",
      "mongoDB",
      "NextAuth",
      "React-toastify",
      "styled-components",
      "Tanstack/react-table",
      "prop-types",
      "React-responsive-carousel",

    ]
  },
  {
    id: 2,
    project: "modernpilgrim",
    name: "modernpilgrim",
    title: "Modern Pilgrim Website",
    team: "School Project",
    description: "This app is used as social media platform. At Modern Pilgrims we like to share with you other peoples recent trips and a little bit about how it went. For instance, in each post you can determine whether or not you rate the trip out of five stars. As well as leave a summary of the trip, location of the trip, and even comment on your trip or others that you find comment worthy.",
    repo: "Modern-Pilgrim",
    // image: "/modernPilgrims.png",
    image: {
      url: "/modernPilgrims.png",
      alt: "Traders Journal",
      title: "Traders Journal",
    },
    webSite: "https://modern-pilgrims.vercel.app/",
    gitHub: "https://github.com/Jeromemn/Modern-Pilgrim",
    link: "/projects/modernpilgrim",
    about: "Modern Pilgrim Website",
    year: "2022",
    commits: "30",
    techUsed: [
      "React.js",
      "Node.js",
      "graphQL",
      "Mongoose",
      "MongoDB",
      "Cloudinary",
      "auth0",
      "express",
      "Material UI",
      "bootstrap",
      "styled-components",
    ]

  },
  {
    id: 3,
    name: "tradersJournal",
    team: "Personal Project",
    description: "A trading journal application",
    // image: "/images/TJAlbum.jpg",
    image: {
      url: "/TJAlbum.jpg",
      alt: "Traders Journal",
      title: "Traders Journal",
    },
    webSite: "https://traders-journal-ivgdojk5d-jeromemn.vercel.app/",
    gitHub: "https://github.com/Jeromemn/Traders-Journal",
    link: "/projects/tradersJournal",
    about: "A trading journal application",
    year: "2023",
    commits: "75",  
    techUsed: [    
      "React",
      "Next",
      "Tanstack",
      "React Charts",
      "Styled Components",
      "Formik",
      "luxon",
      "Mongoose",
      "MongoDB",
      "API Requests",
    ]

  },
  {
    id: 4,
    name: "switch",
    team: "WebFluent",
    description: "Switch a feature flag management application",
    // image: "/images/switchAlbum.jpg",
    image: {
      url: "/switchAlbum.jpg",
      alt: "swicth webpage",
      title: "Switch application",
    },
    webSite: "https://ft-emd51pitl-webfluent.vercel.app/",
    gitHub: "https://github.com/WebFluent/switch",
    link: "/projects/switch",
    about: "Switch a feature flag management application",
    year: "2023",
    commits: "75",  
    techUsed: [
      "React",
      "TypeScript",
      "Jest",
      "esLint",
      "Next",
      "ts-node",
      "prisma",
      "radix-ui",
      "next-auth",
      "stitches/react",
      "nodemon",
    ]

  },
  {
    id: 5,
    name: "cardbattle",
    team: "School Project",
    description: "A JavaScript implementation of a custom card game. Card battle is both a fun solitaire and multiplayer game since you can play against the A.I.(novice).",
    // image: "/images/Card-Battle-gif.gif",
    image: {
      url: "/Card-Battle-gif.gif",
      alt: "card battle page",
      title: "CardBattle",
    },
    webSite: "https://card-battle.herokuapp.com/",
    gitHub: "https://github.com/Jeromemn/card-battle",
    link: "/projects/cardbattle",
    about:"The goal of the game is eliminate your opponent by lowering their hitpoints to 0 first. All 10 cards have the same option to attack, defend, or skip. Click a card to call it to action. The game checks the attributes of the selected card: attack and defend. If the selected card attacks, the opponent will have their hitpoints deducted by the attack subtracted by the defending cards defense. You can regain hitpoints by selecting a card and using defense. The first player to 0 hitpoints loses.",
    year: "2022",
    commits: "75",  
    techUsed: [
      "JavaScript",
      "bCrypt",
      "connect Session Sequelize",
      "Express",
      "Express Handlebars",
      "mysql2",
      "sequelize",
      "tailwindcss",
    ]

  },
  {
    id: 6,
    name: "pwaTextEditor",
    team: "School Project",
    description: "a Progressive Web Application that recognized JavaScript and can be typed in and saved both via a live web application and a local application that is off line. The online and offline versions will sync together to ensure nothing is lost",
    // image: "/images/textedit.jpg",
    image: {
      url: "/textedit.jpg",
      alt: "text editor page",
      title: "text editor",
    },
    webSite: "https://pwathejateway.herokuapp.com/",
    gitHub: "https://github.com/Jeromemn/Progressive-Web-App-TextEditor",
    link: "/projects/pwaTextEditor",
    about: "Online offline text editor",
    year: "2022",
    commits: "75",  
    techUsed: [
      "JavaScript",
      "CSS",
      "HTML",
      "Webpack",
      "HTML Webpack Plugin",
      "Inject Manifest",
      "Webpack PWA Mainfest",
      "nodemon",
      "express",
      "idb",
      "concurrently",

    ]

  },
];

export default projectsData;
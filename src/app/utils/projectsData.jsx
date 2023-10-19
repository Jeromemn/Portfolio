import React from 'react';
import {
  AuthZeroIcon,
  BcryptIcon,
  BootstrapIcon,
  CloudinaryIcon,
  CssIcon,
  EsLintIcon,
  ExpressIcon,
  FormikIcon,
  GraphQlIcon,
  HandlebarsIcon,
  HtmlIcon,
  JavaScriptIcon,
  JestIcon,
  LoadingSkeletonIcon,
  MaterialIcon,
  MongoDbIcon,
  MongooseIcon,
  MySqlIcon,
  NextAuthIcon,
  FlowBiteIcon,
  NextJsIcon,
  NodeJsIcon,
  NodemonIcon,
  PrismaIcon,
  RadixIcon,
  ReactChartsIcon,
  ReactIcon,
  ReactSpringIcon,
  SequelizeIcon,
  StitchesIcon,
  StyledCompIcon,
  TailwindIcon,
  TanStackIcon,
  ToastIcon,
  TSNodeIcon,
  TypeScriptIcon,
  WebPackIcon,
  ReactMapsIcon,
} from '@/app/techIcons';

const projectsData = [
  {
    id: 1,
    name: 'tuffSkin',
    title: 'Tuff Skin Website',
    team: 'WebFluent',
    description:
      'Website for a Bedliner company called Tuff Skin. Introduces the customer to services offered,' +
      ' benefits or services, displays reviews from past customers, as well as finding a location' +
      ' A content management system was also built to allow the client to update the website as needed.',
    image: {
      url: '/tuffSkin.png',
      alt: 'Tuff Skin Website',
      title: 'Tuff Skin Website',
      year: '2023',
    },
    website: 'https://tuff-skin-website-wkt284e86-webfluent.vercel.app/',
    github: 'https://github.com/WebFluent/tuff-skin',
    link: '/projects/tuffSkin',
    about: 'Tuff Skin Website',
    year: '2023',
    commits: '75',
    techUsed: [
      {
        label: 'React',
        icon: <ReactIcon />,
      },
      {
        label: 'Next.js',
        icon: <NextJsIcon />,
      },
      {
        label: 'esLint',
        icon: <EsLintIcon />,
      },
      {
        label: 'Formik',
        icon: <FormikIcon />,
      },
      {
        label: 'MongoDB',
        icon: <MongoDbIcon />,
      },
      {
        label: 'Next Auth',
        icon: <NextAuthIcon />,
      },
      {
        label: ' React Maps',
        icon: <ReactMapsIcon />,
      },
      {
        label: 'React Toastify',
        icon: <ToastIcon />,
      },
      {
        label: 'Styled Components',
        icon: <StyledCompIcon />,
      },
      {
        label: 'Tanstack -React Table',
        icon: <TanStackIcon />,
      },
    ],
  },
  {
    id: 2,
    name: 'modernpilgrim',
    title: 'Modern Pilgrim Website',
    team: 'School Project',
    description:
      'This app is used as social media platform. At Modern Pilgrims we like to share with you other peoples recent trips and a little bit about how it went. For instance, in each post you can determine whether or not you rate the trip out of five stars. As well as leave a summary of the trip, location of the trip, and even comment on your trip or others that you find comment worthy.',
    image: {
      url: '/modernPilgrims.png',
      alt: 'Modern Pilgrim Website',
      title: 'Modern Pilgrim Website',
      year: '2022',
    },
    website: 'https://modernpilgrims.herokuapp.com/',
    github: 'https://github.com/Jeromemn/Modern-Pilgrim',
    link: '/projects/modernpilgrim',
    about: 'Modern Pilgrim Website',
    year: '2022',
    commits: '30',
    techUsed: [
      {
        label: 'React',
        icon: <ReactIcon />,
      },
      {
        label: 'Node.js',
        icon: <NodeJsIcon />,
      },
      {
        label: 'GraphQl',
        icon: <GraphQlIcon />,
      },
      {
        label: 'Mongoose',
        icon: <MongooseIcon />,
      },
      {
        label: 'MongoDB',
        icon: <MongoDbIcon />,
      },
      {
        label: 'Cloudinary',
        icon: <CloudinaryIcon />,
      },
      {
        label: 'Auth0',
        icon: <AuthZeroIcon />,
      },
      {
        label: 'Express',
        icon: <ExpressIcon />,
      },
      {
        label: 'Material UI',
        icon: <MaterialIcon />,
      },
      {
        label: 'Bootstrap',
        icon: <BootstrapIcon />,
      },
      {
        label: 'Styled Components',
        icon: <StyledCompIcon />,
      },
    ],
  },
  {
    id: 3,
    name: 'tradersJournal',
    title: 'Traders Journal',
    team: 'Personal Project',
    description:
      'A trading journal dashboard, allows the user to record their trades and analyze their' +
      ' performance and strategies. Performance can be compared to the S&P 500, Nasdaq, Russel and Dow Jones.',
    image: {
      url: '/TJAlbum.jpg',
      alt: 'Traders Journal',
      title: 'Traders Journal',
      year: '2023',
    },
    website: 'https://traders-journal-ivgdojk5d-jeromemn.vercel.app/',
    github: 'https://github.com/Jeromemn/Traders-Journal',
    link: '/projects/tradersJournal',
    about: 'A trading journal application',
    year: '2023',
    commits: '75',
    techUsed: [
      {
        label: 'React',
        icon: <ReactIcon />,
      },
      {
        label: 'Next.js',
        icon: <NextJsIcon />,
      },
      {
        label: 'Tanstack -React Table',
        icon: <TanStackIcon />,
      },
      {
        label: 'React Charts.js',
        icon: <ReactChartsIcon />,
      },
      {
        label: 'React Spring',
        icon: <ReactSpringIcon />,
      },
      {
        label: 'Styled Components',
        icon: <StyledCompIcon />,
      },
      {
        label: 'Formik',
        icon: <FormikIcon />,
      },
      // "luxon",
      {
        label: 'MongoDB',
        icon: <MongoDbIcon />,
      },
      {
        label: 'Mongoose',
        icon: <MongooseIcon />,
      },
      {
        label: 'esLint',
        icon: <EsLintIcon />,
      },

      // "API Requests",
    ],
  },
  {
    id: 4,
    name: 'switch',
    title: 'Switch Application',
    team: 'WebFluent',
    description:
      'Switch is a feature flag management application, allowing the user to create and manage feature' +
      ' flags for their applications. This project is still in progress and more features will be added.',
    image: {
      url: '/switchAlbum.jpg',
      alt: 'Switch webpage',
      title: 'Switch Application',
      year: '2023',
    },
    website: 'https://ft-emd51pitl-webfluent.vercel.app/',
    github: 'https://github.com/WebFluent/switch',
    link: '/projects/switch',
    about: 'Switch a feature flag management application',
    year: '2023',
    commits: '75',
    techUsed: [
      {
        label: 'React',
        icon: <ReactIcon />,
      },
      {
        label: 'TypeScript',
        icon: <TypeScriptIcon />,
      },
      {
        label: 'Jest',
        icon: <JestIcon />,
      },
      {
        label: 'esLint',
        icon: <EsLintIcon />,
      },
      {
        label: 'Next.ts',
        icon: <NextJsIcon />,
      },
      {
        label: 'Ts-Node',
        icon: <TSNodeIcon />,
      },
      {
        label: 'Prisma',
        icon: <PrismaIcon />,
      },
      {
        label: 'Radix-ui',
        icon: <RadixIcon />,
      },
      {
        label: 'Next Auth',
        icon: <NextAuthIcon />,
      },
      {
        label: 'Stitches',
        icon: <StitchesIcon />,
      },
      {
        label: 'React Loading Skeleton',
        icon: <LoadingSkeletonIcon />,
      },
      {
        label: 'Nodemon',
        icon: <NodemonIcon />,
      },
    ],
  },
  {
    id: 5,
    name: 'cardbattle',
    title: 'Card Battle',
    team: 'School Project',
    description:
      'A JavaScript implementation of a custom card game. Card battle is both a fun solitaire and multiplayer game since you can play against the A.I.(novice).',
    image: {
      url: '/Card-Battle-gif.gif',
      alt: 'card battle page',
      title: 'CardBattle',
      year: '2022',
    },
    website: 'https://card-battle.herokuapp.com/',
    github: 'https://github.com/Jeromemn/card-battle',
    link: '/projects/cardbattle',
    about:
      'The goal of the game is eliminate your opponent by lowering their hitpoints to 0 first. All 10 cards have the same option to attack, defend, or skip. Click a card to call it to action. The game checks the attributes of the selected card: attack and defend. If the selected card attacks, the opponent will have their hitpoints deducted by the attack subtracted by the defending cards defense. You can regain hitpoints by selecting a card and using defense. The first player to 0 hitpoints loses.',
    year: '2022',
    commits: '75',
    techUsed: [
      {
        label: 'JavaScript',
        icon: <JavaScriptIcon />,
      },
      {
        label: 'HTML',
        icon: <HtmlIcon />,
      },
      {
        label: 'CSS',
        icon: <CssIcon />,
      },
      {
        label: 'bCrypt',
        icon: <BcryptIcon />,
      },
      // "connect Session Sequelize",
      {
        label: 'Express',
        icon: <ExpressIcon />,
      },
      // "Express Handlebars",
      {
        label: 'HandleBars',
        icon: <HandlebarsIcon />,
      },
      {
        label: 'MYSQL2',
        icon: <MySqlIcon />,
      },
      {
        label: 'Sequelize',
        icon: <SequelizeIcon />,
      },
      {
        label: 'Tailwindcss',
        icon: <TailwindIcon />,
      },
      {
        label: 'Flowbite',
        icon: <FlowBiteIcon />,
      },
    ],
  },
  {
    id: 6,
    name: 'pwaTextEditor',
    title: 'PWA Text Editor',
    team: 'School Project',
    description:
      'A Progressive Web Application that recognized JavaScript and can be typed in and saved both via a live web' +
      ' application and a local application that is off line. The online and offline versions will sync together to' +
      ' ensure nothing is lost.',
    image: {
      url: '/textedit.jpg',
      alt: 'text editor page',
      title: 'text editor',
      year: '2022',
    },
    website: 'https://pwathejateway.herokuapp.com/',
    github: 'https://github.com/Jeromemn/Progressive-Web-App-TextEditor',
    link: '/projects/pwaTextEditor',
    about: 'Online offline text editor',
    year: '2022',
    commits: '75',
    techUsed: [
      {
        label: 'JavaScript',
        icon: <JavaScriptIcon />,
      },
      {
        label: 'HTML',
        icon: <HtmlIcon />,
      },
      {
        label: 'CSS',
        icon: <CssIcon />,
      },
      {
        label: 'Webpack',
        icon: <WebPackIcon />,
      },
      {
        label: 'Express',
        icon: <ExpressIcon />,
      },
      {
        label: 'Nodemon',
        icon: <NodemonIcon />,
      },

      // "Webpack Plugin",
      // "Inject Manifest",
      // "Webpack PWA Mainfest",
      // "idb",
      // "concurrently",
    ],
  },
];

export default projectsData;

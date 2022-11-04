import self from '../img/self.jpg'
import laKinoise from '../img/la_kinoise.png'
import ndule from '../img/ndule.png'
import mndule from '../img/m_ndule.png'
// import koumishop from '../img/koumishop.png'
// import mock5 from '../img/mock5.png'

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)']

export const info = {
  firstName: 'Jacobit',
  lastName: 'Kashala',
  initials: 'js',
  position: 'Developer Full Stack ',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // {
    //     emoji: '☕',
    //     text: 'fueled by coffee'
    // },
    {
      emoji: '🌎',
      text: 'Kinshasa',
    },
    {
      emoji: '💼',
      text: 'Full remote ou en présentiel',
    },
    {
      emoji: '📧',
      text: 'jacobitkashala@gmail',
    },
  ],
  socials: [
    {
      link: 'https://web.facebook.com/jacob.kashala/?_rdc=2&_rdr',
      icon: 'fa fa-facebook',
      label: 'facebook',
    },
    {
      link: 'https://www.instagram.com/?hl=fr',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/jacobitkashala',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/jacobit-kashala-4a18631a5/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com/jacobit_akashy',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
    {
      link: 'https://www.pinterest.fr/jacobitkashala/',
      icon: 'fa fa-pinterest',
      label: 'pinterest',
    },
    {
      link: 'https://stackoverflow.com/users/14647869/jacobit-kashala',
      icon: 'fa fa-stack-overflow',
      label: 'stackOverflow',
    },
  ],
  bio:
    "Analyste et développeur full stack, doté de cinq ans d'expérience dans le monde de développement, ayant un esprit d’analyse , une certaine rigueur et la capacité de s ‘adapter, je suis capable de définir l’expression de besoin réaliser une maquette puis implémenter l’application.",
  skills: {
    proficientWith: [
      'Java',
      'Javascript',
      'reactJs',
      'git',
      'Bootstrap',
      'html5',
      'Saas',
      'figma',
      'Asana',
      'Sql',
      'Material ui',
      'Slack',
    ].sort(),
    exposedTo: ['nodejs full rest'],
  },
  hobbies: [
    {
      label: 'Scrum',
      emoji: '📖',
    },
    {
      label: 'Séquentielles',
      emoji: '🎭',
    },
    {
      label: 'Travail en équipe',
      emoji: '🌶',
    },
  ],
  portfolio: [
    {
      title: 'La kinoise & moi',
      image: laKinoise,
      techno: ['Javascrip', 'ReactJs Pwa', 'StrapiJs'],
      description:
        "Mise en place d'un dashboard pour la gestion de production et de vente de café La Kinoise.",
    },
    {
      title: 'D-ndule',
      image: ndule,
      techno: ['Javascript', 'ReactJs', 'Nodejs'],
      description: "D-ndule est un projet d'une application de streaming avec un dashboard pour gérer les musiciens ainsi que leur album.",
    },
    {
      title: 'Mobile-ndule',
      image: mndule,
      techno: ['Javascript','ReactNative','Nodejs'],
      description: "L'application cliente qui permet à tous les utilisateurs de télécharger et écouter de chansons.",
    },
    // {
    //   title: 'Koumishop app',
    //   image: koumishop,
    //   techno: ['Javascript','ReactNative','Nodejs'],
    //   description: "L'application cliente qui permet à tous les utilisateurs de télécharger et écouter de chansons.",
    // },
  ],
}
//
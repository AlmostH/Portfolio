
const header = {
  homepage: 'https://portfolio-annabelle-benoist.vercel.app/',
  title: 'AB.',
}

const about = {

  name: 'Annabelle Benoist',
  role: 'Développeuse web',
  description:"Suite à ma formation en développement web avec Openclassrooms , je suis disponible pour tous vos projets de sites ou applications web.Je vous invite à regarder les différents projets que j'ai pu réaliser, ainsi que les compétences acquises suite à cette formation. ",
  social: {
    linkedin: 'https://www.linkedin.com/in/annabelle-benoist-994a34203/',
    github: 'https://github.com/AlmostH',
  },
}

const projects = [

  {
    name: 'Booki',
    description:
      "Intégration d'une page web en HTML et CSS pour un site de location de chambres d'hôtels",
    stack: ['Html', 'Css'],
    image: 'https://github.com/AlmostH/Portfolio/blob/main/public/images/booki_image.webp?raw=true',
    sourceCode: 'https://github.com/AlmostH/booki',
    livePreview: 'https://almosth.github.io/booki/',
  },
  {
    name: "Portfolio Sophie Bluel",
    description:
      "Développement d'un portfolio dynamique en javascript pour une architecte d'interieur",
    stack: ['Javascript', 'css'],
    image: 'https://github.com/AlmostH/Portfolio/blob/main/public/images/sophie-image.webp?raw=true',
    sourceCode: 'https://github.com/AlmostH/Portfolio-architecte-sophie-bluel',
    livePreview: 'https://sophie-bluel-architect.vercel.app/',
  },
  {
    name: 'Nina Carducci',
    description:
      "Optimisation du SEO et correction de bugs du site de la photographe Nina Carducci",
    stack: ['Javascript', 'Lighthouse', 'GTmetrix'],
    image: 'https://github.com/AlmostH/Portfolio/blob/main/public/images/Nina-carducci-image.webp?raw=true',
    sourceCode: 'https://github.com/AlmostH/Nina-Carducci-Dev',
    livePreview: 'https://nina-carducci-almosth.vercel.app/',
  },
  {
    name: 'Kasa',
    description:
      "Création d'une application web de location immobilière avec React",
    stack: ['SASS', 'React'],
    image: 'https://github.com/AlmostH/Portfolio/blob/main/public/images/kasa-image.webp?raw=true',
    sourceCode: 'https://github.com/AlmostH/kasa',
    livePreview: 'https://kasa-almosth.vercel.app/',
  },
 
  {
    name: 'Mon vieux Grimoire',
    description:
      "Developpement du back-end d'un site de notation de livres",
    stack: ['Node JS', 'Express', 'Mongo DB', 'Mongoose'],
    image:'https://raw.githubusercontent.com/AlmostH/Portfolio/main/public/images/mvg-image.webp',
    sourceCode: 'https://github.com/AlmostH/MVG',
    livePreview: 'https://mon-vieux-grimoire-livres.vercel.app/',
  },

]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'SASS',
  'Git',
  'Mongo DB',
  'Mongoose',
  'Node JS',
  'Express',
]

const contact = {
  
  email: 'annabelle.beaugrand@gmail.com',
}

export { header, about, projects, skills, contact }

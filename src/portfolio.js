const header = {
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'AB.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Annabelle Benoist',
  role: 'Développeuse web',
  description:"Suite à ma formation en développement web avec Openclassrooms , je suis disponible pour tous vos projets de sites ou applications web.Je vous invite à regarder les différents projets que j'ai pu réaliser, ainsi que les compétences acquises suite à cette formation. ",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [

  {
    name: 'Booki',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Html', 'Css'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: "Portfolio Architecte d'interieur",
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
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

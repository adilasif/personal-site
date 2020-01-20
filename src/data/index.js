module.exports = {
  siteTitle: 'Adil Asif | Software Engineer',
  siteDescription:
    'Adil Asif is a software engineer specializing in crafting exceptional online experiences.',
  siteKeywords:
    'Adil Asif, Adil, Asif, adilasif, software engineer, software developer, front-end engineer, back-end engineer, full-stack engineer, frontend engineer, backend engineer, fullstack engineer, front-end developer, back-end developer, full-stack developer, frontend developer, backend developer, fullstack developer, web developer, software, engineer, developer, javascript, north carolina, south, east, east coast',
  siteUrl: 'https://adilasif.com',
  siteLanguage: 'en_US',
  name: 'Adil Asif',
  location: 'Chapel Hill, NC',
  email: 'adil@adilasif.com',
  github: 'https://github.com/adilasif',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/adilasif',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adilaasif',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/functionalCOBOL',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  primaryColor: '#FF6600',
  backgroundColor: '#28293D',
  backgroundDarkColor: '#1C1C28',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

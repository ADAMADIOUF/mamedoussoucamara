import { nanoid } from 'nanoid'

const navbarData = [
  {
    id: nanoid(),
    title: 'Accueil',
    categories: [{ id: nanoid(), name: 'Accueil', link: '/' }],
  },
  {
    id: nanoid(),
    title: 'Nos volailles',
    categories: [
      {
        id: nanoid(),
        name: 'Poules pondeuses',
        link: '/volailles/poules-pondeuses',
      },
      {
        id: nanoid(),
        name: 'Poulets & Pintades',
        link: '/volailles/poulets-pintades',
      },
      {
        id: nanoid(),
        name: 'Volailles festives',
        link: '/volailles/volailles-festives',
      },
    ],
  },
  {
    id: nanoid(),
    title: "Conseils d'élevage",
    categories: [
      {
        id: nanoid(),
        name: 'Conseils pour vos poules pondeuses',
        link: '/conseils/poules-pondeuses',
      },
      {
        id: nanoid(),
        name: 'Conseils pour vos poulets/pintades',
        link: '/conseils/poulets-pintades',
      },
      {
        id: nanoid(),
        name: 'Conseils volailles festives',
        link: '/conseils/volailles-festives',
      },
    ],
  },
  {
    id: nanoid(),
    title: 'Points de distribution',
    categories: [
      {
        id: nanoid(),
        name: 'Points de distribution',
        link: '/points-distribution',
      },
    ],
  },
  {
    id: nanoid(),
    title: 'Qui sommes-nous ?',
    categories: [
      { id: nanoid(), name: 'Qui sommes-nous ?', link: '/qui-sommes-nous' },
    ],
  },
  
  {
    id: nanoid(),
    title: 'Pro',
    categories: [{ id: nanoid(), name: 'Pro', link: '/pro' }],
  },
  {
    id: nanoid(),
    title: 'FAQ',
    categories: [{ id: nanoid(), name: 'FAQ', link: '/faq' }],
  },
  {
    id: nanoid(),
    title: 'Contact',
    categories: [{ id: nanoid(), name: 'Contact', link: '/contact' }],
  },
  {
    id: nanoid(),
    title: 'Commander',
    categories: [{ id: nanoid(), name: 'Commander', link: '/commander' }],
  },
]

export default navbarData

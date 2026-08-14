export type Experience = {
  role: string
  org: string
  orgUrl?: string
  dates: string
  logo: string
  logoBorder?: boolean
  description: string
}

export const experiences: Experience[] = [
  {
    role: 'Information Services Intern',
    org: 'Mutual of Omaha',
    orgUrl: 'https://www.mutualofomaha.com/',
    dates: 'May 2026 — August 2026',
    logo: '/experience/MutualOfOmaha.jpg',
    description: 'Full-Stack development in Vue.js and AWS, working on a modernization project of Mutual of Omaha\'s Sales Professional Access (SPA) broker portal for insurance producers.',
  },
  {
    role: 'Developer Intern',
    org: 'Beavercreek Marketing',
    orgUrl: 'https://www.bcm.io/',
    dates: 'September 2025 — May 2026',
    logo: '/experience/BeavercreekMarketing.jpg',
    description: 'Full-Stack development in React and TypeScript, building a DNS record verification solution while also developing a document conversion tooling system for a RAG knowledge base.',
  },
  {
    role: 'Application Developer Intern',
    org: 'Farm Credit Services of America',
    orgUrl: 'https://www.fcsamerica.com/',
    dates: 'May 2025 — August 2025',
    logo: '/experience/FarmCreditServicesOfAmerica.jpg',
    description: 'Full-Stack development in Angular and .NET, expanding on FCSAmerica\'s online account management platform to enable users to manage and edit their balance sheets.',
  },
  {
    role: 'Software Engineer Intern',
    org: 'RentVision',
    orgUrl: 'https://www.rentvision.com/',
    dates: 'May 2024 — August 2024',
    logo: '/experience/RentVision.png',
    description: 'Full-Stack development in React and Java building out tooling to retrieve and display Bing Ads campaign data of appartment communities into RentVision\'s integrated analytics suite.',
  },
]

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
     nextjs,
     redux,
     tailwind,
     nodejs,
     mongodb,
     git,
     figma,
     docker,
     esisba,
     esi,
     cdta,
    
     threejs,
     dzcooks,
     google,
     hackadon,
     hulu,
     idei8086,
     instagrame,
     portfolio,
     cuppa,
     rehlaty,
} from '../assets';

export const navLinks = [
     {
          id: 'about',
          title: 'About',
     },
     {
          id: 'work',
          title: 'Work',
     },
     {
          id: 'contact',
          title: 'Contact',
     },
];

const services = [
     {
          title: 'Web Developer',
          icon: web,
     },
     {
          title: 'Kotlin Developer',
          icon: mobile,
     },
     {
          title: 'Backend Developer',
          icon: backend,
     },
     {
          title: 'Mobile Developer',
          icon: creator,
     },
];

const technologies = [
     {
          name: 'HTML 5',
          icon: html,
     },
     {
          name: 'CSS 3',
          icon: css,
     },
     {
          name: 'JavaScript',
          icon: javascript,
     },
     {
          name: 'TypeScript',
          icon: typescript,
     },
     {
          name: 'React JS',
          icon: reactjs,
     },
     {
          name: 'Nextjs',
          icon: nextjs,
     },
     {
          name: 'Tailwind CSS',
          icon: tailwind,
     },
     {
          name: 'Node JS',
          icon: nodejs,
     },
     {
          name: 'MongoDB',
          icon: mongodb,
     },
     {
          name: 'Three JS',
          icon: threejs,
     },
     {
          name: 'git',
          icon: git,
     },
     {
          name: 'figma',
          icon: figma,
     },
     {
          name: 'docker',
          icon: docker,
     },
];

const experiences = [
     {
          title: 'Node.js Developer',
          company_name: 'ESI SBA',
          icon: esisba,
          iconBg: '#383E56',
          date: 'September 2019 - Juin 2021',
          points: [
               'Developing and maintaining web applications using React.js and other related technologies.',
               'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
               'Implementing responsive design and ensuring cross-browser compatibility.',
               'Participating in code reviews and providing constructive feedback to other developers.',
          ],
     },
     {
          title: 'Software Engineer',
          company_name: 'CDTA',
          icon: cdta,
          iconBg: '#E6DEDD',
          date: 'sep 2022 - oct 2022',
          points: [
               `Analyzed Mediboard's document exchange in SIH.`,
               `Identified tactics to improve interoperability.`,
               `Proposed solutions: secure messaging, EHR integration.`,
              `Conducted evaluation and gathered feedback.`,
               `Recommended continuous improvement.`
          ],
     },
     {
          title: 'Web  and mobile developer',
          company_name: 'Shopify',
          icon: esi,
          iconBg: '#383E56',
          date: 'Jan 2022 - Jan 2023',
          points: [
               'Developing and maintaining web applications using Next.js and other related technologies.',
               'Developing a delivery mobile App in kotlin ',
               'Implementing many APIs in Nodejs and Typescript  ',
             
          ],
     },
 
];

const testimonials = [
     {
          testimonial:
               "i really admire this guy's potential as a developer . he really never stops learning more and amazing us with his project and his perfermance",
          name: 'Chamseddine',
          designation: 'TeamMate',
          company: 'ESI',
          image: 'https://media.licdn.com/dms/image/D4E35AQG7K9usREbXlQ/profile-framedphoto-shrink_100_100/0/1649587013406?e=1688918400&v=beta&t=w4B5xw1sny0oVCxfwWJCAZ6vyfpMuSUFEIOsvYzd3qQ',
     },
     {
          testimonial:
               "Yssine is an exceptional problem solver who is not afraid of any kind of challenge , a talented full stack developer with a very polished set of skills and a great team partner who knows how to collaborate and manage himself in a team and even spread his positive aura across all of the members.",
          name: 'Assoul Sidali',
          designation: 'COO',
          company: 'Esi Sba',
          image: 'https://media.licdn.com/dms/image/C4D03AQHNqjbxZPx3JQ/profile-displayphoto-shrink_100_100/0/1657285017885?e=1694044800&v=beta&t=ix80JrSnnilGrSNhjFak2CznYhQsvy1b0IIcCJ3BPC0',
     },

];

const projects = [
     {
          id: 1,
          name: 'Cuppa',
          description:
               'smart coffe vending machine system contains 1 web  and 3 mobile app ',
          image: cuppa,
          deployed_url: 'https://cuppa-frontend.vercel.app/login',
          source_code_link:
          'https://github.com/yassineoo/cuppa-frontend',
          category: ['node', 'Mongo'],
          tags: [
               { name: 'Nextjs', color: 'green-text-gradient' },
               { name: 'tailwindCss', color: 'blue-text-gradient' },
               { name: 'express', color: 'red-text-gradient' },
          ],
     },
     {
          id: 1,
          name: 'IDE Intelx8086',
          description:
               'This app is a emulator + compiler for intel assembly i8086',
          image: idei8086,
          deployed_url: 'https://idrist11.github.io/8086-Online-IDE/',
          source_code_link:
               'https://github.com/yassineoo/vgath8086-fullbackend-in-nodejs-express-mongodb',
          category: ['Node', 'Mongo'],
          tags: [
               { name: 'Nodejs', color: 'green-text-gradient' },
               { name: 'bootstrap', color: 'blue-text-gradient' },
               { name: 'express', color: 'red-text-gradient' },
          ],
     },
     {
          id: 2,
          name: 'Instagrame clone',
          image: instagrame,
          deployed_url: 'https://instagrame2-0.vercel.app/',
          source_code_link: 'https://github.com/yassineoo/Instagrame-2.0',
          category: ['Nextjs'],
          description:
               ' Typical Social Media App where one can post,like ,comment etc ',
          tags: [
               { name: 'Nextjs', color: 'pink-text-gradient' },
               { name: 'firebase', color: 'green-text-gradient' },
               { name: 'tailwindcss', color: 'red-text-gradient' },
          ],
     },

     {
          id: 3,
          name: 'hulu movies',
          image: hulu,
          deployed_url: 'https://hulumoviesseconde.vercel.app/',
          source_code_link: 'https://github.com/yassineoo/hulu-movies',
          category: ['Nextjs'],
          description:
               'muvies website shows the lateste movies in cinima using dbm Api',
          tags: [
               { name: 'Nextjs', color: 'pink-text-gradient' },
               { name: 'tailwindcss', color: 'green-text-gradient' },
          ],
     },
     {
          id: 10,
          name: 'DZ-cooks',
          image: dzcooks,
          deployed_url: 'https://dz-cooks.000webhostapp.com/DZ-cooks/',
          source_code_link: 'https://github.com/yassineoo/dz-cooks',
          category: ['Nextjs'],
          description:
               'Dz-cooks website for recipes made from scratch in one month',
          tags: [
               { name: 'PHP', color: 'blue-text-gradient' },
               { name: 'SQL', color: 'green-text-gradient' },
          ],
     },

     {
          id: 4,
          name: 'Google search clone',
          image: google,
          deployed_url: 'https://google-search-seven.vercel.app/',
          source_code_link: 'https://github.com/yassineoo/google-search-Engine',
          category: ['Nextjs', 'react'],
          description: 'google search engine clone using google api ',
          tags: [
               { name: 'Nextjs', color: 'pink-text-gradient' },
               { name: 'tailwindcss', color: 'green-text-gradient' },
          ],
     },

     {
          id: 5,
          name: 'rehlaty admin',
          image: rehlaty,
          deployed_url: 'https://dztraveling.herokuapp.com/places',
          source_code_link:
               'https://github.com/yassineoo/Admin-RehLaty-Web-app',
          category: ['Express', 'Node', 'Mongo'],
          description: 'admin web site for e-tourisme in algeria',
          tags: [
               { name: 'Node', color: 'pink-text-gradient' },
               { name: 'Express', color: 'pink-text-gradient' },
               { name: 'REST API', color: 'green-text-gradient' },
               { name: 'Bootstrap', color: 'blue-text-gradient' },
          ],
     },

     {
          id: 6,
          name: 'hackadon',
          image: hackadon,
          deployed_url: 'https://hackadon.herokuapp.com/',
          source_code_link: 'https://github.com/yassineoo/Hckadon-esms2',
          category: ['Express', 'Node', 'Mongo'],
          description: 'event website for a charity hackathon with Cse clube ',
          tags: [
               { name: 'Node', color: 'pink-text-gradient' },
               { name: 'Express', color: 'pink-text-gradient' },
               { name: 'REST API', color: 'green-text-gradient' },
               { name: 'Bootstrap', color: 'blue-text-gradient' },
          ],
     },
];

export { services, technologies, experiences, testimonials, projects };

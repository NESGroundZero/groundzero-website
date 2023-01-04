/* 
This file contains list of static texts that will be displayed in the web page.
In the future, please use this file as the only way to interact with editing texts.
*/

import {
  accelerating,
  airbnb,
  aws,
  binance,
  changeMakers,
  coinbase,
  eatLaunchpad,
  dropbox,
  facebook,
  groundzero,
  instagram,
  linkedin,
  nes,
  nusEnterprise,
  nyc,
  pastEvent1,
  pastEvent2,
  pastEvent3,
  pastEvent4,
  sampleIcon,
  sginnovate,
  startupBuddy,
  twitter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "timeline",
    title: "Timeline",
  },
  {
    id: "problems",
    title: "Problems",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const timeline = [
  {
    id: "timeline-1",
    icon: groundzero,
    title: "Registration",
    content: "January - March 2023",
  },
  {
    id: "timeline-2",
    icon: groundzero,
    title: "Problem Statements Released",
    content: "March 2023",
  },
  {
    id: "timeline-3",
    icon: groundzero,
    title: "Pitch Day",
    content: "April 2023",
  },
];

export const reasons = [
  {
    id: 1,
    img: sampleIcon,
    title: "Reason #1",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    img: sampleIcon,
    title: "Reason #2",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    img: sampleIcon,
    title: "Reason #3",
    description: "Lorem ipsum dolor sit amet",
  }
]

export const problems = [
  {
    id: 1,
    content: "How can we reduce carbonization through tax?",
    category: "Environment",
    title: "Green Money",
    description: "Pursuing a net-zero carbon emission through innovative currency methods",
    img: sampleIcon,
    subheader1: "The Pursuit of Green Money",
    details1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
  {
    id: 2,
    content: "Something cool that tech cannot do.",
    category: "Education",
    title: "New Education",
    description: "Designing better education in the digital era powered by Industrial Revolution 4.0",
    img: sampleIcon,
    subheader1: "The Pursuit of Better Education",
    details1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
  {
    id: 3,
    content: "Elevate the poor using tech. Any idea?",
    category: "Technology",
    title: "Disruptive Income Equality",
    description: "Minimising the economic inequality margin",
    img: sampleIcon,
    subheader1: "The Challenge of Reducing Income Gap",
    details1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Participants",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Supported by Companies",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Prizes to be Won",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Contact Us",
    links: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/groundzero/",
      },
      {
        name: "Telegram",
        link: "https://www.telegram.com/groundzero/",
      },
      {
        name: "TikTok",
        link: "https://www.tiktok.com/groundzero/",
      },
      {
        name: "YouTube",
        link: "https://www.youtube.com/groundzero/",
      },
      {
        name: "Website",
        link: "https://www.groundzero.com/about/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.groundzero.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.groundzero.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.groundzero.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.groundzero.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.groundzero.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.groundzero.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.groundzero.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const contacts = [
  {
    id: "contacts-1",
    icon: groundzero,
    link: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "contacts-2",
    icon: groundzero,
    link: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "contacts-3",
    icon: groundzero,
    link: "Lorem ipsum dolor sit amet.",
  },
];

export const companies = [
  {
    id: "companies-1",
    logo: airbnb,
  },
  {
    id: "companies-2",
    logo: binance,
  },
  {
    id: "companies-3",
    logo: coinbase,
  },
  {
    id: "companies-4",
    logo: dropbox,
  },
];

export const questions = [
  {
    Question: "Lorem Ipsum",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    Question: "Should I pay to join?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    Question: "I am a Computer Science student, can I join?",
    Answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    Question: "Qualification Round what?",
    Answer: "First follow this: \n something \n someone",
  },
  {
    Question: "Lorem Ipsum",
    Answer: "Dolor sit amet",
  },
];

export const organizer = [
  {
    id: "nes",
    icon: nes,
  },
];

export const platinumSponsor = [
  {
    id: "platinumSponsor-1",
    icon: aws,
  },
  {
    id: "platinumSponsor-2",
    icon: eatLaunchpad,
  },
];

export const ecosystemPartner = [
  {
    id: "ecosystemPartner-1",
    icon: nusEnterprise,
  },
  {
    id: "ecosystemPartner-2",
    icon: nyc,
  },
  {
    id: "ecosystemPartner-3",
    icon: changeMakers,
  },
];

export const deepTechPartner = [
  {
    id: "deepTechPartner-1",
    icon: sginnovate,
  },
];

export const workshopPartner = [
  {
    id: "workshopPartner-1",
    icon: accelerating,
  },
  {
    id: "workshopPartner-2",
    icon: startupBuddy,
  },
];

export const partners = [
  {
    id: "organizers",
    title: "Organized By",
    content: organizer,
  },
  {
    id: "platinumSponsors",
    title: "Platinum Sponsors",
    content: platinumSponsor,
  },
  {
    id: "ecosystemPartners",
    title: "Ecosystem Partners",
    content: ecosystemPartner,
  },
  {
    id: "deepTechPartners",
    title: "DeepTech Partners",
    content: deepTechPartner,
  },
  {
    id: "workshopPartners",
    title: "Workshop Partners",
    content: workshopPartner,
  },
];

export const pastEvents = [
  {
    id: "pastEvent1",
    title: "Ground Zero 2021",
    content: pastEvent1,
  },
  {
    id: "pastEvent2",
    title: "Ground Zero 2020",
    content: pastEvent2,
  },
  {
    id: "pastEvent3",
    title: "Ground Zero 2022",
    content: pastEvent3,
  },
  {
    id: "pastEvent4",
    title: "Ground Zero 2019",
    content: pastEvent4,
  },
];

export const workshops = [
  {
    name: "Workshop 1",
    by: "XXX",
    company: "Company 1",
    date: "2023-01-01T12:00:00",
    link: "",
  },
  {
    name: "Workshop 2",
    by: "XXX",
    company: "Company 1",
    date: "2023-01-01T12:00:00",
    link: "",
  },
  {
    name: "Workshop 3",
    by: "XXX",
    company: "Company 2",
    date: "2023-01-01T12:00:00",
    link: "",
  },
  {
    name: "Workshop 4",
    by: "XXX",
    company: "Company 2",
    date: "2023-01-01T12:00:00",
    link: "",
  },
  {
    name: "What it means to incubate a Startup with AI technology",
    by: "XXX",
    company: "Company 3",
    date: "2023-01-01T12:00:00",
    link: "",
  },
  {
    name: "Digital Marketing for Tech Startups",
    by: "XXX",
    company: "Company 4",
    date: "2023-01-01T12:00:00",
    link: "",
  },
];

export const mentors = [
  {
    title:"Rachel Lim",
    subtitle:"Co-Founder",
    info: "Love, Bonito",
    personalLink:"https://www.linkedin.com/in/rachel-lim-25b3b262/",
    imgsrc:"/assets/images/speakers/2022/1_1 Formatted/Fanglin Wang.jpg",
    imgFull:"/assets/images/speakers/2022/ignite/LB Rachel Lim Profile Image.jpg",
    description: [
        "Rachel Lim co-founded what was to be Love, Bonito at a tender age of 19. She started her own online fashion business when e-commerce was at its infancy and grew the blogshop into a multi-million dollar global brand in just over a decade.",
        "Her desire to empower women through thoughtful creations and memorable experiences has propelled her to set up international brick-and-mortar stores, expanded the brand into international waters, making it the largest omnichannel women’s fashion label in Southeast Asia."
    ]
  },
  {
    title:"Dr Fanglin Wang",
    subtitle:"Head of R&D Department",
    info: "ADVANCE.AI",
    personalLink:"https://www.linkedin.com/in/fanglinwang/",
    imgsrc:"/assets/images/speakers/2022/1_1 Formatted/Fanglin Wang.jpg",
    imgFull:"/assets/images/speakers/2022/innovation/Fanglin Wang.jpg",
    description: ["Dr. WANG Fanglin is currently the Head of Research and Development at ADVANCE.AI.\
        He has over 15 years of experience developing AI techniques to tackle academic and industrial problems. \
        Prior to ADVANCE.AI, he used to be the associate director of Video Analytics and Machine Learning at NCS Group, \
        CTO at KAI Square, Research Fellow at NUS, and research scientist at Autodesk and another 2 international companies. \
        He received his Ph.D. from Shanghai Jiao Tong University and master and bachelor degrees both from Harbin Institute of Technology."]
  },
  {
    title:"Dr James Ong",
    subtitle:"Founder & CEO",
    info: "Origami",
    personalLink:"https://www.linkedin.com/in/jamesongkayliang/",
    imgsrc:"/assets/images/speakers/2022/1_1 Formatted/James Ong.jpg",
    imgFull:"/assets/images/speakers/2022/innovation/James Ong.jpg",
    description: ["Dr. James Ong is an entrepreneur and community builder who has incubated, \
    invested and mentored various technology start-ups and he is actively involved in the AI and tech ecosystem in China and ASEAN. \
    He is the founder and CEO of Origami that provides strategy, technology and investment advisory services for venturing towards \
    Autonomous Enterprise where he has more than 35 years of experience on digital transformation in Asia, US and Europe across \
    multiple industry verticals. James founded Artificial Intelligence International Institute (AIII), a think tank advocating \
    Sustainable AI for Humanity. He is also adjunct professor at SUTD and serves as mentor at NUS, SUTD and NTU. He started his career \
    as an AI scientist at leading US MCC research lab on advanced AI Fifth Generation Computer research and received his PhD in Management \
    Information System specializing on AI for Business Process Automation and MA & BA in Computer Science from the University of Texas at Austin."]
  },
  {
    title:"Rachel Lim",
    subtitle:"Co-Founder",
    info: "Love, Bonito",
    personalLink:"https://www.linkedin.com/in/rachel-lim-25b3b262/",
    imgsrc:"/assets/images/speakers/2022/1_1 Formatted/Fanglin Wang.jpg",
    imgFull:"/assets/images/speakers/2022/ignite/LB Rachel Lim Profile Image.jpg",
    description: [
        "Rachel Lim co-founded what was to be Love, Bonito at a tender age of 19. She started her own online fashion business when e-commerce was at its infancy and grew the blogshop into a multi-million dollar global brand in just over a decade.",
        "Her desire to empower women through thoughtful creations and memorable experiences has propelled her to set up international brick-and-mortar stores, expanded the brand into international waters, making it the largest omnichannel women’s fashion label in Southeast Asia."
    ]
  },
  {
    title:"Dr Fanglin Wang",
    subtitle:"Head of R&D Department",
    info: "ADVANCE.AI",
    personalLink:"https://www.linkedin.com/in/fanglinwang/",
    imgsrc:"/assets/images/speakers/2022/1_1 Formatted/Fanglin Wang.jpg",
    imgFull:"/assets/images/speakers/2022/innovation/Fanglin Wang.jpg",
    description: ["Dr. WANG Fanglin is currently the Head of Research and Development at ADVANCE.AI.\
        He has over 15 years of experience developing AI techniques to tackle academic and industrial problems. \
        Prior to ADVANCE.AI, he used to be the associate director of Video Analytics and Machine Learning at NCS Group, \
        CTO at KAI Square, Research Fellow at NUS, and research scientist at Autodesk and another 2 international companies. \
        He received his Ph.D. from Shanghai Jiao Tong University and master and bachelor degrees both from Harbin Institute of Technology."]
  },

];

// Date for Releasing Problem Statements. Edit here to change
export const statementReleaseDate = "March 1, 2023 00:00:00"

// Edit this to change the content of paras in About Page
export const aboutUs = [
  {
    id: "para1",
    content: "Lorem ipsum dolor sit amet. Qui nihil nesciunt et minus minus id veniam corporis et explicabo aperiam sed quia dolore aut quod soluta.",
  },
  {
    id: "para2",
    content: "Lorem ipsum dolor sit amet. Qui nihil nesciunt et minus minus id veniam corporis et explicabo aperiam sed quia dolore aut quod soluta.",
  },
  {
    id: "para3",
    content: "Lorem ipsum dolor sit amet. Qui nihil nesciunt et minus minus id veniam corporis et explicabo aperiam sed quia dolore aut quod soluta.",
  },
];

export const timelineSchedule = [
  {
    title: "Registration Opens",
    date: "2023-01-01T12:00:00",
  },
  {
    title: "Event 2",
    date: "2023-01-01T12:00:00",
  },
  {
    title: "Event 3",
    date: "2023-01-01T12:00:00",
  },
  {
    title: "Event 4",
    date: "2023-01-01T12:00:00",
  },
  {
    title: "Event 5",
    date: "2023-01-01T12:00:00",
  },
  {
    title: "Event 6",
    date: "2023-01-01T12:00:00",
  },
  {
    title: "Event 7",
    date: "2023-01-01T12:00:00",
  },
];

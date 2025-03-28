/* 
This file contains list of static texts that will be displayed in the web page.
In the future, please use this file as the only way to interact with editing texts.
*/

import {
  groundzero,
  instagram,
  linkedin,
  nes,
  pastEvent1,
  pastEvent2,
  pastEvent3,
  pastEvent4,
  pastEvent5,
  pastEvent6,
  pastEvent7,
  pastEvent8,
  pastEvent9,
  pastEvent10,
  pastEvent11,
  twitter,
  sustainability,
  scape,
  uob,
  lumos, 
  auralo,
  boulder_planet,
  block_71,
  embedded,
  novotel,
  imda,
  mercure_stevens,
  river_venture_studio,
  alibaba_cloud,
  nus_enterprise,
  suntec_singapore,
  david_z_wang,
  dr_ferdin_joe,
  jeffrey_chua,
  viveka_kalisadan,
  speaker_background_1,
  speaker_background_2,
  speaker_background_3,
  speaker_background_4,
  adrian_lee,
  anli_geng,
  edward_tay,
  jon_ng,
  kaylee_fung,
  manish_patel,
  matthias_ong,
  richard_oh,
  ruslan_enikeev,
  russ_neu,
  shaw_bee_chung,
  vinod_vasnani, paul_kan, adam_chee, lim_wai_mun, natasha_syed, douglas_peris,
} from "../assets";


export { mentors } from "./data_and_automation_scripts/mentors.js";

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
    content: "January - March 2025",
  },
  {
    id: "timeline-2",
    icon: groundzero,
    title: "Problem Statements Released",
    content: "March 2025",
  },
  {
    id: "timeline-3",
    icon: groundzero,
    title: "Pitch Day",
    content: "April 2025",
  },
];

export const problemStatements = [
  {
    id: 1,
    title: "Health & Wellness",
    details: [
      "1. How can generative AI be utilised to create healthcare solutions that are affordable, accessible, and catered to marginalised communities, and at the same time personalised to the needs and health conditions of individuals.",
      "2. How can technology be integrated seamlessly in our lives to provide personalised health insights and real-time feedback?",
      "3. How can we develop robust standards for protecting personal health data across digital health ecosystems, ensuring compliance with regulations, and at the same time enhancing transparency, accountability, and user control over their health data, empowering individuals to make informed decisions about how their data is collected, used, and shared.",
    ],
  },
  {
    id: 2,
    title: "Sustainability",
    details: [
      "1. How can generative AI help predict and manage natural resource usage, promoting environmental conservation efforts?",
      "2. How can we make sustainability upskilling more relevant and up to date, given the dynamic and fast changing nature of the landscape?",
      "3. Develop a solution to effectively encourage a more sustainable lifestyle among youths today. ",
    ],
  },
  {
    id: 3,
    title: " E-commerce",
    details: [
      "1. How can generative AI be used to create a more inclusive online shopping experience for customers with vision impairments or other challenges?",
      "2. Develop a solution for businesses to improve the cost, energy utilisation and/or speed of their Last Mile Delivery",
      "3. Develop a solution to improve overall customer experience and foster a safe and trustworthy environment to tackle and prevent fraudulent transactions of an Online Marketplace. ",
    ],
  },
  {
    id: 4,
    title: "Finance",
    details: [
      "1. How can generative AI be used to create inclusive financial products and services for communities with limited access to traditional banking systems?",
      "2. How can financial literacy be democratised and allow people from all ages and financial backgrounds to grasp complex financial concepts?",
      "3. Develop a solution to streamline and create a seamless transaction/payment process for users/businesses.",
    ],
  },
];

export const problems = [
  {
    id: 1,
    title: "Health & Wellness",
    details1:
      "Given the limitless opportunity to improve healthcare, med-tech, fitness, mental wellness and the like. We look forward to solutions that are complemented with the advancements in AI, analytics, wearables and other technologies.",
    img: sustainability,
    probstatements: [
      "1. How can generative AI be utilised to create healthcare solutions that are affordable, accessible, and catered to marginalised communities, and at the same time personalised to the needs and health conditions of individuals.",
      "2. How can technology be integrated seamlessly in our lives to provide personalised health insights and real-time feedback?",
      "3. How can we develop robust standards for protecting personal health data across digital health ecosystems, ensuring compliance with regulations, and at the same time enhancing transparency, accountability, and user control over their health data, empowering individuals to make informed decisions about how their data is collected, used, and shared.",
    ],
  },
  {
    id: 2,
    title: "Finance",
    details1:
      "The scene of the finance industry has evolved beyond traditional banking as Singapore progresses to be a global financial hub. We look forward to creative solutions that redefine the future of the finance industry and global economic interactions, making a lasting impact on businesses and individuals alike.",
    img: sustainability,
    probstatements: [
      "1. How can generative AI be used to create inclusive financial products and services for communities with limited access to traditional banking systems?",
      "2. How can financial literacy be democratised and allow people from all ages and financial backgrounds to grasp complex financial concepts?",
      "3. Develop a solution to streamline and create a seamless transaction/payment process for users/businesses.",
    ],
  },
  {
    id: 3,
    title: "E-Commerce",
    details1:
      "E-Commerce has come a long way and has become an integral part of our lives. We look forward to novel solutions that are relevant to the current day market, shaping the future of commerce, setting new benchmarks for shopping efficiency.",
    img: sustainability,
    probstatements: [
      "1. How can generative AI be used to create a more inclusive online shopping experience for customers with vision impairments or other challenges?",
      "2. Develop a solution for businesses to improve the cost, energy utilisation and/or speed of their Last Mile Delivery",
      "3. Develop a solution to improve overall customer experience and foster a safe and trustworthy environment to tackle and prevent fraudulent transactions of an Online Marketplace. ",
    ],
  },
  {
    id: 4,
    title: "Sustainability",
    details1:
      "Sustainability is a global movement that cannot be ignored. It isn’t just a choice. It is a responsibility to shape the future for our planet. We look forward to solutions that address the challenges of this niche market, changing the lifestyle of today’s environment and paving the way for a more sustainable future. ",
    img: sustainability,
    probstatements: [
      "1. How can generative AI help predict and manage natural resource usage, promoting environmental conservation efforts?",
      "2. How can we make sustainability upskilling more relevant and up to date, given the dynamic and fast changing nature of the landscape?",
      "3. Develop a solution to effectively encourage a more sustainable lifestyle among youths today. ",
    ],
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
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-3",
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

export const questions = [
  {
    id: "question-1",
    question: "How much does it cost to join Ground Zero?",
    answer:
  "Tickets are at $15 per person. If you are from our partnered school/club the tickets are $5 per person. If your club is not in partnership with us, do drop us an email and we will reach out to your club soon"
  },
  {
    id: "question-2",
    question: "How do I sign up for Ground Zero?",
    answer: "You can sign up for Ground Zero through the Register button above!",
  },
  {
    id: "question-3",
    question:
      "Can I sign up as an individual? How can I find other like-minded teammates for Ground Zero?",
    answer:
"If you don’t have a team yet, don’t worry! You can join our Phase Zero networking sessions to connect with like-minded entrepreneurs. If needed, we’ll also do our best to match you with a team."
  },
  {
    id: "question-4",
    question: "How many people can be on a team?",
    answer: "Each team should consist of 3 to 5 members.",
  },
  {
    id: "question-5",
    question:
      "Does my startup idea have to be in line with a certain theme, or can it be anything I want?",
    answer:
      "All ideas presented must be related to one of the four industry focus areas listed in the above section. The Areas of Focus are Data Tech, Finance, Health & Wellness, and Sustainability.",
  },
  {
    id: "question-6",
    "question": "Must I attend all days of the event?",
"answer": "Ground Zero will consist of multiple physical days. Attendance is compulsory on 13 May and 19 May which are the first and last day of Ground Zero. Other events, such as Phase Zero and mentor meet-ups on 15 May, are optional but encouraged for a fuller experience!"    },
  {
    id: "question-7",
    question: "What is included in the prize pool?",
    answer:
      "A grand prize of First Place $4,000 Second Place $3,000 Third place $2000 and more side prizes that adds up to a total of $1,000 up for you to grab! ",
  },
  {
    id: "question-8",
    question:
      "Do I need to have experience in entrepreneurship or startups to join Ground Zero?",
    answer:
      "No experience is needed! We encourage all aspiring entrepreneurs from all tertiary institutions and faculties to join us at this event.",
  },
  {
    id: "question-9",
    question: "Who can participate in Ground Zero?",
    answer:
      "Any student currently enrolled at a tertiary institution, be it part-time or full-time. Tertiary institutions include, but are not limited to ITEs, Polytechnics, Universities (both undergraduate and postgraduate). We also allow recent alumni of 5 years or less, but please limit the number of alumni to two at maximum.",
  },
  {
    id: "question-10",
    question:
      "I’m a student that is from an institution overseas. Can I still join Ground Zero?",
    answer: "Yes! You’re welcome to join, but you'll need to cover your own travel expenses, including visa and accommodation. We can help you find more affordable lodging through our hotel partnerships—just email us if you need assistance.",
  },
  {
    id: "question-11",
    question: "I have certain disabilities or conditions that require additional accommodations. Can I still join Ground Zero?",
    answer: 
    "Yes! Please do send us an email at nesgroundzero@gmail.com indicating that you will require additional accommodations. Our team will discuss with you on how we can provide the appropriate support.",
  },
  {
    id: "question-12",
    question: "Can I join virtually? ",
    answer: "No, Ground Zero is a physical event.",
  },

];

export const organizer = [
  {
    id: "nes",
    icon: nes,
  },
];

export const sponsorsData = {
  diamond: [
    { name: 'Diamond Corp', logo: uob, description: 'UOB is a leading bank in Asia with a global network of around 500 branches and offices across 19 countries and territories in Asia Pacific, Europe, and North America. We believe in balancing purpose and balance to help our people grow professionally and personally anchored on our people philosophy of care, growth and trust.' }
  ],
  // platinum: [
  //   { name: 'Platinum A', logo: uob, description: 'UOB is a leading bank in Asia with a global network of around 500 branches and offices across 19 countries and territories in Asia Pacific, Europe, and North America. We believe in balancing purpose and balance to help our people grow professionally and personally anchored on our people philosophy of care, growth and trust.' },
  //   { name: 'Platinum B', logo: uob, description: 'UOB is a leading bank in Asia with a global network of around 500 branches and offices across 19 countries and territories in Asia Pacific, Europe, and North America. We believe in balancing purpose and balance to help our people grow professionally and personally anchored on our people philosophy of care, growth and trust.' },
  //   { name: 'Platinum C', logo: uob, description: 'UOB is a leading bank in Asia with a global network of around 500 branches and offices across 19 countries and territories in Asia Pacific, Europe, and North America. We believe in balancing purpose and balance to help our people grow professionally and personally anchored on our people philosophy of care, growth and trust.' }
  // ],
  gold: [
    { name: 'Scape', logo: scape, description: '' },
    { name: 'IMDA', logo: imda, description: '' },
    // { name: 'Gold B', logo: uob, description: '' },
    // { name: 'Gold C', logo: uob, description: '' },
    // { name: 'Gold D', logo: uob, description: '' },
    // { name: 'Gold E', logo: uob, description: '' },
    // { name: 'Gold F', logo: uob, description: '' },
  ],
  communitypartners: [
    { name: 'Lumos', logo: lumos, description: '' },
    { name: 'Novotel', logo: novotel, description: '' },
    { name: 'Mercure', logo: mercure_stevens, description: '' },
    { name: 'NUS Enterprise', logo: nus_enterprise, description: 'NUS Enterprise, the entrepreneurial arm of the National University of Singapore (NUS), plays a pivotal role in advancing innovation and entrepreneurship at NUS and beyond. It actively promotes entrepreneurship through the experiential entrepreneurial education, active industry partnerships, holistic entrepreneurship support and more.' },
    { name: 'Boulder Planet', logo: boulder_planet, description: '' },
    { name: 'Airalo', logo: auralo, description: '' },
    { name: 'Alibaba Cloud', logo: alibaba_cloud, description: '' },
    { name: 'River Venture Studio', logo: river_venture_studio, description: 'River Venture Studio is the world’s first and only Industry 5.0 venture studio—an incubator-accelerator supported by Enterprise Singapore, championing women and minority-led deeptech ventures. Built on the LetLab foundation, it drives innovation and sustainability at the intersection of advanced technology.' },
  ],
  beyondZeroPartners: [
    { name: 'Block71', logo: block_71, description: 'Embedded LLM is a revolutionary AI solution that seamlessly integrates advanced language models into enterprise workflows. Designed for effortless deployment and high performance, Embedded LLM empowers businesses to transform data into actionable insights.' },
    { name: 'Embedded LLM', logo: embedded, description: 'Embedded LLM provides a revolutionary AI solution that seamlessly integrates advanced language models into enterprise workflows. Designed for effortless deployment and high performance, Embedded LLM empowers businesses to transform data into actionable insights. With unparalleled security and open compatibility, it simplifies AI integration, driving innovation and efficiency across modern enterprises.' },
  ],
  mediaPartners: [
    { name: 'Suntec', logo: suntec_singapore, description: '' },
  ],
  };

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
    title: "Ground Zero 2023",
    content: pastEvent3,
  },
  {
    id: "pastEvent4",
    title: "Ground Zero 2019",
    content: pastEvent4,
  },
  {
    id: "pastEvent5",
    title: "Ground Zero 2021",
    content: pastEvent5,
  },
  {
    id: "pastEvent6",
    title: "Ground Zero 2023",
    content: pastEvent6,
  },
  {
    id: "pastEvent7",
    title: "Ground Zero 2023",
    content: pastEvent7,
  },
  {
    id: "pastEvent8",
    title: "Ground Zero 2019",
    content: pastEvent8,
  },
  {
    id: "pastEvent9",
    title: "Ground Zero 2023",
    content: pastEvent9,
  },
  {
    id: "pastEvent10",
    title: "Ground Zero 2023",
    content: pastEvent10,
  },
  {
    id: "pastEvent11",
    title: "Ground Zero 2023",
    content: pastEvent11,
  },
];

export const workshops = [
  {
    name: "Adopting AI & Web3 as a Founder",
    by: "Dr. Ferdin Joe John Joseph",
    photo: dr_ferdin_joe,
    background: speaker_background_1,
    company: "Alibaba Cloud",
    location_of_workshop: "Alibaba Cloud",
    date: "2025-03-14T15:00:00",
    link: "https://www.linkedin.com/in/ferdinjoe/",
    description: [
      "Dr. Ferdin is a seasoned training advisor at Alibaba Cloud Singapore with over 13 years of experience in academia and corporate training.",
      "Recognized as Alibaba Cloud’s Most Valuable Professional, he is an expert in AI, Cloud Computing, and emerging Web3 technologies."
    ]
    },
  {
    name: "Pitching",
    by: "Dr. Viveka Kalisadan",
    photo: viveka_kalisadan,
    background: speaker_background_4,
    company: "River Venture Studio",
    location_of_workshop: "*SCAPE",
    date: "2025-03-22T15:00:00",
    link: "https://www.linkedin.com/in/vivekakalidasan",
    description: [
      "Dr. Viveka Kalidasan is a visionary innovator celebrated as one of MIT’s 35 Innovators Under 35, Singapore’s Top 100 Women in Technology, and an NUS Outstanding Young Alumni.", "As the Founder and CEO of River Venture Studio—the world’s first Industry 5.0 accelerator and startup studio backed by Enterprise Singapore—she spearheads initiatives that empower startups in robotics, automation, and digital transformation, all with a focus on sustainability and human-centric innovation.", "Dr. Viveka's deep expertise in medtech is showcased by her pioneering work in patient-centered deeptech medical devices. Her research on wireless sensing (WiSe) sutures, published in Nature Biomedical Engineering and featured on the October 2021 cover, was spotlighted in Nature’s news and views and has set a new standard in FemTech solutions.", "Her comprehensive approach to R&D, clinical, regulatory, and commercialization pathways drives groundbreaking advancements in the medtech space. Beyond River Venture Studio, Dr. Viveka founded The Edify Project, a venture-building platform based in Singapore, which supports startups, academia, and corporates in scaling across the APAC region.", "She also serves on the board of the Singapore South Asia Chamber of Commerce and Industries, where, as Chair of Partnerships, she fosters collaborations to advance cross-industry innovation and growth."
    ]
    },
  {
    name: "Ideation",
    by: "Jeffrey Chua",
    photo: jeffrey_chua,
    background: speaker_background_2,
    company: "Millenium Enterprise",
    location_of_workshop: "*SCAPE",
    date: "2025-03-29T15:00:00",
    link: "https://www.linkedin.com/in/jeffrey-chua-b384a731/?originalSubdomain=sg",
    description: [
      "Jeffrey has more than 20 years of industrial experience and is the Co-founder and CEO of Millennium Enterprise. Before starting a company, he had 15 years of management experience in Accenture, IBM, Public Service Division, Monetary Authority of Singapore (MAS) and United Overseas Bank (UOB).",
      "He led UOB Enterprise Data Governance Policy unit which governs and manages data risks for UOB regionally. He is a member of Singapore Institute of Directors (MSID).",
      "A banking professional turned successful entrepreneur, Jeffrey started an e-commerce and product development company - Millennium Enterprise in 2016. In less than a year, Jeffrey grew the company from ground up to a highly profitable multi-million revenue business.",
      "In 2022, he led his company to be recognized as one of Straits Times Singapore’s Fastest Growing Companies 2022 (Top 23) and one of the high growth APAC SMEs in Financial Times (FT.com) Asia Pacific Top High Growth companies, with a compound annual growth rate CAGR of more than 70%.",
      "The company won Amazon’s Go Global Seller of the Year award in 2022. After which, the company’s e-commerce baby brand – NatureBond has been acquired through a multi-million deal in 2022.",
      "Currently, he advises business owners and executives in Singapore and S.E Asia on expanding e-commerce businesses, business exits and mergers and acquisitions (M&A). Additionally, he serves as an affiliate faculty in SMU Academy of Singapore Management University.",
      "Jeffrey graduated from INSEAD’s Advanced Management Program (AMP). He is an MBA scholar who graduated with an MBA from Singapore Management University. He graduated with a Bachelor of Engineering from NUS in 2005. He is an alumnus of NUS, SMU and INSEAD.",
    ]
  },
  {
    name: "Standing Out in a Saturated Market",
    by: "David Z. Wang",
    photo: david_z_wang,
    background: speaker_background_3,
    company: "Helicap",
    location_of_workshop: "*SCAPE",
    date: "2025-04-05T15:00:00",
    link: "https://www.linkedin.com/in/dzwgroup/?originalSubdomain=sg",
    description: [
      "David, with a decade of experience at top investment banks like Morgan Stanley, Credit Suisse, and Nomura, left banking in 2016 and founded 33 Capital, an investment firm focused on FinTech and e-commerce startups in Southeast Asia.",
      "He later co-founded Helicap, providing private investment opportunities for investors and partners, earning recognition as a Top FinTech Leader by the Singapore FinTech Association in 2019.",
      "David graduated from NUS and has always been passionate about developing the potential of youths, spurring him to establish the 33 Capital Student Exchange Awards for NUS Business Students. Now, he's eager to inspire and share his expertise with students aspiring to enter similar fields.",
    ]
  },
];

export const panelists = {
  "Data Tech": [
    {
      title: "Kaylee Fung",
      AreaOfFocus: "Data Tech",
      subtitle: ["Sales and Partnerships, APAC"],
      company: ["VIDA Digital Identity"],
      personalLink: "https://www.linkedin.com/in/kayleefung/",
      imgsrc: kaylee_fung, // TODO: Replace with the actual image import or URL
      description: [""]
    },
    {
      title: "Edward Tay",
      AreaOfFocus: "Data Tech",
      subtitle: ["Professor"],
      company: ["NUS"],
      personalLink:
        "https://www.linkedin.com/in/edwardtayweemeng/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      imgsrc: edward_tay, // TODO: Replace with the actual image import or URL
      description: [""]
    }
  ],
  "Finance": [
    {
      title: "Manish Patel",
      AreaOfFocus: "Finance",
      subtitle: ["MD, Head of APAC Global Corporate Sales"],
      company: ["JP Morgan"],
      personalLink:
        "https://www.linkedin.com/in/manishpatel2001/?originalSubdomain=sg",
      imgsrc: manish_patel, // TODO: Replace with the actual image import or URL
      description: [""]
    },
    {
      title: "Shaw Bee Chung",
      AreaOfFocus: "Finance",
      subtitle: ["Head of Reserve Client Segment, Private Bank"],
      company: ["UOB"],
      personalLink: "",
      imgsrc: shaw_bee_chung, // TODO: Replace with the actual image import or URL
      description: [""]
    },
    {
      title: "Richard Oh",
      AreaOfFocus: "Finance",
      subtitle: ["Co-Founder, Strategy and Network Partnerships"],
      company: ["Finmo"],
      personalLink: "https://www.linkedin.com/in/ohrichard/",
      imgsrc: richard_oh, // TODO: Replace with the actual image import or URL
      description: [""]
    }
  ],
  "Health & Wellness": [
    {
      title: "Jon Ng",
      AreaOfFocus: "Health & Wellness",
      subtitle: ["Product Owner & Lead Frontend Developer"],
      company: ["Mobio Interactive"],
      personalLink: "",
      imgsrc: jon_ng, // TODO: Replace with the actual image import or URL
      description: [""]
    },
    {
      title: "Ruslan Enikeev",
      AreaOfFocus: "Health & Wellness",
      subtitle: ["CTO and Co-Founder"],
      company: ["Oncoshot"],
      personalLink: "https://www.linkedin.com/in/irriss/",
      imgsrc: ruslan_enikeev, // TODO: Replace with the actual image import or URL
      description: [""]
    }
  ],
  "Sustainability": [
    {
      title: "Russ Neu",
      AreaOfFocus: "Sustainability",
      subtitle: ["Founder & CEO"],
      company: ["Social Collider"],
      personalLink: "https://www.linkedin.com/in/russneu/?originalSubdomain=sg",
      imgsrc: russ_neu, // TODO: Replace with the actual image import or URL
      description: [""]
    },
    {
      title: "Adrian Lee",
      AreaOfFocus: "Sustainability",
      subtitle: ["Founder & Director of Ops"],
      company: ["Kairos Coaching / Lendlease"],
      personalLink: "https://www.linkedin.com/in/adrianleesingapore/",
      imgsrc: adrian_lee, // TODO: Replace with the actual image import or URL
      description: [""]
    },
    {
      title: "Matthias Ong",
      AreaOfFocus: "Sustainability",
      subtitle: ["Vice President"],
      company: ["City Development Boards"],
      personalLink: "https://www.linkedin.com/in/matthiasongdw/",
      imgsrc: matthias_ong, // TODO: Replace with the actual image import or URL
      description: [""]
    },
    {
      title: "Anli Geng",
      AreaOfFocus: "Sustainability",
      subtitle: ["Director and Cofounder"],
      company: ["Mycosortia"],
      personalLink: "https://www.linkedin.com/in/anli-geng-74b8a715/",
      imgsrc: anli_geng, // TODO: Replace with the actual image import or URL
      description: [""]
    }
  ]
};

export const judges = {
  "Data Tech": [
    {
      imgsrc: edward_tay,
      title: "Edward Tay",
      AreaOfFocus: "Data Tech",
      company: ["NUS"],
      subtitle: ["Professor"],
      personalLink:
        "https://www.linkedin.com/in/edwardtayweemeng/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      imgsrc: vinod_vasnani,
      title: "Vinod Vasnani",
      AreaOfFocus: "Data Tech",
      company: ["Qryptal"],
      subtitle: ["Co-Founder, Adjunct Professor"],
      personalLink: "https://www.linkedin.com/in/vinodvasnani/"
    }
  ],
  "Finance": [
    {
      imgsrc: paul_kan,
      title: "Paul Kan",
      AreaOfFocus: "Finance",
      company: ["UOB"],
      subtitle: ["Country Head, Business Banking, Singapore"],
      personalLink: "https://www.linkedin.com/in/paul-kan-ngee-fei/?originalSubdomain=sg"
    }
  ],
  "Health & Wellness": [
    {
      imgsrc: adam_chee,
      title: "Adam Chee",
      AreaOfFocus: "Health & Wellness",
      company: ["NUS"],
      subtitle: ["Professor"],
      personalLink: "https://www.linkedin.com/in/adamchee/?originalSubdomain=sg"
    },
    {
      imgsrc: lim_wai_mun,
      title: "Lim Wai Mun",
      AreaOfFocus: "Health & Wellness",
      company: ["Dr Anywhere"],
      subtitle: ["Founder & CEO"],
      personalLink: "https://www.linkedin.com/in/wai-mun-lim-141347163/"
    }
  ],
  "Sustainability": [
    {
      imgsrc: natasha_syed,
      title: "Natasha Syed",
      AreaOfFocus: "Sustainability",
      company: ["SkilledinGreen"],
      subtitle: ["Founder"],
      personalLink: "https://www.linkedin.com/in/natasha-syed?originalSubdomain=sg"
    },
    {
      imgsrc: douglas_peris,
      title: "Douglas Peris (Doug)",
      AreaOfFocus: "Sustainability",
      company: ["Founders Bridge"],
      subtitle: [
        "Founding Partner @ Founders Bridge, Executive Director @ B-Lab, Start-up founder mentor"
      ],
      personalLink: "https://www.linkedin.com/in/douglasperis/?originalSubdomain=sg"
    }
  ]
};


// Date for Start of Ground Zero. Edit here to change
export const groundZeroStartDate = "2025-05-01T00:09:00+08:00";

// Date for Releasing Problem Statements. Edit here to change
export const statementReleaseDate = "May 13, 2025 00:09:00 GMT+0800";

// Edit this to change the content of paras in About Page
export const aboutUs = [
  {
    id: "para1",
    content:
      "Ground Zero is Singapore’s largest student-led startathon, uniting entrepreneurial-minded students from diverse backgrounds to innovate and solve real-world challenges.",
  },
  {
    id: "para2",
    content:
      "Since its inception in 2018, Ground Zero has attracted thousands of participants and built a robust network within Singapore’s startup ecosystem—including founders, CEOs, venture capitalists, angel investors, and industry experts.",
  },
  {
    id: "para3",
    content:
      "Last year, we brought together over 400 participants from polytechnics, junior colleges, and universities worldwide, and welcomed more than 40 mentors. This year, we're excited to return—with a fresh twist! Ground Zero now features four dynamic Areas of Focus: Data Tech, Finance, Health & Wellness, and Sustainability, creating the perfect launchpad for aspiring entrepreneurs to kickstart their journey.",
  },
];

export const pastEventDescription = [
  {
    id: "para1",
    content:
      "Ground Zero is the largest student led startathon in Singapore.",
  },
  {
    id: "para2",
    content:
      "Support us in providing essential resources, mentorship opportunities, and networking experiences for aspiring entrepreneurs all around the world."  },
  {
    id: "para3",
    content:
      "Join Ground Zero 2025 today to ignite groundbreaking ideas and shape the future of entrepreneurship!"
  },
];

export const WeekSchedule = [{
  days: [
    {
      dayText: {
        text: "Day 1",
        date: new Date("2025-05-13"),
        details: "Location: TBC"
      },
      scheduleData: [
        { time: "9:30 - 9:45 AM", name: "Registration", details: "Participants will register upon arrival." },
        { time: "9:55 - 11:00 AM", name: "Opening Ceremony", details: "A welcome briefing, a keynote opening speech, and a group photo session will take place." },
        { time: "10:35 - 11:05 AM", name: "Sponsors Talk Session", details: "A presentation will be delivered by our sponsors, NUS Enterprise and Suntec, as part of the Ground Zero 2025 program." },
        { time: "11:15 - 12:15 PM", name: "Panel Discussions 1 & 2", details: "Two concurrent panel discussions will be conducted in separate venues." },
        { time: "12:15 PM", name: "Problem Statements Release", details: "The challenge problem statements will be released online and formally announced to all participants." },
        { time: "12:15 - 1:15 PM", name: "Lunch Break", details: "Participants will enjoy a lunch break." },
        { time: "1:15 - 2:15 PM", name: "Panel Discussions 3 & 4", details: "Two concurrent panel discussions will be held in separate venues." },
        { time: "2:30 - 4:30 PM", name: "Mentor-Mentee Networking", details: "Participants will have the opportunity to connect with mentors for guidance during the ideation phase." }
      ]
    },
  {
      dayText: {
        text: "Day 2",
        date: new Date("2025-05-13"),
        details: "No Program Flow"
      },
      scheduleData: [
      ]
    },
    {
      dayText: {
        text: "Day 3",
        date: new Date("2025-05-15"),
        details: "Location: Mentor's office space"
      },
      scheduleData: [
        { time: "All Day", name: "Mentorship Session 2", details: "Participants are encouraged to schedule mentorship sessions with their assigned mentors." }
      ]
    },
    {
      dayText: {
        text: "Day 4",
        date: new Date("2025-05-16"),
        details: "Pitch Preparation & Submission"
      },
      scheduleData: [
        { time: "All Day", name: "Pitch Preparation & Submission", details: "Participants will submit their 2-minute video pitch by the end of day for judging." }
      ]
    },
    {
      dayText: {
        text: "Day 5",
        date: new Date("2025-05-17"),
        details: "‎"
      },
      scheduleData: [
        { time: "TBD", name: "Semi-Finals Judging", details: "Judging for the semi-finals will take place, with 12 finalist teams advancing to the Grand Finals on Day 7." }
      ]
    },
    {
      dayText: {
        text: "Day 6",
        date: new Date("2025-05-18"),
        details: "Finalist Results & Preparation"

      },
      scheduleData: [
        { time: "All Day", name: "Finalist Preparation", details: "The 12 Finalists will be released to the participants. Teams will prepare and rehearse for the final rounds." }
      ]
    },
    {
      dayText: {
        text: "Day 7",
        date: new Date("2025-05-19"),
        details: "Location: TBC"
      },
      scheduleData: [
        { 
          time: "1:30 - 1:45 PM", name: "Registration", details: "Participants will register upon arrival." 
        },
        { 
          time: "1:45 - 1:55 PM", name: "Briefing", details: "A briefing will present an overview of the day's agenda and provide a formal introduction of the judging panel." 
        },
        { 
          time: "1:55 - 2:05 PM", name: "Keynote Speaker", details: "A keynote speech will be delivered by our diamond sponsor, UOB." 
        },
        { 
          time: "2:05 - 3:35 PM", 
          name: "First Round Pitching", 
          details: "Six teams will present their final pitch, with each team allocated 5 minutes for the presentation and 10 minutes for a Q&A session." 
        },
        { 
          time: "3:00 - 6:30 PM", 
          name: "Exhibition", 
          details: "Ground Zero’s 12 finalists will have the option to set up a booth to showcase their ideas to the public, and networking activities will be held concurrently." 
        },
        { 
          time: "3:45 - 4:00 PM", 
          name: "Break", 
          details: "A short break will be provided, during which refreshments will be available." 
        },
        { 
          time: "4:00 - 5:30 PM", 
          name: "Second Round Pitching", 
          details: "The remaining six teams will present their final pitch, with each team receiving 5 minutes for the presentation and 10 minutes for a Q&A session." 
        },
        { 
          time: "5:30 - 6:30 PM", 
          name: "Open Mic Session", 
          details: "Non-winning teams will have the opportunity to pitch to a venture capitalist, thereby securing funding for their ideas or competing for other prizes offered by Ground." 
        },
        { 
          time: "5:40 - 6:40 PM", 
          name: "Dinner", 
          details: "Dinner will be served while judging deliberations take place." 
        },
        { 
          time: "6:50 - 7:00 PM", 
          name: "GOH’s Closing Speech", 
          details: "Our Guest of Honor, Dr. Mohamad Maliki Osman, Second Minister for Education, will deliver the closing speech." 
        },
        { 
          time: "7:00 - 7:30 PM", 
          name: "Prize Presentation", 
          details: "An award ceremony will feature the announcement of winners, a lucky draw, and acknowledgments for both judges and sponsors." 
        }
      ]
    }
  ]
}];

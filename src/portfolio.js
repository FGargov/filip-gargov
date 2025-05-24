/* Change this file to get your personal Porfolio */
import DevOpsIllustrationImg from "./assets/images/devops_illustration.png";

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Filip's Portfolio",
  description:
    "For the past year and a half, I have been focusing on QA Engineering, with training in manual and automated testing, and have gained proficiency in Java, REST Assured, Selenium WebDriver, JUnit, Postman, Cucumber, and Jira.",
  og: {
    title: "Filip Gargov Portfolio",
    type: "website",
    url: "http://filipgargov.com/",
  },
};

//Home Page
const greeting = {
  title: "Filip Gargov",
  logo_name: "Filip Gargov",
  nickname: "FGargov",
  subTitle: "",
  resumeLink:
    "https://1drv.ms/b/c/4f2b4b1f5e2bd5e5/ETCRWxTwheBKrKysdWG9onoB-Qwc7GJoL86dE5kqaEFrog?e=Uv9uL2",
  portfolio_repository: "https://github.com/FGargov/my-portfolio",
  githubProfile: "https://github.com/FGargov",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/FGargov",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/filip-gargov-1b35359/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:fgargov@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "DevOps Essentials",
      fileName: "DataScienceImg",
      skills: [
        "🐧 Acquiring foundational skills in Linux administration.",
        "📜 Developing foundational skills in Bash/Python scripting for automation.",
        "🔄 Learning foundational skills in CI/CD principles.",
        "⚡ Strengthening foundational skills in Git version control.",
        "🐳 Comprehending foundational skills in Docker containerization.",
        "🗄️ Acquiring foundational knowledge of database concepts and management.",
        "🛠️ Understanding principles of configuration management (e.g., Ansible).",
        "☁️ Focusing current professional development on Cloud technologies, particularly AWS.",
      ],
      softwareSkills: [
        {
          skillName: "Linux",
          fontAwesomeClassname: "devicon:linux",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "devicon:bash",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "devicon:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "CI/CD",
          fontAwesomeClassname: "devicon:githubactions-wordmark",
          style: {
            /* ... */
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "devicon:git",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "devicon:docker",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Database",
          fontAwesomeClassname: "devicon:sqldeveloper",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "devicon:ansible-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
    {
      title: "Quality Assurance",
      fileName: "FullStackImg",
      skills: [
        "🧪 Focusing on QA Engineering, with comprehensive training in both manual and automated testing methodologies.",
        "⚙️ Developing and executing detailed test plans and test cases to ensure software quality.",
        "🐞 Identifying, documenting, and tracking software defects using tools like Jira and Xray.",
        "📊 API testing using tools like Postman and REST Assured to validate service functionality.",
        "🤖 Developing capabilities in test automation leveraging frameworks like Selenium WebDriver and Cucumber.",
        "📈 Committed to continuous learning and adopting new QA technologies and best practices.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java",
          style: { color: "#007396" },
        },
        {
          skillName: "Javascript",
          fontAwesomeClassname: "devicon:javascript",
        },
        {
          skillName: "Selenium WebDriver",
          fontAwesomeClassname: "logos:selenium",
        },
        {
          skillName: "JUnit",
          fontAwesomeClassname: "devicon:junit-wordmark",
        },
        {
          skillName: "REST Assured (API)",
          fontAwesomeClassname: "mdi:api",
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "logos:postman-icon",
        },
        {
          skillName: "Cucumber",
          fontAwesomeClassname: "logos:cucumber",
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "devicon:jira-wordmark",
          style: { color: "#0052CC" },
        },
        {
          skillName: "HTML/CSS",
          fontAwesomeClassname: "devicon:html5-wordmark",
          style: { color: "#0052CC" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Pragmatik",
      subtitle: "DevOps Essentials",
      logo_path: "pragmatik_logo.png",
      alt_name: "Pragmatik",
      duration: "01/2025 - 06/2025",
      descriptions: [
        "⚡ Comprehensive DevOps course at Pragmatic, gaining essential practical and theoretical knowledge for a career in the DevOps field.",
        "⚡ Explored best practices for automation, infrastructure management, and team synchronization, preparing for roles like DevOps Engineer.",
        "⚡ Applied these concepts by building a personal portfolio website, implementing a CI/CD pipeline with GitHub Actions, and deploying to GitHub Pages as a final project.",
      ],
      website_link: "https://pragmatic.bg/courses/devops-course/",
    },
    {
      title: "Software University",
      subtitle: "Javascript Advanced",
      logo_path: "softuni_logo.png",
      alt_name: "SoftUni",
      duration: "01/2024 - 02/2024",
      descriptions: [
        "⚡ Acquired advanced JavaScript skills through the SoftUni JS Advanced program, covering core syntax, data structures, and object-oriented principles.",
        "⚡ Gained expertise in DOM manipulation, event handling, advanced functions, and the application of functional programming techniques.",
      ],
      website_link: "https://softuni.bg/courses/js-advanced",
    },
    {
      title: "Telerik Academy",
      subtitle: "Alpha QA Track",
      logo_path: "telerik_logo.png",
      alt_name: "Telerik Academy",
      duration: "05/2023 - 10/2023",
      descriptions: [
        "⚡ Completed the intensive 6-month Alpha QA Track at Telerik Academy, focusing on hands-on practical skills in both manual and automated testing.",
        "⚡ Mastered crucial programming fundamentals and modern QA principles, gaining proficiency with industry-standard tools and methodologies.",
        "⚡ The program included significant project work and a strong emphasis on developing essential soft skills.",
      ],
      website_link: "https://www.telerikacademy.com/alpha/qa",
    },
    {
      title: "New Bulgarian University",
      subtitle: "Master of Business Administration",
      logo_path: "NBU_logo.png",
      alt_name: "NBU",
      duration: "03/2012 - 11/2014",
      descriptions: [
        "⚡ Completed a Master of Business Administration program designed to deepen understanding of business operations and strategic goal achievement in dynamic environments.",
        "⚡ Acquired skills in applying concrete strategies for organizational success and utilizing diagnostic tools for market and organizational forecasting.",
      ],
      website_link:
        "https://nbu.bg/en/about-nbu/new-bulgarian-university/university-campus",
    },
    {
      title: "New Bulgarian University",
      subtitle: "Bachelor of Finance",
      logo_path: "NBU_logo.png",
      alt_name: "NBU",
      duration: "09/2005 - 06/2010",
      descriptions: [
        "⚡ Completed a Bachelor's degree in Finance, building a strong foundation in core economic principles and specialized financial knowledge.",
        "⚡ Gained practical skills through internships and working on individual assignments on current issues in modern financial practice.",
        "⚡ Acquired expertise in areas such as company and public finance, financial management, investments, and financial risk analysis.",
      ],
      website_link:
        "https://nbu.bg/en/about-nbu/new-bulgarian-university/university-campus",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Udemy",
      subtitle: "The Git & Github Bootcamp",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-c7bc5e73-5db9-414d-a233-41d0616a3c31/",
      alt_name: "Udemy",
    },
    {
      title: "SEETB",
      subtitle: "ISTQB Foundation Level",
      logo_path: "istqb_logo.png",
      certificate_link:
        "https://1drv.ms/b/c/4f2b4b1f5e2bd5e5/Ee7rikMoYJNEqnj5abMLxqcBBU_8ONg_8EH-WLEv1z9fUw?e=XPHUG6",
      alt_name: "ISTQB",
    },
    {
      title: "Udemy",
      subtitle: "Cucumber BDD with Java",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6987fdbc-d9fe-4ae8-95d9-05c22950aa2b/",
      alt_name: "Udemy",
    },
    {
      title: "Software University",
      subtitle: "JavaScript Advanced",
      logo_path: "softuni_logo.png",
      certificate_link:
        "https://softuni.bg/certificates/details/203257/40a885b5",
      alt_name: "Software University",
    },
    {
      title: "Telerik Academy",
      subtitle: "Alpha 50 QA",
      logo_path: "telerik_logo.png",
      certificate_link:
        "https://1drv.ms/b/c/4f2b4b1f5e2bd5e5/EYW0yr7GVg1It5xgYLEjMaoBVsl5wzX9Thoxl8zRVoGO8A?e=9oz1YA",
      alt_name: "telerik academy",
      color_code: "#00000099",
    },
    {
      title: "Software University",
      subtitle: "Web Fundatemntals - HTML5",
      logo_path: "softuni_logo.png",
      certificate_link:
        "https://softuni.bg/certificates/details/18644/d668a8e7",
      alt_name: "Software University",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "For the past year and a half, I have been focusing on QA Engineering, with training in manual and automated testing, and have gained proficiency in Java, REST Assured, Selenium WebDriver, JUnit, Postman, Cucumber, and Jira. At present, I am actively expanding my expertise towards DevOps landscape.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

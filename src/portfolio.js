/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: false, // set to false to use static SVG
};

const greeting = {
  username: 'Akash Panchal',
  title: "Hello World, I'm Akash",
  subTitle: emoji(
    'A passionate Software Engineer 🚀 having an experience of building Web and Mobile applications with Java / Python / JavaScript and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://github.com/akashp1712/developerFolio/blob/master/Akash-Panchal-Resume.pdf',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/akashp1712',
  linkedin: 'https://www.linkedin.com/in/akashp1712/',
  gmail: 'akashp1712@gmail.com',
  medium: 'https://medium.com/@akashp1712',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'I like to explore Cloud Tech Stack, Machine Learning and Python developemnt libraries and tools.',
  skills: [
    emoji(
      '⚡ Develop highly scalable cloud application'
    ),
    emoji(
      '⚡ Develope and Integrate Mobile SDKs for Android Apps'
    ),
    emoji(
      '⚡ Applied Machine Learning and NLP problems'
    ),
      emoji(
      '⚡ Large scale System Design'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'java',
      fontAwesomeClassname: 'fab fa-java',
    },
    {
      skillName: 'android',
      fontAwesomeClassname: 'fab fa-android',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'GitHub',
      fontAwesomeClassname: 'fas fa-github',
    },
    {
      skillName: 'WordPress',
      fontAwesomeClassname: 'fas fa-wordpress',
    },
    {
      skillName: 'Medium',
      fontAwesomeClassname: 'fas fa-medium',
    }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Nirma University',
      logo: require('./assets/images/nirma-university-logo.png'),
      subHeader: 'MTech. in Computer Science',
      duration: 'July 2014 - June 2016',
      descBullets: [
        'Undertaken Advanced Algorithms, Modern Database, Machine Learning and Paralle Programming as core subjects.',
        'Worked as an Intern in Bluetooth Team at Broadcom Semiconductor',
      ],
    },

    {
      schoolName: 'Gujarat Technological University',
      logo: require('./assets/images/gtu-logo.png'),
      subHeader: 'Bachelor of Engineering in Computer Science',
      duration: 'August 2009 - May 2012',
      desc:
        'Ranked top 10% in the class. Took courses about Software Engineering, Web Security, Operating Systems, Data Structure and Algorithms, Computer Networks, ...',
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Algorithmic Solving ', //Insert stack or technology you have experience in
      progressPercentage: '80%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '85%',
    },
    {
      Stack: 'Machine Learning',
      progressPercentage: '35%',
    },
    {
      Stack: 'Android',
      progressPercentage: '65%',
    },
    {
      Stack: 'Frontend/Javascript',
      progressPercentage: '40%',
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Software Developemt Engineer II',
      company: 'McAfee',
      companylogo: require('./assets/images/mcafee-logo.png'),
      date: 'Jab 2019 – Present',
      desc:
        'Software Engineer in Cloud and Android for the Secure Home Platform for the customer.',
      descBullets: [
        'Reduced the partner-specific changes by 50% by generalizing the custom changes in the core solution',
        'Fixed the critical subscription failure cases that led to DDOS-like attack from the routers',
        'Implemented scalable custom feature-set module to support different router models and versions',
        'Decreased Database storage and Network calls up to 40% for a Router API by optimizing data flow design',
      ],
    },
    {
      role: 'Software Development Engineer I',
      company: 'McAfee',
      companylogo: require('./assets/images/mcafee-logo.png'),
      date: 'Oct 2017 – Dec 2018',
      desc:
        'Androis Software Engineer in Safe Connect - A VPN Produce Development Team',
      descBullets: [
        'Created the VPN interfaces for the end-product (Android) to consume',
        'Developed custom Network state-machine to support Auto-start VPN and Activity-log features',
      ],
    },
    {
      role: 'Software Development Engineer I',
      company: 'McAfee',
      companylogo: require('./assets/images/mcafee-logo.png'),
      date: 'Jan 2015 – Sep 2015',
      desc:
        'Cloud developer for Mobile Apps scanner Team',
      descBullets: [
        'URLs rating aggregation for False-Positives and False-Negatives',
        'Email reporting for cumulative download stats (different sources) from the service logs',
        'Improved pipe-filter design to reduce the memory footprint of apk metadata processing',
        'Increased the throughput of the app scanner by reducing repeat scanning of the Android Apps up to 5000 per day',
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'akashp1712', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Side Projects',
  subtitle: 'Projects which allowed me to be creative and explore-learn technologies outside my confirt zone. So Proud of them.',
  projects: [
    {
      image: require('./assets/images/pythonizr-screen.png'),
      projectName: "Pythonizr",
      projectDesc: "Pythonizr generates boilerplate code for the machine learning development.",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'https://pythonizr.com/',
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require('./assets/images/streamlit-screen.png'),
      projectName: "Extractive Text Summarization",
      projectDesc: "Github Repo: https://github.com/akashp1712/streamlit-text-summarization",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'https://share.streamlit.io/akashp1712/streamlit-text-summarization/main/app.py',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    '',

  achievementsCards: [
    {
      title: 'System Expert',
      subtitle:
        'For passing the systems design assessment on AlgoExpert.io',
      image: require('./assets/images/systemexpert-certi.png'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://certificate.algoexpert.io/SystemsExpert%20Certificate%20SE-3a9c5d6287',
        }
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs and Articles on Medium',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url: 'https://becominghuman.ai/text-summarization-in-5-steps-using-nltk-65b21e352b65',
      title: 'Text summarization in 5 steps using NLTK',
      description:
        'This article explains the implementation of Text Summarizer using Python. Very easy to understand and implement.',
    },
    {
      url: 'https://towardsdatascience.com/text-summarization-using-tf-idf-e64a0644ace3',
      title: 'Text Summarization using NLTK: TF-IDF Algorithm',
      description:
        'I’ve explained the implementation of TF-IDF algorithm for the single document-multiple paragraphs.',
    },
    {
      url: 'https://towardsdatascience.com/improving-accuracy-on-mnist-using-data-augmentation-b5c38eb5a903',
      title: 'Improving Classification accuracy on MNIST using Data Augmentation',
      description:
        'An easy way to grow the training data set for Accuracy',
    },
    {
      url: 'https://towardsdatascience.com/handling-the-missing-values-in-data-the-easy-way-9ea5983f8ba4',
      title: 'Handling the missing values in Data ft. SciKit Imputer',
      description:
        'Different ways of handling the missing/None values in Datasets while training ML model',
    },
    {
      url: 'https://medium.com/nestedif/cheatsheet-python-for-java-developers-98f75c94a1a',
      title: 'Python for JAVA Developers: CheatSheet',
      description:
        'A handy cheat-sheet for Java developers who are learning Python',
    }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle: 'Discuss about projects, spacetime or masala chai Or just say hi. My Inbox is open for all.',
  emailAddress: 'akashp1712@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};

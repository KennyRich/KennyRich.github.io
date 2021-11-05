/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Ogunyale Kehinde",
  title: "Hi all, I'm Kenny",
  subTitle: emoji(
    "A passionate Full Stack Software Developer and Machine learning engineer with focus in Natural Language processing 🚀. \n I have experience in building Web applications with Groovy, JavaScript, Python, Java, React and some other cool libraries and frameworks. \n\n I have also built various natural language models and I participate in kaggle competitions. \n\n" +
      " I also contribute to various open source projects."
  ),
  resumeLink:
    "https://drive.google.com/file/d/155jnFN8qsd4yy8SKMFGmud8uwEwIh8mL/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kennyrich",
  linkedin: "https://www.linkedin.com/in/kehindeogunyale/",
  gmail: "kogunyale01@gmail.com",
  medium: "https://medium.com/@kennyrich",
  stackoverflow: "https://stackoverflow.com/users/13401912/richard-ogunyale",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "MACHINE LEARNING AND FULL STACK ENGINEER WHO IS VERY PASSIONATE ABOUT LEARNING AND BUILDING MACHINE LEARNING MODELS AND SOFTWARES AT SCALE",
  skills: [
    emoji(
        "⚡ Design scalable software architecture and write optimized code"
    ),
    emoji(
        "⚡ Build robust machine learning pipelines for various mirco-services to interact whilst flexing my MLOps skills"
    ),
    emoji("⚡ Build and maintain REST APIs"),
    emoji("⚡ Build Interactive front-end user interface"),
    emoji(
      "⚡ Integration of third party services such as AWS / GCP / DigitalOcean"
    ),

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Ibadan",
      logo: require("./assets/images/UILogo.png"),
      subHeader: "Bachelor of Science in Petroleum Engineering",
      duration: "June 2014 - April 2019",
      desc: "Participated in the research of Application of Machine Learning in Oil and Gas Industry and published 2 papers.",
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Front-end",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Chatdesk",
      companylogo: require("./assets/images/chatdeskLogo.png"),
      date: "June 2019 – Present",
      leveragedSkills: "Groovy, MySQL, React, AWS, Python, GCP, Javascript",
      desc: "Chatdesk uses sentiment analysis, tagging, and other NLP techniques to automatically generate responses to our clients’ customer feedback from various CRMs (e.g.\n" +
          "Salesforce, Zendesk, and Front) and communication channels (e.g. Facebook and Twitter)",
      descBullets: [
        "Integrate machine learning models into Chatdesk web applications",
        "Leverage on NLP to build robust machine learning models that are used for message classifications.",
        "Implement REST APIs that allows third party integration with Chatdesk applications. This allows companies to submit data using API calls.",
        "Worked and maintained a micro service that handles the sending of messages from the company’s web-app to other CRMs (Salesforce, Kustomer, LiveAgent, Zendesk) and other channels e.g. Facebook, Instagram and so on."
      ]
    },
    {
      role: "Team Lead Data Scientist",
      company: "DatHappy -FindJobs",
      companylogo: require("./assets/images/dathappyLogo.png"),
      date: "May 2020 – Oct 2020",
      leveragedSkills: "Python, AWS, PostgreSQL",
      desc: "Findjobs is a platform that help blue-collar job seekers to find various jobs they are skilled to get",
      descBullets: [
        "As the Scrum master, I ensured quality of projects and ensured an environment for effective productivity of the team",
        "Ensure the successful completion of projects before the timeline",
        "Optimized code for efficiency and speed by leveraging on data structures",
        "Optimized database queries to write into the database in an efficient and fast manner.",
        "Managed the team in building a state-of-the-art Recommendation System",
        "Acted as the interface between the product Manager and the team",
        "Ensured tasks are distributed to team members according to their capability and also creating an avenue to grow"
      ]
    },
    {
      role: "Mentor",
      company: "Udacity",
      companylogo: require("./assets/images/udacityLogo.png"),
      date: "Feb 2020 – Apr 2021",
      leveragedSkills: "Python, AWS Sage Maker, AzureML",
      desc: "Udacity is an Ed-Tech platform where people go to learn various technological skills (includes various programming languages, tech stacks and tech tools)",
      descBullets: [
          "Mentoring 300+ data science and Machine Learning students, holding weekly review sessions, and one-on-one meetings to assist with materials and measure progress",
          "Ensure that students receive feedback on their projects by providing them with constructive evaluations",
          "Provide reviews to help students improve their projects."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/chatdeskLogo.png"),
      projectName: "Chatdesk",
      projectDesc: "Integrated third-party applications to pull in messages from various platforms (Zendesk, Facebook, Instagram), built machine-learning classifications to increase profitability, build interactive front-end user interface and manage microservice that dispatches messages",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.chatdesk.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dathappyLogo.png"),
      projectName: "DatHappy FindJobs",
      projectDesc: "Built a state of the art recommendation system that recommends job to users on the platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://findjobs.com.sg/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Datasist",
      subtitle:
        "Developed a Library to enhance data analysis and wrangling in various data science projects",
      image: require("./assets/images/datasistLogo.jpeg"),
      footerLink: [
        {
          name: "Library",
          url: "https://pypi.org/project/datasist/"
        },
      ]
    },
    {
      title: "Hult Prize",
      subtitle:
        "Top 2% in the Hult Prize competition held in University of Ibadan",
      image: require("./assets/images/hultPrize.png"),
      footerLink: [
        {
          name: "Entrepreneur",
          url: ""
        }
      ]
    },

    {
      title: "Microsoft Certification",
      subtitle: "Data Science Certification",
      image: require("./assets/images/microsoft.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/16la8uazGtHpG2kGxdkbCZ1tUnq1dY_Pd/view?usp=sharing"
        },

      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.devgenius.io/overloading-in-java-a256401970d7",
      title: "Overloading In Java",
      description:
        "Imagine yourself performing the function “talking” in which you are to tell a story about how your day went. When talking to a stranger, you go by with it quite fast excluding some details (which are the parameters)..."
    },
    {
      url: "https://medium.com/@kennyrich/understanding-the-genetic-algorithm-4eac04a07a59",
      title: "Understanding the Genetic Algorithm",
      description:
        "Genetic Algorithm? What is it about? It is a heuristic search that was inspired by the great Charles Darwin theory of evolution..."
    },
    {
      url: "https://medium.com/@kennyrich/convolutional-neural-network-on-oil-spills-in-niger-delta-71e6e6ecb674",
      title: "Convolutional Neural Network on Oil Spills in Niger Delta",
      description:
        "This post is a sequel to all my previous posts on Convolutional Neural Networks and this is based on classifying if there is an oil spill in a region or if there is not..."
    },
    {
      url: "https://medium.com/analytics-vidhya/malaria-cell-image-classification-using-keras-89a324f52131",
      title: "Infected Malaria Cell Image Classification using Convolutional Neural Networks",
      description:
        "Malaria has been one of the major causes of death in Africa, and being able to classify malaria-infected cell images using convolutional neural networks is pivotal to the quick diagnosis of Malaria..."
    },
    {
      url: "https://medium.com/@kennyrich/convolutional-neural-network-on-nigerian-foods-565493fcdd0e",
      title: "Convolutional Neural Network on Nigerian Foods",
      description:
        "Most data set used in machine learning and deep learning are datasets that are foreign with the Nigerian System. Hence, it delights me to get a data set familiar with Nigeria to train a convolutional neural network on..."
    },
    {
      url: "https://medium.com/@kennyrich/to-move-the-world-you-need-to-be-original-9a81b71f8162",
      title: "To move the world, you need to be Original",
      description:
        "This is a book review about Originals: How Non-Conformists Move the World. The originals by Adam Grant was a book gifted to me by a very good friend at the beginning of the year..."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Understanding Convolutional Neural Networks",
      subtitle: "PyCON Nigeria 2019",
      slides_url: "https://github.com/KennyRich/PyCon-2019-CNN",
      event_url: "https://pycon.pythonnigeria.org/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "HERE ARE SOME PODCASTS I LISTEN TO",

  // Please Provide with Your Podcast embeded Link
  //
  podcast: [
    "https://anchor.fm/hnasr/embed/episodes/Detailed-analysis-on-the-facebook-outage-e18dkva/a-a6lfcom",
    "https://anchor.fm/hnasr/embed/episodes/How-Airline-WIFI-allows-Texting-but-not-Media-in-WhatsAppiMessage-e17u95j/a-a6jfrp3",
    "https://anchor.fm/hnasr/embed/episodes/Can-Redis-be-used-as-a-Primary-database-e156j4n/a-a685opv",
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+2348028259007",
  link: "https://calendly.com/kogunyale01/15min",
  email_address: "kogunyale01@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "_kennyrich", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  twitterDetails
};

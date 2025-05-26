import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  pic1,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  chatapp,
  figma,
  ml,
  docker,
  iit,
  starbucks,
  suraj,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  rps,
  screen,
  calc,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Experience",
  },
  
  {
    id:"project",
    title:"Projects"
  },
  {
    id: "contact",
    title: "Contact",
  },
    
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "DSA Coder",
    icon: mobile,
  },
  {
    title: "ML developer",
    icon: backend,
  },
  {
    title: "Adventurer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Samsung Data System",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - june 2023",
    points: [
      " Integrated Samsung Bangladesh API with wearable data using Coroutines and a queue-based structure to deliver real-time updates every 5 seconds, improving system reliability by 15%.",
        "Engineered robust Android features using MVVM, Data Binding, and View Binding; resolved 250+ bugs in Samsung Health App, maintaining a 97 application reliability score.",
 "Gained hands-on experience with advanced data structures (Graphs, Segment Trees, DP) and collaborated on multiple projects using scalable coding practice.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "IIT Jammu",
    icon: iit,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Conduct weekly tutorials for 50+ students, resulting in average score improvement.",
    "Taught core programming concepts, designed practice questions, and supported lab sessions.",
    "Developed structured learning resources on graph algorithms and dynamic programming patterns.",
    ],
  },

  {
    title: "Web developer Intern ",
    company_name: "Suraj Bore well",
    icon: suraj,
    iconBg: "#E6DEDD",
    date: "june 2022 - july 2022",
    points: [
      "Gained hands-on experience in HTML, CSS, and JavaScript.",
      "Collaborated with team members to troubleshoot and debug website issues.",
      "Acquired foundational skills in web development and user interface design.",
    ],
  },
];



const educations = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "J.C. Bose University of Science and Technology,YMCA",
    duration: "2019 - 2023",
    points: [
      "Graduated with distinction",
      "Participated in national coding competitions",
      "Led the college tech club for 2 years",
    ],
  },
  {
    degree: "M.Tech in Computer Engineering",
    institution: "Indian Institute of Technology, Jammu",
    duration: "2024 - 2026",
    points: [
      "Secured 7.21 cgpa",
      "Member of the debate team",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: " Underwater Image Enhancement using FUnIE-GAN",
    description:
      " Built a CycleGAN-based model for real-time underwater image enhancement using EUVP dataSet. and used OpenCV, NumPy and trained the model using TensorFlow 2.x, leveraging U-Net architecture for the generator and PatchGAN for the discriminator.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
       {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "DeepLearning",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Tushar1000x/Deep-Learning-Project/tree/main",
  },
  {
    name: " Automated Face Recognition with Email, WhatsApp Alerts ",
    description:
      " Developed a Face Recognition System with OpenCV for secure authentication.Automated email and WhatsApp alerts upon successful face detection.Deployed AWS EC2 EBS using Terraform for efficient cloud management.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Tushar1000x/Automated-Face-Recognition-with-Email-WhatsApp-Alerts/blob/main/Face_Recognition_%E2%80%93_Unlock_Your_Computer_With_Your_Face.ipynb",
  },
  {
    name: "DBMS-Based Job Portal",
    description:
      "Built a database-driven portal for registration, job postings, and interview scheduling Designed a responsive UI with seamless authentication authorization.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pic1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Captcha-cracking-using-ML",
    description:
      "Captures and processes CAPTCHA images automatically Uses both EasyOCR and Tesseract to improve CAPTCHA solving accuracy Automatically logs in with multiple credentials Retries login attempts until success Saves every CAPTCHA image and OCR result for debugging.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "tesseract",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Tushar1000x/automation",
  },
  {
    name: "Masonry Editing gallery",
    description:
      "A simple yet functional web-based photo gallery that allows users to upload, edit, and view images in a clean masonry-style grid layout. Users can perform basic image editing tasks like crop, flip, rotate, and replace images, all directly in the browser. Edited images are automatically saved and synced using Firebase Realtime Database and Storage, ensuring persistence across sessions.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: screen,
    source_code_link: "https://github.com/Tushar1000x/Masonry_Gallery_Edit",
  },
  {
    name: "Stone Paper Scissor",
    description:
      "A fun and interactive Rock Paper Scissors game built using React and styled with CSS. This simple web app lets users play against a computer opponent, with real-time game logic, visual feedback, and a clean, responsive UI.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: rps,
    source_code_link: "https://github.com/Tushar1000x/stone-paper-scissor",
  },
  {
    name: "Calculator",
    description:
      "Basic calculator built using React and styled with CSS.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: calc,
    source_code_link: "https://github.com/Tushar1000x/Simple_Calculator",
  },
   {
    name: "Machine Learning",
    description:
      "This repository contains mini assignment projects on machine learning topics like image processing and pattern recognition using various libraries such as OpenCV, scikit-learn, and TensorFlow.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Google colab",
        color: "green-text-gradient",
      },
    ],
    image: ml,
    source_code_link: "https://github.com/Tushar1000x/Machine-Learning",
  },
   {
    name: "Chat App",
    description:
      "This is a real-time chat app using Socket.io for seamless communication between users. Firebase handles user authentication, authorization, and serves as the database for storing user profiles and chat metadata.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "white-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/Tushar1000x/",
  },
];

export { services, technologies,educations, experiences, testimonials, projects };

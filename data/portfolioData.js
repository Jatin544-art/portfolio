export const NAME = "A JATIN RAM CHOWDARY"
export const EMAIL = "jatinramchowdary1980@gmail.com"
export const GITHUB = "https://github.com/Jatin544-art"
export const LINKEDIN = "https://www.linkedin.com/in/a-jatin-ram-chowdary-7a6442357"
export const INSTAGRAM = "https://www.instagram.com/jatin._.ram._.13579"
export const RESUME_PATH = "/resume.pdf"

export const projects = [
  {
    title: "1. TriSense",
    description: "TriSense is an AI-powered accessibility application designed to empower individuals with visual, hearing, and cognitive disabilities by transforming complex digital information into accessible formats. The system integrates three intelligent assistance modules—Blind Assistance for text-to-speech document reading and visual understanding, Hearing Assistance for real-time speech-to-text captioning using native Android STT, and Cognitive Assistance for text simplification, summarization, routine management, and task reminders powered by Gemini AI. By combining voice interaction, real-time transcription, contextual explanation, and simplified content delivery in a single platform, TriSense removes major accessibility barriers, reduces reliance on costly assistive tools, and enables seamless access to education, digital content, and everyday information. The solution ultimately extends inclusion, autonomy, and digital independence to millions who are otherwise excluded from modern technology.",
    github: "https://github.com/Jatin544-art/TriSense",
    demo: null
  },
  {
    title: "2. Alert Sphere",
    description: "Alert Sphere is a web-based disaster awareness and emergency coordination platform built to provide real-time, verified information during natural calamities such as floods, earthquakes, cyclones, and wildfires. Using AI-powered data analysis, the system integrates multiple information streams including meteorological reports, satellite feeds, IoT sensor input, and validated social media signals to ensure reliable and localized alerts for citizens. The platform incorporates five core functional components: a Real-Time Alert Engine for disseminating instant disaster warnings; a Data Aggregation and Verification Module for filtering credible information from diverse sources; a Geolocation-Based Mapping System for visualizing affected zones and safe routes; an Authority Command Dashboard for government bodies to broadcast official updates; and a Resource & Rescue Coordination Interface for routing emergency services efficiently. By delivering accurate alerts, enabling transparent communication, and supporting structured resource management, Alert Sphere minimizes misinformation, reduces response delays, and strengthens public safety during crisis events.",
    github: "https://github.com/Jatin544-art/AlertSphere",
    demo: null
  },
  {
    title: "3. DriftPulse – AI-Powered SOC & Device Drift Monitoring Platform",
    description: "DriftPulse is a real-time cybersecurity and SOC monitoring platform developed to detect device anomalies, behavioral drift, and network security threats across enterprise systems. The platform provides centralized dashboards for monitoring device trust scores, risk levels, active alerts, policy compliance, and anomaly trends. It includes features such as AI-based threat analysis, alert management, drift analytics, device quarantine actions, and real-time visualization to help security teams identify and respond to suspicious activities efficiently.\nTechnologies Used: React, Tailwind CSS, FastAPI, WebSockets, REST APIs, Chart.js.",
    github: "https://github.com/Amoghsy/DriftPulse",
    demo: null
  },
  {
    title: "4. Real-Time Multimodal Deepfake Detection System",
    description: "The Real-Time Multimodal Deepfake Detection System is an AI-based application designed to detect fake or manipulated video and audio content in real time. The system analyzes both facial and voice patterns using computer vision, audio processing, and machine learning techniques to identify deepfake media accurately. The project includes modules for video frame extraction, audio analysis, feature extraction, trained model prediction, heuristic analysis, and final decision making. OpenCV and DeepFace are used for facial analysis, while Librosa and FFmpeg process audio features such as pitch, MFCC, and energy variations. Machine learning models like Logistic Regression and Random Forest generate prediction scores, which are combined with heuristic analysis to improve detection accuracy. The application supports webcam-based live detection and video uploads through a user-friendly frontend dashboard that displays confidence scores, detailed analysis, and final predictions such as REAL or FAKE.\nTechnologies Used: FastAPI, React, Tailwind CSS, OpenCV, DeepFace, Librosa, FFmpeg, Scikit-learn, Docker.",
    github: "https://github.com/Jatin544-art/Authentix",
    demo: null
  },
  {
    title: "5. OmniWatch – AI-Powered Emergency Response System",
    description: "OmniWatch is an AI-powered emergency response and surveillance system designed to detect critical situations such as fire outbreaks, crowd panic, medical emergencies, and suspicious activities using live video feeds. The platform uses computer vision and AI-based analysis to monitor real-time incidents, generate threat alerts, optimize emergency routing, and provide evacuation guidance through smart dashboards and automated alert systems. It also supports crowd movement tracking, emergency dispatch coordination, and SMS-based notifications for faster and more efficient crisis management.\nTechnologies Used: YOLOv8, MediaPipe, OpenCV, Twilio API, AI Routing Engine, Real-Time Monitoring Dashboard.",
    github: "https://github.com/Jatin544-art/OmniWatch",
    demo: null
  },
  {
    title: "6. LINKIO – AI-Powered Hyperlocal Service Marketplace",
    description: "LINKIO is an AI-powered hyperlocal service marketplace designed to connect customers with nearby service providers through intelligent job matching and real-time communication. The platform includes features such as service booking, worker recommendations, trust and rating systems, price estimation, live notifications, and AI-based demand prediction. It supports both web and mobile applications, enabling users to search, request, track, and review services efficiently while helping workers manage jobs, availability, and customer interactions in real time.\nTechnologies Used: React, Flutter, Node.js, Express.js, Firebase, Google Cloud, Vertex AI/Gemini, Firebase Auth, Firestore, Firebase Cloud Messaging.",
    github: "https://github.com/Amoghsy/Linkio",
    demo: null
  },
  {
    title: "7. Sustainable IoT-Based Water Purity Monitoring System",
    description: "This project is an IoT-driven water quality assessment system designed to continuously monitor and report key purity indicators—Dissolved Oxygen (DO), pH level, and water temperature—in real time. Built using the ESP32 microcontroller, the system integrates low-power environmental sensors to capture accurate chemical and physical water parameters, ensuring reliable monitoring for lakes, rivers, aquaculture tanks, RO plants, and community water sources. Sensor data is processed on-device and transmitted securely over Wi-Fi to a cloud interface, enabling remote access, long-term trend observation, and predictive analysis for identifying contamination patterns. The system includes an automated Telegram notification module that instantly alerts users whenever water parameters cross predefined safe thresholds. This ensures timely awareness of pollution events, oxygen depletion, or abnormal pH shifts that may pose risks to human health or aquatic ecosystems. With its energy-efficient design, seamless wireless communication, and user-friendly alerts, the solution supports sustainable water management practices, empowers communities with actionable insights, and promotes environmental protection through continuous, transparent, and real-time monitoring.",
    github: "https://github.com/Amoghsy/OpenCleanEnv",
    demo: null
  },
  {
    title: "8. C++ To-Do List Application",
    description: "The C++ To-Do List application is a lightweight, console-based productivity tool designed to help users efficiently manage daily tasks through a structured and intuitive interface. Built using core C++ concepts such as object-oriented programming, file handling, vectors, and dynamic memory management, the system allows users to add tasks, mark them as completed, delete tasks, and view the entire task list in a clean and organized manner. The application features a persistent storage mechanism using file I/O, ensuring that all tasks remain saved even after the program closes. Each task is stored with essential attributes such as task description, completion status, and task index, enabling fast retrieval and smooth user navigation. Error-handling routines ensure robustness by preventing invalid inputs and maintaining data consistency across sessions. Designed for simplicity and efficiency, the C++ To-Do List enhances personal organization, improves time management, and demonstrates practical application of C++ fundamentals in real-world productivity solutions. Its modular structure also allows easy extension—such as adding deadlines, priority levels, or category filters—making it a scalable base for more advanced task-management systems.",
    github: "https://github.com/Jatin544-art/TIME-DO",
    demo: null
  },
  {
    title: "9. Personal Portfolio Website",
    description: "This project is a comprehensive and professionally designed personal portfolio website built to showcase my skills, academic journey, and technical expertise. It features a modern, responsive layout crafted with clean UI components, interactive elements, and smooth transitions to ensure an engaging user experience. The website includes dedicated sections for my projects, certifications, experience, and contact information, allowing visitors to explore my work in a structured and intuitive manner. Developed using modern Web technologies, it emphasizes performance, accessibility, and visual appeal. The site is optimized for all screen sizes, ensuring seamless viewing across mobile, tablet, and desktop devices. Deployed on Vercel, it benefits from fast hosting, global CDN, and reliable uptime. This portfolio reflects my passion for building meaningful digital experiences while serving as a platform to document my growth, creativity, and professional aspirations in the field of technology.",
    github: "https://github.com/Jatin544-art/portfolio",
    demo: "https://jatin-portfolio-nine-psi-luk1o1q4zp.vercel.app/"
  }
]

export const techStack = {
  languages: ["C++", "Python", "JavaScript", "TypeScript", "Java", "C"],
  frontend: ["React", "Next.js", "Tailwind CSS", "Spline", "Framer"],
  backend: ["Node.js", "Express.js", "REST APIs", "JWT"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  ai: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "OpenCV", "Arduino", "IoT"],
  devops: ["Linux", "GitHub", "CI/CD", "Netlify", "Render", "Railway", "Kubernetes", "Nginx", "AWS", "Vercel", "Docker"],
  mobile: ["React Native", "Flutter"],
  csCore: ["CS Fundamentals", "Data Structures", "Algorithms", "OOP", "DBMS", "OS", "CN"],
  designAnimation: ["GSAP", "Three.js", "Motion / Framer Motion", "ShadCN UI", "Figma", "Canva"],
  tools: ["Git", "VS Code", "Postman"]
}

export const certificates = [
  {
    title: "IEEE Certificate of Presentation - Sustainable IoT-Based Water Purity Monitoring System",
    issuer: "IEEE / CHRIST University (ICCIST 2025)",
    date: "December 2025",
    link: "#"
  },
  {
    title: "Research Paper Publication - SmartDiet: An AI Driven Role Based Nutrition Analytics Platform",
    issuer: "International Journal of Computer Application (IJCA)",
    date: "January 2026",
    link: "#"
  },
  {
    title: "NPTEL Elite Certification - Programming in Java",
    issuer: "IIT Kharagpur / SWAYAM",
    date: "Jan-Apr 2026",
    link: "#"
  }
]

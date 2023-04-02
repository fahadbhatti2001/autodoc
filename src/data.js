import { SiOpenaigym } from 'react-icons/si'

export const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Gallery',
    path: '/gallery',
  },
  {
    name: 'Team',
    path: '/trainers',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

export const programs = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: 'Data Collection',
    info:
      'Collect data from various sensors in your automobile, including engine sensors',
    path: '/programs/111',
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: 'Data Analysis',
    info:
      ' Analyse the collected data using machine learning algorithms that can detect patterns and anomalies.',
    path: '/programs/222',
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: 'Fault Detection',
    info:
      'Use the analysed data to detect potential faults and predict when they are likely to occur, allowing for proactive maintenance and repairs.',
    path: '/programs/333',
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: 'Reporting',
    info:
      ' Generate easy-to-understand reports that provide insights into your automobile performance and any detected faults',
    path: '/programs/444',
  },
]

export const values = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: 'Proactive Maintenance ',
    desc:
      'Predicting faults when they are likely to occur allows for proactive maintenance, reducing the risk of unexpected breakdowns ',
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: 'Improved Safety',
    desc:
      ' - Identifying potential faults before they cause problems improves driving safety by reducing the risk of accidents',
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: 'Cost Savings ',
    desc:
      'By detecting faults early , our Automotive Maintenance Solutions can save you money on repairs ',
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: 'Enhanced Reliability ',
    desc: 'Regular fault detection  ensures that your automobile is reliable.',
  },
]

export const faqs = [
  {
    id: 1,
    question: 'How does fault detection in automobiles using AI work?',
    answer:
      'Fault detection in automobiles using AI involves collecting data from various sensors in the vehicle and analyzing it using machine learning algorithms to detect patterns and anomalies. This allows potential faults to be detected and predicted, enabling proactive maintenance and repairs.',
  },
  {
    id: 2,
    question: 'How accurate is fault detection in automobiles using AI?',
    answer:
      'Fault detection in automobiles using AI is highly accurate, as the machine learning algorithms can detect even subtle changes in the vehicle data that may indicate potential faults.',
  },
  {
    id: 3,
    question: 'What types of faults can be detected using AI in automobiles?',
    answer:
      'AI can be used to detect a wide range of faults in automobiles, including engine, transmission, electrical, and mechanical faults.',
  },
  {
    id: 4,
    question:
      'How can I get started with fault detection in my automobile using AI?',
    answer:
      'There are a lot of ongoing discoveries and developments, most of which are divided into four categories: reactive machines, limited memory, theory of mind, and self-aware AI.',
  },
  {
    id: 5,
    question: 'How can fault detection using AI benefit me?',
    answer:
      ' To get started with fault detection in your automobile using AI, contact a reputable service provider that specializes in this technology. They can provide you with more information about the process and the benefits of using AI for fault detection in automobiles.',
  },
  {
    id: 6,
    question: 'Can fault detection using AI be used on all types of vehicles?',
    answer:
      'AI-powered visual inspection uses computer vision AI to analyze machinery, production processes, inventory levels, and workplaces to ensure safe, efficient, and effective business processes',
  },
]

export const testimonials = [
  {
    id: 1,
    name: '- John Smith',
    quote:
      '"As a software engineer, I was impressed by the AI-powered fault detection system in my car. It was able to detect a minor issue that I would nott have noticed, and prevented it from turning into a major problem. I am grateful for this technology.',
    job: 'Software Engineer',
    avatar: require('./images/avatar1.jpg'),
  },
  {
    id: 2,
    name: '- Sarah Lee',
    quote:
      'As a student of AI, I am fascinated by the potential of this technology in the automotive industry. The fault detection system in my car is a prime example of how AI can be used to enhance safety and prevent costly repairs',
    job: 'AI Student',
    avatar: require('./images/avatar2.jpg'),
  },
  {
    id: 3,
    name: '- Michael Johnson',
    quote:
      'As an IT professional, I appreciate the convenience of AI-based fault detection. It saves me time and hassle by alerting me to potential issues before they become major problems."',
    job: 'IT Professional',
    avatar: require('./images/avatar3.jpg'),
  },
  {
    id: 4,
    name: ' Michael Johnson',
    quote:
      'As an IT professional, I appreciate the convenience of AI-based fault detection. It saves me time and hassle by alerting me to potential issues before they become major problems',
    job: 'AI Expert & Analyst',
    avatar: require('./images/avatar4.jpg'),
  },
  {
    id: 5,
    name: 'Geoffrey Moore',
    quote:
      'As someone who is passionate about AI and its applications, I was excited to see it being used in the automotive industry. The fault detection system in my car is proof that AI can be used to enhance safety and prevent accidents. .',
    job: 'AI Enthusiast',
    avatar: require('./images/avatar5.jpg'),
  },
]

export const plans = [
  {
    id: 1,
    name: 'Silver Package',
    desc: 'This package is perfect for beginners who need constant help',
    price: 29.99,
    features: [
      { feature: 'First Feature', available: true },
      { feature: 'Second Feature', available: true },
      { feature: 'Third Feature', available: true },
      { feature: 'Fourth Feature', available: true },
      { feature: 'Fifth Feature', available: true },
      { feature: 'Fifth Feature Plus', available: false },
      { feature: 'Sixth Feature', available: false },
      { feature: 'Seventh Feature', available: false },
      { feature: 'Seventh Feature Plus', available: false },
      { feature: 'Eighth Feature', available: false },
      { feature: 'Ninth Feature', available: false },
      { feature: 'Tenth Feature', available: false },
      { feature: 'Eleventh Feature', available: false },
    ],
  },
  {
    id: 2,
    name: 'Gold Package',
    desc: 'This is the perfect package for beginners who know what their doing',
    price: 49.99,
    features: [
      { feature: 'First Feature', available: true },
      { feature: 'Second Feature', available: true },
      { feature: 'Third Feature', available: true },
      { feature: 'Fourth Feature', available: true },
      { feature: 'Fifth Feature', available: true },
      { feature: 'Fifth Feature Plus', available: true },
      { feature: 'Sixth Feature', available: true },
      { feature: 'Seventh Feature', available: true },
      { feature: 'Seventh Feature Plus', available: true },
      { feature: 'Eighth Feature', available: false },
      { feature: 'Ninth Feature', available: false },
      { feature: 'Tenth Feature', available: false },
      { feature: 'Eleventh Feature', available: false },
    ],
  },
  {
    id: 3,
    name: 'Platinum Package',
    desc: 'This package is perfect for busy people who need home service',
    price: 89.99,
    features: [
      { feature: 'First Feature', available: true },
      { feature: 'Second Feature', available: true },
      { feature: 'Third Feature', available: true },
      { feature: 'Fourth Feature', available: true },
      { feature: 'Fifth Feature', available: true },
      { feature: 'Fifth Feature Plus', available: true },
      { feature: 'Sixth Feature', available: true },
      { feature: 'Seventh Feature', available: true },
      { feature: 'Seventh Feature Plus', available: true },
      { feature: 'Eighth Feature', available: true },
      { feature: 'Ninth Feature', available: true },
      { feature: 'Tenth Feature', available: true },
      { feature: 'Eleventh Feature', available: true },
    ],
  },
]

const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpeg')

export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: 'Fawad Nasim',
    job: 'Supervisor',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://facebook.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 2,
    image: Trainer2,
    name: 'Dr. Sohail',
    job: 'Co-Supervisor',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://facebook.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 3,
    image: Trainer3,
    name: 'Rabia Waseem',
    job: 'Web Developer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://facebook.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 4,
    image: Trainer4,
    name: 'Eman Malik',
    job: 'Android Developer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://facebook.com/',
      'https://linkedin.com/',
    ],
  },
]

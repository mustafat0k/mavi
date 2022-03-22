import React from 'react'
import {FiBriefcase,FiUsers, FiLayout, FiEdit, FiSettings, FiUser, FiLock, FiPhone, FiMapPin, FiPlus, FiMap, FiMail, FiClock, FiAlertTriangle, FiXOctagon, FiHome, FiBell, FiStar, FiInbox, FiArchive, FiHeart, FiArrowRightCircle, FiBookmark, FiBarChart, FiThumbsUp, FiUserPlus, FiMessageCircle, FiCoffee, FiGlobe, FiMoon, FiList, FiSmartphone, FiSend, FiFile, FiCreditCard, FiSlash, FiHelpCircle} from 'react-icons/fi'
import { AiOutlineComment, AiOutlineFileDone, AiOutlineMail, AiOutlineShop, AiOutlineShopping, AiOutlineTags, AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FaCarAlt, FaSass } from 'react-icons/fa'
import { IoMdCash  } from 'react-icons/io'
import { MdComputer, MdOutlineDarkMode } from 'react-icons/md'
import { BiBrain, BiCoffeeTogo } from 'react-icons/bi'
import { ImFire } from 'react-icons/im'
import {IoMdFingerPrint} from 'react-icons/io'
import {SiBootstrap, SiFramer, SiRedux, SiTypescript} from 'react-icons/si'
import {VscWorkspaceTrusted} from 'react-icons/vsc'


export const feedsData = [
  {
      username:'Ahmet Şimşirgil',
      face:'/assets/faces/8.png',
      date:'Now',
      star:1,
      desc:"Osmanlı ailesinin büyüğü Harun efendi ile çok güzel bir ecdat muhabbeti oldu. Bütün dost ve sevenlerime dualarını aldım. Cenab-ı Hak kendisine hayırlı uzun ömürler versin. Gönülden teşekkürler @nurahansultanosmanoglu\n",
  },
  {
      username:"Ahmet Mehmet Er",
      face:'/assets/faces/3.png',
      date:'2 month ago',
      desc:`#SonDakika 
Süleyman Soylu: Boğaziçi Üniversitesi’nde Kabe-i Muazzama’ya yapılan saygısızlığı gerçekleştiren 4 LGBT sapkını gözaltına alındı!`
  },
  {
      username:"Ahmet Mehmet Er",
      face:'/assets/faces/3.png',
      date:'Today 06:32',
      desc:"Boğaziçi Üniversitesi’nde Kabe-i Muazzama’ya yapılan saygısızlığı gerçekleştiren 4 LGBT sapkını gözaltına alındı!"
  },
  {
      username:"TransferWise",
      face:'/assets/faces/6.png',
      date:'Yesterday at 16:32',
      desc:`Türkiye ve Avrupa Arası Para Transferleri Mi Yapıyorsunuz? 🇪🇺
Bir banka veya komisyoncu ile para gönderiyorsanız, çok para kaybediyor olabilirsiniz. 
Para transferlerinizde tasarruf etmek için bu basit ipucunu okuyun.`
  }
]

export const urlExpression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
export const urlRegex = new RegExp(urlExpression);
export const endpoint = "http://localhost:5000/api/media/redirect";
export const URI = 'http://localhost:5000/public/uploads/'


export const questions = [
  {title:'1. What Nova is?', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta mollitia illum qui aliquid eaque reiciendis ipsum iure explicabo omnis error repellat sunt dolor alias, pariatur quasi quo aspernatur necessitatibus provident.'},
  {title:'2. How I can find job', description:'Illo sint est blanditiis. Vel eaque nulla asperiores ipsa vitae aliquid ipsam rerum dolorem odio nesciunt atque quia sequi deserunt, deleniti a quos exercitationem neque maiores ullam vero totam? Sit perferendis quasi corrupti culpa.'},
  {title:'3. Which payment methods have', description:'Debitis numquam, eum qui architecto libero accusantium! Non est possimus dolorum repudiandae? Accusamus! Itaque nisi quibusdam ab eum adipisci delectus cum mollitia similique ratione deleniti commodi voluptatem, expedita dolorum debitis maxime vero consectetur, earum hic et dolore nam a. '},
]

export const faqHomepage = [
  {title:'What times you are available?',  path:'#', description:'Atque iure, ipsam qui recusandae. Amet eos quia rem laboriosam voluptate itaque voluptatem  suscipit eius adipisci aut quo vitae'}, 
  {title:'When I take a reservation can i cancel any time?',  path:'#', description:'In eum molestias quod. Aperiam nobis voluptatum sapiente, dolorem hic ullam sed magnam reiciendis minima exercitationem? Suscipit vero est, aliquid pariatur natus temporibus enim maxime velit fugit illum eligendi mollitia provident eveniet nemo vitae! Odio veniam quas, eos minus placeat magni quo dignissimos rem et sit fugiat dicta, eum doloremque laudantium harum. Quas voluptate voluptas ad voluptatibus atque maxime et. Praesentium vel ab quasi! Eius adipisci aut quo vitae'}, 
  {title:'In what countries is the app available?',  path:'#', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit eius adipisci aut quo vitae'}, 
]

export const faq = [
  {title:'Fast',  path:'#',symbol:<FiClock /> , description:'Fastest template built with React and powered by NextJS. Build your amazing React App with NOVA.'}, 
  {title:'Easy to use', path:'#',symbol:<BiCoffeeTogo />, description:'Easy to use with advanced and rich components. High customization & hybrid features adaptable for different environments.'}, 
  {title:'Unique', path:'#',symbol:<IoMdFingerPrint /> , description:'Lots of creative, remarkable adn greate landing, home and inner pages with their wonderful fascinating components'}, 
]

export const featuresFaq = [
  {title:'Typescript Support', path:'#',symbol:<SiTypescript /> , description:'Aut labore veritatis magnam dicta quibusdam, temporibus eos impedit quam cum pariatur reprehenderit culpa'}, 
  {title:'Sass Style',  path:'#',symbol:<FaSass /> , description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit eius adipisci aut quo vitae'}, 
  {title:'Bootstrap', path:'#',symbol:<SiBootstrap />, description:'Atque iure, ipsam qui recusandae. Amet eos quia rem laboriosam voluptate itaque voluptatem fugiat.'}, 
  {title:'Redux Toolkit', path:'#',symbol:<SiRedux /> , description:'Aut labore veritatis magnam dicta quibusdam, temporibus eos impedit quam cum pariatur reprehenderit culpa'}, 
  {title:'Darkmode',  path:'#',symbol:<MdOutlineDarkMode /> , description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit eius adipisci aut quo vitae'}, 
  {title:'Framer Motion', path:'#',symbol:<SiFramer />, description:'Atque iure, ipsam qui recusandae. Amet eos quia rem laboriosam voluptate itaque voluptatem fugiat.'}, 

]

export const signChecks = [
  {id:1, title:'I have read and agree to the terms of service & privacy policy', url:'#'},
  {id:2, title:'I accept clarification text on the processing of personal data ', url:'#'},
  {id:2, title:'I want to join subscription list ', url:'#'},
]

export const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
export const menusGuest = [
  {symbol: <FiHome />, title:'Home', url:'/home'},
  {symbol: <FiBriefcase />, title:'Projects', url:'/projects'},
  {symbol: <FiUsers />, title:'Users', url:'/users'},
  
  {symbol: <FiMessageCircle />, title:'Chat', url:'/chat'},
]
export const menus = [
  {symbol: <FiBriefcase />, title:'Projects', url:'/projects'},
  {symbol: <FiUsers />, title:'Users', url:'/users'},
  {symbol: <FiLayout />, title:'Profile', url:'/profile'},
]

export const groups = ['People', 'Companies', 'Groups']

export const usersResult = [
    {name:'Cecile Vuillet', bio:'Principal designer at Ulysse & Ulysses',image:13, type:'2nd'},
    {name:'Adelle Vuillard', bio:'Sales VP at John Lewis',image:14, type:'2nd'},
    {name:'Angel Vuillin', bio:'Consultant maketing Taylor and co',image:11, type:'2nd'},
    {name:'Karen Vuillemot', bio:'Fitness specialist at Nuffield Health',image:12, type:'2nd'},
];
export const profilesResult = [
    {name:'Louis Vuitton', bio:'Luxury Goods & Jewelery - 10,000+ employees',image:13},
    {name:'Vui', bio:'Information Technology and Services - 1-10 empoloyees',image:14},
    {name:'Vuit Desing', bio:'Management consulting',image:15},
];
export const projectsResult = [
    {name:'Louis Vuitton recrutement Paris',image:13},
    {name:'Louis Vuitton recrutement London',image:14},
];

export const optsProject = [
  {symbol:<FiEdit />,title:'Edit', url:'/projects/create'},
  {symbol:<FiSettings />,title:'Settings', url:'#'},

   {symbol:<FiBarChart />,title:'Statistics', url:'#'},
   {symbol:<FiSend />,title:'Chat', url:'#'},
   {symbol:<FiMapPin />,title:'Locatin', url:'#'},
   {symbol:<FiUsers />,title:'Team', url:'#'},
   {symbol:<FiArchive />,title:'Requests', url:'#'},
   {symbol:<FiInbox />,title:'Invitations', url:'#'},
];

export const opts = [
  {symbol:<FiUser />,title:'Profiles', url:'/account'},
  {symbol:<FiHeart />,title:'Favorites', url:'/account/favorites'},
  {symbol:<FiSettings />,title:'Settings', url:'/account/setting'},
  {symbol:<FiLock />,title:'Change password', url:'/account/change'},

  // {symbol:<FiBriefcase />,title:'My Projects', url:'#/account/myprojects', sharp:true},
  // {symbol:<FiUsers />,title:'My Profiles', url:'#/account/profiles', sharp:true},
  // {symbol:<FiBarChart />,title:'Statistics', url:'#',  sharp:true},
  // {symbol:<FiSend />,title:'Chat', url:'#',  sharp:true},
  // {symbol:<FiCreditCard />,title:'Payment', url:'#', sharp:true},
  // {symbol:<FiMapPin />,title:'Location', url:'#',  sharp:true},
  // {symbol:<FiUsers />,title:'Team', url:'#',  sharp:true},
 
  // {symbol:<FiSlash />,title:'Blocked', url:'#/account/blocks', sharp:true},
 
  // {symbol:<FiArchive />,title:'Inbound', url:'/account/requests'},
  // {symbol:<FiInbox />,title:'Outbound', url:'#'},

  // {symbol:<FiMoon />,title:'Darkmode', url:'#',  sharp:true},
  // {symbol:<FiHelpCircle />,title:'Help & Support', url:'#',  sharp:true},
];

export const opts2 = [
  {symbol:<FiUsers />,title:'Invates', url:'/account/friendship'},
  {symbol:<FiInbox />,title:'Requests', url:'/account/requests'},
  {symbol:<FiBell />,title:'Notifications', url:'/account/notification'},
]


export const skillList = [
  {id:1,name:'WordPress', description:'Template and extensions.', star:4 },
  {id:2,name:'Laravel', description:'Most popular framework of php langauge and easy to use', star:3 },
];

export  const skillList2 = [
  {id:1,name:'Mix Mastering', description:'Im the Beat Maker', star:2 },
  {id:2,name:'LogicPro', description:'ı can deo beat and mix mastering for you ', star:3 },
  {id:3,name:'FLStudio', description:'FL\'i studio beat mixing', star:2 },
  {id:9,name:'behaviour Science', star:2 },
  {id:10,name:'Profile Expertise', star:2 },   

];

export const aboutlist = [
  { letter: 'TA', title:'Java Developer', description:'Turkcell & Turk Telekom'},
  {symbol: <FiMap />, title:'Participate Physics', description:'Mimar Sinan - İstanbul'},
  {symbol: <FiPhone />, title:'0505 234 56 78'},
  {symbol: <FiUser />, title:'test@test.com'},
  {symbol: <FiMapPin />, title:'Living in Türkiye'},
  {img: <img src="/faces/1.png" />, title:'Arabic, English knows'},
  {symbol: <FiPlus />, description:'Add School', add:true},

]

 
export const personals = [
    {symbol: <FiBriefcase />, title:'Microsoft', description:'Kernel Engineer'},
    {symbol: <FiPhone />, title:'0512 345 67 89', description:'Business Phone'},
    {symbol: <FiMail />, title:'text@example.com', description:'Business email'},
    {symbol: <FiClock />, title:'10:00-17:00', description:'Suitable'},
    {symbol: <FiPlus />, title:'Add an address', add:true},
    {symbol: <FiPlus />, title:'Add social profiel', add:true},
]

export const projectSettingList = [
  {title:'Edit', symbol:<FiEdit />, url:'#'},
  {title:'Complain', symbol:<FiAlertTriangle /> , url:'#'},
  {title:'Remove', symbol:<FiXOctagon />, url:'#'},
]
export const features = [
  {title:'Techinal',  start:'2019-06-11T09:20:20.726Z', end:'2021-11-13T09:20:20.726Z', name:'Floating Burger', date:'Mart 2014 - Todoy (8ay)' , type:'edu', description:'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry\'s standard dummy text'},
  {title:'Owner', name:'Unfold LLC', date:'Mart 23 - Today (1 yıl 3 ay)' , type:'edu', description:'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry\'s standard dummy text'},
  {title:'Computer Science', name:'Mimar Sinan', date:'Mart 2012 - Today (8ay)' , type:'exp',  description:'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry\'s standard dummy text' },
];

export const fieldList = [
  {title:'Education', description:'Enter Educational information.'},
  {title:'Experiments', description:'Job Experiments'},
  {title:'Courses', description:'Add or edit Courses'},
  {title:'Languages', description:'Give a point to language'},
  {title:'Skills', description:'Add or edit Skill'},
  {title:'Socials', description:'Add or edit Social'},
]

export  const brdcrmbs = [
  {symbol: <FiHome />, title:'Account', url:'/account'},
  {symbol: <FiBell />, title:'Notifications', url:'/notifications'},
  {symbol: <FiBriefcase />, title:'Projects', url:'/account/myprojects'},
  {symbol: <FiStar />, title:'Favorites', url:'/account/favorites'},
 {symbol: <FiFile />, title:'Ad Management', url:'#/advertisement', sharp:true},
 {symbol: <FiCreditCard />, title:'Payment', url:'#/account/payment', sharp:true}
]

export const selectedCity = [
  {name:'İstanbul', children:['Fatih','Bahçelievler','Gebze']},
  {name:'Konya'},
]

export const team = [
    {name:'Jenny Wilson', online:true, username:'jennyq91', img:'/faces/3.png'},
    {name:'Bob Schwartz', online:true, username:'bobschwartz', img:'/faces/4.png'},
    {name:'Jane Cooper', username:'janecoops', img:'/faces/5.png'},
    {name:'Brooklyn Sympsons', username:'brook_simmons', img:'/faces/6.png'},
    {name:'Billy Cooper', username:'bcooper', online:true, img:'/faces/7.png'},
    {name:'Diane Russel', username:'dae_russ', img:'/faces/8.png'},
]

export const notifyList =[
  {title:'Mentions', check:true, symbol: <AiOutlineTags />, description:'You will receive an alert when someone was mentioned you in any post.'},
  {title:'Follows', symbol: <AiOutlineUserAdd />, description:'You will receive an alert when someone is follwing you.'},
  {title:'Comments', check:true, symbol: <AiOutlineComment />, description:'You will receive an notifications when someone is comment on your post.'},
  {title:'Email Notifications', symbol: <AiOutlineMail />, description:'You will receive daily email notifications.'},
  {title:'New Product', symbol: <AiOutlineShopping />, description:'You will receive an notifications when a new product arrived.'},
  {title:'Groups Invitation', symbol: <AiOutlineUsergroupAdd />, description:'You will receive an notifications when a group is inviting you.'},
  {title:'Tasks', check:true, symbol: <AiOutlineFileDone />, description:'You will receive an notifications someone assign you a task'},
]

export const tagList = [
  {id:1,name:'WordPress',  star:4 },
  {id:2,name:'Php',  star:3 },
  {id:3,name:'Laravel', star:2 },
  {id:4,name:'React',  star:5 },
  {id:4,name:'C++', star:5 },
]; 

export const jobList = [
  {id:1, position:'Art Director', city:'İstanbul', start:'2019-06-11T09:20:20.726Z', end:'2022-07-01T09:20:20.726Z', working:1, company:'Agency', description:'lorem ipsum is simply dummy test of the printing and industry. Lorem  has been the industry’s standard dummy text'},
  {id:2, position:'Technical Responsible', city:'Konya', start:'2021-12-12T09:20:20.726Z',end:null, working:1, company:'TeamSQL', description:'Lorem ipsum is simply dummy test of the printing and industry. Lorem  has been the industry’s standard dummy text'}
];

export const experiments = [
  {id:1, position:'Kernel Engineer', city:'Ukraine', start:'2023-07-11T09:20:20.726Z', end:'2025-07-01T09:20:20.726Z', working:1, company:'Appriorit Inc', description:'lorem ipsum is simply dummy test of the printing and industry. Lorem  has been the industry’s standard dummy text'},
  {id:2, position:'Backend Developer', city:'Yozgat', start:'2017-12-12T09:20:20.726Z',end:null, working:1, company:'Grammerly', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est maxime doloremque inventore rerum omnis deserunt saepe ullam architecto? Voluptates beatae, sapiente ut dignissimos architecto asperiores tenetur assumenda quam necessitatibus vel.'},
  {id:3, position:'FullStack Engineer', city:'Konya', start:'2017-12-12T09:20:20.726Z',end:null, working:1, company:'Google Inc.', description:'Lorem ipsum is simply dummy test of the printing and industry. Lorem  has been the industry’s standard dummy text'}
];

export const langList = [
  {id:1, title:'Turkish', active:false},
  {id:2, title:'Arabic', active:false},
  {id:2, title:'Kurdish', active:false},
  {id:3, title:'English', active:false},
  {id:4, title:'Japanese', active:false},
  {id:4, title:'Chechen', active:false},
  {id:4, title:'Circassian', active:false},
  {id:5, title:'Russian', active:false},
];

export const userList = [
  {name:'David Vuitton', description:'plymout - avilation and aerospace', position:'Designer', avatar:'/faces/11.png', follow:true, active:true},
  {name:'Leila Vuitton', description:'San Fransisco, USA - Silicon Valley', position:'Program Manager', avatar:'/faces/12.png', follow:false, active:true},
  {name:'Martin Vuitton', description:'Nytimes', position:'Writer', avatar:'/faces/13.png', follow:true},
  {name:'Alisson Vuitton', description:'SpaceX', position:'Astronaute', avatar:'/faces/14.png', follow:true, active:true},
  {name:'Leisson Vuitton', description:'Nevada', position:'Farmer', avatar:'/faces/15.png', follow:false},
]

export const previewImageList = [43,44,45,46,43,44]

export const aboutFeatureList = [
  //{title:'+90 5123 456 78', description:'Business', symbol:<FiPhone />, edit:false},
  {title:'Fullstack Developer at Google', description:'Previously Engineer at Zer0day', symbol:<FiPhone />, edit:false},
  {title:'example@example.com', description:'Business inquiries only', symbol:<FiMail />, edit:false},
  {title:'Usually available 9am-5pm', description:'Call +1 (930) 242-5186 for take an offer', symbol:<FiClock />, edit:false},
  {title:'Add an adress', symbol:<FiPlus />, edit:true},
  {title:'Add social profile', symbol:<ImFire />},
]

export const friendList = [
  {name:'Ahmet Mehmet ER', avatar:1, description:'130 mutual friends'},
  {name:'Ahmet Mehmet ER', avatar:2, description:'130 mutual friends'},
  {name:'Ahmet Mehmet ER', avatar:3, description:'130 mutual friends'},
  {name:'Ahmet Mehmet ER', avatar:4, description:'130 mutual friends'},
  {name:'Ahmet Mehmet ER', description:'130 mutual friends'},
  {name:'Ahmet Mehmet ER', description:'130 mutual friends'},
  {name:'Ahmet Mehmet ER', avatar:10, description:'130 mutual friends'},
  {name:'Ahmet Mehmet ER', avatar:11, description:'130 mutual friends'},
  {name:'Ahmet Mehmet ER', avatar:12, description:'130 mutual friends'},
  {name:'Ahmet Mehmet ER', avatar:13, description:'130 mutual friends'},
  {name:'Ahmet Mehmet ER', avatar:14, description:'130 mutual friends'},
  {name:'Ahmet Mehmet ER', avatar:15, description:'130 mutual friends'},
]

export const teamList = [
  {title:'owner', profiles:[
      {name:'Yusuf', avatar:'/faces/1.png', liked:false},
  ]},
  {title:'mentor', profiles:[
      {name:'Fatma', profession:'Master Chief', avatar:'/faces/2.png', liked:false},
      {name:'Emir', profession:'Master Chief', avatar:'/faces/10.png', liked:false},
      {name:'Cuma', profession:'Master Chief', avatar:'/faces/11.png', liked:true},

  ]},
  {title:'realestate', profiles:[
      {name:'Kerim', profession:'Director', avatar:'/faces/3.png', liked:false},

  ]},
  {title:'vehicle', profiles:[
      {name:'Ekrem', profession:'Director', avatar:'/faces/4.png', liked:false},

  ]},
  {title:'profession', profiles:[
      {name:'Eren', profession:'Developer', avatar:'/faces/5.png', liked:false},
      {name:'Altan', profession:'Developer', avatar:'/faces/15.png', liked:false},
      {name:'Emre', profession:'Designer', avatar:'/faces/13.png', liked:false},

  ]},
  {title:'investor', profiles:[
      {name:'Patrice', limit:'300.000₺', avatar:'/faces/12.png', liked:false},
      {name:'Mehmet', limit:'300.000₺', avatar:'/faces/14.png', liked:false},

  ]},
]

export const personList = [
  {name:'Hasan Sağlam', avatar:'/faces/1.png', place:'İstanbul / Fatih', followed:true},
  {name:'Ömer Sağlam', avatar:'/faces/3.png', place:'İstanbul / Fatih', followed:false},
  {name:'Jake Patrice', avatar:'/faces/4.png', place:'Konya / Gebze', followed:false},
  {name:'Jane Patrice', avatar:'/faces/2.png', place:'Konya / Fatih', followed:true},
];

export const optionsProject = [
  {name: 'Swedish', value: 'sv'},
  {name: 'English', value: 'en'},
  {
      type: 'group',
      name: 'Group name',
      items: [
          {name: 'Spanish', value: 'es'},
      ]
  },
];
export const optsTabs = [
    {symbol:<FiEdit />,title:'Edit', type:'project-create', url:'#'},
    {symbol:<FiUsers />,title:'Media', url:'#', type:'media'},
    {symbol:<FiArchive />,title:'Inbox', url:'#', type:'inbox'},
    {symbol:<FiInbox/>,title:'OutBox', url:'#', type:'outbox'},
    {symbol:<FiSettings />,title:'Settings', url:'#', type:'settings'},
     {symbol:<FiBarChart />,title:'Statistics', url:'#',type:'statistics'},
     {symbol:<FiSend />,title:'Chat', url:'#',type:'chat'},
     {symbol:<FiMapPin />,title:'Location', url:'#',type:'location'},
];


export const notifyTabs = [
  {title:'Last Activities', count:13, no:7 ,  endpoint:'getPassives', children:[
      {title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', avatar:"0", img:43, reviews:34, star:5, privacy:false, sector:[{title:'Job'}], job:[{title:'Career'}], era:[{title:'Space'}], user:{name:'Author',  date:'07/10/2019', like:287, dislike:37},  },
      {title:'Numquam eum fugit voluptate commodi doloremque doloribus?', avatar:4, img:44, reviews:34, star:5, privacy:true, sector:[{title:'Job'}], job:[{title:'Career'}], era:[{title:'Space'}], user:{name:'Author',  date:'07/10/2019', like:287, dislike:37},  },
      {title:'Veniam, Reprehenderit eos a recusandae enim', avatar:2, img:45, reviews:34, star:5, privacy:false, sector:[{title:'Job'}], job:[{title:'Career'}], era:[{title:'Space'}], user:{name:'Author',  date:'07/10/2019', like:287, dislike:37},  },
      {title:'Mollitia ducimus laudantium id eius', avatar:1, img:19, reviews:34, star:5, privacy:true, sector:[{title:'Job'}], job:[{title:'Career'}], era:[{title:'Space'}], user:{name:'Author',  date:'07/10/2019', like:287, dislike:37},  },
  ]},
];

export const myProjects = [
  {title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', avatar:"0", img:43, reviews:34, star:5, privacy:false,  user:{name:'Author',  date:'07/10/2019', like:287, dislike:37},  },
  {title:'Numquam eum fugit voluptate commodi doloremque doloribus?', avatar:4, img:44, reviews:34, star:5, privacy:true,  user:{name:'Author',  date:'07/10/2019', like:287, dislike:37},  },
  {title:'Veniam, Reprehenderit eos a recusandae enim', avatar:2, img:45, reviews:34, star:5, privacy:false,  user:{name:'Author',  date:'07/10/2019', like:287, dislike:37},  },
  {title:'Mollitia ducimus laudantium id eius', avatar:1, img:19, reviews:34, star:5, privacy:true,  user:{name:'Author',  date:'07/10/2019', like:287, dislike:37},  },
]
 
export const lists = [
{title:'Mollitia ducimus laudantium id eius', sector:[{title:'Aerospace'}], job:[{title:'Aircraft design & mechanics'}], era:[{title:'Konya / Türkiye'}], category:'', avatar:1, img:19, reviews:3445, star:5, privacy:true, user:{name:'Author',  date:'07/10/2019'},  },
{title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', sector:[{title:'Agriculture'}], job:[{title:'Agronomist / Food inspector'}], era:[{title:'Azerbeijan'}], category:'', avatar:5, img:20, reviews:93, star:4, privacy:false, user:{name:'Author',  date:'07/10/2019'},  },
{title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', sector:[{title:'Energy'}], job:[{title:'Electricity'}], era:[{title:'Ukraine'}], category:'', avatar:8, img:21, reviews:81, star:3, privacy:true, user:{name:'Author',  date:'07/10/2019'},  },
//
{title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', avatar:"0", img:43, reviews:34, star:5, privacy:false, user:{name:'Author',  date:'07/10/2019'},  },
{title:'Numquam eum fugit voluptate commodi doloremque doloribus?', avatar:4, img:44, reviews:745, star:3, privacy:true, user:{name:'Author',  date:'07/10/2019', like:9287, dislike:300},  },
{title:'Veniam, Reprehenderit eos a recusandae enim', avatar:2, img:45, reviews:1823, star:4, privacy:false, user:{name:'Author',  date:'07/10/2019', like:1587, dislike:3},  },
{title:'You will like these glasses', avatar:3, img:46, reviews:34, star:3, privacy:false, user:{name:'Author',  date:'07/10/2019', like:287, dislike:23},  },
/** hotel **/
{title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', avatar:15, img:3, reviews:240, star:5, privacy:true, user:{name:'Author',  date:'07/10/2019', },  },
{title:'Lorem ipsum dolor sit amet consecetur adipisicing elit.', img:5, reviews:445, star:2, privacy:true, user:{name:'Author',  date:'07/10/2019', },  },
 /** office **/
{title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', avatar:10, img:31, reviews:65, star:5, privacy:true, user:{name:'Author',  date:'07/10/2019', },  },
{title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', avatar:11, img:32, reviews:27, star:4, privacy:true, user:{name:'Author',  date:'07/10/2019', },  },
{title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', avatar:12, img:33, reviews:5967, star:3, privacy:false, user:{name:'Author',  date:'07/10/2019', },  },
{title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', avatar:13, img:"0", reviews:3485, star:3, privacy:false, user:{name:'Author',  date:'07/10/2019', },  },
{title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img:8, reviews:4741, star:4, privacy:false, user:{name:'Author',  date:'07/10/2019', },  },
/** no-image **/
{title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',  reviews:341, star:3, privacy:true, user:{name:'Author',  date:'07/10/2019', },  },
{title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', reviews:345, star:1, privacy:false, user:{name:'Author',  date:'07/10/2019', },  },

];

export const notificationList = [
  { symbol:<FiBarChart />,title:' This week 9.755 person visited your profile', date:'11 hours', images:[1,2,3,4,5], unread:true},
  { symbol:<FiThumbsUp />,title:'Ahmet and other 75.773 person viewed your post', date:'Yesterday', images:[10,11,1,8,2,5,12,3,4,13]},
  { symbol:<FiHeart />,title:'Abdülkerim created a page', date:'2 days', image:8},
  { symbol:<FiUserPlus />,title:'You have been friended to +25 new persons ', date:'2 days', images:[4,5,10]},
] 

export const requestList = [
  { 
    job:['Electronics'],
    workstyle:['Fulltime'], 
    era:['All'], 
    user:{
      name:'Author',  
      date:'07/10/2019', 
      like:287, 
      dislike:37
  }, 
    request:true  
  },
  {job:['Electronics'], workstyle:['Fulltime'], era:['All'], user:{name:'Author',  date:'07/10/2019', }, request:true  },
  {job:['Electronics'], workstyle:['Fulltime'], era:['All'], user:{name:'Author',  date:'07/10/2019', like:287, dislike:37}, request:false  },
]; 
export const addEntrepreneurs = [
  {type:'special', sector:['Aerospace'], job:[{title:'Aircraft Engineer'}],  },
];
 



export const projectsList = [
  {title:'We will create an nft art collection with 100, 1k, 10k nfts for opeansea', images:[1,2,3,4,5]},
  {title:'I will create a wordpress website for your business', images:[3,4,5]},
]








export const videoList = [
  {
    "_id" : "5fe91b7bb068e1b20288372e",
    "title" : "Phishing attacks are SCARY easy to do!! (let me show you!) // FREE Security+ // EP 2",
    "url" : "https://www.youtube.com/watch?v=u9dBGWVwMMA",
    "cover" : "http://i3.ytimg.com/vi/u9dBGWVwMMA/hqdefault.jpg",
    "desc" : "How do hackers launch phishing attacks? Let me show you! Want to see more, dive deeper? Join ",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b202883730",
    "title" : "how Hackers SNiFF (capture) network traffic // MiTM attack",
    "url" : "https://www.youtube.com/watch?v=-rSqbgI7oZM",
    "cover" : "http://i3.ytimg.com/vi/-rSqbgI7oZM/hqdefault.jpg",
    "desc" : "become a HACKER (ethical) with ITProTV:  (30% OFF): https://bit.ly/itprotvnetchuck or use code \"networkchuck\" (affiliate link)",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b202883731",
    "title" : "your first Hacking certification (PenTest+)",
    "url" : "https://www.youtube.com/watch?v=EY-Scg1z6zA",
    "cover" : "http://i3.ytimg.com/vi/EY-Scg1z6zA/hqdefault.jpg",
    "desc" : " Looking to get your first Hacking certification? Consider the CompTIA PenTest+. 🥇🥇ENTER TO WIN a CompTIA Voucher+Training: https://bit.ly/nc10daysxmas2020",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b202883732",
    "title" : "Bug Bounty (how to make money HACKING!!) // ft. STÖK",
    "url" : "https://www.youtube.com/watch?v=HbcY1HQtLms&t=20s",
    "cover" : "http://i3.ytimg.com/vi/HbcY1HQtLms/hqdefault.jpg",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b202883733",
    "title" : "learn to HACK (the best way) // ft. John Hammond",
    "url" : "https://www.youtube.com/watch?v=wIn3L24lksI&t=32s",
    "cover" : "http://i3.ytimg.com/vi/wIn3L24lksI/hqdefault.jpg",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b202883734",
    "title" : "stop DDoSiNg my website!! (and other SCARY IT stories) Pt. 1",
    "url" : "https://www.youtube.com/watch?v=1EmHrexhPRw",
    "cover" : "http://i3.ytimg.com/vi/1EmHrexhPRw/hqdefault.jpg",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b202883735",
    "title" : "i hacked my grandma (social engineering and pretexting) // FREE Security+ // EP 3",
    "url" : "https://www.youtube.com/watch?v=HfPKe98UqEI",
    "cover" : "http://i3.ytimg.com/vi/HfPKe98UqEI/hqdefault.jpg",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b202883736",
    "title" : "my beard isn’t real // FREE Security+ // EP 5",
    "url" : "https://www.youtube.com/watch?v=XYpJhhJOJSs",
    "cover" : "http://i3.ytimg.com/vi/XYpJhhJOJSs/hqdefault.jpg",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b202883737",
    "title" : "shut up and just DO it!! (IT certifications)",
    "url" : "https://www.youtube.com/watch?v=H8iUYmReC9M",
    "cover" : "http://i3.ytimg.com/vi/H8iUYmReC9M/hqdefault.jpg",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b202883738",
    "title" : "you need to learn Kubernetes RIGHT NOW!!",
    "url" : "https://www.youtube.com/watch?v=7bA0gTroJjw",
    "cover" : "http://i3.ytimg.com/vi/7bA0gTroJjw/hqdefault.jpg",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b202883739",
    "title" : "you need to learn Docker RIGHT NOW!! // Docker Containers 101",
    "url" : "https://www.youtube.com/watch?v=eGz9DS-aIeY",
    "cover" : "http://i3.ytimg.com/vi/eGz9DS-aIeY/hqdefault.jpg",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b20288373a",
    "title" : "setup a FREE VPN server in the cloud (AWS)",
    "url" : "https://www.youtube.com/watch?v=m-i2JBtG4FE",
    "cover" : "http://i3.ytimg.com/vi/m-i2JBtG4FE/hqdefault.jpg",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b20288373b",
    "title" : "new Kali Linux GUI on Windows 10 (WSL 2) // 2020.3 Release",
    "url" : "https://www.youtube.com/watch?v=dgdOILL1184",
    "cover" : "http://i3.ytimg.com/vi/dgdOILL1184/hqdefault.jpg",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b20288373c",
    "title" : "studio tour (gear i use to make videos)",
    "url" : "https://www.youtube.com/watch?v=5K1m9niTHMo",
    "cover" : "http://i3.ytimg.com/vi/5K1m9niTHMo/hqdefault.jpg",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b20288373d",
    "title" : "Google HACKING (use google search to HACK!)",
    "url" : "https://www.youtube.com/watch?v=hrVa_dhD-iA",
    "cover" : "http://i3.ytimg.com/vi/hrVa_dhD-iA/hqdefault.jpg",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b20288373e",
    "title" : "you need to learn HACKING RIGHT NOW!! // CEH (ethical hacking)",
    "url" : "https://www.youtube.com/watch?v=yFC8pb2TPdc",
    "cover" : "http://i3.ytimg.com/vi/yFC8pb2TPdc/hqdefault.jpg",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b20288373f",
    "title" : "FREE CCNA // What is a Network? // Day 0",
    "url" : "https://www.youtube.com/watch?v=S7MNX_UD7vY",
    "cover" : "http://i3.ytimg.com/vi/S7MNX_UD7vY/hqdefault.jpg",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b202883740",
    "title" : "Nmap Tutorial to find Network Vulnerabilities",
    "url" : "https://www.youtube.com/watch?v=4t4kBkMsDbQ",
    "cover" : "http://i3.ytimg.com/vi/4t4kBkMsDbQ/hqdefault.jpg",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
{
    "_id" : "5fe91ed2b068e1b202883741",
    "title" : "My Ultimate Work From Home Desk Setup for Productivity",
    "url" : "https://www.youtube.com/watch?v=0oBi8OmjLIg",
    "cover" : "http://i3.ytimg.com/vi/0oBi8OmjLIg/hqdefault.jpg",
    "privacy" : 0.0,
    "views" : 215.0,
    "user" : "606189100b9e6c2810503d9f",
    "category" : ""
},
]


export const videoComments = [
  {
    id:1,
    message:`Bro @sa your tutorials are incredible! I've been looking for Java and Python
    help and I can't believe you have so few subscribers. You honestly deserve so many more
    Stay strong and I really hope the useless algorithm works in your favor. Keep up the awesome work bro!`,
    likes:3795,
    dislikes:3795,
    edited:false,
    faved:true,
    shared:true,
    stared:true,
    
    user:{
      name:'Qwinton Ingo Knöcklein',
      avatar:'/faces/5.png',
      date:'3 month ago',
      slug:"qwinton",
    },
    replyCount:0,
    replies:[]
  },



  {
    id:2,
    message:`Go tired of copying in exams, this is one of the best ones i've seen bruh ngl. thanks a lot <3
    edit: you know this dude gonne be wholesome if he uses "i like pizza, it's really good" for a print statement example `,
    likes:3795,
    dislikes:3795,
    edited:true,
    faved:true,
    user:{
      name:'Der Falscheste',
      avatar:'/faces/8.png',
      date:'3 month ago',
      slug:"derfalscheste",

    },
    replyCount:2,
    replies:[
       {
         id:3,
          message:`Bro uploading a whole as 12h video that is good quality and well explained and only gets 312 views after 20hrs smh :/`,
          likes:3795,
          dislikes:3795,
          edited:false,
          faved:true,
          user:{
            name:'Nemesis',
            avatar:'/faces/7.png',
            date:'1 month ago',
           slug:"nemesis",

          },
       },
       {
        id:4,
        message:`Commenting for the algorithm. Found your videos and you're the goat. Sharing with all my Comp Sci colleagues and classmates`,
        likes:3795,
        dislikes:3795,
        edited:false,
        user:{
          name:'Muhammed Emin Çiftçi',
          avatar:'/faces/3.png',
          date:'2 month ago',
          slug:"Muhammed-emin",

        },
     }
    ]
  },

]



export const feedList = [
  {
    user:{
        avatar:'./faces/9.png',
        name:'Tester Test',
        date:'15/11/2021'
    },
    link:{
      url:'#',
      images:['images/22.jpg'],
      title:'Social Media Marketing Expertise',
      description:'A quick introduction on Travis CI and my experiences on how to set it up. This video is about for that.'
    },
    text:`A quick introduction https://intel.com/content/www/us/en/artificial-intelligence/docs.html on Travis CI and my experiences on how to set it up. This video is for people not familiar with Travis CI
    Learn more about Continuous Integration: https://ibm.co/2naimDE`,
    fav:true,
    replyCount:0,

  },
  {
  user:{
      avatar:'./faces/17.png',
      name:'Tester Test',
      date:'15/11/2021'
  },
  images:[
      {path:'/images/15.jpg'},
      {path:'/images/16.jpg'},
      {path:'/images/17.jpg'},
  ],
  text:`A quick introduction on Travis CI and my experiences on how to set it up. This video is for people not familiar with Travis CI
  Learn more about Continuous Integration: https://ibm.co/2naimDE`,
  fav:true,
  replyCount:0,

  },
  {
  user:{
    avatar:'./faces/7.png',
    name:'Tester Test',
    date:'15/11/2021'
  },
  images:[
    {path:'/images/1.jpg'},
    {path:'/images/2.jpg'},
  ],
  text:`A quick introduction on Travis CI and my experiences on how to set it up. This video is for people not familiar with Travis CI
  Learn more about Continuous Integration: https://ibm.co/2naimDE`,
  fav:true,
  replyCount:0,

  },
  {
    user:{
        avatar:'/faces/2.gif',
        name:'Tester Test',
        date:'15/11/2021'
    },
    images:[
        {path:'./images/22.jpg'},
    ],
    text:`A quick introduction on Travis CI and my experiences on how to set it up. This video is for people not familiar with Travis CI
    Learn more about https://intel.com/content/www/us/en/artificial-intelligence/docs.html Continuous Integration: https://ibm.co/2naimDE`,
    fav:true,
    replyCount:0,

  },
  {
    user:{
        avatar:'/faces/1.gif',
        name:'Tester Test',
        date:'15/11/2021'
    },
    
    text:`Grow your skills and earn a badge with FREE browser-based Kubernetes labs: https://www.ibm.com/cloud/kubernetes-service/kubernetes-tutorials
    In this video you will learn what continuous integration is, the difference between the old way of infrequent integration vs new way of continuous integration, and the benefits of doing it, with IBM Cloud's Eric Minick. 
    `,
    replyCount:0,
    replies:[],
    fav:true,
    star:true,

  },
  {
    cover:'./assets/bg2.png',
    user:{
        avatar:'/faces/15.png',
        name:'Tester Test',
        date:'15/11/2021'
    },
    text:'Hey',
    replyCount:5,
    replies:[
      {text:'.'},
      {text:'Doğru tespit'},
      {text:'batıdan medet uman,en büyük hain ve şerefsizdir'},
      {text:'Çok güzel konuştu helal olsun'},
      {text:'🇹🇷🇦🇿🇵🇰'},
      {text:'gibi sahte solculuk halkçılık boğazda yatlarda 🤔😁'},
      {text:'Nokta atışı ..👍🏻'},
      {text:'🇹🇷🇹🇷 🇹🇷'},
      {text:'Mükellef olma şart var mı ?'},
      {text:"RABBİM yardımcı olsun inşallah REİS yanındayız Allah'ın izniyle İNŞALLAH Durmak yok yola devam sonuna kadar inşallah hep birlikte devam inşallah dünya lideri "},
      {text: "Merhabalar @aga sende baksana bir kardeşim #startup"},
      {text:`Merhaba, platformumuz Çarşı, Hal ve Pazar olarak
      üç kısımdan oluşmaktadır. Bireysel olarak
      satışlarımızda yalnızca “Pazar” kısmımızda
      yapabilirsiniz. Bu kısımda isterseniz sıfır, isterseniz
      ikinci el ürünlerinizi satabilirsiniz. Esnaf vergi
      Muafiyet B...`},
      {text:"sahbaz.co çok teşekkür ederim"},
      {text:"hey"},
      {text:`dilerseniz özel mesajı yoluyla 
      bilgilerinizi iletin, biz sizi arayıp konuyla ilgili daha
      detaylı bilgi verelim.`},
  ],
    fav:true,
  },  
  {
    id:2,
    text:`Go tired of copying   https://github.com/nivaldomartinez/link-prevue-demo in exams, this is one of the best ones i've seen bruh ngl. thanks a lot <3
    edit: you know this dude gonne be wholesome if he uses "i like pizza, it's really good" for a print statement example `,
    likes:3795,
    dislikes:3795,
    edited:true,
    faved:true,
    user:{
      name:'Der Falscheste',
      avatar:'/faces/8.png',
      date:'3 month ago',
      slug:"derfalscheste",

    },
   
  },
  {
    user:{
        avatar:'/faces/3.png',
        name:'Tester Test',
        date:'15/11/2021'
    },
    images:[
        {path:'/images/3.jpg'},
        {path:'/images/18.jpg'},
        {path:'/images/20.jpg'},
        {path:'/images/21.jpg'},
        {path:'/images/22.jpg'},
        {path:'/images/23.jpg'},
        {path:'/images/24.jpg'},
        {path:'/images/25.jpg'},
    ],
    text:`A quick @karga introduction #hayırlı-cumalar on Travis CI https://github.com/nivaldomartinez/link-prevue-demo and my experiences on how to set it up. This video is for people not familiar with Travis CI
    Learn more about Continuous @foo and @bar Integration: https://ibm.co/2naimDE`,
    fav:true,
    replyCount:0,

  },
  {
    user:{
        avatar:'./faces/14.png',
        name:'Tester Test',
        date:'15/11/2021'
    },
    options:{
      fold:true,
    },
    images:[
      {path:'/images/image-1.png'},
      {path:'/images/image-2.png'},
      {path:'/images/image-4.png'},
    ],
    text:`A quick introduction on Travis CI and my experiences on how to set it up. This video is for people not familiar with Travis CI
    Learn more about Continuous Integration: https://ibm.co/2naimDE`,
    fav:true,
    replyCount:0,
  
  },
]

export const URLRegex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
export const MentionRegex = new RegExp(/\B@\w+/g);
export const SharpRegex = new RegExp(/\B#\w+/g);


export const fieldsList = [
  {
      title:'Exchange',
      children:[
          {title:'Marketing',},
          {title:'Business Franchises'},
          {title:'Affiliate',},
          {title:'Shopping',},
      ]
  },
  {title:'Science', children:[
      {title:'Chemistry'},
      {title:'Biology'},
      {title:'Physics'},
      {title:'Mathematics'},
      {title:'Geometry'},
      {title:'Geography'},
  ]},

  {title:'Technology', children:[
      {title:'Engineering'},
  ]},
  {title:'Economy', children:[]},
  {title:'Finance',children:[]},
  {title:'Cyber Security',children:[
      {title:'Pentest'},
      {title:'Bug Bounty'},
      {title:'Debugging'},
      {title:'Forensics'},
      {title:'Network and infrastructure security'},
      {title:'Network security'},
      {title:'Android Malware'},
      {title:'Firewall'},
  ]},
  {title:'Manufacturing',children:[]},
  {title:'Educational Services',children:[]},
  {title:'Healthcare and Social Assistance',children:[]},
  {title:'Agriculture',children:[]},
  {title:'Computing', children:[
      {title:'Mobile',},
      {title:'Web',},
      {title:'Xbox',},
      {title:'Desktop',},
      {title:'Embedded',},
      {title:'VR/AR/XR/MR/CR/SR'},
  ]},
] 


export const userMock = {
  avatar:'/faces/1.png',
  name:'Pentester test',
  slug:'pentester-test',
  first:'Tester',
  last:'Test',
  email:'test@test.com',
  bio:'Technical Director',
  role:'admin',
  field:fieldsList,
}

export const ProjectListData = [
  { title:'VoIP, instant messaging and digital distribution', desc:'Web Application',   email:'eileen_h@hotmail.com', role:'Member', date:'03/02/2020', status:'Active' ,  },
  { title:'IOS App Development', desc:'Backend Services', email:'ronnie_vergas@infotech.io', role:'Member', date:'03/18/2020', status:'Blocked' ,  },
  { title:'Octonine POS', desc:'Frontend Web Application',  email:'cookie_lukie@hotmail.com', role:'Member', date:'03/18/2020', status:'Blocked' ,  },
  { title:'Apriorit Driver Development', desc:'Mobile Application', email:'joyce991@infotech.io', role:'Member', date:'03/18/2020', status:'Blocked' ,  },
  { title:'Finance Reviewer APP', desc:'Web Backend Application',  email:'samanthaphil@infotech.io', role:'Member', date:'03/18/2020', status:'Blocked' ,  },
  { title:'Freefly alta 8', desc:'Mobile Services',  email:'taratarara@imaze.edu.du', role:'Member', date:'03/18/2020', status:'Blocked' ,  },
  { title:'Mavic DJI Pro', desc:'Frontend Web Application',  email:'iamfred@imaze.infotech.io', role:'Member', date:'03/18/2020', status:'Blocked' ,  },
  { title:'Wind Chill App', desc:'', email:'', role:'Admin', date:'03/27/2020', status:'Blocked' ,  },
  {  title:'Zaxe 3D Printing', desc:'',  email:'carolyn_h@gmail.com', role:'Member', date:'03/18/2020', status:'Blocked' , },
  {  title:'Edelkrone® SliderPlus', desc:'',  email:'brittany1134@gmail.com', role:'Member', date:'03/18/2020', status:'Blocked' , },
]


export const OrderListData = [
  {
      "id": "#5331",
      "name": "Eileen Horton",
      "image": "/img/avatars/thumb-1.jpg",
      "date": 1573430400,
      "amount": 677,
      "paymentStatus": "Paid",
      "orderStatus": "Ready"
  },
  {
      "id": "#5328",
      "name": "Terrance Moreno",
      "image": "/img/avatars/thumb-2.jpg",
      "date": 1572393600,
      "amount": 1328.35,
      "paymentStatus": "Paid",
      "orderStatus": "Ready"
  },
  {
      "id": "#5321",
      "name": "Ron Vargas",
      "image": "/img/avatars/thumb-3.jpg",
      "date": 1593949805,
      "amount": 629,
      "paymentStatus": "Paid",
      "orderStatus": "Shipped"
  },
  {
      "id": "#5287",
      "name": "Luke Cook",
      "image": "/img/avatars/thumb-4.jpg",
      "date": 1579132800,
      "amount": 25.9,
      "paymentStatus": "Paid",
      "orderStatus": "Shipped"
  },
  {
      "id": "#5351",
      "name": "Joyce Freeman",
      "image": "/img/avatars/thumb-5.jpg",
      "date": 1591286400,
      "amount": 817.5,
      "paymentStatus": "Pending",
      "orderStatus": "Ready"
  },
  {
      "id": "#5285",
      "name": "Samantha Phillips",
      "image": "/img/avatars/thumb-6.jpg",
      "date": 1591459200,
      "amount": 47.9,
      "paymentStatus": "Paid",
      "orderStatus": "Shipped"
  },
  {
      "id": "#5290",
      "name": "Tara Fletcher",
      "image": "/img/avatars/thumb-7.jpg",
      "date": 1591459200,
      "amount": 300,
      "paymentStatus": "Pending",
      "orderStatus": "Ready"
  },
  {
      "id": "#5337",
      "name": "Frederick Adams",
      "image": "/img/avatars/thumb-8.jpg",
      "date": 1589644800,
      "amount": 730,
      "paymentStatus": "Expired",
      "orderStatus": "Ready"
  },
  {
      "id": "#5297",
      "name": "Carolyn Hanson",
      "image": "/img/avatars/thumb-9.jpg",
      "date": 1590508800,
      "amount": 827,
      "paymentStatus": "Paid",
      "orderStatus": "Shipped"
  },
  {
      "id": "#5298",
      "name": "Brittany Hale",
      "image": "/img/avatars/thumb-10.jpg",
      "date": 1590336000,
      "amount": 1866,
      "paymentStatus": "Paid",
      "orderStatus": "Shipped"
  },
  {
      "id": "#5301",
      "name": "Lloyd Obrien",
      "image": "/img/avatars/thumb-11.jpg",
      "date": 1593532800,
      "amount": 269,
      "paymentStatus": "Paid",
      "orderStatus": "Shipped"
  },
  {
      "id": "#5304",
      "name": "Gabriella May",
      "image": "/img/avatars/thumb-12.jpg",
      "date": 1593619200,
      "amount": 180,
      "paymentStatus": "Paid",
      "orderStatus": "Shipped"
  }
]


export const products = [
  {
    "id": 12,
    "name": "Blue Jacket",
    "image": "/img/thumbs/thumb-7.jpg",
    "category": "Cloths",
    "price": 77,
    "stock": 46
  },
  {
    "id": 13,
    "name": "White Backpack",
    "image": "/img/thumbs/thumb-8.jpg",
    "category": "Bags",
    "price": 139,
    "stock": 28
  },
  {
    "id": 14,
    "name": "Black Sneaker",
    "image": "/img/thumbs/thumb-9.jpg",
    "category": "Shoes",
    "price": 99,
    "stock": 52
  },
  {
    "id": 15,
    "name": "Gray Hoodies",
    "image": "/img/thumbs/thumb-10.jpg",
    "category": "Cloths",
    "price": 68,
    "stock": 92
  },
  {
    "id": 16,
    "name": "Blue Backpack",
    "image": "/img/thumbs/thumb-11.jpg",
    "category": "Bags",
    "price": 70,
    "stock": 0
  },
  {
    "id": 17,
    "name": "White Sneaker",
    "image": "/img/thumbs/thumb-12.jpg",
    "category": "Shoes",
    "price": 29,
    "stock": 18
  },
  {
    "id": 18,
    "name": "Strip Analog Watch",
    "image": "/img/thumbs/thumb-13.jpg",
    "category": "Watches",
    "price": 389,
    "stock": 7
  },
  {
    "id": 19,
    "name": "Red Beat Headphone",
    "image": "/img/thumbs/thumb-14.jpg",
    "category": "Devices",
    "price": 86,
    "stock": 0
  },
  {
    "id": 20,
    "name": "Apple Macbook Pro",
    "image": "/img/thumbs/thumb-15.jpg",
    "category": "Devices",
    "price": 1599,
    "stock": 27
  },
  {
    "id": 21,
    "name": "Bronze Analog Watch",
    "image": "/img/thumbs/thumb-16.jpg",
    "category": "Watches",
    "price": 729,
    "stock": 6
  },
  {
    "id": 22,
    "name": "Apple Watch",
    "image": "/img/thumbs/thumb-17.jpg",
    "category": "Devices",
    "price": 388,
    "stock": 51
  },
  {
    "id": 23,
    "name": "Antique Analog Watch",
    "image": "/img/thumbs/thumb-18.jpg",
    "category": "Watches",
    "price": 599,
    "stock": 30
  }
]



export const fakePosts = [
  {
      "_id" : "5ff254c9bc584eb3a9b68e68",
      "title" : "📦 A set of high-quality React components out of the box. Lorem ipsum dolor sit amet consectur",
      "slug" : "et",
      "owner" : "5ff2737cf467a82dc8a7c67f",
      "image" : "http://placehold.it/32x32",
      "category" : "Gıda",
      "team" : [ 
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Tester",
              "last" : "Test",
              "name" : "tester",
              "slug" : "tester",
              "avatar" : "/faces/1.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          }, 
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Pentester",
              "last" : "Test",
              "name" : "pentester",
              "slug" : "tester",
              "avatar" : "/faces/2.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          }, 
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/3.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          }
      ],
      "images" : [ 
          {"path" : "http://placehold.it/32x32"}, 
          {"path" : "http://placehold.it/32x32"}, 
          {"path" : "http://placehold.it/32x32"}, 
          {"path" : "http://placehold.it/32x32"}, 
          {"path" : "http://placehold.it/32x32"}
      ],
      "desc" : "Occaecat ullamco aliquip veniam culpa. In consectetur do cupidatat sunt nisi incididunt Lorem tempor incididunt occaecat. Sit nulla eiusmod tempor magna duis et proident dolor elit enim. Minim excepteur amet sunt minim eiusmod. Exercitation occaecat laborum non culpa anim consequat fugiat ut. Est mollit id elit id dolor duis ea anim aliqua irure. Cillum commodo aute nostrud cillum est ea nulla non.\r\n",
      "text" : "Consectetur nulla sit cupidatat est occaecat et proident sint elit sunt incididunt id amet. Culpa reprehenderit quis sint pariatur sit dolore deserunt pariatur deserunt ea nulla mollit voluptate. Ullamco culpa adipisicing consequat exercitation aute incididunt proident ad est magna ea exercitation. Nisi voluptate reprehenderit ea nisi labore aliqua anim sit in minim laboris qui irure.\r\nAliquip quis sint exercitation consectetur consectetur deserunt id amet qui. Amet ut adipisicing dolore amet tempor aliquip ut id adipisicing do veniam. Aliqua eu ut dolor esse fugiat laborum culpa minim duis do. Magna velit nisi officia eiusmod ad cillum sit ea consectetur. Reprehenderit eu anim deserunt excepteur aute qui id irure deserunt.\r\nCulpa ipsum nostrud enim labore id ut aute velit aute exercitation ullamco reprehenderit consectetur. Ut occaecat voluptate magna id irure ea elit ipsum ut pariatur fugiat labore dolore cupidatat. Cillum ullamco ullamco voluptate Lorem elit sit proident aliqua voluptate duis magna. Ea culpa irure labore ullamco.\r\nNulla veniam ad reprehenderit deserunt irure in nisi pariatur sit amet enim. Dolore laboris exercitation amet officia qui deserunt. Ea tempor enim ad duis proident reprehenderit reprehenderit sunt. Ullamco sunt veniam dolore ut consequat incididunt.\r\n",
      "email" : "riggsbenjamin@bunga.com",
      "phone" : "+1 (957) 432-3581",
      "address" : "214 Autumn Avenue, Loomis, Maryland, 430",
      "city" : [ 
          {
              "_id" : "5ff254bac131dd712d71c367",
              "name" : "Northchase"
          }, 
          {
              "_id" : "5ff254ba40a578485227cbbe",
              "name" : "Vienna"
          }, 
          {
              "_id" : "5ff254ba642ad4b02595f1b4",
              "name" : "Summerset"
          }, 
          {
              "_id" : "5ff254ba87fa6f362ea3d65d",
              "name" : "Bend"
          }, 
          {
              "_id" : "5ff254bae83abd45efde922a",
              "name" : "Shelby"
          }
      ],
      "country" : [ 
          {
              "_id" : "5ff254ba95fe57023bf9dc65",
              "name" : "Saint Kitts and Nevis"
          }, 
          {
              "_id" : "5ff254ba45995dc37c946c05",
              "name" : "Virgin Islands (British)"
          }, 
          {
              "_id" : "5ff254ba3863bafc269a2986",
              "name" : "Vatican City State (Holy See)"
          }, 
          {
              "_id" : "5ff254ba24339a741c810717",
              "name" : "Romania"
          }, 
          {
              "_id" : "5ff254bad2e8911afc4bc119",
              "name" : "Ireland"
          }
      ],
      "tags" : [ 
          "consectetur", 
          "veniam", 
          "ullamco", 
          "in", 
          "id", 
          "minim", 
          "nulla"
      ],
      "created_at" : "2014-03-14T08:46:09 -02:00",
      "progression" : 90.0,
      "user" : "606189100b9e6c2810503d9f",
      "comment_count" : 0,
      "comments" : [],
      "date" : "2021-04-06T12:52:12.474Z",
      "status" : "pending",
      "team_count" : 0,
      "type" : "project"
  },
  {
      "_id" : "5ff254c9bc584eb3a9b68e69",
      "title" : "Lorem ipsum dolor sit amet consectur",
      "slug" : "cupidatat",
      "image" : "http://placehold.it/32x32",
      "category" : "Finance",
      "images" : [ 
          {"path" : "http://placehold.it/32x32"}, 
          {"path" : "http://placehold.it/32x32"}, 
          {"path" : "http://placehold.it/32x32"}, 
          {"path" : "http://placehold.it/32x32"}, 
          {"path" : "http://placehold.it/32x32"}
      ],
      "desc" : "Consequat labore culpa exercitation tempor laboris reprehenderit officia est non eiusmod id veniam. Consectetur est cillum aliquip laboris sint officia dolor magna ex laboris eu do nostrud nostrud. Fugiat in ipsum irure deserunt ipsum non laboris nostrud. Do labore pariatur ipsum quis enim labore enim amet et commodo laboris id. Deserunt do veniam labore fugiat reprehenderit fugiat excepteur culpa enim id irure aliqua ad. Labore do occaecat aute enim.\r\n",
      "text" : "Deserunt mollit aliquip est labore esse elit duis ea in proident. Et commodo nostrud adipisicing nisi ea sit incididunt fugiat occaecat nulla nulla. Laborum laborum consequat pariatur nisi excepteur tempor cillum adipisicing occaecat occaecat occaecat labore aliqua adipisicing. Qui Lorem sunt irure nulla consectetur dolor. Labore dolore est sit ullamco dolor.\r\nProident pariatur dolore aliquip esse. Adipisicing cupidatat in dolore anim sunt eu quis cupidatat est anim incididunt ullamco. Minim laborum labore culpa enim anim dolor ipsum labore aliqua magna adipisicing. Enim proident cillum aute ad culpa est consequat aliquip officia dolor magna voluptate sint.\r\nUt ad qui adipisicing elit id consectetur sunt nulla do sunt eiusmod laborum. Voluptate consequat minim consequat amet esse nostrud dolore cupidatat labore deserunt ut eu sit nulla. Deserunt non commodo minim labore dolor nostrud mollit cillum fugiat. Laborum laboris irure proident laboris magna enim adipisicing do deserunt laborum. Consequat adipisicing eiusmod exercitation in est in culpa id laboris dolor consequat velit.\r\nProident et deserunt esse excepteur. Esse esse ut aliqua ipsum labore proident ullamco enim laborum Lorem officia sit sit. Nulla aute cupidatat laborum sit labore ad occaecat irure commodo ex Lorem labore et sunt. Qui ipsum aliqua eiusmod quis ullamco nisi minim reprehenderit dolor. Do eiusmod elit voluptate veniam veniam mollit aliqua aliqua duis aliquip consectetur nisi mollit. Reprehenderit sunt labore labore enim elit in proident adipisicing incididunt. In officia proident incididunt incididunt pariatur qui sint mollit mollit.\r\n",
      "team" : [ 
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Tester",
              "last" : "Test",
              "name" : "tester",
              "slug" : "tester",
              "avatar" : "/faces/1.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          }, 
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Pentester",
              "last" : "Test",
              "name" : "pentester",
              "slug" : "tester",
              "avatar" : "/faces/2.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          }, 
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/3.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          },
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/4.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          },
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/5.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          }
      ],
      "email" : "roachhuffman@bunga.com",
      "phone" : "+1 (893) 554-2910",
      "address" : "276 Atkins Avenue, Roy, Virginia, 6703",
      "city" : [ 
          {
              "_id" : "5ff254ba6d7dfd6dcd94349b",
              "name" : "Fontanelle"
          }, 
          {
              "_id" : "5ff254baea9b956d02865da5",
              "name" : "Woodburn"
          }, 
          {
              "_id" : "5ff254ba87ade49b0b67eaab",
              "name" : "Bellfountain"
          }, 
          {
              "_id" : "5ff254ba42452448fabad6b5",
              "name" : "Coaldale"
          }, 
          {
              "_id" : "5ff254ba8c82149b34523b6b",
              "name" : "Spokane"
          }
      ],
      "country" : [ 
          {
              "_id" : "5ff254ba83c5c9b6ad79dfb2",
              "name" : "Jordan"
          }, 
          {
              "_id" : "5ff254ba35632f697e01167e",
              "name" : "Dominican Republic"
          }, 
          {
              "_id" : "5ff254ba852ead6c2e96b83c",
              "name" : "Bangladesh"
          }, 
          {
              "_id" : "5ff254ba0f1ea00c0bda6e6a",
              "name" : "Bahamas"
          }, 
          {
              "_id" : "5ff254ba3f84a945fcf7e585",
              "name" : "Christmas Island"
          }
      ],
      "tags" : [ 
          "velit", 
          "qui", 
          "sunt", 
          "velit", 
          "anim", 
          "aliqua", 
          "ex"
      ],
      "created_at" : "2015-05-28T01:39:36 -03:00",
      "owner" : "5ff2737cf467a82dc8a7c67f",
      "progression" : 60.0,
      "user" : "606189100b9e6c2810503d9f",
      "comment_count" : 0,
      "comments" : [],
      "date" : "2021-04-06T12:52:43.531Z",
      "status" : "pending",
      "team_count" : 0,
      "type" : "project"
  },
  {
      "_id" : "5ff254c9bc584eb3a9b68e6a",
      "title" : "🎨 Powerful theme customization in every detail.",
      "slug" : "nisi",
      "image" : "http://placehold.it/32x32",
      "category" : "Finans",
      "images" : [ 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }
      ],
      "team" : [ 
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Tester",
              "last" : "Test",
              "name" : "tester",
              "slug" : "tester",
              "avatar" : "/faces/6.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          }, 
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Pentester",
              "last" : "Test",
              "name" : "pentester",
              "slug" : "tester",
              "avatar" : "/faces/7.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          }, 
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/8.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          },
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/9.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          },
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/10.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          }
      ],
      "desc" : "Est irure aliqua enim ipsum. Aliquip ea consectetur irure minim ut in anim duis nulla reprehenderit non non velit. Lorem duis non excepteur fugiat sunt ad ipsum tempor labore nostrud incididunt officia amet consectetur. Ut nostrud eiusmod ad Lorem commodo irure nostrud eiusmod qui voluptate elit commodo consectetur amet. Elit do aliqua ipsum eiusmod duis adipisicing exercitation laboris irure labore.\r\n",
      "text" : "Ad enim mollit pariatur occaecat. Nulla labore reprehenderit ea sit. Ex irure tempor aliquip laborum duis Lorem consectetur.\r\nElit minim aute non cillum adipisicing elit adipisicing sit enim. Deserunt proident ipsum quis voluptate proident enim irure elit nulla dolore nostrud veniam mollit esse. Lorem ullamco ipsum ad est consequat sint ullamco qui irure. Nostrud minim reprehenderit velit sunt minim voluptate Lorem veniam reprehenderit nostrud consequat. Adipisicing dolore sint pariatur deserunt qui pariatur aute pariatur. Do nulla ipsum laborum tempor ipsum laboris sunt voluptate fugiat cupidatat cillum cupidatat eu. Deserunt duis veniam tempor non reprehenderit occaecat.\r\nNisi aliquip magna non nisi excepteur minim. Mollit et quis id velit pariatur magna. Ad qui aute pariatur enim sint reprehenderit duis Lorem Lorem. Nisi labore tempor nulla cupidatat est fugiat ad et deserunt esse cupidatat consectetur reprehenderit. Officia pariatur cupidatat id mollit quis culpa in cillum fugiat deserunt proident.\r\nNon dolor reprehenderit sint ipsum consequat eiusmod anim Lorem Lorem ullamco voluptate fugiat cillum. Dolore culpa proident ipsum ipsum. Minim quis ipsum anim nulla minim laboris consectetur est ea.\r\n",
      "email" : "pachecopugh@bunga.com",
      "phone" : "+1 (920) 469-3060",
      "address" : "198 Story Street, Strykersville, Florida, 8109",
      "city" : [ 
          {
              "_id" : "5ff254ba49180f7e5f06175f",
              "name" : "Troy"
          }, 
          {
              "_id" : "5ff254bab0309a7695e8d3aa",
              "name" : "Matheny"
          }, 
          {
              "_id" : "5ff254bad1cf8834d803ca51",
              "name" : "Babb"
          }, 
          {
              "_id" : "5ff254bac3f583ba66e9ee4f",
              "name" : "Umapine"
          }, 
          {
              "_id" : "5ff254ba6ff5686fc73e1bab",
              "name" : "Ripley"
          }
      ],
      "country" : [ 
          {
              "_id" : "5ff254ba4ef8db02a00b8923",
              "name" : "Slovak Republic"
          }, 
          {
              "_id" : "5ff254baaba37b4d7bbf90af",
              "name" : "Morocco"
          }, 
          {
              "_id" : "5ff254ba3c77de94f315e96a",
              "name" : "Tokelau"
          }, 
          {
              "_id" : "5ff254ba36ccf2c7fc15e138",
              "name" : "Latvia"
          }, 
          {
              "_id" : "5ff254bab4d53a61eb9e1da7",
              "name" : "Guam"
          }
      ],
      "tags" : [ 
          "proident", 
          "Lorem", 
          "exercitation", 
          "ea", 
          "anim", 
          "officia", 
          "Lorem"
      ],
      "created_at" : "2019-12-17T10:46:10 -03:00",
      "owner" : "5ff2737cf467a82dc8a7c67f",
      "progression" : 70.0,
      "user" : "606189100b9e6c2810503d9f"
  },
  {
      "_id" : "5ff254c9bc584eb3a9b68e6b",
      "title" : "⚙️ Whole package of design resources and development tools.",
      "slug" : "minim",
      "image" : "http://placehold.it/32x32",
      "category" : "Ekonomi",
      "images" : [ 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }
      ],
      "team" : [ 
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Tester",
              "last" : "Test",
              "name" : "tester",
              "slug" : "tester",
              "avatar" : "/faces/11.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          }, 
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Pentester",
              "last" : "Test",
              "name" : "pentester",
              "slug" : "tester",
              "avatar" : "/faces/12.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          }, 
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/13.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          },
       
      ],
      "desc" : "Sint cillum nisi qui consectetur cillum magna cupidatat occaecat amet. Id id velit laborum incididunt velit sunt consequat. Incididunt laboris velit dolore aliquip incididunt irure sit qui exercitation tempor culpa excepteur elit. Velit occaecat minim nisi aute irure ea quis fugiat eiusmod. Exercitation deserunt sunt mollit cupidatat est excepteur aliquip aute. Do irure irure consequat pariatur Lorem culpa reprehenderit.\r\n",
      "text" : "Officia incididunt cupidatat esse esse Lorem ut ea. Lorem exercitation qui eiusmod excepteur incididunt ad non exercitation. Laborum tempor ea aute ea duis occaecat minim occaecat nulla eiusmod irure. Ea ea sint consectetur in veniam laborum eu tempor Lorem dolore. Laborum consectetur quis in occaecat duis labore consequat Lorem. Aliqua et tempor dolor id ea cupidatat sint veniam culpa.\r\nSunt ipsum commodo minim ipsum magna occaecat quis cupidatat eiusmod excepteur commodo duis. Esse ex tempor in sunt ea dolore. Tempor veniam excepteur cillum deserunt ad cillum duis ut amet ad elit qui duis.\r\nLorem minim reprehenderit dolore magna laborum duis sunt excepteur proident officia. Cillum eu pariatur ad enim occaecat excepteur nisi proident nulla voluptate eu. Sunt nisi exercitation aliqua duis culpa incididunt mollit non. Dolor quis ut voluptate aliquip cupidatat laboris occaecat voluptate enim sit qui. Ad minim dolore eiusmod aliqua mollit velit magna enim irure commodo ipsum voluptate ipsum consectetur. Sunt eiusmod irure aute non dolor exercitation. In adipisicing ea sunt enim deserunt culpa veniam ad fugiat nostrud.\r\nAdipisicing quis pariatur sit aliquip in. Qui quis aliqua exercitation sunt non esse dolor. Exercitation consequat Lorem voluptate amet incididunt anim amet sit nisi nostrud adipisicing occaecat. Ad eiusmod culpa culpa aliqua esse.\r\n",
      "email" : "petersonmontgomery@bunga.com",
      "phone" : "+1 (970) 434-3079",
      "address" : "311 Homecrest Avenue, Lowgap, Hawaii, 5299",
      "city" : [ 
          {
              "_id" : "5ff254ba6a369661bb3210df",
              "name" : "Cumberland"
          }, 
          {
              "_id" : "5ff254baee089e5f49606721",
              "name" : "Wadsworth"
          }, 
          {
              "_id" : "5ff254ba48bed9133eea1b76",
              "name" : "Dalton"
          }, 
          {
              "_id" : "5ff254ba57f595c95af23533",
              "name" : "Fedora"
          }, 
          {
              "_id" : "5ff254bad020327055427ef5",
              "name" : "Osage"
          }
      ],
      "country" : [ 
          {
              "_id" : "5ff254bac8956e2e3693cb76",
              "name" : "New Zealand"
          }, 
          {
              "_id" : "5ff254ba0b886a9196d0c59c",
              "name" : "Chad"
          }, 
          {
              "_id" : "5ff254bad87ad32ec526aefc",
              "name" : "Sri Lanka"
          }, 
          {
              "_id" : "5ff254ba3f5eb272c535bb43",
              "name" : "Iceland"
          }, 
          {
              "_id" : "5ff254ba66686b63dca2632f",
              "name" : "Andorra"
          }
      ],
      "tags" : [ 
          "ut", 
          "magna", 
          "officia", 
          "dolor", 
          "minim", 
          "eiusmod", 
          "cupidatat"
      ],
      "created_at" : "2021-01-01T11:36:58 -03:00",
      "owner" : "5ff2737cf467a82dc8a7c67f",
      "progression" : 30.0,
      "user" : "606189100b9e6c2810503d9f"
  },
  {
      "_id" : "5ff254c9bc584eb3a9b68e6c",
      "title" : "Zaxe 3D Printing & Wind Chill App",
      "slug" : "irure",
      "image" : "http://placehold.it/32x32",
      "category" : "Sağlık",
      "images" : [ 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }
      ],
      "team":[
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/15.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          },
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/16.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          },
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/17.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          },
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/18.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          },
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/19.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          },
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/20.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          },
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/21.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          },
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/22.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          },
          {
              "status" : "requested",
              "_id" :"606c597caefce22b4ca4508b",
              "first" : "Testing",
              "last" : "Test",
              "name" : "testing",
              "slug" : "tester",
              "avatar" : "/faces/23.png",
              "created_at" : "2021-04-06T12:52:12.475Z",
              "updated_at" : "2021-04-06T12:52:12.475Z"
          },
      ],
      "desc" : "Consequat culpa ut culpa voluptate culpa esse incididunt non esse et esse. Irure nisi ea exercitation aute ad proident. Laboris sunt cillum ad ad magna deserunt velit pariatur. Dolore nostrud cupidatat voluptate in Lorem. Officia voluptate esse dolor eu culpa nisi. Voluptate eu laboris id sunt adipisicing Lorem non aute commodo officia ut. Ea eu ea esse mollit id dolore dolore mollit deserunt magna do veniam voluptate.\r\n",
      "text" : "Commodo nulla exercitation proident minim irure anim. Veniam magna nostrud culpa aute enim. Cupidatat duis fugiat mollit dolore aute ut mollit eu labore dolore duis in aliqua ipsum. Cupidatat adipisicing excepteur magna deserunt cillum elit exercitation nisi minim. Reprehenderit sint qui reprehenderit tempor exercitation sit sit proident aliqua consequat cupidatat. Mollit aliqua eu reprehenderit consectetur nulla laborum et.\r\nEt excepteur aliquip quis irure esse aliquip non culpa et ut aliquip id ullamco. Esse esse eiusmod pariatur id cillum. Eiusmod deserunt Lorem eu aute ullamco. Ullamco elit cupidatat voluptate duis Lorem tempor. Eu labore Lorem cillum nulla velit dolore. Ea dolore adipisicing pariatur eiusmod nisi aute aliquip eiusmod Lorem laborum amet eu dolor.\r\nOfficia est commodo cupidatat aute deserunt est id duis anim id. Ut id velit culpa incididunt duis laboris reprehenderit ad id magna veniam in dolore id. Consectetur eu quis occaecat tempor esse excepteur magna.\r\nDo culpa tempor irure pariatur. Adipisicing sint deserunt officia tempor laboris aliqua et enim adipisicing. Aliqua aute exercitation aliqua culpa non laboris tempor. Ea est laboris labore deserunt consequat esse in magna. Fugiat labore tempor labore laborum fugiat irure sint. Irure minim et esse culpa tempor ut minim quis enim eiusmod magna. Ex fugiat amet non consectetur non mollit laborum enim occaecat.\r\n",
      "email" : "patekirkland@bunga.com",
      "phone" : "+1 (844) 473-2012",
      "address" : "250 Kingston Avenue, Cowiche, Idaho, 7210",
      "city" : [ 
          {
              "_id" : "5ff254ba6b3f4e3a21c4bbff",
              "name" : "Mathews"
          }, 
          {
              "_id" : "5ff254ba50c0a858fceeca50",
              "name" : "Hilltop"
          }, 
          {
              "_id" : "5ff254ba981b347ad27d30a7",
              "name" : "Smeltertown"
          }, 
          {
              "_id" : "5ff254bafe22209a9633d33e",
              "name" : "Bowie"
          }, 
          {
              "_id" : "5ff254ba27d093d7916ff72d",
              "name" : "Longbranch"
          }
      ],
      "country" : [ 
          {
              "_id" : "5ff254ba124d7648a684d27c",
              "name" : "Burkina Faso"
          }, 
          {
              "_id" : "5ff254bafebb6c6a0c3c2506",
              "name" : "Cook Islands"
          }, 
          {
              "_id" : "5ff254bafe621791de6a9266",
              "name" : "France, Metropolitan"
          }, 
          {
              "_id" : "5ff254ba6d7c01f8071d24ee",
              "name" : "Cyprus"
          }, 
          {
              "_id" : "5ff254ba87169efd385e5244",
              "name" : "Tonga"
          }
      ],
      "tags" : [ 
          "esse", 
          "amet", 
          "anim", 
          "in", 
          "enim", 
          "elit", 
          "consequat"
      ],
      "created_at" : "2014-03-27T06:45:54 -02:00",
      "owner" : "5ff2737cf467a82dc8a7c67f",
      "progression" : 10.0,
      "user" : "606189100b9e6c2810503d9f",
      "comment_count" : 0,
      "comments" : [],
      "date" : "2021-04-06T12:52:49.488Z",
      "status" : "pending",
      "team_count" : 0,
      "type" : "project"
  },
  {
      "_id" : "5ff254c9bc584eb3a9b68e6d",
      "title" : "to show where the warning was created",
      "slug" : "sit",
      "image" : "http://placehold.it/32x32",
      "category" : "Beyaz Eşya",
      "images" : [ 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }
      ],
      "desc" : "Laborum duis laboris ad est ea minim. Irure nisi quis minim et ullamco nulla et aliqua eu sunt esse. Magna mollit Lorem consectetur laborum do. Eiusmod ullamco deserunt irure tempor velit id. Laboris ex enim laboris consequat nostrud enim quis.\r\n",
      "text" : "Aliquip eiusmod qui et ut ex. Quis voluptate deserunt tempor et consectetur. Anim sit nisi incididunt excepteur cillum. Reprehenderit laboris eu tempor est irure ut ut. Aliquip in consectetur enim proident dolore cillum ullamco occaecat duis irure eu occaecat nisi.\r\nQui laborum occaecat excepteur duis officia. Ut occaecat ullamco est sit id exercitation nisi. Veniam proident quis tempor qui occaecat aliqua.\r\nQuis in do labore elit do anim. Laboris aute esse commodo commodo. Fugiat occaecat fugiat labore ut. Eu qui mollit reprehenderit laborum et duis. Duis amet amet id anim enim. Adipisicing occaecat est esse ipsum aute sunt sit incididunt cupidatat.\r\nExcepteur quis in mollit velit commodo tempor occaecat nulla voluptate elit adipisicing nisi. Id officia culpa in ea anim laborum anim mollit sint commodo veniam incididunt. Et pariatur mollit consectetur nostrud. In veniam consectetur ipsum amet ex sint proident laboris in irure duis. Deserunt consectetur cillum proident sunt anim nulla non ex dolor in. Consectetur officia consequat labore id magna qui. Reprehenderit irure elit aliqua eiusmod cupidatat velit officia.\r\n",
      "email" : "johnniehull@bunga.com",
      "phone" : "+1 (945) 432-3544",
      "address" : "774 Lenox Road, Hayden, Northern Mariana Islands, 4789",
      "city" : [ 
          {
              "_id" : "5ff254ba9793a42b286e870e",
              "name" : "Accoville"
          }, 
          {
              "_id" : "5ff254ba99b07eff25a3a08d",
              "name" : "Fruitdale"
          }, 
          {
              "_id" : "5ff254ba73d86ed90e2e07e7",
              "name" : "Ada"
          }, 
          {
              "_id" : "5ff254baa5d8c522e19ac4f3",
              "name" : "Noxen"
          }, 
          {
              "_id" : "5ff254ba65bbb16b4c8d1962",
              "name" : "Macdona"
          }
      ],
      "country" : [ 
          {
              "_id" : "5ff254ba633a40b10d5f73aa",
              "name" : "Jamaica"
          }, 
          {
              "_id" : "5ff254babe2d8190e29ff8a6",
              "name" : "El Salvador"
          }, 
          {
              "_id" : "5ff254bad05b1f42e6e0aff3",
              "name" : "Korea (South)"
          }, 
          {
              "_id" : "5ff254ba65365a1ad54e6813",
              "name" : "Rwanda"
          }, 
          {
              "_id" : "5ff254ba373465e39edaa666",
              "name" : "S. Georgia and S. Sandwich Isls."
          }
      ],
      "tags" : [ 
          "id", 
          "magna", 
          "in", 
          "sint", 
          "laborum", 
          "aute", 
          "do"
      ],
      "created_at" : "2020-05-06T03:09:44 -03:00",
      "owner" : "5ff2737cf467a82dc8a7c67f",
      "progression" : 20.0,
      "user" : "606189100b9e6c2810503d9f"
  },
  {
      "_id" : "5ff254c9bc584eb3a9b68e6e",
      "title" : "Buy 10 Imac 5 MacbookPro and 2 Iphone15 Edelkrone® SliderPlus",
      "slug" : "voluptate",
      "image" : "http://placehold.it/32x32",
      "category" : "Exchange",
      "images" : [ 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }
      ],
      "desc" : "Velit ex sunt proident officia eiusmod cupidatat voluptate exercitation. Veniam eiusmod ea eiusmod Lorem ipsum quis labore fugiat occaecat in duis tempor. Velit sit incididunt et laborum nisi. Pariatur non ex officia adipisicing enim elit dolore. Lorem qui consequat aliquip id laboris nulla. Magna magna id esse officia quis fugiat anim nulla aliquip. Culpa non culpa adipisicing minim magna veniam quis.\r\n",
      "text" : "Laboris sunt esse elit eu. Fugiat non occaecat elit qui sit aliquip aute nisi anim incididunt. Reprehenderit aliquip non adipisicing laboris irure occaecat.\r\nVoluptate ea ut consequat cupidatat sint eiusmod voluptate voluptate. Quis minim ea deserunt cupidatat aute ea eiusmod nostrud ut veniam. Nisi ipsum enim anim commodo sunt. Ad officia sit ut sunt mollit eiusmod in sit enim deserunt excepteur Lorem.\r\nElit in adipisicing adipisicing officia voluptate laborum adipisicing aute reprehenderit sit enim laboris voluptate. Velit ea aute mollit eiusmod do ullamco pariatur ipsum ullamco ipsum excepteur culpa. In sit laboris fugiat cupidatat fugiat adipisicing occaecat aliquip anim nostrud sit. Dolor ut do magna commodo sint commodo aute voluptate pariatur.\r\nVoluptate ipsum anim nulla qui aliquip ullamco do esse esse sunt. Qui proident sit dolor fugiat commodo. Laboris ex ea veniam et nisi amet qui non consequat in. Duis incididunt culpa proident tempor Lorem labore ipsum qui. Elit et consequat ullamco incididunt. Est aliquip elit sit magna nostrud occaecat consectetur dolore ex incididunt. Sunt incididunt magna labore commodo ullamco id enim irure sunt veniam qui.\r\n",
      "email" : "franlancaster@bunga.com",
      "phone" : "+1 (935) 451-3516",
      "address" : "228 Carlton Avenue, Sultana, American Samoa, 2646",
      "city" : [ 
          {
              "_id" : "5ff254bae9759e942349a415",
              "name" : "Conway"
          }, 
          {
              "_id" : "5ff254bae562097d44d0a724",
              "name" : "Harleigh"
          }, 
          {
              "_id" : "5ff254bafa8881a85550c708",
              "name" : "Wollochet"
          }, 
          {
              "_id" : "5ff254ba4bdb70084835ef35",
              "name" : "Caberfae"
          }, 
          {
              "_id" : "5ff254ba52cc3d5e873ffe21",
              "name" : "Stouchsburg"
          }
      ],
      "country" : [ 
          {
              "_id" : "5ff254ba01b00c09040993e3",
              "name" : "British Indian Ocean Territory"
          }, 
          {
              "_id" : "5ff254badfaf05c3129df5f9",
              "name" : "Nicaragua"
          }, 
          {
              "_id" : "5ff254ba21f637333a8d2750",
              "name" : "East Timor"
          }, 
          {
              "_id" : "5ff254ba49f0e0aaf1e100d1",
              "name" : "Uruguay"
          }, 
          {
              "_id" : "5ff254ba7c6f7addb5a61d82",
              "name" : "Equatorial Guinea"
          }
      ],
      "tags" : [ 
          "id", 
          "do", 
          "magna", 
          "aliquip", 
          "tempor", 
          "amet", 
          "ut"
      ],
      "created_at" : "2014-10-18T10:50:53 -03:00",
      "owner" : "5ff2737cf467a82dc8a7c67f",
      "progression" : 40.0,
      "user" : "606189100b9e6c2810503d9f",
      "comment_count" : 0,
      "comments" : [],
      "date" : "2021-04-06T12:52:57.921Z",
      "status" : "pending",
      "team_count" : 0,
      "type" : "project"
  },
  {
      "_id" : "5ff254c9bc584eb3a9b68e6f",
      "title" : "VoIP, instant messaging and digital distribution",
      "slug" : "suru-iha-siha",
      "image" : "http://placehold.it/32x32",
      "category" : "Teknoloji",
      "images" : [ 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }, 
          {
              "path" : "http://placehold.it/32x32"
          }
      ],
      "desc" : "Velit ex sunt proident officia eiusmod cupidatat voluptate exercitation. Veniam eiusmod ea eiusmod Lorem ipsum quis labore fugiat occaecat in duis tempor. Velit sit incididunt et laborum nisi. Pariatur non ex officia adipisicing enim elit dolore. Lorem qui consequat aliquip id laboris nulla. Magna magna id esse officia quis fugiat anim nulla aliquip. Culpa non culpa adipisicing minim magna veniam quis.\r\n",
      "text" : "Laboris sunt esse elit eu. Fugiat non occaecat elit qui sit aliquip aute nisi anim incididunt. Reprehenderit aliquip non adipisicing laboris irure occaecat.\r\nVoluptate ea ut consequat cupidatat sint eiusmod voluptate voluptate. Quis minim ea deserunt cupidatat aute ea eiusmod nostrud ut veniam. Nisi ipsum enim anim commodo sunt. Ad officia sit ut sunt mollit eiusmod in sit enim deserunt excepteur Lorem.\r\nElit in adipisicing adipisicing officia voluptate laborum adipisicing aute reprehenderit sit enim laboris voluptate. Velit ea aute mollit eiusmod do ullamco pariatur ipsum ullamco ipsum excepteur culpa. In sit laboris fugiat cupidatat fugiat adipisicing occaecat aliquip anim nostrud sit. Dolor ut do magna commodo sint commodo aute voluptate pariatur.\r\nVoluptate ipsum anim nulla qui aliquip ullamco do esse esse sunt. Qui proident sit dolor fugiat commodo. Laboris ex ea veniam et nisi amet qui non consequat in. Duis incididunt culpa proident tempor Lorem labore ipsum qui. Elit et consequat ullamco incididunt. Est aliquip elit sit magna nostrud occaecat consectetur dolore ex incididunt. Sunt incididunt magna labore commodo ullamco id enim irure sunt veniam qui.\r\n",
     
      "email" : "franlancaster@bunga.com",
      "phone" : "+1 (935) 451-3516",
      "address" : "228 Carlton Avenue, Sultana, American Samoa, 2646",
      "city" : [ 
          {
              "_id" : "5ff254bae9759e942349a415",
              "name" : "Conway"
          }, 
          {
              "_id" : "5ff254bae562097d44d0a724",
              "name" : "Harleigh"
          }, 
          {
              "_id" : "5ff254bafa8881a85550c708",
              "name" : "Wollochet"
          }, 
          {
              "_id" : "5ff254ba4bdb70084835ef35",
              "name" : "Caberfae"
          }, 
          {
              "_id" : "5ff254ba52cc3d5e873ffe21",
              "name" : "Stouchsburg"
          }
      ],
      "country" : [ 
          {
              "_id" : "5ff254ba01b00c09040993e3",
              "name" : "British Indian Ocean Territory"
          }, 
          {
              "_id" : "5ff254badfaf05c3129df5f9",
              "name" : "Nicaragua"
          }, 
          {
              "_id" : "5ff254ba21f637333a8d2750",
              "name" : "East Timor"
          }, 
          {
              "_id" : "5ff254ba49f0e0aaf1e100d1",
              "name" : "Uruguay"
          }, 
          {
              "_id" : "5ff254ba7c6f7addb5a61d82",
              "name" : "Equatorial Guinea"
          }
      ],
      "tags" : [ 
          "id", 
          "do", 
          "magna", 
          "aliquip", 
          "tempor", 
          "amet", 
          "ut"
      ],
      "created_at" : "2014-10-18T10:50:53 -03:00",
      "owner" : "5ff2737cf467a82dc8a7c67f",
      "progression" : 40.0,
      "user" : "606189100b9e6c2810503d9f",
      "comment_count" : 0,
      "comments" : [],
      "date" : "2021-04-06T12:52:57.921Z",
      "status" : "pending",
      "team_count" : 0,
      "type" : "project"
  }
] 
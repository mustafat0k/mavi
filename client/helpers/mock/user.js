import { FiUser, FiPhone, FiPlus, FiMapPin, FiChevronDown, FiMessageCircle, FiThumbsUp, FiSearch, FiArrowRight } from 'react-icons/fi'


export const profiles = [
 { id:null, title: 'Mentor Girişimci', job:['pastaneler'], sector:['Gıda'], position:['Pasta Ustası'], city:['Konya'], desc:'Lorem ipsum dolor sit amet', },
 { id:null, title: 'Mentor Girişimci', job:['pastaneler'], sector:['Gıda'], position:['Pasta Ustası'], city:['Konya'], desc:'Lorem ipsum dolor sit amet', },
];

export const myprojects = [
    { title: 'Satılık nakliye aracı BMW Transporter e-ihracat', img: ['/faces/1.png', '/faces/3.png', '/faces/4.png', '/faces/5.png', '/faces/6.png', '/faces/7.png'] },
    { title: 'Belek antalya kiralık ofis', img: ['/faces/2.png', '/faces/8.png', '/faces/11.png', '/faces/10.png'] },
    //  { title: 'Yeni bir proje geliştiriyoruz', img: ['/faces/18.png', '/faces/17.png', '/faces/16.png'] },
    // { title: 'Satılık Havuzlu Villa Bahçeli ', img: ['/faces/19.png', '/faces/20.png'] },

]
export const requests = [
    { title: 'Adem Can', desc: 'C++ developer at Microsoft', img: '/faces/1.png' },
    { title: 'Öykün Yılmaz', desc: 'Freelance Graphics & UI Designer', img: '/faces/2.png' },
    { title: 'Marry Dore', desc: 'Designer & Illustrator', img: '/faces/3.png' },
    { title: 'Jane Dore', desc: 'Designer', img: '/faces/4.png' },
]

export const projects = [
    {title:"Project Design", where:'Netflix', place:'Shangai, CN', totalConnection:25, connections:['/projects/person6.png','/projects/person5.png','/projects/person4.png'], date:'10 gün önce'},
    {title:"Project Design", where:'Netflix', place:'Shangai, CN', totalConnection:67, connections:['/projects/person6.png','/projects/person5.png','/projects/person4.png'], date:'10 gün önce'},
]

export const users = [
    // { title: 'Web Geliştirici', desc: 'Turkcell & Türk Telekom', img: null, symbol: null, shortname: 'AC', type: null },
    // { title: '+90(505) 555 55 55', desc: null, img: null, symbol: <FiPhone />, shortname: null, type: null },
    // { title: 'test@test.com', desc: null, img: null, symbol: <FiUser />, shortname: null, type: null },
    // { title: 'Türkiye de yaşıyor', desc: null, img: null, symbol: <FiMapPin />, shortname: null, type: null },
    // { title: 'Arapça, İngilizce biliyor', desc: null, img: "/projects/user1.png", symbol: null, shortname: null, type: null },
    { type: 'add', desc: 'Okul bilgisi ekle', title: null, img: null, symbol: <FiPlus />, shortname: null, type: null },
];




export const friends =  [
    { name:'Ahmet Er', mutual: 125, avatar: '/faces/11.png' },
    { name:'Ahmet Er', mutual: 125, avatar: '/faces/0.png' },
    { name:'Ahmet Er', mutual: 125, avatar: '/faces/1.png' },
    { name:'Ahmet Er', mutual: 125, avatar: '/faces/2.png' },
    { name:'Ahmet Er', mutual: 125, avatar: '/faces/3.png' },
    { name:'Ahmet Er', mutual: 125, avatar: '/faces/4.png' },
    { name:'Ahmet Er', mutual: 125, avatar: '/faces/5.png' },
    { name:'Ahmet Er', mutual: 125, avatar: '/faces/6.png' },
    { name:'Ahmet Er', mutual: 125, avatar: '/faces/7.png' },
    { name:'Ahmet Er', mutual: 125, avatar: '/faces/8.png' },
]
 

export const notifications = [
    { title: 'Bu hafta 2.755 kişi profilinizi görüntüledi', desc: '', img: ["/projects/notify2.png", "/projects/notify3.png", "/projects/notify1.png"], date: '9 saat' },
    { title: 'Bu hafta 2.755 kişi profilinizi görüntüledi', desc: '', img: ["/projects/notify4.png", "/projects/notify5.png", "/projects/notify6.png"], date: '11 saat' },
    { old: true },
    { title: 'Abdulkerim seni takip etmeye başladı', desc: '', img: ["/projects/notify7.png"], date: '2 gün' },
    { title: '25 yeni kişi ile arkadaş oldunuz', desc: '', img: ["/projects/notify8.png", "/projects/notify9.png", "/projects/notify10.png"], date: '2 gün' },
    { title: 'Bu hafta 2.755 kişi profilinizi görüntüledi', desc: '', img: ["/projects/notify10.png", "/projects/notify11.png", "/projects/notify12.png"], date: '3 hafta' },
    { title: 'Bu hafta 2.755 kişi profilinizi görüntüledi', desc: '', img: ["/projects/notify13.png", "/projects/notify14.png", "/projects/notify15.png"], date: '1 ay' }

];



export const experiments = [
    {title:'Teknik Sorumlu', company:'Floating Burger', date:'Mart 2014  - Bugün (8ay)', desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text' },
    {title:'Kurucu', company:'Unfold LLC', date:'Mart 23 - Bugün (1 yıl 3 ay)', desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text' },
]
export const educations = [
    {title:'Bilgisayar Mühendisliği', company:'Mimar Sinan', date:'Mart 2012 - Bugün (8ay)', desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text' },
]

export const tags = [
    {type:'city', title:'İstanbul'},
    {type:'city', title:'Konya'},
    {type:'city', title:'Yozgat'},
    {type:'skill',title:'Geliştirme'},
    {type:'skill',title:'Mobile Design'},
    {type:'skill',title:'Photography'}
]
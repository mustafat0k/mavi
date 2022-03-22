import React, {useState} from 'react'
import {connect} from 'react-redux'
//import 'antd/dist/antd.css';
//import 'assets/scss/dashboard.scss'
import 'simplebar/dist/simplebar.min.css';
import {MdNotificationsNone} from "react-icons/md";
import {BiUserCircle,} from "react-icons/bi"
import { FiBell } from 'react-icons/fi';
import { FiInbox, FiLayout, FiPackage, FiPhone, FiPieChart, FiSettings, FiUsers, FiBriefcase, FiBox,
    FiCoffee , FiColumns, FiDatabase, FiFile, FiTerminal, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import SimpleBar from 'simplebar-react';

const Classic  = ({mobile, setMobile}:any) => {
    const [minimal, setMinimal] = useState(0)
    const [selected, setSelected] = useState(1)
    const [user, setUser] = useState({
        avatar:'/faces/8.png',
        first:'Tester',
        last:'Test',
        email:'test@test.com',
    });
    return (
        <React.Fragment>
              
            {mobile == 1? <div className="sidebar">
                <SimpleBar style={{ height:'100vh', width:'270px', }}>
                <div className="side" >
                        <div className="side-brand">
                            <a href="/dashboard">
                                <img src="/assets/logo-light.png" className="logo" />
                            </a>
                            <div>
                                <MdNotificationsNone />
                                <BiUserCircle />
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="personal">
                            {/** **/}
                            { user && user?.avatar ? <img src={user?.avatar} alt=""/> :  <img src="/faces/8.png" alt=""/> }
                            <h2>{user.first} {user.last}  </h2>
                            <p>{user.email}</p>
                        </div>
                        <div className="inside">
                        <div className="navigations">
                            {menu.map(group =>{
                                return <div key={group.id}>
                                    <div className="group">
                                        <div className="title">{group.title}</div>
                                        <p className="desc">{group.desc}</p>
                                    </div>
                                    <ul>
                                        {group.child.map(item=>{
                                            return  <li className="" key={item.title}>
                                                <a href={item.url} onClick={()=>{
                                                    if(item.url && item.child &&  item.child.length < 1) history.push(item.url)
                                                    if(item.child && item.child.length >= 1) setSelected(item.id)
                                                    if(item.id == selected) setSelected(0)
                                                }}>
                                                    <div>
                                                        {item.icon}
                                                        <p>{item.title}</p>
                                                    </div>
                                                    {item.count ?<span className="count">{item.count}</span> :<span className=""></span> }

                                                    { item.child && item.id == selected ?  <FiChevronDown /> : <FiChevronRight style={{opacity: item.child.length >= 1 ? 1 :0 }}  /> }


                                                </a>
                                                {item.id == selected ? <ul className="dropdown">
                                                    {item.child ? item.child.map(child=>{
                                                        return <li key={child.title} >
                                                            <a href={item.url}  className={child.active == 1 ? 'active' : null} onClick={()=>{
                                                                if(child.url) history.push(child.url)
                                                            }}>
                                                                <p>{child.title}</p>
                                                            </a>
                                                        </li>
                                                    }) : null}
                                                </ul> :null}
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            })}
                        </div>
                       </div>
                    </div>
                </SimpleBar>  </div> : null}

            {!mobile ? <div className="side-mobile" >
                    <div className="side" >
                        <div className="side-brand">
                            <a href="/dashboard">
                                <img src="/assets/logo-light-mini.png" className="logo" />
                            </a>
                        </div>

                        <SimpleBar style={{ height:'450px', marginTop:'2em' }}>
                            <div className="mobile_menu">
                                    { menu.map(group => {
                                         return group.child.map(item => {
                                             return <a className={`mobile_menu_item ${item.count ? 'ok' : null}`} href={item.url} title={item.title}>
                                                 {item.icon}  {/** item.count **/}
                                             </a>
                                         })
                                     })}
                            </div>
                        </SimpleBar>

                     </div>
            </div> : null}

    </React.Fragment>
    )
}

 
export default Classic;
 
 
const table = [
    {title:'Veri İşleme Çalışması', desc:'Uzmanlar ilgilenebilir Hadoop'},   
    {title:'Görüntü Tanıma Aracı', desc:'Ekip arayışı içindeyiz'},   
    {title:'Kiralık Ticari Otomobil', desc:'İletişiem geçebilirsiniz'},   
    {title:'Aracımla şoförlük yapabilirim', desc:'40 yıldır direksiyon sallarım'},
    {title:'Veri İşleme Çalışması', desc:'Büyük bir veritanı oluşturmaktayız'},   
    {title:'Kiralık tarla', desc:'Ekin biçmek isteyen'},
    {title:'Satılık Arsa', desc:'Aciliyetten uygun fiyatlıdır'},
    {title:'C++ Eğitimen', desc:'Kursu verecek bir uzman arıyorum'},
    {title:'Servis Şoför Aranıyor', desc:'Aciliyet arzetmektedir.'},
]


let menu = [
        {id:'dash', title:'DASHBOARD', desc:'Unique Dashboard designs', group:true , child:[
                {id:0, url:'/dashboard/account',   title:'Account',  active:0, child:[], icon:<FiTerminal />},
                {id:1, url:'#', count:623, title:'Sayfalar',  active:0, child:[
                        {title:'Oluştur', url:'/dashboard/post/create'},
                        {title:'Projeler', url:'/dashboard/post?type=project'},
                        {title:'ilanlar', url:'/dashboard/post?type=advert'},
                ], icon:<FiInbox /> ,},
                {id:2, url:'#', count:83198, title:'Kullanıcılar', url:'/dashboard/user',  active:0, child:[], icon:<FiUsers />},
        ]},
        {id:'page', title:'PAGES', desc:'Custom made page designs', group:true , child:[
                {id:4, url:'/dashboard/place', title:'Bölgeler', child:[], icon:<FiFile /> },
                {id:5, url:'/dashboard/profession', title:'Sektörler', child:[], icon: <FiLayout /> },
                {id:6, url:'/dashboard/category', title:'Kategoriler', child:[], icon: <FiColumns /> },
        ]},
        {id:'gear', title:'FEATURES', desc:'Custom made feature designs', group:true , child:[
                {id:8,  title:'Ayarlar', url:'/dashboard/setting',child:[], icon: <FiSettings /> },
        ]},
]




 

{/**

   {id:'dash', title:'Yönetim', desc:'Sık kullanılan bağlantılar', group:true , child:[
                {id:1, url:'#', title:'Users',  url:'/dashboard/user', active:0, child:[], icon:<FiInbox /> ,},
                {id:2, url:'#', title:'Projects', url:'/dashboard/post', active:0, child:[], icon:<FiUsers />},
                {id:2, url:'#', title:'Settings', url:'/dashboard/setting', active:0, child:[], icon:<FiUsers />},
                {id:2, url:'#', title:'Profiles', url:'/dashboard/profile', active:0, child:[], icon:<FiUsers />},
                {id:2, url:'#', title:'Places', url:'/dashboard/places', active:0, child:[], icon:<FiUsers />},
                {id:2, url:'#', title:'Category', url:'/dashboard/category', active:0, child:[], icon:<FiUsers />},
                {id:2, url:'#', title:'Sector', url:'/dashboard/sector', active:0, child:[], icon:<FiUsers />},
                {id:2, url:'#', title:'Applicaton', url:'/dashboard/app', active:0, child:[], icon:<FiUsers />},
        ]},


*/}
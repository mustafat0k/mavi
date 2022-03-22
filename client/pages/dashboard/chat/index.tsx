import React,{ useRef,useState, useEffect } from 'react'
import { FaChevronDown, FaCamera } from 'react-icons/fa';
import api from 'helpers/api'
//const socket = io('localhost:3001'); 
// import 'simplebar/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';
//import io, { Socket } from 'socket.io-client';
//import axios from 'helper/api'
import create from 'zustand'
import moment from 'moment'
import DashboardLayout from 'containers/DashboardLayout';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@stores/store';
const useContent = create(set => ({
    content: 'chat',
    setContent: (content:any) => set(state => ({ content })),
    defaultContent: () => set({ content:'chat'})
}))
/** {   query:{id:"id" + (Math.random(1,10) * 100)  }} */

const Chat = () =>{
    const socket = {}; //useSocket()
 
    // let match = useRouteMatch("/chat/:id");
    const [projectId, setProjectId] = useState(0) // match?.params?.id || 
    const [user] = React.useState({})
    const [userId] = React.useState(0)
    const dispatch = useAppDispatch();
    //const posts = useSelector(state=>state.post.posts)
    const [posts, setPosts] = useState([])
  
    const [chat, setChat ] = useState([]);
    const [chatId, setChatId ] = useState(0);
    //const { dialog } = useParams();

    const [typing, setTyping] = useState({typing:false});
    let timeout;

    const [showUsers, setshowUsers] = useState(true);
    const [onlines, setOnlines] = useState([]);
    const [post] = useState({});
    
   

    const notTyping = () => {
        // socket.emit("typing",  {user:null, typing:false});
        //setTyping(false)
    }
    const typingFunction = () => {
        //socket.emit("typing",  {user:user.name, typing:true});
       // setTyping(true)

    }
    const timeoutFunction = () =>{
        clearTimeout(timeout)
        timeout = setTimeout(notTyping, 1000)
    }

    useEffect(()=>{
        if (socket == null) return
        /**
         
        socket.on('chat init',  data =>{
            setChat(data.chat)
        })
        socket.on('chat',  data =>{
            setChat( prev=>[...prev, data])
            //scrollTo()
        })
        //////
        socket.emit('online', {id:userId})
        socket.on('online users', data =>{
            setOnlines(data)
          // console.log('online segment', data.count)
        })

        socket.emit('posts init',{user});
        socket.on('posts init', data =>{
            setPosts(data)
        })
        socket.on('chat notify', data =>{
          posts.map((item,index)=>{
              if(data.projectId == item._id){
                let newArr = [...posts];
                let project = newArr[index];
                if(project.count) 
                    project.count += 1;
                else
                    project.count = 1;

                setPosts(newArr);
              }
          })
        })
        /////
  

        socket.on('typing', function(data){
            if (data.typing)
                setTyping({user:data.user, typing:true})
            else
                setTyping({user:data.user, typing:false})
        });

        socket.on('unread message',(data)=>{
             //console.log(data)

        })
        

        return () => {     
            socket.emit('offline', {id:userId})
            socket.off();
         }  
         */
    },[socket])


    const hoverboard = (c) =>{
        console.log({messageId:c, userId})
        //socket.emit('message readed', {messageId: c, userId})
    }

    const handleTyping = (e) => {}

    React.useEffect(()=>{
        //dispatch(getPosts())
    })

    const handleConversation = (id:any) => {
        setChatId(id)
        //socket.emit('chat init', {chat:id})
        //dispatch(getPost(id))
    }   

    const messageHandler = (msg:any) =>{
      /** 
       socket.emit('create message', {
            message:msg, 
            project: chatId,
           sender: userId
      })
      scrollTo()
       */
    }
 
    const scrollTo = () => {
        let scroll = document.querySelector('.scroll')?.lastElementChild;
        if(scroll) {
            scroll.scrollTo({ //parentNode.
                top: scroll.offsetTop,
                behavior: 'smooth'
              });
        }
        
        //scroll.scrollTop = ;
        //if(scroll) scroll.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    };
    return (
       
      <div id="chatpage">
             <section className="project_chat_page">
            <div className="">
                <div className="chatbox">
                    <LeftSide 
                      handleConversation={handleConversation} 
                      posts={posts} 
                    />
                    <div className="middle">
                    <ChatBox 
                        chat={chat}
                        messageHandler={messageHandler}
                        timeoutFunction={timeoutFunction}
                        typingFunction={typingFunction}
                        notTyping={notTyping}
                        typing={typing}
                        hoverboard={hoverboard}
                        userId={userId}

                     />
                     </div>
                    {/** 
                     * <RightSide
                        showUsers={showUsers}
                        onlines={onlines}
                        setshowUsers={setshowUsers}
                        post={post}
                    />
                    
                     */}
                </div>
            </div>
        </section>
      </div>
         
    )
}

Chat.Layout = DashboardLayout;
export default Chat;

const LeftSide = ({posts, handleConversation}:any) => { 
    return (
        <div className="left">
        <ul className="project-team">
             {
                    // tab == 'projects' && 
                    posts && posts.length > 0 && posts.map((post:any,i:number)=>{
                        return  <li key={i} onClick={()=>{
                                    handleConversation(post._id)
                                    //history.push(`/chat/${post._id}`)
                                }}> <a> {/** to={`/chat/${post._id}`} **/}
                                        {post?.cover ? <img src={post.cover} className="avatar" /> : <img src={`https://ui-avatars.com/api/?name=${post.title}&background=random&color=random&size=112&font-size=0.25&length=4`} className="avatar" />}
                                        {/** post?.cover ? <img src={post.cover} className="avatar" /> : <img src="/assets/default.png" className="avatar" /> **/}
                                        <div>
                                            <h6> {post.title.substring(0,15) } {/** {post._id } **/} </h6>
                                            <small>{post.type}</small>
                                        </div>
                                    </a>   

                                    { post.count > 0 && <div className="notify_count">{post.count}</div>} 
                            </li>
                    })
                }
            </ul>

        <ul className="project-team">
            <li>
                <a href="">
                    <img src="/assets/img/image/faces/0.png" className="avatar" />
                    <div>
                        <h6> Ahmet Mehmet Er</h6>
                        <small>Software Developer</small>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="/assets/img/image/faces/1.png" className="avatar" />
                    <div>
                        <h6> Ahmet Mehmet Er</h6>
                        <small>Software Developer</small>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="/assets/img/image/faces/2.png" className="avatar" />
                    <div>
                        <h6> Ahmet Mehmet Er</h6>
                        <small>Software Developer</small>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="/assets/img/image/faces/3.png" className="avatar" />
                    <div>
                        <h6> Ahmet Mehmet Er</h6>
                        <small>Software Developer</small>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="/assets/img/image/faces/4.png" className="avatar" />
                    <div>
                        <h6> Ahmet Mehmet Er</h6>
                        <small>Software Developer</small>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="/assets/img/image/faces/5.png" className="avatar" />
                    <div>
                        <h6> Ahmet Mehmet Er</h6>
                        <small>Software Developer</small>
                    </div>
                </a>
            </li>
        </ul>

        <h6 className="groups-title "> <FaChevronDown size={11} /> Sohbet</h6>
        <ul className="project-groups">
            <li> <a href=""><span className="diez">#</span> 🌎Hoşgeldiniz </a> </li>
            <li> <a href=""><span className="diez">#</span> 🌎Kendini Tanıt </a> </li>
            <li> <a href=""><span className="diez">#</span> 🌎Genel </a> </li>
            <li> <a href=""><span className="diez">#</span> 🌎Mühendislik </a> </li>
            <li> <a href=""><span className="diez">#</span> 🌎UI/UX Tasarım </a> </li>
        </ul>

        <h6 className="mt-3 groups-title"><FaChevronDown size={11} /> C++</h6>
        <ul className="project-groups">
            <li> <a href=""><span className="diez">#</span> Build System </a> </li>
            <li> <a href=""><span className="diez">#</span> Cpp </a> </li>
            <li> <a href=""><span className="diez">#</span> Assembly </a> </li>
            <li> <a href=""><span className="diez">#</span> Compilers </a> </li>
            <li> <a href=""><span className="diez">#</span> GPU </a> </li>
            <li> <a href=""><span className="diez">#</span> Math </a> </li>
            <li> <a href=""><span className="diez">#</span> Testing </a> </li>
        </ul>

        <h6 className="groups-title "> <FaChevronDown size={11} /> Aktif Katıldığım Projeler </h6>
    </div>
)
}

const ChatBox = ({ chat, messageHandler, typing,userId, typingFunction, timeoutFunction,hoverboard }:any) => { 
    const [message, setMessage] = useState('');
    return (
        <React.Fragment>
            <div className="middle_header">
                <h5>#Proje Başlığı <small className="gray">Explaination is here</small></h5>
                <p>10 üye / 3 online</p>

            </div>
            <div className="messages">
            {
                      chat && chat.length > 0 ?
                    
                     <ul className="scroll" >
                        <li> Admin logged in </li>

                        {/** ref={i == '0' ? 'lastMessage' : null}  **/}
                        {/** <SimpleBar style={{ maxHeight: 300 }}></SimpleBar> */}
                        {  userId && chat.map((c:any,i:number)=>{
                                return <Message 
                                            key={i} 
                                            chat={c}
                                            userId={userId}
                                            hoverboard={hoverboard}
                                        />
                            })
                        }
                        <li> Mehmet giriş yaptı 👑</li>
                    </ul>
                    

                    :  <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                     {false ? <h1> Yükleniyor... </h1> :  <div>
                         <div className="ant-empty-image">
                             <svg width="184" height="152" viewBox="0 0 184 152" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(24 31.67)"><ellipse fill-opacity=".8" fill="#F5F5F7" cx="67.797" cy="106.89" rx="67.797" ry="12.668"></ellipse><path d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z" fill="#AEB8C2"></path><path d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z" fill="url(#linearGradient-1)" transform="translate(13.56)"></path><path d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" fill="#F5F5F7"></path><path d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z" fill="#DCE0E6"></path></g><path d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z" fill="#DCE0E6"></path><g transform="translate(149.65 15.383)" fill="#FFF"><ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815"></ellipse><path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path></g></g></svg>
                         </div>
                     </div>}
                 </div>
                }
            </div>
            <div className="input flex" > {/** chat.length > 0 &&  **/}
                <label htmlFor="files">
                    <p className="">
                        <FaCamera />  &nbsp;
                        Files  &nbsp; &nbsp;
                    </p> 
                    <input type="file" name="files" multiple id="files" style={{display:'none'}} />
                </label>
                <input 
                    placeholder="Mesaj Gönderin"
                    name="message" 
                    value={message} 
                    onChange={e=>setMessage(e.target.value)} 
                    onKeyPress={e=>{

                        if(e.key == 'Enter'){
                            messageHandler(message)
                            setMessage('')
                            
                        }else{
                            typingFunction()
                            timeoutFunction()
                        }

                    }}
                    
                />
                {typing.typing && <h5>{typing.user} is typing...</h5>}
            </div>
       </React.Fragment>
    )
}

const Message = ({chat,hoverboard,userId}:any) => {
    //const [read, setRead] = useState(false);
    const [status, setStatus] = useState('readed');
    useEffect(() => {
        chat.participants.filter((msg:any)=>{
            if(msg.user == userId && msg.read_at == 1){
                setStatus('readed')
            }else{
                setStatus('unread')
                hoverboard(chat._id)
            }
        })

    }, [status]);
    //console.log(chat)
    return (
        <li className={status}
          onMouseEnter={() => {
              
              if(status == 'unread'){
                hoverboard(chat._id)
                setStatus('readed')
              }
          }}

        >
             {chat?.sender?.avatar ?  <img src={chat?.sender?.avatar} className="avatar" />:   <img src="/assets/faces/3.png" className="avatar" />}
            <div>   
                <div className="head">
                    <div>
                        <a><h6>{chat?.sender?.name}</h6></a>
                        <div className="date">
                            {moment(chat?.created_at, 'YYYYMMDD').fromNow()}
                        </div>
                    </div>
                    <div>
                        Düzenle
                    </div>
                </div>
                { chat?.message.split('\n').map((item:any, key:number) => <p key={key}>{item}<br/></p>) }
            </div>
            
        </li>
    )
}


const Content = (props:any) => {
    return <div className="middle">
        {props?.type == 'chat'? <ChatBox {...props}/>: null }
        {props?.type == 'detail'? <ProjectDetail {...props}/>: null }
        {props?.type == 'notifications'? <ProjectNotifications {...props}/>: null }
    </div>
     
}


const ProjectDetail = ({}) => { 
    return <div className="middle">
        <div className="messages">
             <h1>Show Project</h1>
        </div>
    </div>
}

const ProjectNotifications = ({}) => { 
    return <div className="middle">
        <div className="messages">
             <h1>Notifications</h1>
        </div>
    </div>
}

const RightSide = ({showUsers, setshowUsers, onlines, post}:any) => {
    return (
        <React.Fragment>
            {showUsers ? <div className="right">

                {
                    post && Array.isArray(post.team) && post.team.length > 0 && (
                        <>
                            <h6 className="gray"> Ekip (33) </h6>
                            <ul className="project-team-mate">
                            {
                                post.team.map((person:any,i:number)=>{
                                    return <li key={i}>
                                    <a>
                                    {person?.user?.avatar ?  <img src={person?.user?.avatar} className="avatar" />:   <img src="/assets/default.png" className="avatar" />}
                                        <div>
                                            <h6>{person.name}</h6>
                                        </div>
                                    </a>
                                </li>
                                })
                            }
                            </ul>
                        </>
                    )
                }
                    

                <ul>
                    {
                        post?.requirements.length > 0 && post.requirements.map((req:any,i:number)=>{
                            return <li key={i}>
                               <h6> {req.sector}  -  {req.job} </h6>
                               <p>{req.type} / {req.place} / {req.workstyle}</p>
                               <b>{ req.people.length}</b> <br />
                               { req?.people.length > 0 && req.people.map((person:any,i:number)=>{
                                   return <a href="" key={i}>
                                       {person.name} <br />
                                    </a>
                                }) }
                               <br />
                               <br />

                            </li>
                            
                        })
                    }
                </ul>

                <h6 className="gray"> Aktif kullanıcılar </h6>
                    <ul className="project-team-mate">
                    {
                        onlines && Array.isArray(onlines) && onlines.length > 0 && onlines.map((person,i)=>{
                            return <li key={i}>
                            <a>
                            {/** person?.user?.avatar ?  <img src={person?.user?.avatar} className={`avatar `+ person.active  ? 'on' : 'off'} /> **/} 
                            <img src="/assets/default.png" 
                            className={`avatar ${person.active  ? 'on' : 'off'}`} 
                            />
                                <div>
                                    <h6>{person.name}</h6>
                                </div>
                            </a>
                        </li>
                    
                        })
                    }
                    </ul>
                    
            </div> : null}
        </React.Fragment>
    )
}
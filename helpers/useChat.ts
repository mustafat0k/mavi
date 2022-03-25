import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import { useSelector } from 'react-redux'
import { selectAuth } from 'stores/slices/authSlice'
import { uri } from 'helpers/utils'

const useChat = (namespace:any='') => {
  const [socket, setSocket]:any = useState(null)
  const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : ''

  let ns = namespace ? uri+namespace : uri;

  const {user}:any = useSelector(selectAuth)
  const {avatar,name} = user;
  
  useEffect(() => {
    const sock:any = io(ns, {
      reconnectionDelayMax: 10000,
      transports: ["websocket"], 
      reconnect:false,
      upgrade: false,
      auth: {
        token: accessToken
      },
      // auth: (cb) => {
      //   cb(localStorage.getItem("accessToken"));
      // },
      query: {
        token: accessToken,
      }
    })
    setSocket(sock)

    sock.once("connect", () => {
      console.log('useChat',sock.id);
    });
    sock.on("disconnect", () => {
      console.log('disconneced: $',sock.id); // undefined
      sock.removeAllListeners();
    });

    const cleanup = () => {
      if (sock == null) return 
      
      sock.off();
      sock.close();
      sock.disconnect();
    }
 
    return cleanup
  }, [])

  return socket
}

export default useChat
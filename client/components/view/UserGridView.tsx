import React,{ useState, useEffect} from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import {Button, Pagination} from 'antd';
 import { useAppDispatch } from '@stores/store';
import Draw from '@components/drawers/Draw';

const UserGridView = ({search}:any) => {
    const dispatch = useAppDispatch();
    const [users,setUsers] = React.useState([
        {
            avatar:'/faces/1.png',
            name:'Pentester test',
            slug:'pentester-test',
            first:'Tester',
            last:'Test',
            email:'test@test.com',
            bio:'Technical Director',
            role:'admin',
       },
       {
            avatar:'/faces/2.png',
            name:'tester',
            slug:'tester',
            first:'Tester',
            last:'Test',
            bio:'Programmer',
            email:'test@test.com',
            role:'member',

       },
       {
        avatar:'/faces/8.png',
        name:'tester',
        slug:'tester',
        first:'Tester',
        last:'Test',
        bio:'C++ developer',
        email:'test@test.com',
        role:'moderator',

       },
       ...persons,

    ])
    const [total,setTotal] = React.useState(150)

    //const [data, setData ] = useState(persons)
    const [visible, setVisible] = useState(false)
    const [u, setU] = useState({})
    const showDrawer = () => setVisible(true)
    const onClose = () =>  setVisible(false)

    const [limit, setLimit ] = useState(8)
 
    const pageChange = (page:any) => {
         console.log(limit, page)
        // dispatch(getUsers(limit, page))
    };

    return <div className="">
        <Draw
            visible={visible}
            setVisible={setVisible}
            onClose={onClose}
            user={u}
        />
        <div className="">
            <div className="user-grid-list ">
            {
               users && users.map((user:any,i:number) => <div className="user-grid-box" key={i}>
                        <div>
                            <a href={"/dashboard/user/" + user.slug} className="flex-center">
                                <img src={user.avatar} className="avatar"/>
                            </a>
                            <a href={"/dashboard/user/" + user.slug} className="flex-center">
                                <h3 className="name" >{user.name}</h3>
                            </a>
                            <p>{user.bio}</p>
                            <span className={`badger ${user.role == 'admin' ? 'badger-success' : 'badger-danger'}`}>{user.role}</span>

                        </div>
                        <ul className="connect">
                            <li> <FaEnvelope /> Email </li>
                            <li onClick={()=>{
                                setU(user)
                                showDrawer()
                            }}> <FaPhone /> Call  </li>
                        </ul>
                </div>)
            }
            </div>

            <div className="user-grid-pagination mb-5 mt-4">
                {users.length > 5 &&   <Pagination
                     pageSize={limit}
                    total={total}
                    onChange={pageChange}
                />}
            </div>

        </div>

    </div>
}

export default UserGridView;

const persons = [
    { name:'Eileen Horton', bio: 'Paradigm Representative', email:'eileen_h@hotmail.com', role:'Member', date:'03/02/2020', status:'Active' , avatar:'https://emilus.themenate.net/img/avatars/thumb-2.jpg',  },
    { name:'Terrance Moreno', bio: 'Lead Security Associate', email:'', role:'Admin', date:'03/27/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-3.jpg',  },
    { name:'Ron Vargas', bio: 'Assurence Administrator', email:'ronnie_vergas@infotech.io', role:'Member', date:'03/18/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-4.jpg',  },
    { name:'Luke Cook', bio: 'Chief Accountability Analyst', email:'cookie_lukie@hotmail.com', role:'Member', date:'03/18/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-5.jpg',  },
    { name:'Joyce Freeman', bio: 'Investor Data Orchestrator', email:'joyce991@infotech.io', role:'Member', date:'03/18/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-6.jpg',  },
    { name:'Samantha Phillips', bio: 'Product Infastructure Executive', email:'samanthaphil@infotech.io', role:'Member', date:'03/18/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-7.jpg',  },
    { name:'Tara Fletcher', bio: 'Investor Factors Associate', email:'taratarara@imaze.edu.du', role:'Member', date:'03/18/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-8.jpg',  },
    { name:'Frederick Adams', bio: 'Global Division', email:'iamfred@imaze.infotech.io', role:'Member', date:'03/18/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-9.jpg',  },
    { name:'Carolyn Hanson', bio: 'Internal Applications Engineer', email:'carolyn_h@gmail.com', role:'Member', date:'03/18/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-10.jpg', },
    { name:'Brittany Hale', bio: 'Central Security Manager', email:'brittany1134@gmail.com', role:'Member', date:'03/18/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-11.jpg', },
]
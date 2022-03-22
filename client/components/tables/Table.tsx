import React from 'react'
import { FiTrash2, FiEdit2, } from 'react-icons/fi'
const persons = [
    { name:'Eileen Horton', email:'eileen_h@hotmail.com', role:'Member', date:'03/02/2020', status:'Active' , avatar:'https://emilus.themenate.net/img/avatars/thumb-2.jpg',  },
    { name:'Terrance Moreno', email:'', role:'Admin', date:'03/27/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-3.jpg',  },
    { name:'Ron Vargas', email:'ronnie_vergas@infotech.io', role:'Member', date:'03/18/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-4.jpg',  },
    { name:'Luke Cook', email:'cookie_lukie@hotmail.com', role:'Member', date:'03/18/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-5.jpg',  },
    { name:'Joyce Freeman', email:'joyce991@infotech.io', role:'Member', date:'03/18/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-6.jpg',  },
    { name:'Samantha Phillips', email:'samanthaphil@infotech.io', role:'Member', date:'03/18/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-7.jpg',  },
    { name:'Tara Fletcher', email:'taratarara@imaze.edu.du', role:'Member', date:'03/18/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-8.jpg',  },
    { name:'Frederick Adams', email:'iamfred@imaze.infotech.io', role:'Member', date:'03/18/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-9.jpg',  },
    {  name:'Carolyn Hanson', email:'carolyn_h@gmail.com', role:'Member', date:'03/18/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-10.jpg', },
    {  name:'Brittany Hale', email:'brittany1134@gmail.com', role:'Member', date:'03/18/2020', status:'Blocked' , avatar:'https://emilus.themenate.net/img/avatars/thumb-11.jpg', },
]

const Table = ({}) => {
    return (<div className="person-list-table">

        <table >

            <tbody>
            {persons.map((item,key)=>{
                return  <tr>
                    <td>
                        <div className="">
                            <img src={item.avatar} className="avatar"/>
                        </div>
                        <div>
                            <h6 className="name"> {item.name}</h6>
                            {item.email &&  <p>{item.email}</p> }
                        </div>

                    </td>
                    <td><p>{item.role}</p></td>
                    <td><p>{item.date}</p></td>
                    <td><p>
                        <span className={`badge ${item.status == 'Active' ? 'badge-success' :'badge-danger'}`} >
                            {item.status}
                        </span>
                    </p></td>
                    <td>
                        <div className="action">
                            <button type="button" className="btn btn-primary btn-sm"><FiEdit2 /></button>
                            <button type="button" className="btn btn-outline-danger btn-sm ml-2"><FiTrash2 /></button>

                        </div>
                    </td>
                </tr>
            })}
            </tbody>
        </table>

    </div>)
}
export default Table;
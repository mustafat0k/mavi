import React, { Fragment, useEffect, useState } from 'react'
import {FaCheckCircle, FaClock, FaEllipsisV} from 'react-icons/fa'
import {FiCheckCircle, FiClock, FiPaperclip, FiChevronDown, FiUser , FiPlus } from 'react-icons/fi'
import { Pagination, Progress, Form, Select, Menu, Dropdown, Button, message,Modal, Tag, Input, Tooltip, Icon } from 'antd';

 import UserGridView from 'components/view/UserGridView'
 import ProjectView from 'components/view/ProjectView'
 import OrderView from "components/view/OrderView";
 import PostView from "components/view/PostView";

import Table from 'components/tables/Table'
import DashboardLayout from 'containers/DashboardLayout';
import ProjectList from '@components/view/View';
import { fakePosts, ProjectListData } from '@helpers/mock';
import View from '@components/view/View';

export const Postpage = ({}) => {
  
     
    return (
      <Fragment>
          <div className="container-fluid-">
             <ProjectList  data={fakePosts}  />
              
          </div>
        <div className="posts">
            <OrderView />
            <PostView  />
             <h1>Table</h1>
             <Table />
             <ListView data={fakePosts} />
             <GridView data={fakePosts} />
             <View />
             
             {fakePosts ? fakePosts.map((post:any) => (
                <div key={post._id}>
                    {post.title} <br />
                    <a href={`/dashboard/post/${post._id}`} >Git</a> <br />
                </div>
            )) : 'yok'}
             <h3><a href="/dashboard/post/create">Proje oluştur</a></h3>
 

        </div>
    </Fragment>
    )
}

Postpage.Layout = DashboardLayout;
export default Postpage


const GridView = ({data, title, options}:any) => {
    const [page, setPage ] = useState(1)

    const pageChange = (page:any) => {
       // console.log('pagination page is:' + page)
        setPage(page)
    };

    return <div className="project-view-grid">
        <h1>Grid</h1>
        <div className="row">
            {data.map((user:any) => <div className="col-4">
                <div className="project-grid-box">
                    <div  className="head" >
                        <div>
                            <h5 className="title">{user.title}</h5>
                            <p className="desc">{user.desc}</p>
                        </div>
                        <div>
                            <FaEllipsisV />
                        </div>
                    </div>
                    <div className="details flex">
                        <div>
                            <FiPaperclip />
                            <p>25</p>
                        </div>
                        <div>
                            <FiCheckCircle />
                            <p>21/55</p>
                        </div>
                        <div className="label">
                            <FiClock />
                            <p>21 days left</p>
                        </div>
                    </div>
                    <div className="progression">
                        <Progress percent={44} />
                    </div>
                    <div className="users">
                        <img src="/faces/1.png" alt=""/>
                        <img src="/faces/2.png" alt=""/>
                        <img src="/faces/5.png" alt=""/>
                        <img src="/faces/4.png" alt=""/>
                        <div className="add-person">
                          +1
                        </div>
                    </div>
                </div>
            </div>)}
        </div>

        <div className="user-grid-pagination">
            <Pagination className="pagination" defaultCurrent={1} current={page} onChange={pageChange} total={2000000} />
        </div>
    </div>
}
const ListView = ({data, title, options}:any) => {
    const [page, setPage ] = useState(1)

    const pageChange = (page:any) => {
        console.log('pagination page is:' + page)
        setPage(page)
    };

    return <div>
        <h1>List</h1>
        {data.map((user:any) => <div className="row project-view">
            <div className="col-md-4">
                <div>
                    <h6 className="title">{user.title}</h6>
                    <p>{user.email}</p>
                </div>
            </div>

            <div className="col-md-2">
                <p className="date"> <FiClock size={16} /> 21 days left</p>
            </div>
            <div className="col-3">
                <Progress percent={79} className="progression "/>

            </div>

            <div className="persons col-2">
                <img src="/faces/2.png" alt=""/>
                <img src="/faces/4.png" alt=""/>
                <p className="person">AB</p>
                <p className="person">CD</p>
                <div className="add-person">
                    +1
                </div>
            </div>


            <div className="actions col-md-1">
                <FaEllipsisV className="float-right" />
            </div>
        </div>)}
        <div className="user-grid-pagination">
            <Pagination className="pagination" defaultCurrent={1} current={page} onChange={pageChange} total={2000000} />
        </div>
    </div>
}


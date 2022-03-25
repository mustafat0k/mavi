import React, { useRef, useEffect, useState} from 'react';
import {Radio, Button, Row, Col, Tooltip, Tag, Progress, Avatar, Menu, Card, Dropdown,Drawer, List, Divider} from 'antd';
import {AppstoreOutlined, UnorderedListOutlined, PlusOutlined, EllipsisOutlined} from '@ant-design/icons';
import {
    PaperClipOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    EyeOutlined,
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import {Flex, EllipsisDropdown, PageHeaderAlt} from 'helpers/helper'
import utils from 'helpers/utils2'
import { COLORS } from 'helpers/theming'
import { FiSearch } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux'
 import { Pagination } from 'antd';
import { fakePosts, ProjectListData } from '@helpers/mock';
import { useAppDispatch } from '@stores/store';
 
const VIEW_LIST = 'LIST';
const VIEW_GRID = 'GRID';

const ItemAction = ({id, removeId}:any) => (
    <EllipsisDropdown
        menu={
            <Menu>
                <Menu.Item key="0">
                    <EyeOutlined />
                    <span>Görüntüle</span>
                </Menu.Item>
                <Menu.Item key="1">
                    <EditOutlined />
                    <span>Düzenle</span>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="2" onClick={() => removeId(id)} className="alert-danger" >
                    <DeleteOutlined />
                    <span>Projeyi kaldır</span>
                </Menu.Item>
            </Menu>
        }
    />
)

const ItemHeader = ({name, category}:any) => (
    <div>
        <h4 className="mb-0">{name}</h4>
        <span className="text-muted">{category}</span>
    </div>
)

const ItemInfo = ({attachmentCount, completedTask, totalTask, statusColor, dayleft}:any) => (
    <Flex alignItems="center">
        <div className="mr-3">
            <Tooltip title="Attachment">
                <PaperClipOutlined className="text-muted font-size-md"/>
                <span className="ml-1 text-muted">{attachmentCount}</span>
            </Tooltip>
        </div>
        <div className="mr-3">
            <Tooltip title="Task Completed">
                <CheckCircleOutlined className="text-muted font-size-md"/>
                <span className="ml-1 text-muted">{completedTask}/{totalTask}</span>
            </Tooltip>
        </div>
        <div>
            <Tag className={statusColor === "none"? 'bg-gray-lightest' : ''} color={statusColor !== "none"? statusColor : ''}>
                <ClockCircleOutlined />
                <span className="ml-2 font-weight-semibold">{dayleft} gün kaldı</span>
            </Tag>
        </div>
    </Flex>
)

const ItemProgress = ({progression}:any) => (
    <Progress percent={progression} strokeColor={getProgressStatusColor(progression)} size="small"/>
)

const ItemMember = ({member}:any) => (
    <>
        {member.map((elm:any, i:number) => (
            i <= 2?
                <Tooltip name={elm.name} key={`avatar-${i}`}>
                    <Avatar size="small" className={`ml-1 cursor-pointer ant-avatar-${elm.avatarColor}`} src={elm.img} >
                        {elm.img? '' : <span className="font-weight-semibold font-size-sm">{utils.getNameInitial(elm.name)}</span>}
                    </Avatar>
                </Tooltip>
                :
                null
        ))}
        {member.length > 3 ?
            <Tooltip title={`${member.length - 3} More`}>
                <Avatar size={25} className="ml-1 cursor-pointer bg-white border font-size-sm">
                    <span className="text-gray-light font-weight-semibold">+{member.length - 3}</span>
                </Avatar>
            </Tooltip>
            :
            null
        }
    </>
)

const ListItem = ({ data, removeId }:any) => (
    <div className="bg-white rounded p-3 mb-3 border">
        <Row align="middle">
            <Col xs={24} sm={24} md={8}>
                <ItemHeader name={data?.title} category={data?.category} />
            </Col>
            <Col xs={24} sm={24} md={6}>
               {/**  <ItemInfo
                    attachmentCount={data?.attachmentCount}
                    completedTask={data?.completedTask}
                    totalTask={data?.totalTask}
                    statusColor={data?.statusColor}
                    dayleft={data?.dayleft}
                /> */}
                {data?.created_at}
            </Col>
            <Col xs={24} sm={24} md={5}>
                <ItemProgress progression={data?.progression} />
            </Col>
            <Col xs={24} sm={24} md={4}>
                <div className="ml-0 ml-md-3">
                    { data?.team ? <ItemMember member={data?.team}/> : null}
                </div>
            </Col>
            <Col xs={24} sm={24} md={1}>
                <div className="text-right">
                    <ItemAction id={data?.id} removeId={removeId} style={{float:'right'}} />
                </div>
            </Col>
        </Row>
    </div>
)

const GridItem = ({ data, removeId }:any) => (
    <Card>
        <Flex alignItems="center" justifyContent="between">
            <ItemHeader name={data?.title} category={data?.category} />
            <ItemAction id={data?.id} removeId={removeId}/>
        </Flex>
        <div className="mt-2">
          {data?.created_at}
          {/***
            <ItemInfo
                attachmentCount={data?.attachmentCount}
                completedTask={data?.completedTask}
                totalTask={data?.totalTask}
                statusColor={data?.statusColor}
                dayleft={data?.dayleft}
            />
             ***/}
        </div>
        <div className="mt-3">
            <ItemProgress progression={data?.progression} />
        </div>
        <div className="mt-2">
            { data?.team ? <ItemMember member={data?.team}/> : null}
        </div>
    </Card>
)

const getProgressStatusColor = (progress:any) => {
    if(progress >= 80) {
        return COLORS[1]
    }
    if(progress < 60 && progress > 30) {
        return COLORS[3]
    }
    if(progress < 30) {
        return COLORS[2]
    }
    return COLORS[0]
}

const ProjectList = ({data}:any) => { //list

    const [view, setView] = useState(VIEW_GRID);

  // const [list, setList] = useState( ProjectListData ); // 
    const dispatch = useAppDispatch();

    const [posts,setPosts] = React.useState(data||ProjectListData)
    const [total] = React.useState(150)
    const [loading] = React.useState(false)

    const [search, setSearch] = useState(null)
    useEffect(() => {  
        
    }, []);
    const onChangeProjectView = (e:any) =>  setView(e.target.value)
    const pageChange = (page:any) =>  {
        // dispatch(getPosts({q:search, page}))
    }
    const deleteItem = (id:any) => {} //deletePost(id)

    const [visible,setVisible] = useState(false);
    const showDrawer = () => setVisible(true)
    const onClose = () => setVisible(false)

    return (
        <div className="post__page">
            <PageHeaderAlt className="bg-white border-bottom">
                <div className="container-fluid">
                    <Flex justifyContent="between" alignItems="center" className="py-4">
                        <h2>Projeler</h2>
                        <div className="flex">
                            <div className="mr-2 search_view">
                                <FiSearch />
                                <input 
                                    type="text" 
                                    className="search_input"
                                    value={search}
                                    onChange={(e:any)=>setSearch(e.target.value)}
                                    onKeyPress={(e:any)=>{
                                        if(e.key === 'Enter'){
                                            // dispatch(getPosts({q:search}))
                                        }
                                    }} 
                                />
                            </div>

                            <Radio.Group defaultValue={VIEW_GRID} onChange={e => onChangeProjectView(e)}>
                                <Radio.Button value={VIEW_GRID}><AppstoreOutlined /></Radio.Button>
                                <Radio.Button value={VIEW_LIST}><UnorderedListOutlined /></Radio.Button>
                            </Radio.Group>
                            <a href="/dashboard/post/create">
                                <Button type="primary" className="ml-2">
                                    <PlusOutlined />
                                    <span>Yeni</span>
                                </Button>
                            </a>
                        </div>
                    </Flex>
                </div>
            </PageHeaderAlt>
            {false && loading  && (
                <div>
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                </div>
            )}
            <div className={`my-4 ${view === VIEW_LIST? 'container' : 'container-fluid'}`}>
                {
                    view != VIEW_LIST ?
                        (
                           //!loading && 
                           posts?.map((elm:any) =>  <ListItem data={elm} removeId={(id:any) => deleteItem(id)} key={elm._id}/>)
                        )
                        : (
                            <Row gutter={16}>
                                {
                                //!loading && 
                                posts.map((elm:any) => (
                                    <Col xs={24} sm={24} lg={8} xl={8} xxl={6} key={elm.id}>
                                        <GridItem data={elm} removeId={(id:any) => deleteItem(id)}/>
                                    </Col>
                                ))}
                            </Row>
                        )
                }
                {!posts || posts.length == 0 && <div className="flex mt-3"> <h3>Henüz herhangi bir proje mevcut değil</h3></div>}
            </div>

            {posts.length > 0 && (
                <Pagination
                    pageSize="3"
                    total={total}
                    onChange={pageChange}
               />
            )}
        </div>
    )
}

const MyLoader = (props:any) => (
    <div className="skeleton_loading">
      {/** 
         <ContentLoader 
        speed={1}
        width={500}
        height={70}
        viewBox="0 0 500 70"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        >
        <rect x="20" y="10" rx="6" ry="6" width="200" height="10" /> 
        <rect x="20" y="30" rx="3" ry="3" width="500" height="6" /> 
        <rect x="20" y="45" rx="3" ry="3" width="450" height="6" /> 
        <rect x="20" y="60" rx="3" ry="3" width="308" height="6" /> 
        </ContentLoader>
       */}
    </div>
  )


export default ProjectList

const newDrawer = ({visible,setVisible}:any) =>{

    const DescriptionItem = ({ title, content }:any) => (
        <div className="site-description-item-profile-wrapper">
          <p className="site-description-item-profile-p-label">{title}:</p>
          {content}
        </div>
      );
    
    return (
        <Drawer
        width={640}
        placement="right"
        closable={false}
        onClose={()=>{setVisible(false)}}
        visible={visible}
    >
        <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
        User Profile
        </p>
        <p className="site-description-item-profile-p">Personal</p>
        <Row>
        <Col span={12}>
            <DescriptionItem title="Full Name" content="Lily" />
        </Col>
        <Col span={12}>
            <DescriptionItem title="Account" content="AntDesign@example.com" />
        </Col>
        </Row>
        <Row>
        <Col span={12}>
            <DescriptionItem title="City" content="HangZhou" />
        </Col>
        <Col span={12}>
            <DescriptionItem title="Country" content="China🇨🇳" />
        </Col>
        </Row>
        <Row>
        <Col span={12}>
            <DescriptionItem title="Birthday" content="February 2,1900" />
        </Col>
        <Col span={12}>
            <DescriptionItem title="Website" content="-" />
        </Col>
        </Row>
        <Row>
        <Col span={24}>
            <DescriptionItem
            title="Message"
            content="Make things as simple as possible but no simpler."
            />
        </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Company</p>
        <Row>
        <Col span={12}>
            <DescriptionItem title="Position" content="Programmer" />
        </Col>
        <Col span={12}>
            <DescriptionItem title="Responsibilities" content="Coding" />
        </Col>
        </Row>
        <Row>
        <Col span={12}>
            <DescriptionItem title="Department" content="XTech" />
        </Col>
        <Col span={12}>
            <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
        </Col>
        </Row>
        <Row>
        <Col span={24}>
            <DescriptionItem
            title="Skills"
            content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
            />
        </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Contacts</p>
        <Row>
        <Col span={12}>
            <DescriptionItem title="Email" content="AntDesign@example.com" />
        </Col>
        <Col span={12}>
            <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
        </Col>
        </Row>
        <Row>
        <Col span={24}>
            <DescriptionItem
            title="Github"
            content={
                <a href="http://github.com/ant-design/ant-design/">
                github.com/ant-design/ant-design/
                </a>
            }
            />
        </Col>
        </Row>
        </Drawer>
    )
}


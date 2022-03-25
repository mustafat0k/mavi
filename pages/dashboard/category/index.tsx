import React, { useEffect, useState, Component } from 'react'
import { CaretDownOutlined, PlusOutlined , DownOutlined, UserOutlined } from '@ant-design/icons'
import { Pagination, Progress, Form, Select, Menu, Dropdown, Button, message,Modal, Tag, Input, Tooltip } from 'antd';
import {FaCheckCircle, FaClock, FaEllipsisV} from 'react-icons/fa'
import {FiCheckCircle, FiClock, FiPaperclip, FiChevronDown, FiUser , FiPlus } from 'react-icons/fi'
import { useAppDispatch } from '@stores/store';
import DashboardLayout from 'containers/DashboardLayout';
import { fieldsList, userMock } from '@helpers/mock';
const { Option } = Select;

export const Category = () => {
    return (
        <div>
           {/**  <ProjectView field category /> */}
           <Categories title="Categories" />
           <Fields title="Sectors" />
            {/***
            Category Index Page
          <h3><a href="/dashboard/category/create">Oluştur</a></h3>
             ***/}
        </div>
    )
}

Category.Layout = DashboardLayout;
export default Category

const Categories = ({title, options}:any) => {  
    const [categories, setCategories] = React.useState(fieldsList);
    const dispatch = useAppDispatch();
    useEffect(()=>{ 
        //dispatch(getCategories())
    },[])
    const [page, setPage ] = useState(1)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () =>  setIsModalVisible(true);
    const handleOk = () =>  setIsModalVisible(false);
    const handleCancel = () => setIsModalVisible(false);
    
    const pageChange = (page:any) => {
        console.log('pagination page is:' + page)
        setPage(page)
    };
    function handleButtonClick(e:any) {
        message.info('Click on left button.');
        console.log('click left button', e);
    }
    function handleMenuClick(e:any) {
        message.info('Click on menu item.');
        console.log('click', e);
    }
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">
                <UserOutlined />
                Düzenle
            </Menu.Item>
            <Menu.Item key="2">
                <UserOutlined />
              Göster
            </Menu.Item>
            <Menu.Item key="3">
                <UserOutlined />
                Sil
            </Menu.Item>
        </Menu>
    );

    return <div className="pl-4 pr-4 pt-3">
            <div className="category_heading mb-2">
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    <Button type="primary" onClick={showModal}><PlusOutlined  /> Create new</Button>
                    <Modal title="Yeni Kategori Ekle"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        centered
                        width={500}
                    >
                        <p className="mb-2">You can create new category. Pay Attention: When you create a sub category, the parent will be ignored.</p>

                        <Form.Item label="">
                            <Input.Group compact>
                                <Form.Item
                                    noStyle
                                >
                                    <Select placeholder="Parent">
                                        <Option value="1" selected>Yes</Option>
                                        <Option value="2" selected>No</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    noStyle
                                >
                                    <Input style={{ width: '50%' }} placeholder="Category" />
                                </Form.Item>
                            </Input.Group>
                        </Form.Item>
                        <h3>Sub categories</h3>
                        <EditableTagGroup />
                    </Modal>
                </div>
            </div>
            <table className="category_listing">
                <tbody>
                   
                    {categories && categories.map(category => <tr>
                        <td> <a> <p className="title">{category.title}</p>  </a> </td>
                        <td>

                        {category?.children?.length > 0 ?
                                <div className="badges">
                                {
                                    category?.children.length > 0 &&
                                    category?.children.map((child,i)=>{
                                        if(i < 5){
                                        return <div className="badge" key={i}>
                                                {child.title}
                                            </div>
                                        }
                                    })
                                }
                            {category?.children.length > 5 &&  <a className="inline">
                                <p>+{category?.children.length - 5 } kategori</p>
                                </a>}
                            </div>
                        :<div>
                        <small>Sektöre ait bir meslek bulunmuyor</small>   
                        </div>}

                        </td>
                        <td>
                            <div className="float-right">
                                <Dropdown overlay={menu}  trigger={['click']}>
                                    <a className="ant-dropdown-a" onClick={e => e.preventDefault()}>
                                    İşlem <CaretDownOutlined style={{fontSize:11}} />
                                    </a>
                                </Dropdown>
                            </div>
                        </td>
                    </tr>  )}
                </tbody>
            </table>
            <Pagination defaultCurrent={1} total={50} className="mt-1 mb-3" />
        </div>

}



const Fields = ({title, options}:any) => { // data
    const dispatch = useAppDispatch();
    const [fields, setFields] = React.useState(fieldsList)
    const [users,setUsers] = React.useState([
        userMock

    ])
    const [page, setPage ] = useState(1)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () =>  setIsModalVisible(true);
    const handleOk = () =>  setIsModalVisible(false);
    const handleCancel = () => setIsModalVisible(false);
    
    useEffect(()=>{
        // dispatch(getFields())
    },[])
    const pageChange = (page:any) => {
        console.log('pagination page is:' + page)
        setPage(page)
    };

    function handleButtonClick(e:any) {
        message.info('Click on left button.');
        console.log('click left button', e);
    }
    function handleMenuClick(e:any) {
        message.info('Click on menu item.');
        console.log('click', e);
    }
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">
                <UserOutlined />
                Düzenle
            </Menu.Item>
            <Menu.Item key="2">
                <UserOutlined />
              Göster
            </Menu.Item>
            <Menu.Item key="3">
                <UserOutlined />
                Sil
            </Menu.Item>
        </Menu>
    );
    return <div className="pl-4 pr-4 pt-3">
        <div className="category_heading mb-2">
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <Button type="primary" onClick={showModal}><PlusOutlined  /> Create new </Button>
                <Modal title="Yeni Kategori Ekle"
                       visible={isModalVisible}
                       onOk={handleOk}
                       onCancel={handleCancel}
                       centered
                       width={500}
                >
                    <p className="mb-2">You can create new category but sub category will prevent their parent</p>

                    <Form.Item label="">
                        <Input.Group compact>
                            <Form.Item
                                noStyle
                            >
                                <Select placeholder="Parent">
                                    <Option value="1" selected>Yes</Option>
                                    <Option value="2" selected>No</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                noStyle
                            >
                                <Input style={{ width: '50%' }} placeholder="Category" />
                            </Form.Item>
                        </Input.Group>
                    </Form.Item>
                    <h3>Sub categories</h3>
                    <EditableTagGroup />
                </Modal>
            </div>
        </div>
        <table className="category_listing">
            <tbody>
                {users && users.map((user:any) => <tr>
                    <td> <a> <p className="title">{user.name}</p>  </a> </td>
                    <td>

                       {user.field?.length > 0 ?
                            <div className="badges">
                            {
                                user.field.length > 0 &&
                                user.field.map((field:any,i:number)=>{
                                    if(i < 5){
                                       return <div className="badge" key={i}>
                                            {field.title}
                                        </div>
                                    }
                                })
                            }
                           {user.field.length > 5 &&  <a className="inline">
                               <p>+{user.field.length - 5 } category</p>
                              </a>}
                        </div>
                     :<div>
                      <small>There is no field</small>   
                      </div>}

                    </td>
                    <td>
                        <div className="float-right">
                            <Dropdown overlay={menu}  trigger={['click']}>
                                <a className="ant-dropdown-a" onClick={e => e.preventDefault()}>
                                 Action <CaretDownOutlined style={{fontSize:11}} />
                                </a>
                            </Dropdown>
                        </div>
                    </td>
                </tr>  )}
            </tbody>
        </table>
        <Pagination defaultCurrent={1} total={50} className="mt-1 mb-3" />
    </div>
}





class EditableTagGroup extends React.Component {
    state = {
        tags: [],
        inputVisible: false,
        inputValue: '',
    };

    handleClose = (removedTag:any) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    };

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = (e:any) => {
        this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    };

    saveInputRef = input => (this.input = input);

    render() {
        const { tags, inputVisible, inputValue } = this.state;
        return (
            <div>
                {tags.map((tag, index) => {
                    const isLongTag = tag.length > 20;
                    const tagElem = (
                        <Tag key={tag} closable={index !== 0} onClose={() => this.handleClose(tag)}>
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </Tag>
                    );
                    return isLongTag ? (
                        <Tooltip title={tag} key={tag}>
                            {tagElem}
                        </Tooltip>
                    ) : (
                        tagElem
                    );
                })}
                {inputVisible && (
                    <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        style={{ width: 78 }}
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                    />
                )}
                {!inputVisible && (
                    <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                        <FiPlus /> New Tag
                    </Tag>
                )}
            </div>
        );
    }
}

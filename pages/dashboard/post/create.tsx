import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// font-icons
import { Upload, message, Button } from 'antd';
import { LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import {FaTimes, FaPlus} from 'react-icons/fa'
// components
import { UploadCover, UploadImages } from 'components/media'
import {Switcher} from 'components/inputs'
// quill
import 'react-quill/dist/quill.snow.css';
// css
//import './post.scss'
import dynamic from 'next/dynamic'
import DashboardLayout from 'containers/DashboardLayout';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });


const initialState = {
    title:"",
    text:"",
    desc:"",
    private:false,
    options:[],
    category:"",
    requirements:[],
    features:[],
    sectors:[],
    jobs:[],
    positions:[],
    images:[],
    cover:"",
    address:"",
    tags:[],
    locations:"",
};

export const PostCreate = ({ auth, addPost, history}:any) => {
    const [tabIndex, setTabIndex] = useState(0);
    

    return (
        <div>
        <div className="post-create-form classic-forms">
        <Formik
            initialValues={initialState}
            onSubmit={async (values, { setSubmitting }) => {
            await new Promise(resolve => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
            }}
        >
        {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         setFieldValue,
         /* and other goodies */
       }) => ( <Form>
            
                <BreadCrumbs 
                    values={values}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    errors={errors}
                    title="Project Title" 
                    setFieldValue={setFieldValue}
                  
                />
                <Tabs selectedIndex={tabIndex} onSelect={(index:any) => setTabIndex(index)}>
                    <TabList>
                        <Tab>General</Tab>
                        <Tab>Images</Tab>
                        <Tab>Team</Tab>
                        <Tab>Settings</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="frame">
                                    <div className="form-group">
                                        <label htmlFor="text"></label>
                                        <ReactQuill 
                                           value={values.text}
                                           onChange={v => setFieldValue('text', v)} 
                                        />                                     
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="text"></label>
                                        <textarea 
                                          id="text" 
                                          name="desc" 
                                          placeholder="Description" 
                                          type="text"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                        >{values.desc}</textarea>
                                    </div>

                                </div>


                            
                            <div className="frame">
                                <div className="row">
                                </div>
                            </div>

                            </div>
                            <div className="col-md-4">

                                <div className="frame">
                                    <h5>Cover</h5>
                                    <UploadCover />
                                </div>

                                <div className="frame">
                                    <h5>Organization</h5>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="">Category</label>
                                                <Field as="select" name="category" id="category">
                                                    <option value="0">Select</option>
                                                    <option value="green">Green</option>
                                                    <option value="blue">Blue</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="">Tags</label>
                                                <input 
                                                   id="tags" 
                                                    name="tags" 
                                                    placeholder="Tags" 
                                                    type="text"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                  /> <br />
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>

                        </div>





                    </TabPanel>
                    <TabPanel>

                        {/** MEDIA */}
                        <UploadImages />

                    </TabPanel>
                    <TabPanel>
                        <h5>Team</h5>
                    </TabPanel>
                    <TabPanel>
                        <div className="security-tab">
                            <h5>Security Settings</h5>
                            <p>These settings are helps you keep your account secure.</p>
                            <ul className="">
                                <li>
                                    <div>
                                        <h4>Save my Activity Logs</h4>
                                        <p>You can save your all activity logs including unusual activity detecte</p>
                                    </div>
                                    <div>
                                    <Switcher />
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h4>Security Pin Code</h4>
                                        <p>You can set your pin code, we will ask you on your withdraw and transfer funds.</p>
                                    </div>
                                    <div>
                                        <Switcher check={true} />
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h4>Change Password</h4>
                                        <p>Set a unique password to protect your account.</p>
                                    </div>
                                    <div className="flex">
                                        <div><p><a href="#">Last changed:</a> Oct 2, 2019</p></div>
                                        <Button type="primary" className="ml-3">Change Password</Button>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h4>2FA Authentication <div className="badger badger-success">enabled</div> </h4>
                                        <p>Secure your account with 2FA security. When it is activated you will need to enter not only your password, but also a special code using app. You can receive this code by in mobile app.</p>
                                    </div>
                                    <div>
                                        <Button type="primary">Disable</Button>
                                    </div>
                                </li>

                            </ul>
                        </div>

                        <div className="recent-activity-logs">
                            <h5>Recent Activity</h5>
                            <p>This information about the last login activity on your account</p>

                            {/** Simple Table ***/}

                            <table id="simple-table">
                                <thead>
                                    <tr>
                                        <th>Browser</th>
                                        <th>IP</th>
                                        <th>Date</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Chrome on Window</td>
                                        <td>197.542.122.128</td>
                                        <td>11:42</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Mozilla on Window</td>
                                        <td>197.542.122.128</td>
                                        <td>11:42</td>
                                        <td></td>
                                    </tr>                                        <tr>
                                        <td>Chrome on iMac</td>
                                        <td>192.148.122.255</td>
                                        <td>Nov 15 2019</td>
                                        <td><FaTimes /></td>
                                    </tr>                                        <tr>
                                        <td>Chrome on Window</td>
                                        <td>75.218.312.118</td>
                                        <td>Nov 12 2019</td>
                                        <td><FaTimes /></td>
                                    </tr>


                                </tbody>
                            </table>

                        </div>

                    </TabPanel>
                </Tabs>
        
            </Form>
        )}
        </Formik>
     
        </div>
        </div>
    )
}

 
PostCreate.Layout = DashboardLayout
export default PostCreate

const BreadCrumbs = ({values, handleBlur, handleChange,errors, title, touched, setFieldValue, options}:any) => {
    return (
        <div>
            <div className="breadcrumbs">
                <div className="form-group"> 
                    <input 
                        id="title" 
                        placeholder={title} 
                        type="text"
                        name="title"  
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                    /> <br />
                    {errors.title && touched.title && errors.title}

                </div>

                <div className="buttons flex">
                    <div className="flex">
                        <label htmlFor="switcher1" className="mr-2 mt-1">
                            
                        </label>
                        <Switcher 
                            id="switcher1" 
                            name="private"
                            check={values.private}
                            onChange={(e:any) => setFieldValue('private', e)} 

                        />
                    </div>
                    <Button className="ml-3"> Cancel </Button>
                    <Button type="primary"  htmlType="submit" className="ml-3">Create</Button>
                </div>
            </div>
        </div>
    )
}

const Era = ({}) => {
    const [places, setPlaces] = useState(0)

    return <div>

        <EraItem  />

        <Button
            onClick={()=>{

            }}
            className="block"
        > <FaPlus />  &nbsp; Ekle</Button>
    </div>
}

const EraItem = () =>{
    return <React.Fragment>
        <div className="row">
            <div className="col">
                <div className="form-group">
                    <label htmlFor="">Şehir</label>
                    <select>
                        <option>Istanbul</option>
                    </select>
                </div>
            </div>
            <div className="col">
                <div className="form-group">
                    <label htmlFor="">İlçe</label>
                    <select>
                        <option>Fatih</option>
                    </select>
                </div>
            </div>
            <div className="col">
                <div className="form-group">
                    <label htmlFor="">Mahalle</label>
                    <select>
                        <option>Balat</option>
                    </select>
                </div>
            </div>
            <div className="col-1">
                <div className="flex">
                    <FaTimes />
                </div>
            </div>
        </div>
    </React.Fragment>
}
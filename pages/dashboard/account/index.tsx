import React,{useState} from 'react'
import { Tabs, Radio, Space, DatePicker, Input } from 'antd';
import { FiUser, FiX, FiLock, FiCreditCard, FiBell, FiPlus } from 'react-icons/fi';
import { Formik, Field, Form } from "formik";
import SwitchTab from '@components/tabs/SwitchTab';
import DashboardLayout from 'containers/DashboardLayout';

const { TabPane } = Tabs;

const initialForm = {
    name: "", email: "", phone:"",password:"",
    first:"",last:"", bio:"", address:"",
    birthday:"", gender:'', tags:["php","js"], skills:'',
    city:'',district:'', neighborhood:'',
    sector:'', job:'', position:'',
}

const Account = ({}) => {
    const [tabIndex, setTabIndex] = useState(0)
    const [form, setForm] = useState(initialForm)


    const onSubmit = (e:any) =>{
        e.preventDefault()

    }

    return <div className="account-page">

        <div id="account"  >
            <Tabs tabPosition="left">
                <TabPane tab={<span className="flex"><FiUser size={18}/> &nbsp; Edit Profile</span>} key="1">

                    <div className="avatar-upload">
                        <img src="/faces/1.png" className="avatar"/>
                        <button className="btn btn-primary btn-sm">Change Avatar</button>
                        <button className="btn btn-secondary btn-sm ml-3">Remove</button>

                    </div>

                    <div className="row">
                        <div className="col-md-8">

                            <Formik
                                initialValues={form}
                                onSubmit={async values => {
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
                                      setValues,
                                      setFieldValue,
                                      isSubmitting,
                                      /* and other goodies */
                                  }) => (

                                    <Form onSubmit={handleSubmit}>

                                        <div className="row">
                                            <div className="col-6">
                                                <label htmlFor="name">Username</label>
                                                <Input
                                                    type="name"
                                                    name="name"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.name}
                                                />

                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="email">Email</label>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                />
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-6">
                                                <label htmlFor="name">Telefon</label>
                                                <Input
                                                    type="text"
                                                    name="phone"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.phone}
                                                />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="birthday">Birthday</label>
                                                <Space style={{width:'100%'}}>
                                                    <DatePicker
                                                        name="birthday"
                                                    />
                                                </Space>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="address">Address</label>
                                                <Input
                                                    type="text"
                                                    name="address"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.address}
                                                />
                                            </div>
                                        </div>


                                    </Form>
                                )}

                            </Formik>

                            <button className="btn btn-sm btn-primary mt-3 mb-3">Update</button>
                        </div>
                    </div>



                </TabPane>
                <TabPane tab={<span className="flex"><FiLock size={18} /> &nbsp; Change Password</span>} key="2">
                    Content of Tab 2
                </TabPane>
                <TabPane tab={<span className="flex"><FiCreditCard size={18} /> &nbsp; Billing</span>} key="3">
                    <h3 className="mt-2 mb-2">Billing</h3>

                </TabPane>
                <TabPane tab={<span className="flex"><FiBell size={18} /> &nbsp; Notification </span>} key="4">
                    <h3 className="mt-3 mb-3">Notifications</h3>
                    <SwitchTab />
                </TabPane>
            </Tabs>
        </div>
    </div>
}

Account.Layout = DashboardLayout;
export default Account

{/** 

                                        {errors.password && touched.password && errors.password}

                                        <h6 className="mt-3">Skills</h6>
                                        <Tag
                                            values={values.tags}
                                            setFieldValue={setFieldValue}
                                        />

**/}
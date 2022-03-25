import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Formik, Field, Form as F, setIn} from "formik";
import {FiPlusCircle, FiMinusCircle, FiArrowLeft, FiToggleLeft,  } from "react-icons/fi";
import { Form, Input, Button, Space,   Select, InputNumber, Switch, Radio, Slider, Upload, Rate, Checkbox, Row, Col, } from 'antd';
import { MinusCircleOutlined, PlusOutlined, UploadOutlined, InboxOutlined  } from '@ant-design/icons';
import DashboardLayout from 'containers/DashboardLayout';
const { Option } = Select;

const initalValues = {
    name: "",
    emails: [],
    phones: [{id:1},{id:2}],
    socials: [],
}
const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  
  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  
export const Setting = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
      };
    return (
        <div className="p-3">
           <div className="settings_tabs">
                <Tabs>
                    <TabList>
                        <Tab>Company</Tab>
                        <Tab>Localization</Tab>
                        <Tab>Role & Permissions</Tab>
                        <Tab>Notifications</Tab>
                        <Tab>Email</Tab>
                        <Tab>Logo</Tab>
                        <Tab>Change Password</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="bg-white rounded-10 p-4">
                            {/** Socials **/}
                            {/** Branches **/}
                            {/** Phones **/}
                            {/** Emails **/}
                            {/** Personal Notification **/}
                            {/** Bio, Owner, Slogan, Description, Company **/}
                        </div>

                    </TabPanel>
                    <TabPanel> <h2>Any content 2</h2> </TabPanel>
                    <TabPanel> <h2>Any content 3</h2> </TabPanel>
                    <TabPanel> <h2>Any content 4</h2> </TabPanel>
                    <TabPanel> <h2>Any content 5</h2> </TabPanel>
                    <TabPanel> <h2>Any content 6</h2> </TabPanel>
                    <TabPanel> <h2>Any content 7</h2> </TabPanel>
                </Tabs>
           </div>
        </div>
    )
}

Setting.Layout = DashboardLayout;
export default Setting

const FormToggle = ({values,setFieldValue }:any) =>{
    const [inputs, setInputs] = useState([{id:1}])
    const [last, setLast] = useState(inputs.length)
    useEffect(()=>{
       setLast(inputs.length)
    },[inputs])
     const setForm = (e:any) => {
        setInputs(prev=>[...prev, {id: last+1 } ])
    }
    return  <div className="form-toggle">
        <label>Phones</label>
        {
            inputs.map((input,i) =>{
                return <MultiForm
                        key={i}
                        form={input}
                        status={i+1 == last ? true : false }
                        last={last}
                        setInputs={setInputs}
                        inputs={inputs}
                    />
            })
        }
    </div>
}
const MultiForm = ({form, setForm, status,inputs, setInputs,last}:any) =>{
    const [input,setInput] = React.useState()
    return (<div>
         <div className="inputs">
            <input placeholder="0(505)" name="phone" value={input} onChange={(e:any)=>setInput(e.target.value)} />
              <div className="btns">
                  {status &&    <FiPlusCircle onClick={()=>{
                    setInputs([...inputs, {id:last+1}])
                 }} />}
                 <FiMinusCircle  onClick={()=>{
                     let inpts = inputs.filter((input:any)=>input.id != form.id);
                        console.log(inpts)
                     //if(inputs.length >= 1) setInputs(inpts)
                  }}/>
             </div>
        </div>
    </div>)
}

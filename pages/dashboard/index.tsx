import React, { useEffect } from 'react'
import DashboardLayout from 'containers/DashboardLayout';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
//import ClassicDash from 'component/sidebars/classic_dash'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { SaveFilled, SettingFilled } from '@ant-design/icons';
import { Row, Col, Divider ,Button} from 'antd';

export const Dashboard = ({ }:DashboardState) => {
  
      const [user,setUser] = React.useState( {
        avatar:'/faces/1.png',
        name:'Pentester test',
        slug:'pentester-test',
        first:'Tester',
        last:'Test',
        email:'test@test.com',
        bio:'Technical Director',
        role:'admin',
   },)
       return (
            <React.Fragment>
                
                    <div className="ml-3 mt-4 mb-4">
                       <h1> Hoşgeldiniz { user.name } </h1>
                    </div>

                    {/** Statistics **/}
                    <section className="statistic-bar">
                        <div className="statistics flex-between">
                            <div className="statistic">
                                <h5 className="title">Total Subscribers</h5>
                                <div>
                                    <div>
                                        <h3 className="result">71,897</h3>
                                        <p>from 70,946</p>
                                    </div>

                                    <div className="badging green">
                                        <FaArrowUp />
                                        <p>12%</p>
                                    </div>

                                </div>
                            </div>
                            <div className="statistic">
                                <h5 className="title">Ortalama Oran</h5>
                                <div>
                                    <div>
                                        <h3 className="result">58,16%</h3>
                                        <p>from 56,14%</p>
                                    </div>

                                    <div className="badging green">
                                        <FaArrowUp />
                                        <p>2.02%</p>
                                    </div>

                                </div>
                            </div>
                            <div className="statistic">
                                <h5 className="title">Tıklanma Ortalaması</h5>
                                <div>
                                    <div>
                                        <h3 className="result">25,57%</h3>
                                        <p>from 28.94</p>
                                    </div>

                                    <div className="badging red">
                                        <FaArrowDown />
                                        <p>4.05%</p>
                                    </div>

                                </div>
                            </div>



                        </div>
                    </section>
                    {/** Report Card
                        <section className="container">
                           <div className="analytics">
                               <div className=" analytic__heading">
                                   <div>
                                       <h1 className="title">Analytics Dashboard</h1>
                                       <p>Monitor key metrics, check reporting and review insights</p>
                                   </div>
                                   <div>
                                       <Button type="primary" icon={<SettingFilled />} size="middle" > Export  </Button>
                                       <Button className="ml-3" icon={<SaveFilled />} size="middle"> Settings</Button>
                                   </div>
                               </div>
                                <div className="analytic__cards">
                                    <Row gutter={24}>
                                    {
                                        system.map((card,i)=>{
                                          return <Col className="gutter-row"  span={8}  key={i}>
                                               <div className={`analytic__card ${card.bg}`}>
                                                 <div>
                                                     <div>
                                                         <h2 className="title">{card.title}</h2>
                                                         <p className="desc">{card.desc}</p>
                                                     </div>
                                                     <p className="date">{card.date}</p>
                                                 </div>
                                                  <div>
                                                      <div>
                                                          <h2 className="cost">{card.rate}</h2>
                                                          <p><span>%{card.percent}</span> less purchase</p>
                                                      </div>
                                                      <div>
                                                          chart
                                                      </div>
                                                  </div>

                                                </div>
                                            </Col>

                                        })
                                    }
                                    </Row>
                                </div>

                            </div>
                        </section>
                     **/}
                    {/** Reports **/}
                    {/** finance **/}
                    {/** payment **/}


            </React.Fragment>
        );
    

}

type DashboardState = {
    isAuthenticated: boolean,
    auth: object,
    user: object,
    token: string,
    loading: boolean,
};

 
Dashboard.Layout = DashboardLayout;
export default Dashboard

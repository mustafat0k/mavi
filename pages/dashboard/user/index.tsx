import React, {useEffect, useState} from 'react'
import { Button } from 'antd';
import {FiPlusCircle, FiSettings, FiPrinter, FiSearch,} from 'react-icons/fi'
// import Table from 'components/tables/Table'
// import DataTable from 'components/tables/DataTable'
// import ProjectView from 'components/lists/ProjectView'
import { useAppDispatch } from '@stores/store';
import UserGridView from '@components/view/UserGridView';
import Draw from '@components/drawers/Draw';
import DashboardLayout from 'containers/DashboardLayout';

export const Userpage = ({ getUsers ,users }:any) => {
    const [visible, setVisible] = useState(false)
    const showDrawer = () => setVisible(true)
    const onClose = () =>  setVisible(false)

    useEffect(() => {
        // getUsers()
    }, [getUsers]);

    return (
        <>
            <Draw
                visible={visible}
                setVisible={setVisible}
                onClose={onClose}
            />
            <FilteringTools />
            <BreadCrumbs 
            title="Projects"
            show={showDrawer} />
            <UserGridView
              users={users}
            />
            
        </>
    )
}
 
Userpage.Layout = DashboardLayout;
export default Userpage;

const BreadCrumbs = ({title, options,show}:any) => {

    const [search, setSearch] = useState("")
    const dispatch = useAppDispatch();

    return (
        <div>
            <div className="breadcrumbs">
                {/**  <h4 className="title">{title}</h4> **/}
                <div className="mr-2 search_view">
                    <FiSearch />
                    <input type="text"
                        onKeyPress={e=>{
                            if(e.key === 'Enter'){
                                // dispatch(searchUser(search))
                            }
                        }} 
                        className="search_input" 
                        value={search} 
                        onChange={e=>setSearch(e.target.value)} 
                     />
                </div>

                <div className="buttons">
                    {/** TODO:// grid view or list view options **/}
                    <Button type="primary" disabled onClick={show}>Add New</Button>
                </div>
            </div>
        </div>
    )
}

const FilteringTools = () => {
    return (<div className="filtering">
        <div className="filtering__headset">
            <div className="flex">
                <div>Filter</div>
                <div>
                    <FiPlusCircle />
                    <FiPrinter />
                    <FiSettings />
                </div>
            </div>
        </div>
        <div className="filtering__tools">
            <div className="flex">
                <div className="form-group">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="form-group">
                    <select name="">
                        <option value="">Select</option>
                    </select>
                </div>
                <div className="form-group">
                    <select name="">
                        <option value="">Select</option>
                    </select>
                </div>
                <div className="form-group">
                    <select name="">
                        <option value="">Select</option>
                    </select>
                </div>



            </div>
            <div className="flex">
                <button className="btn btn-primary">Close</button>
                <button className="btn btn-primary">Show Result</button>
            </div>
        </div>
    </div>)
}
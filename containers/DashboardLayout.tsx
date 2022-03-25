import React, { ReactNode } from 'react'
import Head from 'next/head'
import { FiBell, FiBookmark, FiMenu, FiSearch, FiSend } from 'react-icons/fi'
import { MdSearch, MdMessage } from 'react-icons/md'
import { BiBookmarks } from 'react-icons/bi'
import Classic from '@components/side/classic'

type DashboardState = {
    children?: ReactNode
    title?: string
}
const DashboardLayout = ({ children, title = 'Welcome' }: DashboardState) => {
    const [mobile, setMobile] = React.useState(1);

    return (
        <div>
            {/** CLASSIC **/}
            <Classic  mobile={mobile} />
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="main"  style={{paddingLeft: mobile ? '270px' : '70px'}}> {/**  style={{paddingLeft:'270px'}} **/}
                <Header  setMobile={setMobile} mobile={mobile} />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;



export const Header = ({mobile, setMobile}:any) => {
    const [search, setSearch] = React.useState(false)
    const [searchText, setSearchText] = React.useState('')

    return (<React.Fragment>

        <div className="topbar_header" >
            <div className="header_menu">
                <div className="flex" >
                    <div className="header_item" onClick={()=>{ setMobile(!mobile) }}>
                        <FiMenu />
                    </div>
                    <div className="header_item_search">
                        {search &&  <input type="text" value={searchText} onChange={e=>{setSearchText(e.target.value)}}/> }
                        <div className="header_item" onClick={()=>{
                            setSearch(!search)
                        }}>
                            <FiSearch />
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="header_item">
                        <FiBookmark />
                    </div>
                    <div className="header_item ok">
                        <FiSend />
                    </div>
                    <div className="header_item">
                        <FiBell />
                        <div className="count">15</div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>)
}

 
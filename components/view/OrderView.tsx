import React, {useState} from 'react'
import {Card, Table, Select, Input, Button, Badge, Menu, Tag, Avatar, Dropdown} from 'antd';
 import {EyeOutlined, FileExcelOutlined, SearchOutlined, PlusCircleOutlined, EllipsisOutlined} from '@ant-design/icons';
// import NumberFormat from 'react-number-format';
import moment from 'moment';
import { OrderListData } from '@helpers/mock';

const { Option } = Select

const getPaymentStatus = (status:any) => {
    if(status === 'Paid') {
        return 'success'
    }
    if(status === 'Pending') {
        return 'warning'
    }
    if(status === 'Expired') {
        return 'error'
    }
    return ''
}

const getShippingStatus = (status:any) => {
    if(status === 'Ready') {
        return 'blue'
    }
    if(status === 'Shipped') {
        return 'cyan'
    }
    return ''
}

const paymentStatusList = ['Paid', 'Pending', 'Expired']

const OrderView = () => {

    const [list, setList] = useState(OrderListData)
    const [selectedRows, setSelectedRows] = useState([])
    const [selectedRowKeys, setSelectedRowKeys] = useState([])

    const handleShowStatus = value => {
        if(value !== 'All') {
            const key = 'paymentStatus'
            const data = utils.filterArray(OrderListData, key, value)
            setList(data)
        } else {
            setList(OrderListData)
        }
    }

    const dropdownMenu = row => (
        <Menu>
            <Menu.Item>
                <Flex alignItems="center">
                    <EyeOutlined />
                    <span className="ml-2">View Details</span>
                </Flex>
            </Menu.Item>
            <Menu.Item>
                <Flex alignItems="center">
                    <PlusCircleOutlined />
                    <span className="ml-2">Add to remark</span>
                </Flex>
            </Menu.Item>
        </Menu>
    );

    const tableColumns = [
        {
            title: 'ID',
            dataIndex: 'id'
        },
        {
            title: 'Product',
            dataIndex: 'name',
            render: (_, record) => (
                <div className="d-flex">
                    <AvatarStatus size={30} src={record.image} name={record.name}/>
                </div>
            ),
            sorter: (a, b) => utils.antdTableSorter(a, b, 'name')
        },
        {
            title: 'Date',
            dataIndex: 'date',
            render: (_, record) => (
                <span>{moment.unix(record.date).format(DATE_FORMAT_DD_MM_YYYY)}</span>
            ),
            sorter: (a, b) => utils.antdTableSorter(a, b, 'date')
        },
        {
            title: 'Order status',
            dataIndex: 'orderStatus',
            render: (_, record) => (
                <><Tag color={getShippingStatus(record.orderStatus)}>{record.orderStatus}</Tag></>
            ),
            sorter: (a, b) => utils.antdTableSorter(a, b, 'orderStatus')
        },
        {
            title: 'Payment status',
            dataIndex: 'paymentStatus',
            render: (_, record) => (
                <><Badge status={getPaymentStatus(record.paymentStatus)} /><span>{record.paymentStatus}</span></>
            ),
            sorter: (a, b) => utils.antdTableSorter(a, b, 'paymentStatus')
        },
        {
            title: 'Total',
            dataIndex: 'amount',
            render: (_, record) => (
                <span className="font-weight-semibold">
					{/** 
                     <NumberFormat
                        displayType={'text'}
                        value={(Math.round(record.amount * 100) / 100).toFixed(2)}
                        prefix={'$'}
                        thousandSeparator={true}
                    />
                     */}
                    {(Math.round(record.amount * 100) / 100).toFixed(2)}
				</span>
            ),
            sorter: (a, b) => utils.antdTableSorter(a, b, 'amount')
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (_, elm) => (
                <div className="text-right">
                    <EllipsisDropdown menu={dropdownMenu(elm)}/>
                </div>
            )
        }
    ];

    const rowSelection = {
        onChange: (key, rows) => {
            setSelectedRows(rows)
            setSelectedRowKeys(key)
        }
    };

    const onSearch = e => {
        const value = e.currentTarget.value
        const searchArray = e.currentTarget.value? list : OrderListData
        const data = utils.wildCardSearch(searchArray, value)
        setList(data)
        setSelectedRowKeys([])
    }

    return (
        <Card>
            <Flex alignItems="center" justifyContent="between" mobileFlex={false}>
                <Flex className="mb-1" mobileFlex={false}>
                    <div className="mr-md-3 mb-3">
                        <Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/>
                    </div>
                    <div className="mb-3">
                        <Select
                            defaultValue="All"
                            className="w-100"
                            style={{ minWidth: 180 }}
                            onChange={handleShowStatus}
                            placeholder="Status"
                        >
                            <Option value="All">All payment </Option>
                            {paymentStatusList.map(elm => <Option key={elm} value={elm}>{elm}</Option>)}
                        </Select>
                    </div>
                </Flex>
                <div>
                    <Button type="primary" icon={<FileExcelOutlined />} block>Export All</Button>
                </div>
            </Flex>
            <div className="table-responsive">
                <Table
                    columns={tableColumns}
                    dataSource={list}
                    rowKey='id'
                    rowSelection={{
                        selectedRowKeys: selectedRowKeys,
                        type: 'checkbox',
                        preserveSelectedRowKeys: false,
                        ...rowSelection,
                    }}
                />
            </div>
        </Card>
    )
}

export default OrderView

















const renderAvatar = props => {
    return <Avatar {...props} className={`ant-avatar-${props.type}`}>{props.text}</Avatar>;
}
const AvatarStatus = props => {
    const { name, suffix, subTitle, id, type, src, icon, size, shape, gap, text, onNameClick } = props
    return (
        <div className="avatar-status d-flex align-items-center">
            {renderAvatar({icon, src, type, size, shape, gap, text })}
            <div className="ml-2">
                <div>
                    {
                        onNameClick ?
                            <div onClick={() => onNameClick({name, subTitle, src, id})} className="avatar-status-name clickable">{name}</div>
                            :
                            <div className="avatar-status-name">{name}</div>
                    }
                    <span>{suffix}</span>
                </div>
                <div className="text-muted avatar-status-subtitle">{subTitle}</div>
            </div>
        </div>
    )
}




const EllipsisDropdown = props => {
    return (
        <Dropdown overlay={props.menu} placement={props.placement} trigger={['click']}>
            <div className="ellipsis-dropdown">
                <EllipsisOutlined />
            </div>
        </Dropdown>
    )
}




const Flex = props => {
    const { children, className, alignItems, justifyContent, mobileFlex, flexDirection } = props
    const getFlexResponsive = () => mobileFlex ? 'd-flex' : 'd-md-flex'
    return (
        <div className={`${getFlexResponsive()} ${className} ${flexDirection?('flex-' + flexDirection): ''} ${alignItems?('align-items-' + alignItems):''} ${justifyContent?('justify-content-' + justifyContent):''}` }>
            {children}
        </div>
    )
}




class utils {

    /**
     * Get first character from first & last sentences of a username
     * @param {String} name - Username
     * @return {String} 2 characters string
     */
    static getNameInitial(name) {
        let initials = name.match(/\b\w/g) || [];
        return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    }

    /**
     * Get current path related object from Navigation Tree
     * @param {Array} navTree - Navigation Tree from directory 'configs/NavigationConfig'
     * @param {String} path - Location path you looking for e.g '/app/dashboards/analytic'
     * @return {Object} object that contained the path string
     */
    static getRouteInfo(navTree, path) {
        if( navTree.path === path ){
            return navTree;
        }
        let route;
        for (let p in navTree) {
            if( navTree.hasOwnProperty(p) && typeof navTree[p] === 'object' ) {
                route = this.getRouteInfo(navTree[p], path);
                if(route){
                    return route;
                }
            }
        }
        return route;
    }

    /**
     * Get accessible color contrast
     * @param {String} hex - Hex color code e.g '#3e82f7'
     * @return {String} 'dark' or 'light'
     */
    static getColorContrast(hex){
        const threshold = 130;
        const hRed = hexToR(hex);
        const hGreen = hexToG(hex);
        const hBlue = hexToB(hex);
        function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
        function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
        function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
        function cutHex(h) {return (h.charAt(0) === '#') ? h.substring(1,7):h}
        const cBrightness = ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;
        if (cBrightness > threshold){
            return 'dark'
        } else {
            return 'light'
        }
    }

    /**
     * Darken or lighten a hex color
     * @param {String} color - Hex color code e.g '#3e82f7'
     * @param {Number} percent - Percentage -100 to 100, positive for lighten, negative for darken
     * @return {String} Darken or lighten color
     */
    static shadeColor(color, percent) {
        let R = parseInt(color.substring(1,3),16);
        let G = parseInt(color.substring(3,5),16);
        let B = parseInt(color.substring(5,7),16);
        R = parseInt(R * (100 + percent) / 100);
        G = parseInt(G * (100 + percent) / 100);
        B = parseInt(B * (100 + percent) / 100);
        R = (R<255)?R:255;
        G = (G<255)?G:255;
        B = (B<255)?B:255;
        const RR = ((R.toString(16).length === 1) ? `0${R.toString(16)}` : R.toString(16));
        const GG = ((G.toString(16).length === 1) ? `0${G.toString(16)}` : G.toString(16));
        const BB = ((B.toString(16).length === 1) ? `0${B.toString(16)}` : B.toString(16));
        return `#${RR}${GG}${BB}`;
    }

    /**
     * Returns either a positive or negative
     * @param {Number} number - number value
     * @param {any} positive - value that return when positive
     * @param {any} negative - value that return when negative
     * @return {any} positive or negative value based on param
     */
    static getSignNum(number, positive, negative) {
        if (number > 0) {
            return positive
        }
        if (number < 0) {
            return negative
        }
        return null
    }

    /**
     * Returns either ascending or descending value
     * @param {Object} a - antd Table sorter param a
     * @param {Object} b - antd Table sorter param b
     * @param {String} key - object key for compare
     * @return {any} a value minus b value
     */
    static antdTableSorter(a, b, key) {
        if(typeof a[key] === 'number' && typeof b[key] === 'number') {
            return a[key] - b[key]
        }

        if(typeof a[key] === 'string' && typeof b[key] === 'string') {
            a = a[key].toLowerCase();
            b = b[key].toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
        }
        return
    }

    /**
     * Filter array of object
     * @param {Array} list - array of objects that need to filter
     * @param {String} key - object key target
     * @param {any} value  - value that excluded from filter
     * @return {Array} a value minus b value
     */
    static filterArray(list, key, value) {
        let data = list
        if(list) {
            data = list.filter(item => item[key] === value)
        }
        return data
    }

    /**
     * Remove object from array by value
     * @param {Array} list - array of objects
     * @param {String} key - object key target
     * @param {any} value  - target value
     * @return {Array} Array that removed target object
     */
    static deleteArrayRow(list, key, value) {
        let data = list
        if(list) {
            data = list.filter(item => item[key] !== value)
        }
        return data
    }

    /**
     * Wild card search on all property of the object
     * @param {Number | String} input - any value to search
     * @param {Array} list - array for search
     * @return {Array} array of object contained keyword
     */
    static wildCardSearch(list, input) {
        const searchText = (item) => {
            for (let key in item) {
                if (item[key] == null) {
                    continue;
                }
                if (item[key].toString().toUpperCase().indexOf(input.toString().toUpperCase()) !== -1) {
                    return true;
                }
            }
        };
        list = list.filter(value => searchText(value));
        return list;
    }

    /**
     * Get Breakpoint
     * @param {Object} screens - Grid.useBreakpoint() from antd
     * @return {Array} array of breakpoint size
     */
    static getBreakPoint(screens) {
        let breakpoints = []
        for (const key in screens) {
            if (screens.hasOwnProperty(key)) {
                const element = screens[key];
                if (element) {
                    breakpoints.push(key)
                }
            }
        }
        return breakpoints
    }
}



const DATE_FORMAT_YYYYMMdd = "YYYYMMdd";
const DATE_FORMAT_YYYY_MM_dd = "YYYY-MM-dd";
const DATE_FORMAT_YYYY_MM_dd_Combined = "YYYYMMddHHmm";
const DATE_FORMAT_YYYY_MM_dd_HH_mm = "YYYY-MM-dd HH:mm";
const DATE_FORMAT_DD_MM_YYYY = "DD-MM-YYYY";
const DATE_FORMAT_DD_MM_YYYY_WITH_DOT = "DD.MM.YYYY";
const DATE_FORMAT_mm_dd_YYYY_WITH_SLASH = "MM/dd/YYYY";
const DATE_FORMAT_m_d_YYYY_WITH_SLASH = "M/d/YYYY";
const DATE_FORMAT_DD_MM_YYYY_WITH_SLASH = "DD/MM/YYYY";
const DATE_FORMAT_dd_MMM = "ddMMM";
const DATE_FORMAT_dd_MM_yy = "ddMMyy";
const DATE_FORMAT_dd_MMM_YYYY = "ddMMMYYYY";
const DATE_FORMAT_DD_MM_YYYY_COMBINED = "DDMMYYYY";
const DATE_FORMAT_DD_MM_YYYY_HH_mm_ss = "YYYY-MM-dd'T'HH:mm:ss";
const DATE_FORMAT_DD_MM_YYYY_HH_mm_ss_sz = "YYYY-MM-dd'T'HH:mm:ss.SSS";
const DATE_FORMAT_DD_MM_YYYY_HH_mm = "dd-MM-YYYY HH:mm";
const DATE_FORMAT_HH_mm = "HH:mm";
const DATE_FORMAT_YYYY_MM_DDTHH_mm_ssZ = "YYYY-MM-DD'T'HH:mm:ssZ";



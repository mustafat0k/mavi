import React, {useState, useEffect, useRef} from "react";
import {Dropdown} from "antd";
import {EllipsisOutlined} from "@ant-design/icons";
const NAV_TYPE_TOP = 'TOP'

export const Flex = (props:any) => {
    const { children, className, alignItems, justifyContent, mobileFlex, flexDirection } = props
    const getFlexResponsive = () => mobileFlex ? 'd-flex' : 'd-md-flex'
    return (
        <div className={`${getFlexResponsive()} ${className} ${flexDirection?('flex-' + flexDirection): ''} ${alignItems?('align-items-' + alignItems):''} ${justifyContent?('justify-content-' + justifyContent):''}` }>
            {children}
        </div>
    )
}
export const EllipsisDropdown = (props:any) => {
    return (
        <Dropdown overlay={props.menu} placement={props.placement} trigger={['click']}>
            <div className="ellipsis-dropdown">
                <EllipsisOutlined />
            </div>
        </Dropdown>
    )
}

export const PageHeaderAlt = ({children, background, className, overlap, navType}:any) => {
    const [widthOffset, setWidthOffset] = useState(0)
    const ref = useRef(null);

    useEffect(() => {
        if (navType === NAV_TYPE_TOP) {
            const windowSize = window.innerWidth
            const pageHeaderSize = ref.current.offsetWidth
            setWidthOffset( (windowSize - pageHeaderSize) / 2 )
        }
    }, [navType]);

    const getStyle = () => {
        let style = { backgroundImage: background ? `url(${background})` : 'none' }
        if (navType === NAV_TYPE_TOP) {
            style.marginRight = -widthOffset
            style.marginLeft = -widthOffset
            style.paddingLeft = 0
            style.paddingRight = 0
        }
        return style
    }

    return (
        <div
            ref={ref}
            className={`page-header-alt ${className ? className : ''} ${overlap && 'overlap'}`}
            style={getStyle()}
        >
            {navType === NAV_TYPE_TOP ? <div className="container">{children}</div> : <>{children}</>}
        </div>
    )
}



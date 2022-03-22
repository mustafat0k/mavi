import React,{ useState  } from 'react'
import Switch from "react-switch";

const Switcher = (props:any) =>{
    return <Switched {...props} />

}

const Switched = ({check, onChange,  id}:any) => {
 

    return <Switch
        onChange={onChange}
        checked={check}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor="#3e82f7"
        offColor="#bfbfbf"
        width={50}
        height={25}
        handleDiameter={20}
        id={id}
    />

}

export default  Switcher
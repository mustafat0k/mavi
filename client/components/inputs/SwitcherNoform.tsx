import React,{ useState  } from 'react'
import Switch from "react-switch";

const Switcher = (props) =>{
    return <Switched {...props} />

}

const Switched = ({check, id}) => {
    const [checked, setChecked] = useState(check || false )

    const handleChange = () => {
        setChecked(!checked)
    }

    return <Switch
        onChange={handleChange}
        checked={checked}
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
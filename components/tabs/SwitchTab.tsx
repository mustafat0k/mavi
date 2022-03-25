import React,{ useState  } from 'react'
import Switch from "react-switch";
import {
    AiOutlineComment, AiOutlineFileDone,
    AiOutlineMail,
    AiOutlineShopping,
    AiOutlineTags,
    AiOutlineUserAdd,
    AiOutlineUsergroupAdd
} from "react-icons/ai";

const SwitchTab = () =>{
    return (
        <div>
            <ul id="notifications">
                <li>
                    <AiOutlineTags />
                    <div>
                        <h6 className="name">Mentions</h6>
                        <p>You will receive an alert when someone was mentioned you in any post.</p>
                    </div>
                    <div>
                        <Switcher />
                    </div>
                </li>
                <li>
                    <AiOutlineUserAdd />
                    <div>
                        <h6 className="name">Follows</h6>
                        <p>You will receive an alert when someone is follwing you.</p>
                    </div>
                    <div>
                        <Switcher />
                    </div>
                </li>
                <li>
                    <AiOutlineComment />
                    <div>
                        <h6 className="name">Comments</h6>
                        <p>You will receive an notifications when someone is comment on your post.</p>
                    </div>
                    <div>
                        <Switcher />
                    </div>
                </li>
                <li>
                    <AiOutlineMail />
                    <div>
                        <h6 className="name">Email Notifications</h6>
                        <p>You will receive daily email notifications.</p>
                    </div>
                    <div>
                        <Switcher />
                    </div>
                </li>
                <li>
                    <AiOutlineShopping />
                    <div>
                        <h6 className="name">New Product</h6>
                        <p>You will receive an notifications when a new product arrived.</p>
                    </div>
                    <div>
                        <Switcher />
                    </div>
                </li>
                <li>
                    <AiOutlineUsergroupAdd />
                    <div>
                        <h6 className="name">Groups Invitation</h6>
                        <p>You will receive an notifications when a group is inviting you.</p>
                    </div>
                    <div>
                        <Switcher />
                    </div>
                </li>
                <li>
                    <AiOutlineFileDone />
                    <div>
                        <h6 className="name">Tasks</h6>
                        <p>You will receive an notifications someone assign you a task</p>
                    </div>
                    <div>
                        <Switcher />
                    </div>
                </li>
            </ul>
        </div>
    )
}

const Switcher = ({check}:any) => {
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
    />

}

export default  SwitchTab
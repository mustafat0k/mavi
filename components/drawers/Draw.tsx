import { Drawer, Button } from 'antd';

const Draw = ({visible, setVisible, onClose, user}:any) => {

    return (
        <Drawer
            title={user ? user.name : 'Create new'}
            width={550} // 520
            closable={false}
            onClose={onClose}
            visible={visible}
        >
            {
                user && <div>
                    <img src={user?.avatar} height={70} className="avatar" />
                    <h1>{user.email}</h1>
                </div>
            }
            <Button type="primary">  Create profile  </Button>

        </Drawer>
    )
}

export default Draw
import {auth} from '../Firebase/config'
import { signOut } from 'firebase/auth'
import {Avatar, Button, Typography} from 'antd'
import styled from 'styled-components'
const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rbga(82, 38, 83);
    align-items: center;
`
function UserInfo() {
    const logOut = (e) => {
        signOut(auth)
            .then(() => {
                console.log("success")
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <WrapperStyled>
            {/* <div> */}
                <div>
                    <Avatar>ABC</Avatar>
                </div>
                    <Typography.Text className='username'>Ngo QUocs Hieu</Typography.Text>
                <Button onClick={logOut} ghost>Đăng Xuất</Button>
            {/* </div> */}
        </WrapperStyled>
    )
}
export default UserInfo
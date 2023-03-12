import UserInfo from "./UserInfo"
import RoomList from "./RoomList"
import styled from 'styled-components'

const SidebarStyled = styled.div`
    background-color: #FEDCC5;
    height: 100vh;
    color: white;
`
function Sidebar() {
    return (
        <SidebarStyled>
            <div className="row sidebar">
                <div className="col-12">
                        <UserInfo/>
                    </div>
                <div className="col-12">
                        <RoomList/>
                </div>
            </div>
        </SidebarStyled>
    )
}
export default Sidebar
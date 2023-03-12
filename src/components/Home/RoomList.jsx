import {Collapse, Typography} from 'antd'
import styled from 'styled-components'
const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
    &&& {
        .ant-collapse-header, 
        p {
            color: black;
        }
        .ant-collapse-content-box {
            padding: 0 40px
        }
    }
`
    const LinkStyled = styled(Typography.Link)`
        display: block;
        margin-bottom: 5px;
    `
function RoomList() {
    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyled header="This is panel header 1" key="1">
                <LinkStyled>Room 1</LinkStyled>
                <LinkStyled>Room 2</LinkStyled>
                <LinkStyled>Room 3</LinkStyled>
                <LinkStyled>Room 4</LinkStyled>
            </PanelStyled>
        </Collapse>
    )
}
export default RoomList
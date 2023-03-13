import { UserAddOutlined } from '@ant-design/icons'
import { Avatar, Button, Tooltip, Form, Input } from 'antd'
import styled from 'styled-components'
import Message from './Message'


const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 56px;
    padding: 0 16px;
    align-items: center;
    
    .header {
        &__info {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        &__title {
            margin: 0;
            font-weight: bold;
        }
        &__description {
            font-size: 12px
        }
    }
`
const ButtonStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .btn-add {
        display:flex;
        align-items: center;
    }
`
const WrapperStyled = styled.div`
    height: 100vh; 
`
const ContentStyled = styled.div`
    height: calc(100vh - 56px);
    display: flex;
    flex-direction: column;
    padding: 11px;
    justify-content: flex-end;
`
const FromStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 2px 2px 0;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 2px;

    .ant-form-item {
        flex: 1;
        margin-bottom: 0;
        
    }
`
const MessageListStyled = styled.div`
    max-height: 100%;
    overflow-y: auto;
`
function ChatRoom() {
    return <WrapperStyled>
        <HeaderStyled>
            <div className='header__info'>
                <p className='header__title'>Room1</p>
                <span className='header__description'>Day la room 1</span>
            </div>
            <ButtonStyled>
                <Button className='btn-add' icon={<UserAddOutlined/>} type='text'>
                    Moi
                </Button>
                <Avatar.Group size={'small'} maxCount={2}>
                    <Tooltip title="A">
                        <Avatar>A</Avatar>
                    </Tooltip>
                    <Tooltip title="A">
                        <Avatar>A</Avatar>
                    </Tooltip>
                    <Tooltip title="A">
                        <Avatar>A</Avatar>
                    </Tooltip>
                </Avatar.Group>
            </ButtonStyled>
        </HeaderStyled>
        <ContentStyled>
            <MessageListStyled>
                <Message text="Test" photoURL={null} displayName="Quoc Hieu" createAt={1}/>
            </MessageListStyled>
            <MessageListStyled>
                <Message text="Test" photoURL={null} displayName="Quoc Hieu" createAt={2}/>
            </MessageListStyled>
            <MessageListStyled>
                <Message text="Test" photoURL={null} displayName="Quoc Hieu" createAt={3}/>
            </MessageListStyled>
            <MessageListStyled>
                <Message text="Test" photoURL={null} displayName="Quoc Hieu" createAt={4}/>
            </MessageListStyled>

            <FromStyled>
                <Form.Item>
                    <Input placeholder='Nhap tin nhan' bordered={false} autoComplete='off'/>
                </Form.Item>
                <Button type='primary'>Gui</Button>
            </FromStyled>
        </ContentStyled>
    </WrapperStyled>
}
export default ChatRoom
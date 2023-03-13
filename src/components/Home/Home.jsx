import Sidebar from './Sidebar'
import ChatRoom from './Chatroom'
function Home() {
    return (
            <div className="row m-0">
                <div className="col-4 p-0"><Sidebar/></div>
                <div className="col-8 p-0"><ChatRoom/></div>
            </div>
    )
}
export default Home
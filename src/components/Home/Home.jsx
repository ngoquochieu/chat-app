import Sidebar from './Sidebar'
import ChatRoom from './Chatroom'
function Home() {
    return (
            <div className="row">
                <div className="col-4 px-md-0"><Sidebar/></div>
                <div className="col-8 px-md-0"><ChatRoom/></div>
            </div>
    )
}
export default Home
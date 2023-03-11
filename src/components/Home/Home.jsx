import {auth} from '../Firebase/config'
import { signOut } from 'firebase/auth'
function Home() {
    const logOut = (e) => {
        signOut(auth)
            .then(() => {
                console.log("success")
            })
            .catch(err => {
                console.log(err)
            })
    }
    return <button onClick={logOut}>LOGOUT</button>
}
export default Home
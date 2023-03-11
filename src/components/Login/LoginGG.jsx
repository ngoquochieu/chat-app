import {FcGoogle} from 'react-icons/fc'
import { auth, providerGG } from '../Firebase/config'
import {signInWithPopup} from 'firebase/auth'
function LoginGG() {
    const loginGG = (e) => {
        signInWithPopup(auth, providerGG)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return(
        <div className="col-5 btn-auth " onClick={loginGG}>
            <FcGoogle></FcGoogle>
        </div>
    ) 
}
export default LoginGG